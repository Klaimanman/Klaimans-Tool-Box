/* בדיקה עצמית: פותחים את index.html?selftest כדי להריץ.
   הבדיקה משתמשת במפתח אחסון נפרד ולא נוגעת ברשימה האמיתית שלכם. */
(async () => {
  const T = window.Toolbox;
  const main = document.getElementById('main');
  const $ = (s) => document.querySelector(s);
  const results = [];
  const ok = (name, cond, info) => results.push({ name, pass: !!cond, info });
  const wait = (ms) => new Promise((r) => setTimeout(r, ms));
  const input = (el, v) => { el.value = v; el.dispatchEvent(new Event('input', { bubbles: true })); };

  // Never actually download during the test.
  const realClick = HTMLAnchorElement.prototype.click;
  HTMLAnchorElement.prototype.click = function () { if (this.hasAttribute('download')) return; return realClick.call(this); };

  try {
    try { localStorage.removeItem(T.STORAGE_KEY); } catch (e) { /* ignore */ }
    T.resetToDefault();
    const N = T.DEFAULT.tools.length;

    // Data + render
    ok('default data loaded from data/tools.js', T.state.tools.length === N && N > 200, N + ' tools');
    ok('a card for every tool', main.querySelectorAll('.card').length === N);
    ok('uncategorized section is last', [...main.querySelectorAll('.section')].pop().dataset.key === 'cat-misc');
    ok('cards open in a new tab safely', [...main.querySelectorAll('.card-link')].every((a) => a.target === '_blank' && a.rel.includes('noopener')));
    ok('logo images have alt text', [...main.querySelectorAll('.logo img')].every((i) => i.alt.length > 0));
    const wide = [...document.querySelectorAll('body *')].filter((el) => el.getBoundingClientRect().right > innerWidth + 1 && !el.closest('.chips, .recent-strip')).slice(0, 3).map((el) => el.tagName + '.' + el.className).join(', ');
    ok('no horizontal page scroll', document.documentElement.scrollWidth <= innerWidth, 'viewport ' + innerWidth + ', page ' + document.documentElement.scrollWidth + (wide ? ', wide: ' + wide : ''));
    ok('no em/en dashes in Hebrew copy', !/[–—]/.test(document.body.innerText));

    // Search + chips
    T.setQuery('cyberchef');
    ok('search by name', main.querySelectorAll('.card').length === 1);
    T.setQuery('ניקוד');
    ok('search by Hebrew description', !!main.querySelector('.card[data-id="dicta-nakdan"]'));
    T.setQuery('אבטחה ופרטיות');
    ok('search by category name', main.querySelectorAll('.card').length >= 3);
    T.setQuery('zzzz-nothing');
    ok('empty state when nothing matches', !!main.querySelector('.empty'));
    T.setQuery('');
    T.setFilter('gem');
    ok('gem chip filters', main.querySelectorAll('.card').length === T.state.tools.filter((t) => t.gem).length);
    T.setFilter('osint');
    ok('category chip filters', main.querySelectorAll('.section').length === 1);
    T.setFilter('all');

    // "/" shortcut
    document.activeElement.blur();
    document.dispatchEvent(new KeyboardEvent('keydown', { key: '/', bubbles: true, cancelable: true }));
    ok('"/" focuses the search box', document.activeElement && document.activeElement.id === 'search');

    // Add via the real form
    $('#btn-add').click();
    ok('add dialog opens', $('#tool-dialog').open);
    input($('#f-url'), 'example.org');
    ok('name is suggested from the URL', $('#f-name').value === 'Example');
    input($('#f-name'), 'Selftest Tool');
    $('#f-desc').value = 'כלי בדיקה';
    $('#f-cat').value = 'code';
    $('#f-gem').checked = true;
    $('#tool-form').requestSubmit();
    const added = T.state.tools.find((t) => t.name === 'Selftest Tool');
    ok('tool added through the form', added && added.url === 'https://example.org/' && added.category === 'code' && added.gem && !$('#tool-dialog').open);
    ok('logo auto-filled from URL', added && added.logo === 'https://www.google.com/s2/favicons?domain=example.org&sz=128');
    ok('new card is rendered', !!main.querySelector('.card[data-id="' + added.id + '"]'));

    // Validation
    $('#btn-add').click();
    input($('#f-url'), 'not a url');
    $('#tool-form').requestSubmit();
    ok('invalid URL is rejected', $('#tool-dialog').open && $('#err-url').textContent.length > 0);
    input($('#f-url'), 'https://example.org');
    $('#tool-form').requestSubmit();
    ok('duplicate URL is rejected', $('#tool-dialog').open && /כבר קיימת/.test($('#err-url').textContent));
    $('#tool-dialog').close();

    // Edit + move category
    main.querySelector('.card[data-id="' + added.id + '"] [data-action="edit"]').click();
    ok('edit dialog is prefilled', $('#tool-dialog').open && $('#f-name').value === 'Selftest Tool' && $('#f-gem').checked);
    $('#f-cat').value = 'leisure';
    input($('#f-name'), 'Selftest Renamed');
    $('#tool-form').requestSubmit();
    const edited = T.state.tools.find((t) => t.id === added.id);
    ok('edit saved and tool moved to another category', edited.name === 'Selftest Renamed' && edited.category === 'leisure');
    ok('card appears in its new section', !!main.querySelector('.card[data-id="' + added.id + '"][data-section="leisure"]'));

    // Favorites + recent
    main.querySelector('.card[data-id="' + added.id + '"] [data-action="fav"]').click();
    ok('favorite pins tool to the top section', !!main.querySelector('.section[data-key="fav"] .card[data-id="' + added.id + '"]'));
    T.addRecent(added.id);
    T.render();
    ok('recently opened section shows the tool', !!main.querySelector('.section[data-key="recent"] [data-id="' + added.id + '"]'));

    // Delete with confirm + undo
    const before = T.state.tools.length;
    const idx = T.state.tools.findIndex((t) => t.id === added.id);
    main.querySelector('.card[data-id="' + added.id + '"][data-section="leisure"] [data-action="delete"]').click();
    await wait(50);
    ok('delete asks for confirmation', $('#choice-dialog').open);
    $('#choice-actions .btn-danger').click();
    await wait(50);
    ok('tool deleted', T.state.tools.length === before - 1 && !main.querySelector('[data-id="' + added.id + '"]') && !T.state.favorites.includes(added.id));
    const undoBtn = [...document.querySelectorAll('.toast button')].find((b) => b.textContent === 'ביטול');
    ok('undo toast is shown', !!undoBtn);
    if (undoBtn) undoBtn.click();
    ok('undo restores tool, position and favorite', T.state.tools.findIndex((t) => t.id === added.id) === idx && T.state.favorites.includes(added.id));
    main.querySelector('.card[data-id="' + added.id + '"][data-section="leisure"] [data-action="delete"]').click();
    await wait(30);
    [...document.querySelectorAll('#choice-actions .btn')].find((b) => b.textContent === 'ביטול').click();
    await wait(30);
    ok('cancel keeps the tool', !!T.state.tools.find((t) => t.id === added.id));

    // Categories
    const cat = T.addCategory('קטגוריית בדיקה', '🧪');
    ok('category added', !!T.state.categories.find((c) => c.id === cat.id) && !!main.ownerDocument.querySelector('.chip[data-filter="' + cat.id + '"]'));
    T.updateCategory(cat.id, { name: 'שם חדש' });
    ok('category renamed', T.state.categories.find((c) => c.id === cat.id).name === 'שם חדש');
    T.updateTool(added.id, { category: cat.id });
    const moved = T.deleteCategory(cat.id);
    ok('deleting a category moves its tools to uncategorized', moved === 1 && T.state.tools.find((t) => t.id === added.id).category === 'misc');
    ok('uncategorized cannot be deleted', T.deleteCategory('misc') === 0);
    ok('reorder category', T.moveCategory('code', -1) && T.state.categories[0].id === 'code');

    // Persistence
    const persisted = T.loadState();
    ok('changes persist in localStorage', persisted.tools.length === T.state.tools.length && persisted.favorites.includes(added.id) && persisted.categories[0].id === 'code');

    // Export
    let blob = null;
    const realCreate = URL.createObjectURL;
    URL.createObjectURL = (b) => { blob = b; return realCreate.call(URL, b); };
    T.downloadExport();
    URL.createObjectURL = realCreate;
    const exported = JSON.parse(await blob.text());
    ok('export builds a full JSON backup', exported.tools.length === T.state.tools.length && exported.categories.length === T.state.categories.length && exported.favorites.includes(added.id));

    // Import
    T.importData({ tools: [{ name: 'Only One', url: 'https://only-one.example', category: 'לא קיימת' }] }, 'replace');
    ok('import (replace) swaps the list', T.state.tools.length === 1 && T.state.tools[0].category === 'misc');
    const r = T.importData(exported, 'merge');
    ok('import (merge) adds missing tools', r.added === exported.tools.length && T.state.tools.length === exported.tools.length + 1);
    ok('import keeps favorites', T.state.favorites.includes(added.id));
    ok('import (merge) skips duplicates', T.importData(exported, 'merge').added === 0);
    let t1 = false; try { T.parseImport({ foo: 1 }); } catch (e) { t1 = true; }
    ok('invalid file is rejected', t1);
    let t2 = false; try { T.parseImport({ tools: [{ name: 'x', url: 'javascript:alert(1)' }] }); } catch (e) { t2 = true; }
    ok('javascript: URLs are rejected', t2);

    // Logo fallbacks
    T.resetToDefault();
    const a = T.addTool({ name: 'Broken Logo', url: 'https://broken-logo.example', category: 'hacker', logo: 'https://broken-logo.invalid/nope.png' });
    const b = T.addTool({ name: 'Unknown Favicon', url: 'https://nonexistent-domain-zzqx.invalid', category: 'daily' });
    const c = T.addTool({ name: 'Corrupt Image', url: 'https://corrupt-image.example', category: 'music', logo: 'data:image/png;base64,AAAA' });
    T.setFilter('all');
    for (const id of [a.id, b.id, c.id]) main.querySelector('.card[data-id="' + id + '"]').scrollIntoView();
    await wait(4000);
    const fellBack = (id, icon) => {
      const l = main.querySelector('.card[data-id="' + id + '"] .logo');
      return l && l.classList.contains('is-fallback') && !l.querySelector('img') && l.textContent.includes(icon);
    };
    ok('broken logo URL shows the category icon', fellBack(a.id, '🕶️'));
    ok('unknown site (generic Google globe) shows the category icon', fellBack(b.id, '☀️'));
    ok('corrupt image data shows the category icon', fellBack(c.id, '🎵'));
    ok('no broken image is ever visible', [...main.querySelectorAll('.logo img')].every((i) => !i.complete || i.naturalWidth > 0 || getComputedStyle(i).opacity === '0'));
    const loaded = main.querySelectorAll('.logo.is-loaded').length;
    ok('real logos load', loaded > 0, loaded + ' loaded');
  } catch (e) {
    ok('no exceptions', false, e && e.stack);
  } finally {
    HTMLAnchorElement.prototype.click = realClick;
    try { localStorage.removeItem(T.STORAGE_KEY); } catch (e) { /* ignore */ }
  }

  const passed = results.filter((r) => r.pass).length;
  const lines = results.map((r) => (r.pass ? 'PASS ' : 'FAIL ') + r.name + (r.info ? '  [' + r.info + ']' : ''));
  const pre = document.createElement('pre');
  pre.id = 'selftest-results';
  pre.textContent = 'SELFTEST ' + (passed === results.length ? 'PASS' : 'FAIL') + ' ' + passed + '/' + results.length + '\n' + lines.join('\n');
  document.querySelector('main').prepend(pre);
  document.title = 'SELFTEST ' + (passed === results.length ? 'PASS' : 'FAIL') + ' ' + passed + '/' + results.length;
})();
