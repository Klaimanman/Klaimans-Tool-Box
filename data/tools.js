// נוצר אוטומטית מתוך tools.json, כדי שהאתר יעבוד גם מ-file:// בלי fetch.
window.TOOLBOX_DEFAULT = {
  "version": 1,
  "categories": [
    {
      "id": "study",
      "name": "לימודים, מידול ותרשימים",
      "icon": "📚"
    },
    {
      "id": "code",
      "name": "קוד, דאטה ו-BI",
      "icon": "💻"
    },
    {
      "id": "design",
      "name": "וידאו, תמונות ועיצוב",
      "icon": "🎨"
    },
    {
      "id": "music",
      "name": "מוזיקה ואודיו",
      "icon": "🎵"
    },
    {
      "id": "productivity",
      "name": "פרודוקטיביות, PDF וקבצים",
      "icon": "📁"
    },
    {
      "id": "language",
      "name": "שפה ותרגום",
      "icon": "🔤"
    },
    {
      "id": "security",
      "name": "אבטחה ופרטיות",
      "icon": "🔒"
    },
    {
      "id": "leisure",
      "name": "פנאי",
      "icon": "🎮"
    },
    {
      "id": "osint",
      "name": "OSINT חוקי ומגניב",
      "icon": "🛰️"
    },
    {
      "id": "hacker",
      "name": "להרגיש האקר (חוקי לגמרי)",
      "icon": "🕶️"
    },
    {
      "id": "seo",
      "name": "SEO ויוטיוב",
      "icon": "📈"
    },
    {
      "id": "daily",
      "name": "יום יום",
      "icon": "☀️"
    },
    {
      "id": "misc",
      "name": "שלוף, בלי קטגוריה",
      "icon": "🎲"
    }
  ],
  "tools": [
    {
      "id": "draw-io",
      "name": "draw.io",
      "url": "https://app.diagrams.net/",
      "description_he": "תרשימי מחלקות, זרימה וארכיטקטורה בלי חשבון, והקובץ נשמר אצלך.",
      "category": "study",
      "free": "full",
      "gem": false,
      "logo": "https://www.google.com/s2/favicons?domain=app.diagrams.net&sz=128"
    },
    {
      "id": "drawdb",
      "name": "drawDB",
      "url": "https://www.drawdb.app/",
      "description_he": "עורך ERD בדפדפן: מציירים טבלאות וקשרים ומייצאים SQL.",
      "category": "study",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=www.drawdb.app&sz=128"
    },
    {
      "id": "mermaid-live",
      "name": "Mermaid Live",
      "url": "https://mermaid.live/",
      "description_he": "כותבים תרשים בטקסט ומקבלים ציור שמתאים גם ל-Markdown ול-GitHub.",
      "category": "study",
      "free": "full",
      "gem": false,
      "logo": "https://www.google.com/s2/favicons?domain=mermaid.live&sz=128"
    },
    {
      "id": "excalidraw",
      "name": "Excalidraw",
      "url": "https://excalidraw.com/",
      "description_he": "לוח לבן לשרבוט תרשימים שנראים כמו סקיצה ביד.",
      "category": "study",
      "free": "full",
      "gem": false,
      "logo": "https://www.google.com/s2/favicons?domain=excalidraw.com&sz=128"
    },
    {
      "id": "napkin-ai",
      "name": "Napkin AI",
      "url": "https://www.napkin.ai/",
      "description_he": "מדביקים פסקה וה-AI הופך אותה לתרשים או אינפוגרפיקה שאפשר לערוך.",
      "category": "study",
      "free": "tier",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=www.napkin.ai&sz=128"
    },
    {
      "id": "anki",
      "name": "Anki",
      "url": "https://apps.ankiweb.net/",
      "description_he": "כרטיסיות חזרה ברווחים, לשנן מושגים לשיעורים ולמבחנים.",
      "category": "study",
      "free": "full",
      "gem": false,
      "logo": "https://www.google.com/s2/favicons?domain=apps.ankiweb.net&sz=128"
    },
    {
      "id": "desmos",
      "name": "Desmos",
      "url": "https://www.desmos.com/calculator",
      "description_he": "מחשבון גרפי חינמי וחזק לפונקציות ולסטטיסטיקה.",
      "category": "study",
      "free": "full",
      "gem": false,
      "logo": "https://www.google.com/s2/favicons?domain=www.desmos.com&sz=128"
    },
    {
      "id": "wolfram-alpha",
      "name": "Wolfram Alpha",
      "url": "https://www.wolframalpha.com/",
      "description_he": "מחשב ידע: פותר תרגילים, ממיר יחידות ועונה על שאלות חישוביות.",
      "category": "study",
      "free": "tier",
      "gem": false,
      "logo": "https://www.google.com/s2/favicons?domain=www.wolframalpha.com&sz=128"
    },
    {
      "id": "unpaywall",
      "name": "Unpaywall",
      "url": "https://unpaywall.org/",
      "description_he": "תוסף שמוצא גרסה חוקית וחינמית של מאמר מאחורי חומת תשלום.",
      "category": "study",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=unpaywall.org&sz=128"
    },
    {
      "id": "connected-papers",
      "name": "Connected Papers",
      "url": "https://www.connectedpapers.com/",
      "description_he": "מפת רשת סביב מאמר אחד, כדי לגלות מחקרים קשורים במהירות.",
      "category": "study",
      "free": "tier",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=www.connectedpapers.com&sz=128"
    },
    {
      "id": "zotero",
      "name": "Zotero",
      "url": "https://www.zotero.org/",
      "description_he": "מנהל מקורות: שומר מאמרים, בונה ביבליוגרפיה ומכניס ציטוטים ל-Word.",
      "category": "study",
      "free": "full",
      "gem": false,
      "logo": "https://www.google.com/s2/favicons?domain=www.zotero.org&sz=128"
    },
    {
      "id": "sqlbolt",
      "name": "SQLBolt",
      "url": "https://sqlbolt.com/",
      "description_he": "שיעורי SQL אינטראקטיביים בדפדפן, מהשאילתה הראשונה עד JOIN.",
      "category": "study",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=sqlbolt.com&sz=128"
    },
    {
      "id": "dbeaver",
      "name": "DBeaver",
      "url": "https://dbeaver.io/",
      "description_he": "לקוח אחד ל-SQLite, MySQL, PostgreSQL ועוד, עם עורך SQL ותרשים ER.",
      "category": "code",
      "free": "full",
      "gem": false,
      "logo": "https://www.google.com/s2/favicons?domain=dbeaver.io&sz=128"
    },
    {
      "id": "sqlite-online",
      "name": "SQLite Online",
      "url": "https://sqliteonline.com/",
      "description_he": "מריצים SQL על SQLite בדפדפן, וגם טוענים קובץ .db.",
      "category": "code",
      "free": "full",
      "gem": false,
      "logo": "https://www.google.com/s2/favicons?domain=sqliteonline.com&sz=128"
    },
    {
      "id": "rawgraphs",
      "name": "RAWGraphs",
      "url": "https://www.rawgraphs.io/",
      "description_he": "מעלים טבלה ובוחרים תרשים, גם כאלה שאין ב-Excel, בלי קוד.",
      "category": "code",
      "free": "full",
      "gem": false,
      "logo": "https://www.google.com/s2/favicons?domain=www.rawgraphs.io&sz=128"
    },
    {
      "id": "json-crack",
      "name": "JSON Crack",
      "url": "https://jsoncrack.com/",
      "description_he": "מדביקים JSON, YAML או CSV ורואים אותם כגרף במקום קיר טקסט.",
      "category": "code",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=jsoncrack.com&sz=128"
    },
    {
      "id": "it-tools",
      "name": "IT Tools",
      "url": "https://it-tools.tech/",
      "description_he": "אוסף כלי מפתחים בקוד פתוח (האש, Base64, JSON, JWT, רשת) שרצים אצלך בדפדפן, בלי חשבון.",
      "category": "code",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=it-tools.tech&sz=128"
    },
    {
      "id": "transform-tools",
      "name": "transform.tools",
      "url": "https://transform.tools/",
      "description_he": "ממירים בין פורמטים של קוד ונתונים, למשל JSON ל-TypeScript, CSV או YAML, בלי הרשמה.",
      "category": "code",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=transform.tools&sz=128"
    },
    {
      "id": "mockaroo",
      "name": "Mockaroo",
      "url": "https://www.mockaroo.com/",
      "description_he": "מחולל דאטה מזויפת: מגדירים עמודות ומקבלים עד 1,000 שורות ריאליסטיות ב-CSV, SQL או JSON.",
      "category": "code",
      "free": "tier",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=www.mockaroo.com&sz=128"
    },
    {
      "id": "crontab-guru",
      "name": "crontab.guru",
      "url": "https://crontab.guru/",
      "description_he": "כותבים ביטוי cron ורואים בעברית פשוטה מתי הוא באמת ירוץ, או הפוך.",
      "category": "code",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=crontab.guru&sz=128"
    },
    {
      "id": "convertcsv",
      "name": "ConvertCSV",
      "url": "https://www.convertcsv.com/",
      "description_he": "ממירים CSV ל-JSON, SQL, XML וטבלאות, וגם הפוך, עם המון אפשרויות.",
      "category": "code",
      "free": "full",
      "gem": false,
      "logo": "https://www.google.com/s2/favicons?domain=www.convertcsv.com&sz=128"
    },
    {
      "id": "browserling",
      "name": "Browserling",
      "url": "https://www.browserling.com/",
      "description_he": "פותחים אתר בדפדפן אחר (כרום, פיירפוקס, אדג') מתוך הדפדפן שלכם, לבדיקות. המסלול החינמי קצר.",
      "category": "code",
      "free": "tier",
      "gem": false,
      "logo": "https://www.google.com/s2/favicons?domain=www.browserling.com&sz=128"
    },
    {
      "id": "photopea",
      "name": "Photopea",
      "url": "https://www.photopea.com/",
      "description_he": "פוטושופ בדפדפן: שכבות, מסיכות וקבצי PSD, בלי מנוי.",
      "category": "design",
      "free": "full",
      "gem": false,
      "logo": "https://www.google.com/s2/favicons?domain=www.photopea.com&sz=128"
    },
    {
      "id": "coolors",
      "name": "Coolors",
      "url": "https://coolors.co/",
      "description_he": "מחולל לוחות צבעים לאתר, למצגת או לפוסט.",
      "category": "design",
      "free": "tier",
      "gem": false,
      "logo": "https://www.google.com/s2/favicons?domain=coolors.co&sz=128"
    },
    {
      "id": "fontshare",
      "name": "Fontshare",
      "url": "https://www.fontshare.com/",
      "description_he": "ספריית פונטים איכותית וחינמית להורדה, אלטרנטיבה פחות שחוקה מ-Google Fonts.",
      "category": "design",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=www.fontshare.com&sz=128"
    },
    {
      "id": "freepng",
      "name": "FreePNG",
      "url": "https://freepngimg.com/",
      "description_he": "אלפי תמונות PNG עם רקע שקוף להורדה, בלי הרשמה.",
      "category": "design",
      "free": "full",
      "gem": false,
      "logo": "https://www.google.com/s2/favicons?domain=freepngimg.com&sz=128"
    },
    {
      "id": "ideogram",
      "name": "Ideogram",
      "url": "https://ideogram.ai/",
      "description_he": "יצירת תמונות ב-AI, עם יתרון ברור בכיתוב קריא בתוך התמונה.",
      "category": "design",
      "free": "tier",
      "gem": false,
      "logo": "https://www.google.com/s2/favicons?domain=ideogram.ai&sz=128"
    },
    {
      "id": "inkscape",
      "name": "Inkscape",
      "url": "https://inkscape.org/",
      "description_he": "תוכנת קוד פתוח לאיורים וקטוריים, החלופה החינמית ל-Illustrator.",
      "category": "design",
      "free": "full",
      "gem": false,
      "logo": "https://www.google.com/s2/favicons?domain=inkscape.org&sz=128"
    },
    {
      "id": "svg-repo",
      "name": "SVG Repo",
      "url": "https://www.svgrepo.com/",
      "description_he": "מאגר אייקונים ווקטוריים להורדה חופשית.",
      "category": "design",
      "free": "full",
      "gem": false,
      "logo": "https://www.google.com/s2/favicons?domain=www.svgrepo.com&sz=128"
    },
    {
      "id": "haikei",
      "name": "Haikei",
      "url": "https://app.haikei.app/",
      "description_he": "מחולל רקעים מופשטים (גלים, כתמים, רשתות) לייצוא כ-SVG או PNG.",
      "category": "design",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=app.haikei.app&sz=128"
    },
    {
      "id": "terraink",
      "name": "Terraink",
      "url": "https://terraink.app/",
      "description_he": "יוצרים פוסטר או טפט ממפת כל עיר, ומייצאים PNG, PDF או SVG בלי חשבון.",
      "category": "design",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=terraink.app&sz=128"
    },
    {
      "id": "storytribe",
      "name": "StoryTribe",
      "url": "https://storytribeapp.com/",
      "description_he": "בונים סטוריבורד עם דמויות, רקעים ואיורים מוכנים, מתאים גם לסרטון וגם לשיעור.",
      "category": "design",
      "free": "tier",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=storytribeapp.com&sz=128"
    },
    {
      "id": "thiings",
      "name": "Thiings",
      "url": "https://www.thiings.co/things",
      "description_he": "אלפי אייקונים תלת ממדיים חינמיים, להורדה לכל מצגת, אתר או פוסט.",
      "category": "design",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=www.thiings.co&sz=128"
    },
    {
      "id": "shots",
      "name": "Shots",
      "url": "https://shots.so/",
      "description_he": "שמים צילום מסך בתוך אייפון, מק או חלון דפדפן ומייצאים מוקאפ נקי.",
      "category": "design",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=shots.so&sz=128"
    },
    {
      "id": "text-match-cut",
      "name": "Text Match Cut",
      "url": "https://www.textmatchcut.app/",
      "description_he": "מכניסים משפט ומייצרים סרטון קצר שבו מילה אחת קבועה והטקסט סביבה מתחלף.",
      "category": "design",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=www.textmatchcut.app&sz=128"
    },
    {
      "id": "ezgif",
      "name": "Ezgif",
      "url": "https://ezgif.com/",
      "description_he": "חיתוך, המרה וכיווץ של GIF, וידאו ותמונות בדפדפן, בלי תוכנה כבדה.",
      "category": "design",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=ezgif.com&sz=128"
    },
    {
      "id": "zoo",
      "name": "Zoo",
      "url": "https://zoo.dev/",
      "description_he": "מתארים בטקסט רכיב או מודל ומקבלים קובץ CAD תלת ממדי שאפשר לערוך.",
      "category": "design",
      "free": "tier",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=zoo.dev&sz=128"
    },
    {
      "id": "tinywow-image-upscale",
      "name": "TinyWow Image Upscale",
      "url": "https://tinywow.com/image/upscale",
      "description_he": "מעלים תמונה מטושטשת ומגדילים את הרזולוציה שלה ב-AI.",
      "category": "design",
      "free": "tier",
      "gem": false,
      "logo": "https://www.google.com/s2/favicons?domain=tinywow.com&sz=128"
    },
    {
      "id": "whatfontis",
      "name": "WhatFontIs",
      "url": "https://www.whatfontis.com/",
      "description_he": "מעלים תמונה עם טקסט והאתר מנסה לזהות איזה פונט זה.",
      "category": "design",
      "free": "tier",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=www.whatfontis.com&sz=128"
    },
    {
      "id": "suno",
      "name": "Suno",
      "url": "https://suno.com/",
      "description_he": "יוצרים שיר ממילים או מתיאור סגנון. במסלול החינמי אפשר ליצור ולהאזין, ההורדות הן בתשלום.",
      "category": "music",
      "free": "tier",
      "gem": false,
      "logo": "https://www.google.com/s2/favicons?domain=suno.com&sz=128"
    },
    {
      "id": "splitmysong",
      "name": "SplitMySong",
      "url": "https://www.splitmysong.com/",
      "description_he": "מעלים שיר ומפרידים אותו לסטמים (שירה, כלים) כדי לערבב מחדש או לתרגל.",
      "category": "music",
      "free": "tier",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=www.splitmysong.com&sz=128"
    },
    {
      "id": "audacity",
      "name": "Audacity",
      "url": "https://www.audacityteam.org/",
      "description_he": "עורך אודיו חינמי: חיתוך, ניקוי רעש, הקלטה וייצוא.",
      "category": "music",
      "free": "full",
      "gem": false,
      "logo": "https://www.google.com/s2/favicons?domain=www.audacityteam.org&sz=128"
    },
    {
      "id": "bandlab",
      "name": "BandLab",
      "url": "https://www.bandlab.com/",
      "description_he": "אולפן הקלטה בדפדפן, בלי לקנות DAW.",
      "category": "music",
      "free": "tier",
      "gem": false,
      "logo": "https://www.google.com/s2/favicons?domain=www.bandlab.com&sz=128"
    },
    {
      "id": "elevenlabs",
      "name": "ElevenLabs",
      "url": "https://elevenlabs.io/",
      "description_he": "המרת טקסט לדיבור באיכות גבוהה, עם מכסת תווים חודשית בחינם.",
      "category": "music",
      "free": "tier",
      "gem": false,
      "logo": "https://www.google.com/s2/favicons?domain=elevenlabs.io&sz=128"
    },
    {
      "id": "mynoise",
      "name": "myNoise",
      "url": "https://mynoise.net/",
      "description_he": "מיקסר צלילי רקע (גשם, בית קפה, רעש לבן) לריכוז, למשמרת או לשינה.",
      "category": "music",
      "free": "tier",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=mynoise.net&sz=128"
    },
    {
      "id": "sejda",
      "name": "Sejda",
      "url": "https://www.sejda.com/",
      "description_he": "עריכת PDF בדפדפן: איחוד, פיצול, דחיסה, חתימה וחיתוך, עם מכסה יומית חינמית.",
      "category": "productivity",
      "free": "tier",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=www.sejda.com&sz=128"
    },
    {
      "id": "toolixy",
      "name": "Toolixy",
      "url": "https://www.toolixy.com/",
      "description_he": "עשרות כלים ל-PDF, תמונות והמרות שרצים רק אצלך בדפדפן, בלי להעלות קבצים לשרת.",
      "category": "productivity",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=www.toolixy.com&sz=128"
    },
    {
      "id": "tinywow-audio-to-text",
      "name": "TinyWow Audio to Text",
      "url": "https://tinywow.com/video/audio-to-text",
      "description_he": "מעלים הקלטה או קובץ אודיו ומקבלים תמלול טקסט.",
      "category": "productivity",
      "free": "tier",
      "gem": false,
      "logo": "https://www.google.com/s2/favicons?domain=tinywow.com&sz=128"
    },
    {
      "id": "tinywow-heic-to-jpg",
      "name": "TinyWow HEIC to JPG",
      "url": "https://tinywow.com/image/heic-to-jpg",
      "description_he": "ממירים תמונות מהאייפון (HEIC) ל-JPG שכל מחשב יודע לפתוח.",
      "category": "productivity",
      "free": "tier",
      "gem": false,
      "logo": "https://www.google.com/s2/favicons?domain=tinywow.com&sz=128"
    },
    {
      "id": "7-zip",
      "name": "7-Zip",
      "url": "https://www.7-zip.org/",
      "description_he": "פתיחה ויצירה של ארכיונים בלי פרסומות.",
      "category": "productivity",
      "free": "full",
      "gem": false,
      "logo": "https://www.google.com/s2/favicons?domain=www.7-zip.org&sz=128"
    },
    {
      "id": "localsend",
      "name": "LocalSend",
      "url": "https://localsend.org/",
      "description_he": "כמו AirDrop לכל מערכת: שולחים קבצים בין הטלפון למחשב באותה רשת, בלי ענן.",
      "category": "productivity",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=localsend.org&sz=128"
    },
    {
      "id": "everything",
      "name": "Everything",
      "url": "https://www.voidtools.com/",
      "description_he": "חיפוש קבצים ב-Windows שמוצא כל קובץ ברגע שמתחילים להקליד.",
      "category": "productivity",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=www.voidtools.com&sz=128"
    },
    {
      "id": "obsidian",
      "name": "Obsidian",
      "url": "https://obsidian.md/",
      "description_he": "פנקס ידע מקומי בקבצי Markdown, עם קישורים בין הערות.",
      "category": "productivity",
      "free": "full",
      "gem": false,
      "logo": "https://www.google.com/s2/favicons?domain=obsidian.md&sz=128"
    },
    {
      "id": "handbrake",
      "name": "HandBrake",
      "url": "https://handbrake.fr/",
      "description_he": "ממיר ומכווץ סרטונים מקומית, בלי לאבד יותר מדי איכות.",
      "category": "productivity",
      "free": "full",
      "gem": false,
      "logo": "https://www.google.com/s2/favicons?domain=handbrake.fr&sz=128"
    },
    {
      "id": "wormhole",
      "name": "Wormhole",
      "url": "https://wormhole.app/",
      "description_he": "שליחת קובץ כבד בקישור זמני מוצפן, בלי הרשמה.",
      "category": "productivity",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=wormhole.app&sz=128"
    },
    {
      "id": "ninite",
      "name": "Ninite",
      "url": "https://ninite.com/",
      "description_he": "בוחרים כמה תוכנות ל-Windows ומקבלים קובץ התקנה אחד, בלי סרגלים.",
      "category": "productivity",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=ninite.com&sz=128"
    },
    {
      "id": "wiztree",
      "name": "WizTree",
      "url": "https://diskanalyzer.com/",
      "description_he": "מראה תוך שניות מה תופס מקום בדיסק. חינמי לשימוש אישי.",
      "category": "productivity",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=diskanalyzer.com&sz=128"
    },
    {
      "id": "sharex",
      "name": "ShareX",
      "url": "https://getsharex.com/",
      "description_he": "צילומי מסך והקלטת מסך ב-Windows, עם קיצורי מקלדת.",
      "category": "productivity",
      "free": "full",
      "gem": false,
      "logo": "https://www.google.com/s2/favicons?domain=getsharex.com&sz=128"
    },
    {
      "id": "goblin-tools",
      "name": "Goblin Tools",
      "url": "https://goblin.tools/",
      "description_he": "מפרק משימה גדולה לצעדים קטנים, משכתב טון ומעריך זמן, בלי חשבון.",
      "category": "productivity",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=goblin.tools&sz=128"
    },
    {
      "id": "diffchecker",
      "name": "Diffchecker",
      "url": "https://www.diffchecker.com/",
      "description_he": "מדביקים שני טקסטים או קבצים ורואים בדיוק מה השתנה ביניהם.",
      "category": "productivity",
      "free": "tier",
      "gem": false,
      "logo": "https://www.google.com/s2/favicons?domain=www.diffchecker.com&sz=128"
    },
    {
      "id": "tables-generator",
      "name": "Tables Generator",
      "url": "https://www.tablesgenerator.com/",
      "description_he": "בונים טבלה ויזואלית ומייצאים ל-Word, LaTeX, Markdown או HTML.",
      "category": "productivity",
      "free": "full",
      "gem": false,
      "logo": "https://www.google.com/s2/favicons?domain=www.tablesgenerator.com&sz=128"
    },
    {
      "id": "stackedit",
      "name": "StackEdit",
      "url": "https://stackedit.io/",
      "description_he": "עורך Markdown מלא בדפדפן, עם תצוגה חיה ושמירה לקובץ מקומי.",
      "category": "productivity",
      "free": "full",
      "gem": false,
      "logo": "https://www.google.com/s2/favicons?domain=stackedit.io&sz=128"
    },
    {
      "id": "ocr-space",
      "name": "OCR.space",
      "url": "https://ocr.space/",
      "description_he": "מעלים תמונה או PDF ומחלצים ממנו טקסט, כולל עברית במכסה החינמית.",
      "category": "productivity",
      "free": "tier",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=ocr.space&sz=128"
    },
    {
      "id": "random-org",
      "name": "RANDOM.ORG",
      "url": "https://www.random.org/",
      "description_he": "מספרים אקראיים אמיתיים (מרעש אטמוספרי), הגרלות, הטלת מטבע ורשימות מעורבבות.",
      "category": "productivity",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=www.random.org&sz=128"
    },
    {
      "id": "librespeed",
      "name": "LibreSpeed",
      "url": "https://librespeed.org/",
      "description_he": "בדיקת מהירות אינטרנט בקוד פתוח, בלי החשבון של נטפליקס או ספידטסט.",
      "category": "productivity",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=librespeed.org&sz=128"
    },
    {
      "id": "vertopal",
      "name": "Vertopal",
      "url": "https://www.vertopal.com/",
      "description_he": "ממיר מאות סוגי קבצים (מסמכים, תמונות, אודיו, קוד) אונליין.",
      "category": "productivity",
      "free": "tier",
      "gem": false,
      "logo": "https://www.google.com/s2/favicons?domain=www.vertopal.com&sz=128"
    },
    {
      "id": "deepl",
      "name": "DeepL",
      "url": "https://www.deepl.com/translator",
      "description_he": "מתרגם מדויק, כולל עברית, לטקסטים ללימודים ולעבודה.",
      "category": "language",
      "free": "tier",
      "gem": false,
      "logo": "https://www.google.com/s2/favicons?domain=www.deepl.com&sz=128"
    },
    {
      "id": "languagetool",
      "name": "LanguageTool",
      "url": "https://languagetool.org/",
      "description_he": "בודק איות ודקדוק בעברית ובאנגלית, באתר או כתוסף.",
      "category": "language",
      "free": "tier",
      "gem": false,
      "logo": "https://www.google.com/s2/favicons?domain=languagetool.org&sz=128"
    },
    {
      "id": "morfix",
      "name": "Morfix",
      "url": "https://www.morfix.co.il/",
      "description_he": "מילון עברי-אנגלי ואנגלי-עברי, כולל הטיות ודוגמאות.",
      "category": "language",
      "free": "tier",
      "gem": false,
      "logo": "https://www.google.com/s2/favicons?domain=www.morfix.co.il&sz=128"
    },
    {
      "id": "dicta-nakdan",
      "name": "Dicta Nakdan",
      "url": "https://nakdan.dicta.org.il/",
      "description_he": "ניקוד אוטומטי לטקסט עברי, כלי אקדמי של פרויקט דיקטה.",
      "category": "language",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=nakdan.dicta.org.il&sz=128"
    },
    {
      "id": "youglish",
      "name": "YouGlish",
      "url": "https://youglish.com/",
      "description_he": "שומעים איך מילה או ביטוי באנגלית נאמרים באמת, בקטעים מיוטיוב.",
      "category": "language",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=youglish.com&sz=128"
    },
    {
      "id": "reverso-context",
      "name": "Reverso Context",
      "url": "https://context.reverso.net/",
      "description_he": "מילה או משפט במאות דוגמאות אמיתיות, עם תרגום בהקשר.",
      "category": "language",
      "free": "tier",
      "gem": false,
      "logo": "https://www.google.com/s2/favicons?domain=context.reverso.net&sz=128"
    },
    {
      "id": "bitwarden",
      "name": "Bitwarden",
      "url": "https://bitwarden.com/",
      "description_he": "מנהל סיסמאות בקוד פתוח, עם מסלול חינמי שמספיק לכל המכשירים.",
      "category": "security",
      "free": "tier",
      "gem": false,
      "logo": "https://www.google.com/s2/favicons?domain=bitwarden.com&sz=128"
    },
    {
      "id": "have-i-been-pwned",
      "name": "Have I Been Pwned",
      "url": "https://haveibeenpwned.com/",
      "description_he": "בודקים אם האימייל או הסיסמה דלפו בפריצה ידועה.",
      "category": "security",
      "free": "full",
      "gem": false,
      "logo": "https://www.google.com/s2/favicons?domain=haveibeenpwned.com&sz=128"
    },
    {
      "id": "radio-garden",
      "name": "Radio Garden",
      "url": "https://radio.garden/",
      "description_he": "כדור הארץ עם תחנות רדיו חיות מכל עיר.",
      "category": "leisure",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=radio.garden&sz=128"
    },
    {
      "id": "gta-radio",
      "name": "GTA Radio",
      "url": "https://gtaradio.net/en",
      "description_he": "שומעים תחנות רדיו ממשחקי GTA בדפדפן. שימו לב: חלק מהשירים הם מוזיקה מסחרית, ומעמד הזכויות לא חד משמעי.",
      "category": "leisure",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=gtaradio.net&sz=128"
    },
    {
      "id": "fredygames",
      "name": "FredyGames",
      "url": "https://fredygames.com/",
      "description_he": "משחקי רטרו, DOS ו-homebrew בדפדפן, ורק כאלה שבעלי הזכויות אישרו במפורש.",
      "category": "leisure",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=fredygames.com&sz=128"
    },
    {
      "id": "retroarch-web-player",
      "name": "RetroArch Web Player",
      "url": "https://web.libretro.com/",
      "description_he": "אמולטור בדפדפן שטוען קבצים שלך בלבד, לא מאגר ROM.",
      "category": "leisure",
      "free": "full",
      "gem": false,
      "logo": "https://www.google.com/s2/favicons?domain=web.libretro.com&sz=128"
    },
    {
      "id": "itch-io",
      "name": "itch.io",
      "url": "https://itch.io/",
      "description_he": "חנות יוצרים למשחקים עצמאיים, עם המון כותרים חינמיים.",
      "category": "leisure",
      "free": "full",
      "gem": false,
      "logo": "https://www.google.com/s2/favicons?domain=itch.io&sz=128"
    },
    {
      "id": "lichess",
      "name": "Lichess",
      "url": "https://lichess.org/",
      "description_he": "שחמט אונליין בלי פרסומות ובלי תשלום.",
      "category": "leisure",
      "free": "full",
      "gem": false,
      "logo": "https://www.google.com/s2/favicons?domain=lichess.org&sz=128"
    },
    {
      "id": "worldguessr",
      "name": "WorldGuessr",
      "url": "https://www.worldguessr.com/",
      "description_he": "החלופה החינמית ל-GeoGuessr: מנחשים איפה התמונה צולמה.",
      "category": "leisure",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=www.worldguessr.com&sz=128"
    },
    {
      "id": "neal-fun",
      "name": "neal.fun",
      "url": "https://neal.fun/",
      "description_he": "אוסף משחקים וניסויים אינטראקטיביים קצרים להעברת זמן.",
      "category": "leisure",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=neal.fun&sz=128"
    },
    {
      "id": "window-swap",
      "name": "Window-Swap",
      "url": "https://www.window-swap.com/",
      "description_he": "מסתכלים מחלון של מישהו במקום אחר בעולם.",
      "category": "leisure",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=www.window-swap.com&sz=128"
    },
    {
      "id": "windows93",
      "name": "Windows93",
      "url": "https://www.windows93.net/",
      "description_he": "מערכת הפעלה מזויפת ומטורללת בדפדפן, מלאה במשחקים קטנים.",
      "category": "leisure",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=www.windows93.net&sz=128"
    },
    {
      "id": "monkeytype",
      "name": "Monkeytype",
      "url": "https://monkeytype.com/",
      "description_he": "תרגול הקלדה נקי, כדי להקליד מהר יותר.",
      "category": "leisure",
      "free": "full",
      "gem": false,
      "logo": "https://www.google.com/s2/favicons?domain=monkeytype.com&sz=128"
    },
    {
      "id": "stellarium-web",
      "name": "Stellarium Web",
      "url": "https://stellarium-web.org/",
      "description_he": "שמי הלילה בדפדפן, לפי המיקום והשעה שלך.",
      "category": "leisure",
      "free": "full",
      "gem": false,
      "logo": "https://www.google.com/s2/favicons?domain=stellarium-web.org&sz=128"
    },
    {
      "id": "size-it-up",
      "name": "Size It Up",
      "url": "https://sizeitup.us/",
      "description_he": "משחק יומי: מנחשים את הגודל האמיתי של עצמים, כוכבי לכת ודינוזאורים.",
      "category": "leisure",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=sizeitup.us&sz=128"
    },
    {
      "id": "make-my-drive-fun",
      "name": "Make My Drive Fun",
      "url": "https://makemydrivefun.com/",
      "description_he": "מזינים מסלול נסיעה ומקבלים עצירות מוזרות, נופים ופנינים בצד הדרך.",
      "category": "leisure",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=makemydrivefun.com&sz=128"
    },
    {
      "id": "city-roads",
      "name": "City Roads",
      "url": "https://anvaka.org/city-roads/",
      "description_he": "מקלידים שם עיר ומקבלים ציור של כל הרחובות שלה, לייצוא כפוסטר.",
      "category": "leisure",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=anvaka.org&sz=128"
    },
    {
      "id": "citywalki",
      "name": "Citywalki",
      "url": "https://www.citywalki.com/",
      "description_he": "מסתובבים או נוהגים וירטואלית ברחובות של ערים ברחבי העולם.",
      "category": "leisure",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=www.citywalki.com&sz=128"
    },
    {
      "id": "a-little-box-of-goodies",
      "name": "A Little Box of Goodies",
      "url": "https://alittleboxofgoodies.com/",
      "description_he": "מרכיבים חבילת דאגה דיגיטלית (פתק, תמונה, שיר, הקלטה) ושולחים בקישור. יצירת הקישור עשויה להיות בתשלום.",
      "category": "leisure",
      "free": "tier",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=alittleboxofgoodies.com&sz=128"
    },
    {
      "id": "argos-atlas",
      "name": "ARGOS ATLAS",
      "url": "https://argosatlas.com/",
      "description_he": "מפה חיה של מאות אלפי מצלמות תנועה ציבוריות, טיסות, אוניות ואירועים מאומתים. רק פידים רשמיים וציבוריים, לא למעקב אחרי אנשים.",
      "category": "osint",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=argosatlas.com&sz=128"
    },
    {
      "id": "osiris",
      "name": "OSIRIS",
      "url": "https://osirisai.live/",
      "description_he": "לוח OSINT בדפדפן: טיסות, מצלמות ציבוריות, חדשות וכלי בדיקה (DNS, WHOIS) על גלובוס אחד.",
      "category": "osint",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=osirisai.live&sz=128"
    },
    {
      "id": "wayback-machine",
      "name": "Wayback Machine",
      "url": "https://web.archive.org/",
      "description_he": "ארכיון האינטרנט: רואים איך אתר נראה בעבר, או מצילים דף לפני שהוא נעלם.",
      "category": "osint",
      "free": "full",
      "gem": false,
      "logo": "https://www.google.com/s2/favicons?domain=web.archive.org&sz=128"
    },
    {
      "id": "tineye",
      "name": "TinEye",
      "url": "https://tineye.com/",
      "description_he": "חיפוש תמונה הפוך: מוצאים איפה היא הופיעה ברשת ומאיפה היא הגיעה.",
      "category": "osint",
      "free": "full",
      "gem": false,
      "logo": "https://www.google.com/s2/favicons?domain=tineye.com&sz=128"
    },
    {
      "id": "flightradar24",
      "name": "Flightradar24",
      "url": "https://www.flightradar24.com/",
      "description_he": "מפת טיסות חיה, לעקוב אחרי מטוס בשמיים.",
      "category": "osint",
      "free": "tier",
      "gem": false,
      "logo": "https://www.google.com/s2/favicons?domain=www.flightradar24.com&sz=128"
    },
    {
      "id": "marinetraffic",
      "name": "MarineTraffic",
      "url": "https://www.marinetraffic.com/",
      "description_he": "מעקב חי אחרי אוניות בעולם, לפי אותות AIS ציבוריים.",
      "category": "osint",
      "free": "tier",
      "gem": false,
      "logo": "https://www.google.com/s2/favicons?domain=www.marinetraffic.com&sz=128"
    },
    {
      "id": "zoom-earth",
      "name": "Zoom Earth",
      "url": "https://zoom.earth/",
      "description_he": "תמונות לוויין ומפות מזג אוויר חיות, כולל סופות והדמיה עדכנית של כדור הארץ.",
      "category": "osint",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=zoom.earth&sz=128"
    },
    {
      "id": "jimpl",
      "name": "Jimpl",
      "url": "https://jimpl.com/",
      "description_he": "קורא נתוני EXIF מתמונה: איפה ומי מתי צולמה, דגם המצלמה, ולפעמים גם קואורדינטות.",
      "category": "osint",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=jimpl.com&sz=128"
    },
    {
      "id": "forensically",
      "name": "Forensically",
      "url": "https://29a.ch/photo-forensics/",
      "description_he": "בודקים אם תמונה עברה עריכה: ניתוח רמת שגיאה, שיבוש, והגדלת פרטים.",
      "category": "osint",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=29a.ch&sz=128"
    },
    {
      "id": "whatsmyname",
      "name": "WhatsMyName",
      "url": "https://whatsmyname.app/",
      "description_he": "בודקים באילו אתרים מופיע שם משתמש ציבורי. שימושי לבדיקת החשבונות שלכם. לא לאיסוף מידע על אנשים בלי הסכמה.",
      "category": "osint",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=whatsmyname.app&sz=128"
    },
    {
      "id": "earth-nullschool",
      "name": "Earth Nullschool",
      "url": "https://earth.nullschool.net/",
      "description_he": "גלובוס חי של רוחות, טמפרטורה וזרמי ים.",
      "category": "osint",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=earth.nullschool.net&sz=128"
    },
    {
      "id": "dnsdumpster",
      "name": "DNSDumpster",
      "url": "https://dnsdumpster.com/",
      "description_he": "מפת רשומות DNS ציבוריות של דומיין (שרתים, מייל, תת דומיינים). להשתמש רק על דומיין שלכם או במחקר לגיטימי.",
      "category": "osint",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=dnsdumpster.com&sz=128"
    },
    {
      "id": "sentinel-hub-eo-browser",
      "name": "Sentinel Hub EO Browser",
      "url": "https://apps.sentinel-hub.com/eo-browser/",
      "description_he": "תמונות לוויין חינמיות (Sentinel, Landsat) עם שכבות אינפרא אדום ועוד, לכל נקודה על הגלובוס.",
      "category": "osint",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=apps.sentinel-hub.com&sz=128"
    },
    {
      "id": "overpass-turbo",
      "name": "Overpass Turbo",
      "url": "https://overpass-turbo.eu/",
      "description_he": "שואלים את OpenStreetMap שאלות מדויקות, למשל כל המצלמות או בתי החולים באזור.",
      "category": "osint",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=overpass-turbo.eu&sz=128"
    },
    {
      "id": "web-check",
      "name": "Web Check",
      "url": "https://web-check.xyz/",
      "description_he": "מדביקים כתובת אתר ומקבלים דוח: IP, DNS, תעודות, כותרות וטכנולוגיות, הכל ממידע ציבורי.",
      "category": "osint",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=web-check.xyz&sz=128"
    },
    {
      "id": "opencorporates",
      "name": "OpenCorporates",
      "url": "https://opencorporates.com/",
      "description_he": "מסד פתוח של חברות בעולם: מי רשומה, איפה, ומי קשור אליה, לפי רשמים רשמיים.",
      "category": "osint",
      "free": "full",
      "gem": false,
      "logo": "https://www.google.com/s2/favicons?domain=opencorporates.com&sz=128"
    },
    {
      "id": "opensanctions",
      "name": "OpenSanctions",
      "url": "https://www.opensanctions.org/",
      "description_he": "מאגר פתוח של סנקציות וארגונים מפוקחים, לחיפוש שם או חברה במידע ציבורי בלבד.",
      "category": "osint",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=www.opensanctions.org&sz=128"
    },
    {
      "id": "ventusky",
      "name": "Ventusky",
      "url": "https://www.ventusky.com/",
      "description_he": "מפות מזג אוויר חיות ויפות: רוח, גשם, טמפרטורה ומכ\"ם, לכל העולם.",
      "category": "osint",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=www.ventusky.com&sz=128"
    },
    {
      "id": "icann-lookup",
      "name": "ICANN Lookup",
      "url": "https://lookup.icann.org/",
      "description_he": "חיפוש WHOIS הרשמי: מי רשם דומיין, מתי, ופרטי קשר ציבוריים.",
      "category": "osint",
      "free": "full",
      "gem": false,
      "logo": "https://www.google.com/s2/favicons?domain=lookup.icann.org&sz=128"
    },
    {
      "id": "kartaview",
      "name": "KartaView",
      "url": "https://kartaview.org/",
      "description_he": "תמונות רחוב פתוחות מכל העולם, חלופה חינמית חלקית ל-Street View.",
      "category": "osint",
      "free": "full",
      "gem": false,
      "logo": "https://www.google.com/s2/favicons?domain=kartaview.org&sz=128"
    },
    {
      "id": "greynoise",
      "name": "GreyNoise",
      "url": "https://www.greynoise.io/",
      "description_he": "בודקים אם IP שסרק אתכם הוא רעש אינטרנט כללי או משהו ממוקד יותר. מסלול קהילה חינמי.",
      "category": "osint",
      "free": "tier",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=www.greynoise.io&sz=128"
    },
    {
      "id": "invid",
      "name": "InVID",
      "url": "https://www.invid-project.eu/tools",
      "description_he": "כלים לאימות סרטונים ותמונות מהרשת, כולל תוסף דפדפן שמפרק פריימים ובודק מקור.",
      "category": "osint",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=www.invid-project.eu&sz=128"
    },
    {
      "id": "geonames",
      "name": "GeoNames",
      "url": "https://www.geonames.org/",
      "description_he": "מסד שמות גיאוגרפיים עולמי: מזהים מקום, קואורדינטות, גובה וגבולות ממידע ציבורי.",
      "category": "osint",
      "free": "full",
      "gem": false,
      "logo": "https://www.google.com/s2/favicons?domain=www.geonames.org&sz=128"
    },
    {
      "id": "cyberchef",
      "name": "CyberChef",
      "url": "https://gchq.github.io/CyberChef/",
      "description_he": "סכין השווייצרית לפענוח, קידוד, המרות וניתוח נתונים, ישר בדפדפן.",
      "category": "hacker",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=gchq.github.io&sz=128"
    },
    {
      "id": "hacker-typer",
      "name": "Hacker Typer",
      "url": "https://hackertyper.com/",
      "description_he": "מקלידים סתם והמסך מתמלא בקוד, בדיחה ויזואלית מושלמת.",
      "category": "hacker",
      "free": "full",
      "gem": false,
      "logo": "https://www.google.com/s2/favicons?domain=hackertyper.com&sz=128"
    },
    {
      "id": "cylab-security-academy",
      "name": "CyLab Security Academy",
      "url": "https://learn.cylabacademy.org/",
      "description_he": "לשעבר picoCTF, האקדמיה החינמית של אוניברסיטת קרנגי מלון: אתגרי פריצה חוקיים ללמידה עצמית.",
      "category": "hacker",
      "free": "full",
      "gem": false,
      "logo": "https://www.google.com/s2/favicons?domain=learn.cylabacademy.org&sz=128"
    },
    {
      "id": "overthewire",
      "name": "OverTheWire",
      "url": "https://overthewire.org/wargames/",
      "description_he": "משחקי מלחמה חוקיים בלינוקס וברשת, לומדים פריצה צעד אחר צעד על שרתים שלהם.",
      "category": "hacker",
      "free": "full",
      "gem": false,
      "logo": "https://www.google.com/s2/favicons?domain=overthewire.org&sz=128"
    },
    {
      "id": "tryhackme",
      "name": "TryHackMe",
      "url": "https://tryhackme.com/",
      "description_he": "חדרים מעשיים ללמידת סייבר בדפדפן. יש מסלול חינמי עם מספיק תוכן להתחלה.",
      "category": "hacker",
      "free": "tier",
      "gem": false,
      "logo": "https://www.google.com/s2/favicons?domain=tryhackme.com&sz=128"
    },
    {
      "id": "portswigger-web-security-academy",
      "name": "PortSwigger Web Security Academy",
      "url": "https://portswigger.net/web-security",
      "description_he": "קורס חינמי ומעבדות חוקיות לפריצת אתרים (XSS, SQL injection) על סביבות אימון בלבד.",
      "category": "hacker",
      "free": "full",
      "gem": false,
      "logo": "https://www.google.com/s2/favicons?domain=portswigger.net&sz=128"
    },
    {
      "id": "shodan",
      "name": "Shodan",
      "url": "https://www.shodan.io/",
      "description_he": "מנוע חיפוש למכשירים שמחוברים לאינטרנט (מצלמות, שרתים, נתבים). התצוגה החינמית מוגבלת. רק מחקר או נכסים שלכם, לא פריצה.",
      "category": "hacker",
      "free": "tier",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=www.shodan.io&sz=128"
    },
    {
      "id": "kaspersky-cybermap",
      "name": "Kaspersky Cybermap",
      "url": "https://cybermap.kaspersky.com/",
      "description_he": "מפה חיה של מתקפות סייבר בעולם, בזמן אמת.",
      "category": "hacker",
      "free": "full",
      "gem": false,
      "logo": "https://www.google.com/s2/favicons?domain=cybermap.kaspersky.com&sz=128"
    },
    {
      "id": "guerrilla-mail",
      "name": "Guerrilla Mail",
      "url": "https://www.guerrillamail.com/",
      "description_he": "מייל זמני בלי הרשמה, לניסוי אתרים. תיבת הדואר גלויה למי שמנחש את הכתובת, לא לחשבונות חשובים.",
      "category": "hacker",
      "free": "full",
      "gem": false,
      "logo": "https://www.google.com/s2/favicons?domain=www.guerrillamail.com&sz=128"
    },
    {
      "id": "canary-tokens",
      "name": "Canary Tokens",
      "url": "https://canarytokens.org/",
      "description_he": "מייצרים מלכודת (קישור, קובץ, DNS) שמתריעה אם מישהו פתח אותה, כדי לדעת אם הגיעו לקובץ שלכם.",
      "category": "hacker",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=canarytokens.org&sz=128"
    },
    {
      "id": "explainshell",
      "name": "explainshell",
      "url": "https://explainshell.com/",
      "description_he": "מדביקים פקודת לינוקס ומקבלים הסבר על כל דגל וכל חלק.",
      "category": "hacker",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=explainshell.com&sz=128"
    },
    {
      "id": "v86",
      "name": "v86",
      "url": "https://copy.sh/v86/",
      "description_he": "מריצים מערכות הפעלה ישנות (כולל לינוקס ו-Windows) ישר בדפדפן.",
      "category": "hacker",
      "free": "full",
      "gem": false,
      "logo": "https://www.google.com/s2/favicons?domain=copy.sh&sz=128"
    },
    {
      "id": "browserleaks",
      "name": "Browserleaks",
      "url": "https://browserleaks.com/",
      "description_he": "מראה מה הדפדפן שלכם חושף באמת: טביעת אצבע, IP, גופנים ומצלמה.",
      "category": "hacker",
      "free": "full",
      "gem": false,
      "logo": "https://www.google.com/s2/favicons?domain=browserleaks.com&sz=128"
    },
    {
      "id": "dcode",
      "name": "dCode",
      "url": "https://www.dcode.fr/en",
      "description_he": "ספרייה ענקית של מפענחי צופנים, קודי מורס, RAS וחידות, הכל חוקי ובחינם.",
      "category": "hacker",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=www.dcode.fr&sz=128"
    },
    {
      "id": "urlscan-io",
      "name": "urlscan.io",
      "url": "https://urlscan.io/",
      "description_he": "סורקים קישור חשוד ורואים לאן הוא באמת מוביל, בלי לפתוח אותו אצלכם.",
      "category": "hacker",
      "free": "full",
      "gem": false,
      "logo": "https://www.google.com/s2/favicons?domain=urlscan.io&sz=128"
    },
    {
      "id": "crt-sh",
      "name": "crt.sh",
      "url": "https://crt.sh/",
      "description_he": "חיפוש ביומני תעודות SSL: רואים אילו תת דומיינים הונפקו לדומיין, מידע ציבורי לגמרי.",
      "category": "hacker",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=crt.sh&sz=128"
    },
    {
      "id": "hybrid-analysis",
      "name": "Hybrid Analysis",
      "url": "https://www.hybrid-analysis.com/",
      "description_he": "מעבדת חול לחקירת קבצים חשודים בסביבה מבודדת. להעלות רק קבצים שיש לכם רשות לבדוק.",
      "category": "hacker",
      "free": "full",
      "gem": false,
      "logo": "https://www.google.com/s2/favicons?domain=www.hybrid-analysis.com&sz=128"
    },
    {
      "id": "stegonline",
      "name": "StegOnline",
      "url": "https://georgeom.net/StegOnline/",
      "description_he": "מחפשים הודעות מוסתרות בתוך תמונות (סטגנוגרפיה), כלי אימון קלאסי.",
      "category": "hacker",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=georgeom.net&sz=128"
    },
    {
      "id": "builtwith",
      "name": "BuiltWith",
      "url": "https://builtwith.com/",
      "description_he": "מקלידים כתובת אתר ורואים על איזה שרת, מערכת וכלים הוא בנוי.",
      "category": "hacker",
      "free": "tier",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=builtwith.com&sz=128"
    },
    {
      "id": "cryptohack",
      "name": "CryptoHack",
      "url": "https://cryptohack.org/",
      "description_he": "פלטפורמה חינמית ללמידת קריפטוגרפיה דרך אתגרים, כמו CTF רק על צופנים.",
      "category": "hacker",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=cryptohack.org&sz=128"
    },
    {
      "id": "ctflearn",
      "name": "CTFlearn",
      "url": "https://ctflearn.com/",
      "description_he": "אתגרי CTF למתחילים ומתקדמים, מתרגלים פריצה חוקית בלי לפגוע בשום אתר אמיתי.",
      "category": "hacker",
      "free": "full",
      "gem": false,
      "logo": "https://www.google.com/s2/favicons?domain=ctflearn.com&sz=128"
    },
    {
      "id": "cmd-challenge",
      "name": "CMD Challenge",
      "url": "https://cmdchallenge.com/",
      "description_he": "חידות קצרות בשורת הפקודה של לינוקס, פותרים ישר בדפדפן.",
      "category": "hacker",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=cmdchallenge.com&sz=128"
    },
    {
      "id": "webhook-site",
      "name": "Webhook.site",
      "url": "https://webhook.site/",
      "description_he": "מקבלים כתובת זמנית ורואים כל בקשת HTTP או מייל שמגיע אליה, מצוין לבדיקות שלכם.",
      "category": "hacker",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=webhook.site&sz=128"
    },
    {
      "id": "securityheaders",
      "name": "SecurityHeaders",
      "url": "https://securityheaders.com/",
      "description_he": "בודקים כתובת אתר ומקבלים ציון על כותרות האבטחה שלו.",
      "category": "hacker",
      "free": "full",
      "gem": false,
      "logo": "https://www.google.com/s2/favicons?domain=securityheaders.com&sz=128"
    },
    {
      "id": "viewdns",
      "name": "ViewDNS",
      "url": "https://viewdns.info/",
      "description_he": "כלי רשת לדומיין: WHOIS, DNS, היסטוריית IP וחיפוש תת דומיינים. להשתמש רק על דומיין שלכם או במחקר לגיטימי.",
      "category": "hacker",
      "free": "full",
      "gem": false,
      "logo": "https://www.google.com/s2/favicons?domain=viewdns.info&sz=128"
    },
    {
      "id": "hoppscotch",
      "name": "Hoppscotch",
      "url": "https://hoppscotch.io/",
      "description_he": "לקוח API בקוד פתוח בדפדפן, חלופה קלילה ל-Postman בלי התקנה.",
      "category": "hacker",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=hoppscotch.io&sz=128"
    },
    {
      "id": "crackstation",
      "name": "CrackStation",
      "url": "https://crackstation.net/",
      "description_he": "מפענחים האש של סיסמה מול מאגר חינמי. רק להאש שלכם או בהסכמה, לא לסיסמאות של אחרים.",
      "category": "hacker",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=crackstation.net&sz=128"
    },
    {
      "id": "gtfobins",
      "name": "GTFOBins",
      "url": "https://gtfobins.github.io/",
      "description_he": "מדריך איך כלי לינוקס רגילים יכולים לשמש להעלאת הרשאות, לעבודה רק על מערכות שמותר לכם לבדוק.",
      "category": "hacker",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=gtfobins.github.io&sz=128"
    },
    {
      "id": "pwn-college",
      "name": "pwn.college",
      "url": "https://pwn.college/",
      "description_he": "קורס מעשי של אוניברסיטת אריזונה ללמידת פריצה חוקית, מהבסיס עד אתגרים קשים.",
      "category": "hacker",
      "free": "full",
      "gem": false,
      "logo": "https://www.google.com/s2/favicons?domain=pwn.college&sz=128"
    },
    {
      "id": "hack-this-site",
      "name": "Hack This Site",
      "url": "https://www.hackthissite.org/",
      "description_he": "אתר אימון ותיק עם משימות פריצה חוקיות על המגרש שלהם בלבד.",
      "category": "hacker",
      "free": "full",
      "gem": false,
      "logo": "https://www.google.com/s2/favicons?domain=www.hackthissite.org&sz=128"
    },
    {
      "id": "ipvoid",
      "name": "IPVoid",
      "url": "https://www.ipvoid.com/",
      "description_he": "בודקים כתובת IP או דומיין מול רשימות מוניטין ושחורות, ורואים אם הוא מסומן כחשוד.",
      "category": "hacker",
      "free": "full",
      "gem": false,
      "logo": "https://www.google.com/s2/favicons?domain=www.ipvoid.com&sz=128"
    },
    {
      "id": "ifixit",
      "name": "iFixit",
      "url": "https://www.ifixit.com/",
      "description_he": "מדריכי פירוק ותיקון לכל מכשיר, עם שלבים ותמונות, ועם דירוג כמה קל או קשה לתקן.",
      "category": "misc",
      "free": "full",
      "gem": false,
      "logo": "https://www.google.com/s2/favicons?domain=www.ifixit.com&sz=128"
    },
    {
      "id": "ikea-planners",
      "name": "IKEA Planners",
      "url": "https://www.ikea.com/il/he/planners/",
      "description_he": "כלי התכנון הרשמיים של איקאה ישראל: מטבח, חדר שינה, אחסון ועוד. כלי Kreativ כנראה לא זמין בארץ.",
      "category": "misc",
      "free": "full",
      "gem": false,
      "logo": "https://www.google.com/s2/favicons?domain=www.ikea.com&sz=128"
    },
    {
      "id": "versus",
      "name": "Versus",
      "url": "https://versus.com/en",
      "description_he": "משווים טלפונים, מחשבים, ערים ואפילו אוניברסיטאות זה מול זה, לפי נתונים ולא לפי פרסומות.",
      "category": "misc",
      "free": "full",
      "gem": false,
      "logo": "https://www.google.com/s2/favicons?domain=versus.com&sz=128"
    },
    {
      "id": "manualslib",
      "name": "ManualsLib",
      "url": "https://www.manualslib.com/",
      "description_he": "מיליוני ספרי הוראות למכשירים, לצפייה ולהורדה בלי הרשמה.",
      "category": "misc",
      "free": "full",
      "gem": false,
      "logo": "https://www.google.com/s2/favicons?domain=www.manualslib.com&sz=128"
    },
    {
      "id": "alternativeto",
      "name": "AlternativeTo",
      "url": "https://alternativeto.net/",
      "description_he": "מחפשים תוכנה ומקבלים חלופות, כולל סינון לחינמיים ולקוד פתוח.",
      "category": "misc",
      "free": "full",
      "gem": false,
      "logo": "https://www.google.com/s2/favicons?domain=alternativeto.net&sz=128"
    },
    {
      "id": "every-time-zone",
      "name": "Every Time Zone",
      "url": "https://everytimezone.com/",
      "description_he": "השוואת שעות בין ערים, לתיאום עם אנשים בחוץ לארץ.",
      "category": "misc",
      "free": "full",
      "gem": false,
      "logo": "https://www.google.com/s2/favicons?domain=everytimezone.com&sz=128"
    },
    {
      "id": "carbon",
      "name": "Carbon",
      "url": "https://carbon.now.sh/",
      "description_he": "הופכים קטע קוד לתמונה נקייה ויפה, לשיתוף במצגת או ברשת.",
      "category": "misc",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=carbon.now.sh&sz=128"
    },
    {
      "id": "omatsuri",
      "name": "Omatsuri",
      "url": "https://omatsuri.app/",
      "description_he": "ארגז כלים קטן לעיצוב וווב (פלטות, המרות, עיגול פינות), בלי הרשמה.",
      "category": "misc",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=omatsuri.app&sz=128"
    },
    {
      "id": "runable",
      "name": "Runable",
      "url": "https://runable.com/",
      "description_he": "כותבים מה רוצים (אתר, מצגת, אפליקציה) והסוכן בונה ומראה תוצאה בדפדפן.",
      "category": "misc",
      "free": "tier",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=runable.com&sz=128"
    },
    {
      "id": "tos-dr",
      "name": "ToS;DR",
      "url": "https://tosdr.org/en",
      "description_he": "תקצירי מדיניות פרטיות ותנאי שימוש, עם ציון כמה האתר באמת ידידותי אליכם.",
      "category": "misc",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=tosdr.org&sz=128"
    },
    {
      "id": "just-delete-me",
      "name": "Just Delete Me",
      "url": "https://justdeleteme.xyz/",
      "description_he": "מדריך קישורים ישירים למחיקת חשבון מכל שירות, מדורג לפי כמה קשה למחוק.",
      "category": "misc",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=justdeleteme.xyz&sz=128"
    },
    {
      "id": "the-true-size-of",
      "name": "The True Size Of",
      "url": "https://thetruesize.com/",
      "description_he": "גוררים מדינה על המפה ורואים את הגודל האמיתי שלה, בלי העיוות של מפת העולם הרגילה.",
      "category": "misc",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=thetruesize.com&sz=128"
    },
    {
      "id": "radiooooo",
      "name": "Radiooooo",
      "url": "https://radiooooo.com/",
      "description_he": "בוחרים מדינה ועשור ומאזינים למוזיקה מאותו זמן ומאותו מקום.",
      "category": "misc",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=radiooooo.com&sz=128"
    },
    {
      "id": "silk",
      "name": "Silk",
      "url": "https://weavesilk.com/",
      "description_he": "ציור גנרטיבי זוהר עם העכבר, כמו משי דיגיטלי.",
      "category": "misc",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=weavesilk.com&sz=128"
    },
    {
      "id": "zoomquilt",
      "name": "Zoomquilt",
      "url": "https://zoomquilt.org/",
      "description_he": "תמונה שממשיכים להתקרב אליה בלי סוף, והיא תמיד ממשיכה.",
      "category": "misc",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=zoomquilt.org&sz=128"
    },
    {
      "id": "suncalc",
      "name": "SunCalc",
      "url": "https://www.suncalc.org/",
      "description_he": "רואים מאיפה השמש זורחת ושוקעת בכל מקום ותאריך, כולל אורך הצל.",
      "category": "misc",
      "free": "full",
      "gem": false,
      "logo": "https://www.google.com/s2/favicons?domain=www.suncalc.org&sz=128"
    },
    {
      "id": "what3words",
      "name": "what3words",
      "url": "https://what3words.com/",
      "description_he": "כל ריבוע של שלושה מטרים בעולם מקבל שלוש מילים, כדי לשתף מיקום מדויק בלי קואורדינטות.",
      "category": "misc",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=what3words.com&sz=128"
    },
    {
      "id": "down-for-everyone-or-just-me",
      "name": "Down For Everyone Or Just Me",
      "url": "https://downforeveryoneorjustme.com/",
      "description_he": "בודקים אם אתר באמת נפל, או שרק אצלכם אין חיבור.",
      "category": "misc",
      "free": "full",
      "gem": false,
      "logo": "https://www.google.com/s2/favicons?domain=downforeveryoneorjustme.com&sz=128"
    },
    {
      "id": "futureme",
      "name": "FutureMe",
      "url": "https://www.futureme.org/",
      "description_he": "כותבים מכתב לעצמכם, והאתר שולח אותו באימייל בעוד חודש, שנה או יותר.",
      "category": "misc",
      "free": "full",
      "gem": false,
      "logo": "https://www.google.com/s2/favicons?domain=www.futureme.org&sz=128"
    },
    {
      "id": "the-useless-web",
      "name": "The Useless Web",
      "url": "https://theuselessweb.com/",
      "description_he": "כפתור אחד שמזניק לאתר חסר תועלת ומפתיע, בשרשרת של שטויות משעשעות.",
      "category": "misc",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=theuselessweb.com&sz=128"
    },
    {
      "id": "poolsuite",
      "name": "Poolsuite",
      "url": "https://poolsuite.net/",
      "description_he": "רדיו וייבים של קיץ משנות ה90, עם שעון ושולחן עבודה רטרו בדפדפן.",
      "category": "misc",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=poolsuite.net&sz=128"
    },
    {
      "id": "pointer-pointer",
      "name": "Pointer Pointer",
      "url": "https://pointerpointer.com/",
      "description_he": "העכבר תמיד נתקל בתמונה של מישהו שמצביע בדיוק על הסמן.",
      "category": "misc",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=pointerpointer.com&sz=128"
    },
    {
      "id": "wiby",
      "name": "Wiby",
      "url": "https://wiby.me/",
      "description_he": "מנוע חיפוש לאינטרנט הישן והקטן, דפים שנבנו ביד ולא ממוטבים לפרסום.",
      "category": "misc",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=wiby.me&sz=128"
    },
    {
      "id": "project-gutenberg",
      "name": "Project Gutenberg",
      "url": "https://www.gutenberg.org/",
      "description_he": "עשרות אלפי ספרים בנחלת הכלל להורדה ולקריאה בחינם.",
      "category": "misc",
      "free": "full",
      "gem": false,
      "logo": "https://www.google.com/s2/favicons?domain=www.gutenberg.org&sz=128"
    },
    {
      "id": "seostudio-youtube-tag-extractor",
      "name": "SEOStudio YouTube Tag Extractor",
      "url": "https://seostudio.tools/youtube-tag-extractor",
      "description_he": "מדביקים קישור לסרטון יוטיוב ורואים אילו תגיות הוא באמת משתמש בהן.",
      "category": "seo",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=seostudio.tools&sz=128"
    },
    {
      "id": "seostudio-keyword-suggestion",
      "name": "SEOStudio Keyword Suggestion",
      "url": "https://seostudio.tools/keywords-suggestion-tool",
      "description_he": "מקלידים נושא ומקבלים רעיונות למילות מפתח וזנב ארוך, בלי מנוי ל-Ahrefs.",
      "category": "seo",
      "free": "full",
      "gem": false,
      "logo": "https://www.google.com/s2/favicons?domain=seostudio.tools&sz=128"
    },
    {
      "id": "seostudio-website-rank-checker",
      "name": "SEOStudio Website Rank Checker",
      "url": "https://seostudio.tools/website-ranking-checker",
      "description_he": "בודקים באיזה מקום אתר מופיע בגוגל על מילת מפתח.",
      "category": "seo",
      "free": "full",
      "gem": false,
      "logo": "https://www.google.com/s2/favicons?domain=seostudio.tools&sz=128"
    },
    {
      "id": "yellow-lab-tools",
      "name": "Yellow Lab Tools",
      "url": "https://yellowlab.tools/",
      "description_he": "סורקים אתר ומקבלים דוח ביצועים ומשקל, בלי כלי של גוגל.",
      "category": "seo",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=yellowlab.tools&sz=128"
    },
    {
      "id": "calcsolver",
      "name": "CalcSolver",
      "url": "https://calcsolver.net/",
      "description_he": "מחשבון אונליין עם פונקציות ללימודים וליום יום, ועמודים שמסבירים תרגילים כמו אחוזים ושברים.",
      "category": "daily",
      "free": "full",
      "gem": false,
      "logo": "https://www.google.com/s2/favicons?domain=calcsolver.net&sz=128"
    },
    {
      "id": "hebcal",
      "name": "Hebcal",
      "url": "https://www.hebcal.com/",
      "description_he": "לוח שנה עברי, המרת תאריכים, חגים ושעת כניסת שבת לפי העיר שלכם.",
      "category": "daily",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=www.hebcal.com&sz=128"
    },
    {
      "id": "supercook",
      "name": "SuperCook",
      "url": "https://www.supercook.com/",
      "description_he": "מזינים מה יש במקרר ומקבלים מתכונים שאפשר להכין בלי לקנות עוד מצרכים.",
      "category": "daily",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=www.supercook.com&sz=128"
    },
    {
      "id": "stilltasty",
      "name": "StillTasty",
      "url": "https://www.stilltasty.com/",
      "description_he": "בודקים כמה זמן אוכל מחזיק במקרר, במקפיא או בארון, כדי לא לזרוק סתם.",
      "category": "daily",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=www.stilltasty.com&sz=128"
    },
    {
      "id": "ravkavonline-co-il",
      "name": "רב-קו אונליין",
      "url": "https://www.ravkavonline.co.il/",
      "description_he": "האתר הרשמי לטעינת רב-קו וקניית חוזי נסיעה, בלי לעמוד בעמדת שירות.",
      "category": "daily",
      "free": "full",
      "gem": false,
      "logo": "https://www.google.com/s2/favicons?domain=www.ravkavonline.co.il&sz=128"
    },
    {
      "id": "rail-co-il",
      "name": "רכבת ישראל",
      "url": "https://www.rail.co.il/",
      "description_he": "האתר הרשמי של רכבת ישראל: לוחות זמנים, כרטיסים ושינויים בתנועה.",
      "category": "daily",
      "free": "full",
      "gem": false,
      "logo": "https://www.google.com/s2/favicons?domain=www.rail.co.il&sz=128"
    },
    {
      "id": "justwatch",
      "name": "JustWatch",
      "url": "https://www.justwatch.com/",
      "description_he": "בודקים באיזה שירות סטרימינג הסרט או הסדרה זמינים אצלכם, בלי לחפש בשישה אפליקציות.",
      "category": "daily",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=www.justwatch.com&sz=128"
    },
    {
      "id": "pl-ntnet",
      "name": "Pl@ntNet",
      "url": "https://identify.plantnet.org/",
      "description_he": "מצלמים צמח ומקבלים זיהוי, שימושי בטיול או בגינה.",
      "category": "daily",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=identify.plantnet.org&sz=128"
    },
    {
      "id": "ims-gov-il",
      "name": "השירות המטאורולוגי",
      "url": "https://www.ims.gov.il/",
      "description_he": "תחזית רשמית לישראל, התראות ומה שקורה עכשיו, ישר מהשירות המטאורולוגי.",
      "category": "daily",
      "free": "full",
      "gem": false,
      "logo": "https://www.google.com/s2/favicons?domain=www.ims.gov.il&sz=128"
    },
    {
      "id": "govmap",
      "name": "GovMap",
      "url": "https://govmap.gov.il/",
      "description_he": "המפה הרשמית של ישראל: גושים וחלקות, תכנון, שכבות ממשלתיות וחיפוש כתובת.",
      "category": "daily",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=govmap.gov.il&sz=128"
    },
    {
      "id": "wise-currency-converter",
      "name": "Wise Currency Converter",
      "url": "https://wise.com/il/currency-converter/",
      "description_he": "מחשבון המרת מטבע בעברית, עם שער קרוב למחיר האמיתי בשוק.",
      "category": "daily",
      "free": "full",
      "gem": false,
      "logo": "https://www.google.com/s2/favicons?domain=wise.com&sz=128"
    },
    {
      "id": "does-the-dog-die",
      "name": "Does the Dog Die",
      "url": "https://www.doesthedogdie.com/",
      "description_he": "לפני סרט או סדרה, בודקים אם יש סצנות קשות (בעלי חיים, אלימות ועוד), בלי ספוילר מיותר.",
      "category": "daily",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=www.doesthedogdie.com&sz=128"
    },
    {
      "id": "unitconverters",
      "name": "UnitConverters",
      "url": "https://www.unitconverters.net/",
      "description_he": "המרות יומיומיות: קילוגרם לפאונד, מעלות, מטרי לאינצ'ים, מהירות ועוד.",
      "category": "daily",
      "free": "full",
      "gem": false,
      "logo": "https://www.google.com/s2/favicons?domain=www.unitconverters.net&sz=128"
    },
    {
      "id": "chp",
      "name": "CHP",
      "url": "https://chp.co.il/",
      "description_he": "משווים מחירי מוצרים בין רשתות הסופר בישראל, לפי הסל שלכם והאזור.",
      "category": "daily",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=chp.co.il&sz=128"
    },
    {
      "id": "kolzchut-org-il",
      "name": "כל-זכות",
      "url": "https://www.kolzchut.org.il/he/",
      "description_he": "מדריך ברור לזכויות שלכם: ביטוח לאומי, עבודה, דיור, לימודים ועוד, בשפה פשוטה.",
      "category": "daily",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=www.kolzchut.org.il&sz=128"
    },
    {
      "id": "cooked-wiki",
      "name": "Cooked.wiki",
      "url": "https://cooked.wiki/",
      "description_he": "מדביקים קישור למתכון ומקבלים רק מצרכים ושלבים, בלי סיפור החיים והפרסומות.",
      "category": "daily",
      "free": "tier",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=cooked.wiki&sz=128"
    },
    {
      "id": "camelcamelcamel",
      "name": "CamelCamelCamel",
      "url": "https://camelcamelcamel.com/",
      "description_he": "היסטוריית מחירים של מוצרים באמזון והתראה כשהמחיר יורד.",
      "category": "daily",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=camelcamelcamel.com&sz=128"
    },
    {
      "id": "numbeo",
      "name": "Numbeo",
      "url": "https://www.numbeo.com/",
      "description_he": "משווים יוקר מחיה בין ערים: שכירות, אוכל, תחבורה ומשכורות.",
      "category": "daily",
      "free": "full",
      "gem": false,
      "logo": "https://www.google.com/s2/favicons?domain=www.numbeo.com&sz=128"
    },
    {
      "id": "dupe",
      "name": "Dupe",
      "url": "https://dupe.com/",
      "description_he": "מדביקים קישור לרהיט יקר ומקבלים פריטים כמעט זהים במחיר נמוך יותר.",
      "category": "daily",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=dupe.com&sz=128"
    },
    {
      "id": "pomofocus",
      "name": "Pomofocus",
      "url": "https://pomofocus.io/",
      "description_he": "טיימר פומודורו נקי עם רשימת משימות, לעבודה בפרקי ריכוז.",
      "category": "productivity",
      "free": "full",
      "gem": false,
      "logo": "https://www.google.com/s2/favicons?domain=pomofocus.io&sz=128"
    },
    {
      "id": "qr-code-monkey",
      "name": "QR Code Monkey",
      "url": "https://www.qrcode-monkey.com/",
      "description_he": "מחולל קודי QR מעוצבים עם לוגו וצבעים, שלא פגים אף פעם.",
      "category": "productivity",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=www.qrcode-monkey.com&sz=128"
    },
    {
      "id": "seeing-theory",
      "name": "Seeing Theory",
      "url": "https://seeing-theory.brown.edu/",
      "description_he": "הסתברות וסטטיסטיקה בהדמיות אינטראקטיביות של אוניברסיטת בראון.",
      "category": "study",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=seeing-theory.brown.edu&sz=128"
    },
    {
      "id": "bartosz-ciechanowski",
      "name": "Bartosz Ciechanowski",
      "url": "https://ciechanow.ski/",
      "description_he": "הסברים אינטראקטיביים מדהימים איך דברים עובדים: GPS, מצלמה, שעון, מנוע.",
      "category": "study",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=ciechanow.ski&sz=128"
    },
    {
      "id": "class-central",
      "name": "Class Central",
      "url": "https://www.classcentral.com/",
      "description_he": "מנוע חיפוש לקורסים חינמיים מאוניברסיטאות מובילות בעולם.",
      "category": "study",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=www.classcentral.com&sz=128"
    },
    {
      "id": "nicky-case",
      "name": "Nicky Case",
      "url": "https://ncase.me/",
      "description_he": "משחקונים אינטראקטיביים שמסבירים רעיונות גדולים, למשל איך נבנה אמון בין אנשים.",
      "category": "study",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=ncase.me&sz=128"
    },
    {
      "id": "learn-git-branching",
      "name": "Learn Git Branching",
      "url": "https://learngitbranching.js.org/",
      "description_he": "לומדים Git דרך שלבים ויזואליים של ענפים, מיזוגים ו-rebase.",
      "category": "code",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=learngitbranching.js.org&sz=128"
    },
    {
      "id": "roadmap-sh",
      "name": "roadmap.sh",
      "url": "https://roadmap.sh/",
      "description_he": "מפות למידה מסודרות לכל תחום בהייטק: פרונט, דאטה, סייבר ועוד.",
      "category": "code",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=roadmap.sh&sz=128"
    },
    {
      "id": "tiny-helpers",
      "name": "Tiny Helpers",
      "url": "https://tiny-helpers.dev/",
      "description_he": "אוסף של מאות כלים קטנים וחינמיים למפתחים ולמעצבים, לפי נושא.",
      "category": "code",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=tiny-helpers.dev&sz=128"
    },
    {
      "id": "nandgame",
      "name": "NandGame",
      "url": "https://nandgame.com/",
      "description_he": "בונים מחשב שלם, משער NAND בודד ועד מעבד, בתור משחק חידות.",
      "category": "hacker",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=nandgame.com&sz=128"
    },
    {
      "id": "hurricane-electric-bgp",
      "name": "Hurricane Electric BGP",
      "url": "https://bgp.he.net/",
      "description_he": "מי מחזיק כתובת IP, אילו רשתות שייכות לספק, ואיך האינטרנט מנותב ביניהן.",
      "category": "hacker",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=bgp.he.net&sz=128"
    },
    {
      "id": "ssl-labs",
      "name": "SSL Labs",
      "url": "https://www.ssllabs.com/ssltest/",
      "description_he": "ציון מפורט על הגדרות ה-TLS וההצפנה של אתר.",
      "category": "hacker",
      "free": "full",
      "gem": false,
      "logo": "https://www.google.com/s2/favicons?domain=www.ssllabs.com&sz=128"
    },
    {
      "id": "mxtoolbox",
      "name": "MXToolbox",
      "url": "https://mxtoolbox.com/",
      "description_he": "בדיקות מייל ודומיין: רשימות שחורות, SPF ו-DMARC, וניתוח כותרות של מייל חשוד.",
      "category": "hacker",
      "free": "tier",
      "gem": false,
      "logo": "https://www.google.com/s2/favicons?domain=mxtoolbox.com&sz=128"
    },
    {
      "id": "fake-update",
      "name": "Fake Update",
      "url": "https://fakeupdate.net/",
      "description_he": "מסך עדכון Windows מזויף במסך מלא, למתיחה על חבר.",
      "category": "hacker",
      "free": "full",
      "gem": false,
      "logo": "https://www.google.com/s2/favicons?domain=fakeupdate.net&sz=128"
    },
    {
      "id": "submarine-cable-map",
      "name": "Submarine Cable Map",
      "url": "https://www.submarinecablemap.com/",
      "description_he": "מפת כבלי האינטרנט התת ימיים בעולם, כולל אלה שמגיעים לישראל.",
      "category": "osint",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=www.submarinecablemap.com&sz=128"
    },
    {
      "id": "satellite-map",
      "name": "Satellite Map",
      "url": "https://satellitemap.space/",
      "description_he": "כל הלוויינים שמעל כדור הארץ, כולל Starlink, בזמן אמת.",
      "category": "osint",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=satellitemap.space&sz=128"
    },
    {
      "id": "privnote",
      "name": "Privnote",
      "url": "https://privnote.com/",
      "description_he": "שולחים פתק בקישור שמשמיד את עצמו אחרי קריאה אחת.",
      "category": "security",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=privnote.com&sz=128"
    },
    {
      "id": "musicmap",
      "name": "Musicmap",
      "url": "https://musicmap.info/",
      "description_he": "עץ משפחה אינטראקטיבי של כל ז'אנרי המוזיקה, עם דוגמאות האזנה.",
      "category": "music",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=musicmap.info&sz=128"
    },
    {
      "id": "lofi-cafe",
      "name": "Lofi Cafe",
      "url": "https://www.lofi.cafe/",
      "description_he": "רדיו לו-פיי עם אנימציה רגועה ברקע, ללימודים ולעבודה.",
      "category": "music",
      "free": "full",
      "gem": false,
      "logo": "https://www.google.com/s2/favicons?domain=www.lofi.cafe&sz=128"
    },
    {
      "id": "piskel",
      "name": "Piskel",
      "url": "https://www.piskelapp.com/",
      "description_he": "עורך פיקסל ארט ואנימציה בדפדפן, עם ייצוא ל-GIF ול-PNG.",
      "category": "design",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=www.piskelapp.com&sz=128"
    },
    {
      "id": "tinypng",
      "name": "TinyPNG",
      "url": "https://tinypng.com/",
      "description_he": "מכווצים תמונות PNG ו-JPG בלי שרואים הבדל באיכות.",
      "category": "design",
      "free": "tier",
      "gem": false,
      "logo": "https://www.google.com/s2/favicons?domain=tinypng.com&sz=128"
    },
    {
      "id": "cleanup-pictures",
      "name": "Cleanup.pictures",
      "url": "https://cleanup.pictures/",
      "description_he": "מוחקים אנשים, חפצים או טקסט מתמונה במכחול, וה-AI ממלא את הרקע. ברזולוציה נמוכה זה בחינם.",
      "category": "design",
      "free": "tier",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=cleanup.pictures&sz=128"
    },
    {
      "id": "image-color-picker",
      "name": "Image Color Picker",
      "url": "https://imagecolorpicker.com/",
      "description_he": "מעלים תמונה ושולפים ממנה קוד צבע מדויק (HEX, RGB) מכל פיקסל.",
      "category": "design",
      "free": "full",
      "gem": false,
      "logo": "https://www.google.com/s2/favicons?domain=imagecolorpicker.com&sz=128"
    },
    {
      "id": "board-game-arena",
      "name": "Board Game Arena",
      "url": "https://boardgamearena.com/",
      "description_he": "מאות משחקי לוח אמיתיים אונליין עם חברים, בלי להוריד כלום.",
      "category": "leisure",
      "free": "tier",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=boardgamearena.com&sz=128"
    },
    {
      "id": "nasa-eyes",
      "name": "NASA Eyes",
      "url": "https://science.nasa.gov/eyes/",
      "description_he": "מערכת השמש בתלת ממד, עם החלליות של נאס\"א במיקום האמיתי שלהן עכשיו.",
      "category": "leisure",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=science.nasa.gov&sz=128"
    },
    {
      "id": "old-maps-online",
      "name": "Old Maps Online",
      "url": "https://www.oldmapsonline.org/",
      "description_he": "מנוע חיפוש למפות היסטוריות: רואים איך המקום שלכם נראה לפני מאות שנים.",
      "category": "leisure",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=www.oldmapsonline.org&sz=128"
    },
    {
      "id": "atlas-obscura",
      "name": "Atlas Obscura",
      "url": "https://www.atlasobscura.com/",
      "description_he": "אטלס של מקומות מוזרים ומופלאים בעולם, כולל בישראל, לטיול לא שגרתי.",
      "category": "leisure",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=www.atlasobscura.com&sz=128"
    },
    {
      "id": "slow-roads",
      "name": "Slow Roads",
      "url": "https://slowroads.io/",
      "description_he": "נהיגה רגועה בלי סוף בנופים שנוצרים תוך כדי, עם מוזיקה.",
      "category": "leisure",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=slowroads.io&sz=128"
    },
    {
      "id": "sandspiel",
      "name": "Sandspiel",
      "url": "https://sandspiel.club/",
      "description_he": "ארגז חול של חלקיקים: חול, מים, אש וצמחים שמגיבים זה לזה.",
      "category": "leisure",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=sandspiel.club&sz=128"
    },
    {
      "id": "wikitok",
      "name": "WikiTok",
      "url": "https://www.wikitok.io/",
      "description_he": "ערכים אקראיים מוויקיפדיה בגלילה כמו בטיקטוק, להתמכר ללמידה.",
      "category": "leisure",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=www.wikitok.io&sz=128"
    },
    {
      "id": "library-of-babel",
      "name": "Library of Babel",
      "url": "https://libraryofbabel.info/",
      "description_he": "ספרייה שמכילה כל צירוף אותיות אפשרי. חפשו משפט ותמצאו אותו כבר כתוב.",
      "category": "leisure",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=libraryofbabel.info&sz=128"
    },
    {
      "id": "can-you-run-it",
      "name": "Can You Run It",
      "url": "https://www.systemrequirementslab.com/cyri",
      "description_he": "בודקים בלחיצה אם המחשב שלכם מספיק חזק להריץ משחק מסוים, לפי דרישות המערכת שלו.",
      "category": "misc",
      "free": "full",
      "gem": true,
      "logo": "https://www.google.com/s2/favicons?domain=www.systemrequirementslab.com&sz=128"
    },
    {
      "id": "similarsites",
      "name": "SimilarSites",
      "url": "https://www.similarsites.com/",
      "description_he": "מקלידים אתר שאוהבים ומקבלים אתרים דומים לו.",
      "category": "misc",
      "free": "tier",
      "gem": false,
      "logo": "https://www.google.com/s2/favicons?domain=www.similarsites.com&sz=128"
    },
    {
      "id": "there-s-an-ai-for-that",
      "name": "There's An AI For That",
      "url": "https://theresanaiforthat.com/",
      "description_he": "מאגר ענק של כלי AI לפי משימה, כדי למצוא כלי לכל דבר.",
      "category": "misc",
      "free": "full",
      "gem": false,
      "logo": "https://www.google.com/s2/favicons?domain=theresanaiforthat.com&sz=128"
    }
  ]
};
