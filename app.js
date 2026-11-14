/* Klaiman's Tool Box: vanilla JS, works from file:// with no server. */
(() => {
  'use strict';

  const SELFTEST = new URLSearchParams(location.search).has('selftest');
  const STORAGE_KEY = SELFTEST ? 'klaimans-toolbox:selftest' : 'klaimans-toolbox:v1';
  const THEME_KEY = 'klaimans-toolbox:theme';
  const RECENT_MAX = 8;
  const FALLBACK_CAT = 'misc';
  const FALLBACK_CAT_DEF = { id: FALLBACK_CAT, name: 'שלוף, בלי קטגוריה', icon: '🎲' };
  const DEFAULT = window.TOOLBOX_DEFAULT || { categories: [FALLBACK_CAT_DEF], tools: [] };

  /* ---------- Small helpers ---------- */
  const $ = (sel, root = document) => root.querySelector(sel);
  const clone = (o) => JSON.parse(JSON.stringify(o));

  const storage = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); return true; } catch (e) { return false; } },
    remove(k) { try { localStorage.removeItem(k); } catch (e) { /* ignore */ } },
  };

  function h(tag, props, ...kids) {
    const el = document.createElement(tag);
    if (props) {
      for (const [k, v] of Object.entries(props)) {
        if (v == null || v === false) continue;
        if (k === 'class') el.className = v;
        else if (k === 'html') el.innerHTML = v;
        else if (k === 'dataset') Object.assign(el.dataset, v);
        else if (k.startsWith('on') && typeof v === 'function') el.addEventListener(k.slice(2), v);
        else el.setAttribute(k, v === true ? '' : String(v));
      }
    }
    for (const kid of kids.flat()) {
      if (kid == null || kid === false) continue;
      el.append(kid instanceof Node ? kid : String(kid));
    }
    return el;
  }

  const ICON = {
    star: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.6l2.6 5.3 5.8.85-4.2 4.1 1 5.8L12 16.9l-5.2 2.75 1-5.8-4.2-4.1 5.8-.85z"/></svg>',
    edit: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 20h4L19 9l-4-4L4 16v4z"/><path d="m13.5 6.5 4 4"/></svg>',
    trash: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M10 11v6M14 11v6M6 7l1 12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-12M9 7V4h6v3"/></svg>',
    up: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 15 6-6 6 6"/></svg>',
    down: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>',
  };

  function normalizeUrl(input) {
    let s = String(input || '').trim();
    if (!s) return null;
    if (!/^[a-z][a-z0-9+.-]*:/i.test(s)) s = 'https://' + s.replace(/^\/+/, '');
    try {
      const u = new URL(s);
      if (u.protocol !== 'http:' && u.protocol !== 'https:') return null;
      if (!u.hostname || !u.hostname.includes('.') && u.hostname !== 'localhost') return null;
      return u.href;
    } catch (e) { return null; }
  }

  function hostOf(url) {
    try { return new URL(url).hostname.replace(/^www\./, ''); } catch (e) { return ''; }
  }

  function faviconFor(url) {
    try { return 'https://www.google.com/s2/favicons?domain=' + new URL(url).hostname + '&sz=128'; } catch (e) { return ''; }
  }

  function safeLogo(logo, url) {
    const s = typeof logo === 'string' ? logo.trim() : '';
    if (/^https?:\/\//i.test(s) || /^data:image\//i.test(s)) return s;
    return faviconFor(url);
  }

  function slug(s) {
    return String(s || '').toLowerCase().normalize('NFKD').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  }

  function makeId(name, url, used) {
    const base = slug(name) || slug(hostOf(url)) || 'tool';
    let id = base, n = 2;
    while (used.has(id)) id = base + '-' + n++;
    return id;
  }

  function fold(s) {
    return String(s || '').toLowerCase().replace(/[֑-ׇ]/g, '').replace(/[״"׳']/g, '').trim();
  }

  function cleanTool(t) {
    if (!t || typeof t !== 'object') return null;
    const name = String(t.name || '').trim();
    const url = normalizeUrl(t.url);
    if (!name || !url) return null;
    const free = (t.free === 'tier' || t.free === false || t.free === 'freemium') ? 'tier' : 'full';
    return {
      id: t.id ? String(t.id) : '',
      name,
      url,
      description_he: String(t.description_he != null ? t.description_he : (t.description || '')).trim(),
      category: String(t.category || FALLBACK_CAT),
      free,
      gem: t.gem === true || t.gem === 'true' || t.gem === 'gem',
      logo: safeLogo(t.logo, url),
    };
  }

  function cleanCategories(list) {
    const out = [];
    const seen = new Set();
    for (const c of Array.isArray(list) ? list : []) {
      if (!c || !c.id || !c.name) continue;
      const id = String(c.id);
      if (seen.has(id)) continue;
      seen.add(id);
      out.push({ id, name: String(c.name).trim(), icon: String(c.icon || '📌').trim() || '📌' });
    }
    return out;
  }

  function normalizeState(s) {
    const categories = cleanCategories(s.categories);
    if (!categories.some((c) => c.id === FALLBACK_CAT)) categories.push(clone(FALLBACK_CAT_DEF));
    const catIds = new Set(categories.map((c) => c.id));
    const byName = new Map(categories.map((c) => [c.name, c.id]));
    const used = new Set();
    const tools = [];
    for (const raw of Array.isArray(s.tools) ? s.tools : []) {
      const t = cleanTool(raw);
      if (!t) continue;
      if (!catIds.has(t.category)) t.category = byName.get(t.category) || FALLBACK_CAT;
      if (!t.id || used.has(t.id)) t.id = makeId(t.name, t.url, used);
      used.add(t.id);
      tools.push(t);
    }
    const favorites = [...new Set((Array.isArray(s.favorites) ? s.favorites : []).map(String))].filter((id) => used.has(id));
    const recent = (Array.isArray(s.recent) ? s.recent : [])
      .filter((r) => r && used.has(String(r.id)))
      .map((r) => ({ id: String(r.id), ts: Number(r.ts) || 0 }))
      .slice(0, RECENT_MAX);
    return { categories, tools, favorites, recent };
  }

  function defaultState() {
    return normalizeState({ categories: clone(DEFAULT.categories), tools: clone(DEFAULT.tools), favorites: [], recent: [] });
  }

  function loadState() {
    const raw = storage.get(STORAGE_KEY);
    if (raw) {
      try {
        const s = JSON.parse(raw);
        if (s && Array.isArray(s.tools) && Array.isArray(s.categories)) return normalizeState(s);
      } catch (e) { /* fall through to default */ }
    }
    return defaultState();
  }

  /* ---------- State ---------- */
  let state = loadState();
  let filter = 'all';
  let query = '';
  let recentDirty = false;
  let saveWarned = false;

  function save() {
    const ok = storage.set(STORAGE_KEY, JSON.stringify(state));
    if (!ok && !saveWarned) {
      saveWarned = true;
      toast('הדפדפן לא מאפשר לשמור שינויים כאן. ייצאו לקובץ כדי לא לאבד אותם.');
    }
    return ok;
  }

  const catById = (id) => state.categories.find((c) => c.id === id);
  const toolById = (id) => state.tools.find((t) => t.id === id);
  const isFav = (id) => state.favorites.includes(id);

  function orderedCategories() {
    const cats = state.categories.filter((c) => c.id !== FALLBACK_CAT);
    const misc = catById(FALLBACK_CAT);
    return misc ? cats.concat(misc) : cats;
  }

  /* ---------- Actions (also used by the self test) ---------- */
  function addTool(data) {
    const t = cleanTool(data);
    if (!t) throw new Error('invalid tool');
    if (!catById(t.category)) t.category = FALLBACK_CAT;
    t.id = makeId(t.name, t.url, new Set(state.tools.map((x) => x.id)));
    state.tools.push(t);
    save();
    render();
    return t;
  }

  function updateTool(id, data) {
    const i = state.tools.findIndex((t) => t.id === id);
    if (i < 0) return null;
    const merged = cleanTool(Object.assign({}, state.tools[i], data, { id }));
    if (!merged) throw new Error('invalid tool');
    if (!catById(merged.category)) merged.category = FALLBACK_CAT;
    state.tools[i] = merged;
    save();
    render();
    return merged;
  }

  let lastDeleted = null;
  function deleteTool(id) {
    const index = state.tools.findIndex((t) => t.id === id);
    if (index < 0) return null;
    const [tool] = state.tools.splice(index, 1);
    const favIndex = state.favorites.indexOf(id);
    if (favIndex >= 0) state.favorites.splice(favIndex, 1);
    const recentBefore = state.recent.slice();
    state.recent = state.recent.filter((r) => r.id !== id);
    lastDeleted = { tool, index, favIndex, recentBefore };
    save();
    render();
    return lastDeleted;
  }

  function undoDelete(rec) {
    rec = rec || lastDeleted;
    if (!rec || toolById(rec.tool.id)) return false;
    if (!catById(rec.tool.category)) rec.tool.category = FALLBACK_CAT;
    state.tools.splice(Math.min(rec.index, state.tools.length), 0, rec.tool);
    if (rec.favIndex >= 0) state.favorites.splice(Math.min(rec.favIndex, state.favorites.length), 0, rec.tool.id);
    state.recent = rec.recentBefore.filter((r) => toolById(r.id));
    if (lastDeleted === rec) lastDeleted = null;
    save();
    render();
    return true;
  }

  function toggleFavorite(id) {
    const i = state.favorites.indexOf(id);
    if (i >= 0) state.favorites.splice(i, 1);
    else state.favorites.push(id);
    save();
    render();
    return i < 0;
  }

  function addRecent(id) {
    state.recent = [{ id, ts: Date.now() }].concat(state.recent.filter((r) => r.id !== id)).slice(0, RECENT_MAX);
    save();
  }

  function clearRecent() {
    state.recent = [];
    save();
    render();
  }

  function addCategory(name, icon) {
    name = String(name || '').trim();
    if (!name) return null;
    const existing = state.categories.find((c) => c.name === name);
    if (existing) return existing;
    const used = new Set(state.categories.map((c) => c.id));
    let id = 'cat-' + (slug(name) || Date.now().toString(36));
    let n = 2;
    while (used.has(id)) id = 'cat-' + (slug(name) || 'x') + '-' + n++;
    const cat = { id, name, icon: String(icon || '📌').trim() || '📌' };
    const miscIndex = state.categories.findIndex((c) => c.id === FALLBACK_CAT);
    if (miscIndex >= 0) state.categories.splice(miscIndex, 0, cat);
    else state.categories.push(cat);
    save();
    render();
    return cat;
  }

  function updateCategory(id, data) {
    const c = catById(id);
    if (!c) return null;
    if (data.name != null && String(data.name).trim()) c.name = String(data.name).trim();
    if (data.icon != null && String(data.icon).trim()) c.icon = String(data.icon).trim();
    save();
    render();
    return c;
  }

  function moveCategory(id, dir) {
    const list = state.categories;
    const i = list.findIndex((c) => c.id === id);
    let j = i + dir;
    while (list[j] && list[j].id === FALLBACK_CAT) j += dir;
    if (i < 0 || j < 0 || j >= list.length || id === FALLBACK_CAT) return false;
    [list[i], list[j]] = [list[j], list[i]];
    save();
    render();
    return true;
  }

  function deleteCategory(id) {
    if (id === FALLBACK_CAT) return 0;
    const i = state.categories.findIndex((c) => c.id === id);
    if (i < 0) return 0;
    state.categories.splice(i, 1);
    let moved = 0;
    for (const t of state.tools) if (t.category === id) { t.category = FALLBACK_CAT; moved++; }
    if (filter === id) filter = 'all';
    save();
    render();
    return moved;
  }

  function exportData() {
    return {
      app: "Klaiman's Tool Box",
      version: 1,
      exported_at: new Date().toISOString(),
      categories: clone(state.categories),
      tools: clone(state.tools),
      favorites: state.favorites.slice(),
    };
  }

  function parseImport(obj) {
    if (Array.isArray(obj)) obj = { tools: obj };
    if (!obj || typeof obj !== 'object' || !Array.isArray(obj.tools)) {
      throw new Error('הקובץ לא נראה כמו ייצוא של ארגז הכלים (חסרה רשימת tools).');
    }
    const tools = obj.tools.map(cleanTool).filter(Boolean);
    if (!tools.length) throw new Error('לא נמצאו בקובץ כלים תקינים (לכל כלי צריך שם וכתובת).');
    return {
      categories: cleanCategories(obj.categories),
      tools,
      favorites: Array.isArray(obj.favorites) ? obj.favorites.map(String) : [],
      skipped: obj.tools.length - tools.length,
    };
  }

  function importData(obj, mode) {
    const data = parseImport(obj);
    if (mode === 'replace') {
      state = normalizeState({
        categories: data.categories.length ? data.categories : clone(DEFAULT.categories),
        tools: data.tools,
        favorites: data.favorites,
        recent: [],
      });
      filter = 'all';
      save();
      render();
      return { added: state.tools.length, skipped: data.skipped };
    }
    // merge: add unknown categories and tools whose URL is new
    const catIdMap = new Map();
    for (const c of data.categories) {
      const same = state.categories.find((x) => x.id === c.id || x.name === c.name);
      if (same) { catIdMap.set(c.id, same.id); continue; }
      const miscIndex = state.categories.findIndex((x) => x.id === FALLBACK_CAT);
      state.categories.splice(miscIndex >= 0 ? miscIndex : state.categories.length, 0, c);
      catIdMap.set(c.id, c.id);
    }
    const urls = new Set(state.tools.map((t) => t.url.replace(/\/$/, '')));
    const used = new Set(state.tools.map((t) => t.id));
    const byName = new Map(state.categories.map((c) => [c.name, c.id]));
    let added = 0;
    for (const t of data.tools) {
      const key = t.url.replace(/\/$/, '');
      if (urls.has(key)) continue;
      const oldId = t.id;
      t.category = catIdMap.get(t.category) || (catById(t.category) ? t.category : byName.get(t.category)) || FALLBACK_CAT;
      t.id = !t.id || used.has(t.id) ? makeId(t.name, t.url, used) : t.id;
      used.add(t.id);
      urls.add(key);
      state.tools.push(t);
      if (data.favorites.includes(oldId) && !state.favorites.includes(t.id)) state.favorites.push(t.id);
      added++;
    }
    save();
    render();
    return { added, skipped: data.skipped, duplicates: data.tools.length - added };
  }

  function resetToDefault() {
    state = defaultState();
    filter = 'all';
    query = '';
    els.search.value = '';
    save();
    render();
  }

  /* ---------- Rendering ---------- */
  const els = {
    main: $('#main'),
    chips: $('#chips'),
    search: $('#search'),
    summary: $('#summary'),
    toasts: $('#toasts'),
  };

  function logoNode(tool) {
    const cat = catById(tool.category);
    const fb = (cat && cat.icon) || '🔗';
    const wrap = h('span', { class: 'logo' }, h('span', { class: 'logo-fallback', 'aria-hidden': 'true' }, fb));
    const src = tool.logo || faviconFor(tool.url);
    if (!src) { wrap.classList.add('is-fallback'); return wrap; }
    const img = h('img', {
      src, alt: 'הלוגו של ' + tool.name, loading: 'lazy', decoding: 'async',
      referrerpolicy: 'no-referrer', width: '30', height: '30',
    });
    const fail = () => { img.remove(); wrap.classList.remove('is-loaded'); wrap.classList.add('is-fallback'); };
    img.addEventListener('error', fail);
    // Google's favicon service answers unknown sites with a generic 16px globe; treat it as missing.
    img.addEventListener('load', () => {
      if (img.naturalWidth > 0 && img.naturalWidth <= 16 && /google\.com\/s2\/favicons/.test(src)) fail();
      else wrap.classList.add('is-loaded');
    });
    wrap.append(img);
    return wrap;
  }

  function card(tool, sectionKey) {
    const fav = isFav(tool.id);
    const badges = h('div', { class: 'badges' },
      tool.free === 'tier'
        ? h('span', { class: 'badge badge-tier', title: 'יש מסלול חינמי, עם הגבלות' }, 'מסלול חינמי')
        : h('span', { class: 'badge badge-full', title: 'חינמי לגמרי' }, 'חינמי'),
      tool.gem ? h('span', { class: 'badge badge-gem', title: 'פנינה נסתרת' }, '💎 פנינה') : null,
    );
    const actions = h('div', { class: 'card-actions' },
      h('button', {
        type: 'button', class: 'act act-fav', dataset: { action: 'fav' }, 'aria-pressed': fav ? 'true' : 'false',
        'aria-label': (fav ? 'הסרה מהמועדפים: ' : 'הוספה למועדפים: ') + tool.name, title: fav ? 'הסרה מהמועדפים' : 'הוספה למועדפים',
        html: ICON.star,
      }),
      h('button', { type: 'button', class: 'act', dataset: { action: 'edit' }, 'aria-label': 'עריכה: ' + tool.name, title: 'עריכה והעברת קטגוריה', html: ICON.edit }),
      h('button', { type: 'button', class: 'act act-delete', dataset: { action: 'delete' }, 'aria-label': 'מחיקה: ' + tool.name, title: 'מחיקה', html: ICON.trash }),
    );
    return h('article', { class: 'card', dataset: { id: tool.id, section: sectionKey } },
      h('div', { class: 'card-top' },
        logoNode(tool),
        h('div', { class: 'card-title' },
          h('h3', null, h('a', {
            class: 'card-link', href: tool.url, target: '_blank', rel: 'noopener noreferrer',
            'aria-label': tool.name + (tool.description_he ? '. ' + tool.description_he : '') + ' (נפתח בלשונית חדשה)',
          }, h('bdi', null, tool.name))),
          h('span', { class: 'card-host' }, hostOf(tool.url)),
        ),
      ),
      tool.description_he ? h('p', { class: 'card-desc' }, tool.description_he) : null,
      h('div', { class: 'card-foot' }, badges, actions),
    );
  }

  function sectionNode(key, title, icon, body, count, extra) {
    return h('section', { class: 'section', 'aria-labelledby': 'h-' + key, dataset: { key } },
      h('div', { class: 'section-head' },
        h('h2', { id: 'h-' + key }, h('span', { class: 'section-icon', 'aria-hidden': 'true' }, icon), title),
        count != null ? h('span', { class: 'section-count', 'aria-label': count + ' כלים' }, String(count)) : null,
        extra || null,
      ),
      body,
    );
  }

  function matches(tool, q) {
    if (filter === 'fav' && !isFav(tool.id)) return false;
    if (filter === 'gem' && !tool.gem) return false;
    if (filter !== 'all' && filter !== 'fav' && filter !== 'gem' && tool.category !== filter) return false;
    if (!q) return true;
    const cat = catById(tool.category);
    const hay = fold(tool.name + ' ' + tool.description_he + ' ' + (cat ? cat.name : '') + ' ' + hostOf(tool.url));
    return q.split(/\s+/).every((w) => hay.includes(w));
  }

  function captureFocus() {
    const a = document.activeElement;
    if (!a || !els.main.contains(a)) return null;
    const c = a.closest('.card');
    if (!c) return null;
    return { id: c.dataset.id, section: c.dataset.section, action: a.dataset.action || 'link' };
  }

  function restoreFocus(f) {
    if (!f) return;
    const sel = (sec) => '.card[data-id="' + CSS.escape(f.id) + '"]' + (sec ? '[data-section="' + CSS.escape(sec) + '"]' : '') +
      (f.action === 'link' ? ' .card-link' : ' [data-action="' + f.action + '"]');
    const el = $(sel(f.section), els.main) || $(sel(null), els.main);
    if (el) el.focus({ preventScroll: true });
  }

  function renderChips() {
    const counts = new Map();
    for (const t of state.tools) counts.set(t.category, (counts.get(t.category) || 0) + 1);
    const chip = (key, label, icon, count) => h('button', {
      type: 'button', class: 'chip', dataset: { filter: key }, 'aria-pressed': filter === key ? 'true' : 'false',
    }, icon ? h('span', { 'aria-hidden': 'true' }, icon) : null, label, count != null ? h('span', { class: 'chip-count' }, String(count)) : null);

    const nodes = [
      chip('all', 'הכל', null, state.tools.length),
      chip('fav', 'מועדפים', '⭐', state.favorites.length),
      chip('gem', 'פנינים', '💎', state.tools.filter((t) => t.gem).length),
    ];
    for (const c of orderedCategories()) nodes.push(chip(c.id, c.name, c.icon, counts.get(c.id) || 0));
    els.chips.replaceChildren(...nodes);
  }

  function render() {
    const focus = captureFocus();
    if (filter !== 'all' && filter !== 'fav' && filter !== 'gem' && !catById(filter)) filter = 'all';
    renderChips();

    const q = fold(query);
    const frag = document.createDocumentFragment();
    let shown = 0;

    if (filter === 'all' && !q) {
      const favTools = state.favorites.map(toolById).filter(Boolean);
      if (favTools.length) {
        frag.append(sectionNode('fav', 'מועדפים', '⭐', h('div', { class: 'grid' }, favTools.map((t) => card(t, 'fav'))), favTools.length));
      }
      const recentTools = state.recent.map((r) => toolById(r.id)).filter(Boolean);
      if (recentTools.length) {
        const strip = h('div', { class: 'recent-strip' }, recentTools.map((t) => h('a', {
          class: 'mini card-link-mini', href: t.url, target: '_blank', rel: 'noopener noreferrer', dataset: { id: t.id },
          'aria-label': t.name + ' (נפתח בלשונית חדשה)',
        }, logoNode(t), h('span', { class: 'mini-name' }, h('bdi', null, t.name)))));
        const clearBtn = h('button', { type: 'button', class: 'link-btn', dataset: { action: 'clear-recent' } }, 'ניקוי');
        frag.append(sectionNode('recent', 'נפתחו לאחרונה', '🕘', strip, null, clearBtn));
      }
    }

    for (const c of orderedCategories()) {
      const tools = state.tools.filter((t) => t.category === c.id && matches(t, q));
      if (!tools.length) continue;
      shown += tools.length;
      frag.append(sectionNode('cat-' + c.id, c.name, c.icon, h('div', { class: 'grid' }, tools.map((t) => card(t, c.id))), tools.length));
    }

    if (!shown) {
      const isFavEmpty = filter === 'fav' && !q;
      frag.append(h('div', { class: 'empty' },
        h('div', { class: 'empty-icon', 'aria-hidden': 'true' }, isFavEmpty ? '⭐' : '🔍'),
        h('h2', null, isFavEmpty ? 'עוד אין מועדפים' : 'לא נמצאו כלים'),
        h('p', null, isFavEmpty ? 'לחצו על הכוכב בכרטיס כדי להצמיד כלי לראש הדף.' : 'נסו מילה אחרת, או הוסיפו את הכלי בעצמכם.'),
        isFavEmpty
          ? h('button', { type: 'button', class: 'btn', dataset: { action: 'show-all' } }, 'לכל הכלים')
          : h('button', { type: 'button', class: 'btn btn-primary', dataset: { action: 'add-from-empty' } }, 'הוספת כלי חדש'),
      ));
    }

    els.main.replaceChildren(frag);
    const total = state.tools.length;
    els.summary.textContent = (q || filter !== 'all')
      ? 'מוצגים ' + shown + ' מתוך ' + total + ' כלים'
      : total + ' כלים ב-' + state.categories.length + ' קטגוריות';
    restoreFocus(focus);
  }

  /* ---------- Toasts ---------- */
  function toast(message, opts) {
    opts = opts || {};
    const el = h('div', { class: 'toast' }, h('span', null, message));
    let timer;
    const close = () => {
      clearTimeout(timer);
      el.classList.add('leaving');
      setTimeout(() => el.remove(), 200);
    };
    if (opts.actionLabel) {
      el.append(h('button', { type: 'button', onclick: () => { close(); opts.onAction(); } }, opts.actionLabel));
    }
    while (els.toasts.children.length >= 3) els.toasts.firstElementChild.remove();
    els.toasts.append(el);
    timer = setTimeout(close, opts.timeout || 5000);
    return el;
  }

  /* ---------- Dialog helpers ---------- */
  const choiceDialog = $('#choice-dialog');
  function choose(opts) {
    return new Promise((resolve) => {
      $('#choice-title').textContent = opts.title;
      $('#choice-text').textContent = opts.text || '';
      const actions = $('#choice-actions');
      actions.replaceChildren();
      let result = null;
      // Buttons render in reverse order (primary first in DOM = rightmost in RTL).
      for (const b of opts.buttons) {
        actions.append(h('button', {
          type: 'button', class: 'btn' + (b.variant ? ' btn-' + b.variant : ''),
          onclick: () => { result = b.value; choiceDialog.close(); },
        }, b.label));
      }
      choiceDialog.addEventListener('close', function onClose() {
        choiceDialog.removeEventListener('close', onClose);
        resolve(result);
      });
      openDialog(choiceDialog);
      const primary = actions.querySelector('.btn-primary, .btn-danger');
      (opts.focusCancel ? actions.lastElementChild : primary || actions.firstElementChild).focus();
    });
  }

  function confirmAction(title, text, okLabel, danger, focusCancel) {
    return choose({
      title, text, focusCancel,
      buttons: [
        { label: okLabel, value: true, variant: danger ? 'danger' : 'primary' },
        { label: 'ביטול', value: false },
      ],
    }).then((v) => v === true);
  }

  const dialogOpener = new WeakMap();
  function openDialog(d) {
    dialogOpener.set(d, document.activeElement);
    d.showModal();
  }
  document.querySelectorAll('dialog').forEach((d) => {
    d.addEventListener('close', () => {
      const opener = dialogOpener.get(d);
      if (opener && document.contains(opener) && !document.querySelector('dialog[open]')) opener.focus({ preventScroll: true });
    });
    d.addEventListener('click', (e) => {
      if (e.target.closest('[data-close]')) d.close();
      // click on the backdrop closes the dialog
      if (e.target === d) {
        const r = d.getBoundingClientRect();
        const inside = e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom;
        if (!inside) d.close();
      }
    });
  });

  /* ---------- Tool dialog (add / edit) ---------- */
  const toolDialog = $('#tool-dialog');
  const f = {
    form: $('#tool-form'), title: $('#tool-dialog-title'), url: $('#f-url'), name: $('#f-name'), desc: $('#f-desc'),
    cat: $('#f-cat'), newcat: $('#f-newcat'), free: $('#f-free'), gem: $('#f-gem'), logo: $('#f-logo'),
    preview: $('#logo-preview'), errUrl: $('#err-url'), errName: $('#err-name'), advanced: toolDialog.querySelector('.advanced'),
  };
  let editingId = null;
  let nameTouched = false;

  function fillCategorySelect(selected) {
    const opts = orderedCategories().map((c) => h('option', { value: c.id }, c.icon + '  ' + c.name));
    opts.push(h('option', { value: '__new__' }, '＋ קטגוריה חדשה...'));
    f.cat.replaceChildren(...opts);
    f.cat.value = selected && catById(selected) ? selected : FALLBACK_CAT;
    f.newcat.hidden = true;
  }

  function updatePreview() {
    const url = normalizeUrl(f.url.value);
    const logo = f.logo.value.trim() || (url ? faviconFor(url) : '');
    const catId = f.cat.value === '__new__' ? null : f.cat.value;
    const fake = { name: f.name.value || 'כלי', url: url || 'https://example.invalid', category: catId, logo: logo || 'about:blank' };
    if (!url && !f.logo.value.trim()) fake.logo = '';
    f.preview.replaceChildren(logoNode(fake));
  }

  function suggestName(url) {
    const host = hostOf(url);
    if (!host) return '';
    const parts = host.split('.');
    const core = parts.length > 2 && parts[parts.length - 2].length <= 3 ? parts[parts.length - 3] : parts[parts.length - 2] || parts[0];
    return core ? core.charAt(0).toUpperCase() + core.slice(1) : '';
  }

  function setError(input, errEl, msg) {
    errEl.textContent = msg || '';
    if (msg) input.setAttribute('aria-invalid', 'true');
    else input.removeAttribute('aria-invalid');
  }

  function openToolDialog(id, presetCategory) {
    const tool = id ? toolById(id) : null;
    editingId = tool ? tool.id : null;
    nameTouched = !!tool;
    f.title.textContent = tool ? 'עריכת כלי' : 'הוספת כלי';
    $('#tool-submit').textContent = tool ? 'שמירת שינויים' : 'הוספה';
    f.url.value = tool ? tool.url : '';
    f.name.value = tool ? tool.name : '';
    f.desc.value = tool ? tool.description_he : '';
    fillCategorySelect(tool ? tool.category : presetCategory);
    f.free.value = tool ? tool.free : 'full';
    f.gem.checked = tool ? tool.gem : false;
    const customLogo = tool && tool.logo && tool.logo !== faviconFor(tool.url) ? tool.logo : '';
    f.logo.value = customLogo;
    f.advanced.open = !!customLogo;
    f.newcat.value = '';
    setError(f.url, f.errUrl, '');
    setError(f.name, f.errName, '');
    updatePreview();
    openDialog(toolDialog);
    (tool ? f.name : f.url).focus();
  }

  f.url.addEventListener('input', () => {
    setError(f.url, f.errUrl, '');
    const url = normalizeUrl(f.url.value);
    if (!nameTouched) f.name.value = url ? suggestName(url) : '';
    updatePreview();
  });
  f.name.addEventListener('input', () => { nameTouched = f.name.value.trim() !== ''; setError(f.name, f.errName, ''); });
  f.logo.addEventListener('input', updatePreview);
  f.cat.addEventListener('change', () => {
    const isNew = f.cat.value === '__new__';
    f.newcat.hidden = !isNew;
    if (isNew) f.newcat.focus();
    updatePreview();
  });

  f.form.addEventListener('submit', (e) => {
    e.preventDefault();
    const url = normalizeUrl(f.url.value);
    const name = f.name.value.trim();
    let bad = null;
    if (!url) { setError(f.url, f.errUrl, 'צריך כתובת אתר תקינה, למשל https://example.com'); bad = bad || f.url; }
    else {
      const dup = state.tools.find((t) => t.id !== editingId && t.url.replace(/\/$/, '') === url.replace(/\/$/, ''));
      if (dup) { setError(f.url, f.errUrl, 'הכתובת הזו כבר קיימת ברשימה, בכרטיס של ' + dup.name + '.'); bad = bad || f.url; }
    }
    if (!name) { setError(f.name, f.errName, 'צריך לתת לכלי שם.'); bad = bad || f.name; }
    if (bad) { bad.focus(); return; }

    let category = f.cat.value;
    if (category === '__new__') {
      const cat = addCategory(f.newcat.value, '📌');
      category = cat ? cat.id : FALLBACK_CAT;
    }
    const data = {
      name, url, description_he: f.desc.value.trim(), category,
      free: f.free.value, gem: f.gem.checked, logo: f.logo.value.trim() || faviconFor(url),
    };
    let saved;
    if (editingId) {
      saved = updateTool(editingId, data);
      toast('השינויים ב-' + saved.name + ' נשמרו');
    } else {
      saved = addTool(data);
      toast(saved.name + ' נוסף ל' + (catById(saved.category) || {}).name);
    }
    dialogOpener.delete(toolDialog);
    toolDialog.close();
    requestAnimationFrame(() => {
      const el = $('.card[data-id="' + CSS.escape(saved.id) + '"][data-section="' + CSS.escape(saved.category) + '"] .card-link', els.main);
      if (el) { el.focus({ preventScroll: true }); el.closest('.card').scrollIntoView({ block: 'nearest', behavior: 'smooth' }); }
    });
  });

  /* ---------- Delete with undo ---------- */
  async function requestDelete(id) {
    const tool = toolById(id);
    if (!tool) return;
    const ok = await confirmAction('למחוק את ' + tool.name + '?', 'הכרטיס יוסר מהרשימה. אפשר לבטל מיד אחרי המחיקה.', 'מחיקה', true);
    if (!ok) return;
    const rec = deleteTool(id);
    toast(tool.name + ' נמחק', { actionLabel: 'ביטול', onAction: () => undoDelete(rec), timeout: 7000 });
    els.search.focus({ preventScroll: true });
  }

  /* ---------- Category manager ---------- */
  const catDialog = $('#cat-dialog');
  const catList = $('#cat-list');

  function renderCatList(focusSel) {
    const counts = new Map();
    for (const t of state.tools) counts.set(t.category, (counts.get(t.category) || 0) + 1);
    const cats = orderedCategories();
    const movable = cats.filter((c) => c.id !== FALLBACK_CAT);
    catList.replaceChildren(...cats.map((c) => {
      const locked = c.id === FALLBACK_CAT;
      const idx = movable.indexOf(c);
      return h('li', { class: 'cat-row' + (locked ? ' locked' : ''), dataset: { id: c.id } },
        h('input', { class: 'cat-icon-input', value: c.icon, maxlength: '4', 'aria-label': 'אייקון של ' + c.name, dataset: { field: 'icon' } }),
        h('input', { class: 'cat-name', value: c.name, 'aria-label': 'שם הקטגוריה ' + c.name, dataset: { field: 'name' } }),
        h('span', { class: 'count', title: 'מספר כלים' }, String(counts.get(c.id) || 0)),
        h('button', { type: 'button', class: 'icon-btn', dataset: { cat: 'up' }, 'aria-label': 'הזזה למעלה: ' + c.name, disabled: locked || idx === 0, html: ICON.up }),
        h('button', { type: 'button', class: 'icon-btn', dataset: { cat: 'down' }, 'aria-label': 'הזזה למטה: ' + c.name, disabled: locked || idx === movable.length - 1, html: ICON.down }),
        h('button', {
          type: 'button', class: 'icon-btn del', dataset: { cat: 'delete' }, 'aria-label': 'מחיקת הקטגוריה ' + c.name,
          disabled: locked, title: locked ? 'זו קטגוריית ברירת המחדל ואי אפשר למחוק אותה' : 'מחיקה', html: ICON.trash,
        }),
      );
    }));
    if (focusSel) { const el = $(focusSel, catList); if (el) el.focus(); }
  }

  catList.addEventListener('change', (e) => {
    const input = e.target.closest('input[data-field]');
    if (!input) return;
    const id = input.closest('.cat-row').dataset.id;
    const value = input.value.trim();
    if (!value) { input.value = catById(id)[input.dataset.field]; return; }
    updateCategory(id, { [input.dataset.field]: value });
  });

  catList.addEventListener('click', async (e) => {
    const btn = e.target.closest('button[data-cat]');
    if (!btn) return;
    const id = btn.closest('.cat-row').dataset.id;
    const cat = catById(id);
    if (btn.dataset.cat === 'up' || btn.dataset.cat === 'down') {
      moveCategory(id, btn.dataset.cat === 'up' ? -1 : 1);
      renderCatList('.cat-row[data-id="' + CSS.escape(id) + '"] [data-cat="' + btn.dataset.cat + '"]:not(:disabled)');
      return;
    }
    if (btn.dataset.cat === 'delete') {
      const n = state.tools.filter((t) => t.category === id).length;
      const ok = await confirmAction('למחוק את הקטגוריה ' + cat.name + '?',
        n ? n + ' כלים יעברו אל "' + catById(FALLBACK_CAT).name + '". הכלים עצמם לא יימחקו.' : 'הקטגוריה ריקה.', 'מחיקת קטגוריה', true);
      if (!ok) return;
      deleteCategory(id);
      renderCatList();
      toast('הקטגוריה ' + cat.name + ' נמחקה');
    }
  });

  $('#cat-add').addEventListener('submit', (e) => {
    e.preventDefault();
    const nameEl = $('#cat-new-name');
    const name = nameEl.value.trim();
    if (!name) { nameEl.focus(); return; }
    const cat = addCategory(name, $('#cat-new-icon').value);
    nameEl.value = '';
    $('#cat-new-icon').value = '📌';
    renderCatList();
    toast('הקטגוריה ' + cat.name + ' נוספה');
    nameEl.focus();
  });

  function openCategories() {
    renderCatList();
    openDialog(catDialog);
    const first = $('.cat-name', catList);
    if (first) first.focus();
  }

  /* ---------- Export / import ---------- */
  function downloadExport() {
    const data = exportData();
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = h('a', { href: url, download: 'klaimans-toolbox-' + new Date().toISOString().slice(0, 10) + '.json' });
    document.body.append(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 2000);
    toast('הקובץ נשמר בתיקיית ההורדות (' + data.tools.length + ' כלים)');
    return data;
  }

  const fileInput = $('#import-file');
  fileInput.addEventListener('change', async () => {
    const file = fileInput.files && fileInput.files[0];
    fileInput.value = '';
    if (!file) return;
    let obj;
    try {
      obj = JSON.parse(await file.text());
      parseImport(obj);
    } catch (err) {
      await choose({ title: 'אי אפשר לייבא את הקובץ', text: err instanceof SyntaxError ? 'הקובץ לא בפורמט JSON תקין.' : err.message, buttons: [{ label: 'הבנתי', value: true, variant: 'primary' }] });
      return;
    }
    const n = obj.tools ? obj.tools.length : obj.length;
    const mode = await choose({
      title: 'ייבוא ' + n + ' כלים',
      text: 'מיזוג מוסיף רק כלים שעוד אין לכם. החלפה מוחקת את הרשימה הנוכחית ושמה במקומה את הקובץ.',
      buttons: [
        { label: 'מיזוג', value: 'merge', variant: 'primary' },
        { label: 'החלפה', value: 'replace', variant: 'danger' },
        { label: 'ביטול', value: null },
      ],
    });
    if (!mode) return;
    const res = importData(obj, mode);
    toast(mode === 'replace' ? 'הרשימה הוחלפה: ' + res.added + ' כלים' : res.added ? 'נוספו ' + res.added + ' כלים חדשים' : 'לא נמצאו כלים חדשים, הכל כבר קיים');
  });

  /* ---------- Menu ---------- */
  const menuBtn = $('#btn-menu');
  const menu = $('#menu');
  function setMenu(open, focusFirst) {
    menu.hidden = !open;
    menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (open && focusFirst) menu.querySelector('button').focus();
  }
  menuBtn.addEventListener('click', () => setMenu(menu.hidden, true));
  document.addEventListener('click', (e) => {
    if (!menu.hidden && !e.target.closest('.menu-wrap')) setMenu(false);
  });
  menu.addEventListener('keydown', (e) => {
    const items = [...menu.querySelectorAll('button')];
    const i = items.indexOf(document.activeElement);
    if (e.key === 'ArrowDown') { e.preventDefault(); items[(i + 1) % items.length].focus(); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); items[(i - 1 + items.length) % items.length].focus(); }
    else if (e.key === 'Escape') { e.preventDefault(); setMenu(false); menuBtn.focus(); }
    else if (e.key === 'Tab') setMenu(false);
  });
  menu.addEventListener('click', async (e) => {
    const item = e.target.closest('[data-menu]');
    if (!item) return;
    setMenu(false);
    menuBtn.focus();
    const action = item.dataset.menu;
    if (action === 'categories') openCategories();
    else if (action === 'export') downloadExport();
    else if (action === 'import') fileInput.click();
    else if (action === 'reset') {
      const ok = await confirmAction('לאפס לרשימת ברירת המחדל?', 'כל הכלים שהוספתם, העריכות, המועדפים וההיסטוריה יימחקו. כדאי לייצא גיבוי לפני כן.', 'איפוס', true, true);
      if (ok) { resetToDefault(); toast('הרשימה אופסה לברירת המחדל'); }
    }
  });

  /* ---------- Theme ---------- */
  const themeBtn = $('#btn-theme');
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    themeBtn.setAttribute('aria-label', theme === 'dark' ? 'מעבר לתצוגה בהירה' : 'מעבר לתצוגה כהה');
  }
  applyTheme(document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark');
  themeBtn.addEventListener('click', () => {
    const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    storage.set(THEME_KEY, next);
  });

  /* ---------- Main events ---------- */
  $('#btn-add').addEventListener('click', () => {
    const preset = filter !== 'all' && filter !== 'fav' && filter !== 'gem' ? filter : null;
    openToolDialog(null, preset);
  });

  els.chips.addEventListener('click', (e) => {
    const chip = e.target.closest('.chip');
    if (!chip) return;
    filter = chip.dataset.filter;
    render();
    const again = els.chips.querySelector('[data-filter="' + CSS.escape(filter) + '"]');
    if (again) { again.focus(); again.scrollIntoView({ inline: 'nearest', block: 'nearest' }); }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  let searchTimer;
  els.search.addEventListener('input', () => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => { query = els.search.value; render(); }, 60);
  });
  els.search.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && els.search.value) {
      e.preventDefault();
      els.search.value = '';
      query = '';
      render();
    } else if (e.key === 'Enter') {
      const first = $('.card-link', els.main);
      if (first) first.focus();
    }
  });

  function trackOpen(e) {
    const link = e.target.closest('.card-link, .card-link-mini');
    if (!link) return;
    if (e.type === 'auxclick' && e.button !== 1) return;
    const id = (link.closest('.card') || link).dataset.id;
    if (id) { addRecent(id); recentDirty = true; }
  }
  els.main.addEventListener('click', trackOpen);
  els.main.addEventListener('auxclick', trackOpen);
  // Refresh the "recent" strip when the user comes back, so the layout doesn't jump under the cursor.
  const flushRecent = () => { if (recentDirty && document.visibilityState === 'visible') { recentDirty = false; render(); } };
  document.addEventListener('visibilitychange', flushRecent);
  window.addEventListener('focus', flushRecent);

  els.main.addEventListener('click', (e) => {
    const btn = e.target.closest('button[data-action]');
    if (!btn) return;
    const action = btn.dataset.action;
    const c = btn.closest('.card');
    const id = c && c.dataset.id;
    if (action === 'fav') {
      const added = toggleFavorite(id);
      toast(added ? toolById(id).name + ' נוסף למועדפים' : toolById(id).name + ' הוסר מהמועדפים');
    } else if (action === 'edit') openToolDialog(id);
    else if (action === 'delete') requestDelete(id);
    else if (action === 'clear-recent') { clearRecent(); els.search.focus(); }
    else if (action === 'show-all') { filter = 'all'; render(); }
    else if (action === 'add-from-empty') openToolDialog(null, null);
  });

  // Arrow keys move between cards (RTL aware).
  els.main.addEventListener('keydown', (e) => {
    if (!['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(e.key)) return;
    const cur = e.target.closest('.card-link, .card-link-mini');
    if (!cur) return;
    const links = [...els.main.querySelectorAll('.card-link, .card-link-mini')];
    const i = links.indexOf(cur);
    let next = null;
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      next = links[i + (e.key === 'ArrowLeft' ? 1 : -1)];
    } else {
      const box = (el) => (el.closest('.card') || el).getBoundingClientRect();
      const r = box(cur);
      const cx = r.left + r.width / 2;
      const down = e.key === 'ArrowDown';
      let best = Infinity;
      for (const l of links) {
        if (l === cur) continue;
        const b = box(l);
        const dy = down ? b.top - r.bottom : r.top - b.bottom;
        if (dy < -2) continue;
        const score = dy * 4 + Math.abs(b.left + b.width / 2 - cx);
        if (score < best) { best = score; next = l; }
      }
    }
    if (next) {
      e.preventDefault();
      next.focus();
      (next.closest('.card') || next).scrollIntoView({ block: 'nearest', inline: 'nearest' });
    }
  });

  // "/" focuses search from anywhere (except while typing or in a dialog).
  document.addEventListener('keydown', (e) => {
    if (e.defaultPrevented || e.ctrlKey || e.metaKey || e.altKey) return;
    const t = e.target;
    const typing = t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName));
    if (e.key === '/' && !typing && !document.querySelector('dialog[open]')) {
      e.preventDefault();
      els.search.focus();
      els.search.select();
    }
  });

  /* ---------- Boot ---------- */
  render();

  window.Toolbox = {
    get state() { return state; },
    get filter() { return filter; },
    setFilter(v) { filter = v; render(); },
    setQuery(v) { query = v; els.search.value = v; render(); },
    addTool, updateTool, deleteTool, undoDelete, toggleFavorite, addRecent, clearRecent,
    addCategory, updateCategory, moveCategory, deleteCategory,
    exportData, importData, parseImport, resetToDefault, downloadExport, loadState, render,
    STORAGE_KEY, DEFAULT,
  };

  if (SELFTEST) {
    const s = document.createElement('script');
    s.src = 'tests/selftest.js';
    document.body.append(s);
  }
})();
