/* ==========================================================
   EA Academy — application
   Routing, rendering, progress tracking, quizzes, scenarios,
   glossary, search and certificate.
   ========================================================== */
(function () {
  'use strict';

  var A = window.ACADEMY;
  var CFG = A.config;
  var view = document.getElementById('view');
  var COLORS = { ea: 'var(--ea)', outlook: 'var(--ol)', travel: 'var(--tr)' };

  /* ---------------- utilities ---------------- */
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $all(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

  var toastTimer;
  function toast(msg, kind) {
    var t = document.getElementById('toast');
    t.textContent = msg;
    t.className = 'toast show' + (kind ? ' ' + kind : '');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.className = 'toast'; }, 2600);
  }
  A.toast = toast;

  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text).then(function () { toast('Copied to clipboard'); }, function () { legacyCopy(text); });
    }
    legacyCopy(text);
    return Promise.resolve();
  }
  function legacyCopy(text) {
    var ta = document.createElement('textarea');
    ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
    document.body.appendChild(ta); ta.select();
    var ok = false;
    try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
    toast(ok ? 'Copied to clipboard' : 'Select the text and copy it manually');
    document.body.removeChild(ta);
  }

  function fmtMins(m) {
    var h = Math.floor(m / 60), r = m % 60;
    return h ? h + ' h ' + (r ? r + ' min' : '') : r + ' min';
  }

  /* ---------------- icons ---------------- */
  var ICON = {
    check: '<path d="M5 12.5l4.2 4.2L19 7"/>',
    clock: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
    arrowL: '<path d="M14.5 6l-6 6 6 6"/>',
    arrowR: '<path d="M9.5 6l6 6-6 6"/>',
    search: '<circle cx="11" cy="11" r="6.5"/><path d="M16 16l4.5 4.5"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2.5v2M12 19.5v2M4.6 4.6L6 6M18 18l1.4 1.4M2.5 12h2M19.5 12h2M4.6 19.4L6 18M18 6l1.4-1.4"/>',
    moon: '<path d="M19.5 14.5A8 8 0 019.5 4.5a8 8 0 1010 10z"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    close: '<path d="M6 6l12 12M18 6L6 18"/>',
    quiz: '<path d="M9.2 9a3 3 0 115.6 1.5c-.8 1-2.3 1.5-2.3 3"/><circle cx="12" cy="17.5" r=".6" fill="currentColor"/><rect x="3.5" y="3.5" width="17" height="17" rx="3"/>',
    lab: '<path d="M9 3.5h6M10 3.5v6L4.8 18a2 2 0 001.7 3h11a2 2 0 001.7-3L14 9.5v-6"/><path d="M7.5 15h9"/>',
    chat: '<path d="M4 5.5h16v10H9l-5 4z"/>',
    plane: '<path d="M10.5 13.5L4 11l1.5-1.5 7 1 4-4.5a1.8 1.8 0 012.5 2.5l-4.5 4 1 7L14 21l-2.5-6.5L8 18v2.5L6.5 22l-1-3.5L2 17.5 3.5 16H6z"/>',
    mail: '<rect x="3" y="5.5" width="18" height="13" rx="2"/><path d="M3.5 7l8.5 6 8.5-6"/>',
    brief: '<rect x="3" y="7" width="18" height="12.5" rx="2"/><path d="M9 7V5.5A1.5 1.5 0 0110.5 4h3A1.5 1.5 0 0115 5.5V7M3 12.5h18"/>',
    copy: '<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V5.5A1.5 1.5 0 0014.5 4h-9A1.5 1.5 0 004 5.5v9A1.5 1.5 0 005.5 16H8"/>',
    award: '<circle cx="12" cy="9" r="5.5"/><path d="M8.5 13.5L7 21l5-2.5 5 2.5-1.5-7.5"/>',
    lock: '<rect x="5" y="10.5" width="14" height="10" rx="2"/><path d="M8 10.5V8a4 4 0 018 0v2.5"/>',
    print: '<path d="M7 9V3.5h10V9"/><rect x="3.5" y="9" width="17" height="8" rx="2"/><path d="M7 14h10v6.5H7z"/>',
    book: '<path d="M4 5.5A2 2 0 016 3.5h13v15H6a2 2 0 00-2 2z"/><path d="M4 20.5V5.5"/><path d="M8 8h7"/>',
    download: '<path d="M12 4v11M7.5 10.5L12 15l4.5-4.5M5 19.5h14"/>',
    cloud: '<path d="M7 18.5h10a4 4 0 00.6-7.95A5.5 5.5 0 007 9.5a4.5 4.5 0 000 9z"/>',
    logout: '<path d="M14 4.5h4.5a1.5 1.5 0 011.5 1.5v12a1.5 1.5 0 01-1.5 1.5H14M10 16l4-4-4-4M14 12H4"/>',
    refresh: '<path d="M19.5 12a7.5 7.5 0 11-2.2-5.3M19.5 4.5v4h-4"/>',
    user: '<circle cx="12" cy="8.5" r="3.8"/><path d="M4.5 20a7.5 7.5 0 0115 0"/>'
  };
  function icon(name, cls) {
    return '<svg class="ic ' + (cls || '') + '" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">' + (ICON[name] || '') + '</svg>';
  }
  A.icon = icon;

  /* ---------------- progress store: one per signed-in user ---------------- */
  function blank() { return { lessons: {}, quizzes: {}, scen: {}, lab: {}, name: '', last: null, gen: 0, labGen: 0, updated: 0 }; }
  var USER = A.auth.current();
  var P = blank();
  function keyFor(uid) { return CFG.storageKey + ':' + uid; }
  function loadUser(uid) {
    try { P = Object.assign(blank(), JSON.parse(localStorage.getItem(keyFor(uid)) || '{}')); }
    catch (e) { P = blank(); }
  }
  function writeLocal() { if (!USER) return; try { localStorage.setItem(keyFor(USER.id), JSON.stringify(P)); } catch (e) { /* storage unavailable */ } }
  function setP(d) { P = Object.assign(blank(), d); writeLocal(); }
  /* accessors that stop working if a different user signs in mid-sync */
  function accessors(uid) {
    return {
      get: function () { return USER && USER.id === uid ? P : null; },
      set: function (d) { if (USER && USER.id === uid) setP(d); }
    };
  }
  function save() {
    if (!USER) return;
    P.updated = Date.now();
    writeLocal();
    var acc = accessors(USER.id);
    A.sync.schedule(USER.id, acc.get, acc.set);
  }
  if (USER) loadUser(USER.id);

  A.progress = {
    data: function () { return P; },
    save: save,
    labDone: function (id) { return !!P.lab[id]; },
    markLab: function (id) { if (!P.lab[id]) { P.lab[id] = Date.now(); save(); return true; } return false; },
    resetLab: function () { P.lab = {}; P.labGen = (P.labGen || 0) + 1; save(); }
  };

  /* ---------------- course helpers ---------------- */
  function course(id) { return A.courses.find(function (c) { return c.id === id; }); }
  function lk(cid, m, l) { return cid + ':' + m + ':' + l; }
  function qk(cid, m) { return cid + ':' + m; }
  function lessonHref(cid, m, l) { return '#/learn/' + cid + '/' + (m + 1) + '/' + (l + 1); }
  function quizHref(cid, m) { return '#/quiz/' + cid + '/' + (m + 1); }
  function quizPassed(cid, m) { var q = P.quizzes[qk(cid, m)]; return !!(q && q.passed); }

  function stats(c) {
    var total = 0, done = 0, mins = 0, lessons = 0;
    c.modules.forEach(function (m, mi) {
      m.lessons.forEach(function (l, li) {
        total++; lessons++; mins += l.minutes || 0;
        if (P.lessons[lk(c.id, mi, li)]) done++;
      });
      if (m.quiz && m.quiz.length) { total++; if (quizPassed(c.id, mi)) done++; }
    });
    return { total: total, done: done, pct: total ? Math.round(done / total * 100) : 0, mins: mins, lessons: lessons, modules: c.modules.length };
  }

  function nextStep(c) {
    for (var mi = 0; mi < c.modules.length; mi++) {
      var m = c.modules[mi];
      for (var li = 0; li < m.lessons.length; li++) {
        if (!P.lessons[lk(c.id, mi, li)]) return { type: 'lesson', m: mi, l: li, title: m.lessons[li].title, href: lessonHref(c.id, mi, li) };
      }
      if (m.quiz && m.quiz.length && !quizPassed(c.id, mi)) return { type: 'quiz', m: mi, title: 'Module ' + (mi + 1) + ' quiz', href: quizHref(c.id, mi) };
    }
    return null;
  }

  /* the item after a given lesson or quiz, in course order */
  function after(c, mi, li) {
    var m = c.modules[mi];
    if (li !== null && li + 1 < m.lessons.length) return { href: lessonHref(c.id, mi, li + 1), label: m.lessons[li + 1].title, kind: 'Next lesson' };
    if (li !== null && m.quiz && m.quiz.length) return { href: quizHref(c.id, mi), label: 'Module ' + (mi + 1) + ' quiz', kind: 'Next' };
    if (mi + 1 < c.modules.length) return { href: lessonHref(c.id, mi + 1, 0), label: c.modules[mi + 1].lessons[0].title, kind: 'Next module' };
    return { href: '#/course/' + c.id, label: 'Course overview', kind: 'Finished' };
  }
  function before(c, mi, li) {
    if (li > 0) return { href: lessonHref(c.id, mi, li - 1), label: c.modules[mi].lessons[li - 1].title };
    if (mi > 0) {
      var pm = c.modules[mi - 1];
      if (pm.quiz && pm.quiz.length) return { href: quizHref(c.id, mi - 1), label: 'Module ' + mi + ' quiz' };
      return { href: lessonHref(c.id, mi - 1, pm.lessons.length - 1), label: pm.lessons[pm.lessons.length - 1].title };
    }
    return null;
  }

  function overall() {
    var t = 0, d = 0;
    A.courses.forEach(function (c) { var s = stats(c); t += s.total; d += s.done; });
    return { total: t, done: d, pct: t ? Math.round(d / t * 100) : 0 };
  }

  function bar(pct) { return '<div class="bar" role="progressbar" aria-valuenow="' + pct + '" aria-valuemin="0" aria-valuemax="100"><span style="width:' + pct + '%"></span></div>'; }

  /* ---------------- lightweight markdown ---------------- */
  function inline(s) {
    s = esc(s);
    s = s.replace(/\[\[(.+?)\]\]/g, function (m, k) {
      return '<span class="keys">' + k.split('+').map(function (x) { return '<kbd>' + x.trim() + '</kbd>'; }).join('<span class="plus">+</span>') + '</span>';
    });
    s = s.replace(/\[([^\[\]]+)\]\(((?:#\/|downloads\/|https:\/\/)[^)\s]+)\)/g, function (m, t, href) {
      var dl = /^downloads\//.test(href), ext = /^https:/.test(href);
      return '<a href="' + href + '"' + (dl ? ' download' : '') + (ext ? ' target="_blank" rel="noopener"' : '') + '>' + t + '</a>';
    });
    s = s.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    s = s.replace(/(^|[\s(“])\*([^*\s][^*]*?)\*(?=[\s.,;:!?)”]|$)/g, '$1<em>$2</em>');
    return s;
  }

  var CALLOUT = {
    tip: 'Pro tip', warn: 'Watch out', note: 'Note', example: 'Example',
    script: 'Say it like this', template: 'Template'
  };

  function callout(type, title, body) {
    var kind = CALLOUT[type] || 'Note';
    var copyable = type === 'template' || type === 'script';
    var inner;
    if (type === 'template') inner = '<pre class="tpl">' + esc(body.replace(/^\n+|\n+$/g, '')) + '</pre>';
    else if (type === 'script') inner = '<div class="script-text">' + inline(body.replace(/^\n+|\n+$/g, '')) + '</div>';
    else inner = md(body);
    return '<aside class="callout c-' + type + '">' +
      '<div class="c-head"><span class="c-kind">' + kind + '</span>' +
      (title ? '<span class="c-title">' + inline(title) + '</span>' : '') +
      (copyable ? '<button class="copy-btn" type="button" data-copy>' + icon('copy') + '<span>Copy</span></button>' : '') +
      '</div><div class="c-body">' + inner + '</div></aside>';
  }

  function directive(name, args) {
    var m;
    if (name === 'lab' && (m = args.match(/^(\d+)\s+(.*)$/))) {
      return '<a class="practice-link" href="#/lab/outlook/' + m[1] + '">' + icon('lab') +
        '<span><small>Outlook practice lab, mission ' + m[1] + '</small>' + inline(m[2]) + '</span>' + icon('arrowR', 'go') + '</a>';
    }
    if (name === 'scenario' && (m = args.match(/^(\w+)\s+(.*)$/))) {
      return '<a class="practice-link" href="#/practice/' + m[1] + '">' + icon(m[1] === 'travel' ? 'plane' : 'chat') +
        '<span><small>' + (m[1] === 'travel' ? 'Travel desk missions' : 'Scenario practice') + '</small>' + inline(m[2]) + '</span>' + icon('arrowR', 'go') + '</a>';
    }
    if (name === 'download' && (m = args.match(/^(\S+)\s+(.*)$/))) {
      var parts = m[2].split('|');
      return '<a class="practice-link dl-link" href="' + esc(m[1]) + '" download>' + icon('download') +
        '<span><small>Download</small>' + inline(parts[0].trim()) + (parts[1] ? '<em>' + inline(parts[1].trim()) + '</em>' : '') + '</span>' + icon('arrowR', 'go') + '</a>';
    }
    return '';
  }

  function table(rows) {
    function cells(r) { return r.trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map(function (c) { return c.trim(); }); }
    var data = rows.filter(function (r) { return !/^\|\s*:?-{2,}/.test(r); });
    var head = cells(data[0]);
    var body = data.slice(1).map(cells);
    return '<div class="table-wrap"><table><thead><tr>' + head.map(function (c) { return '<th>' + inline(c) + '</th>'; }).join('') +
      '</tr></thead><tbody>' + body.map(function (r) {
        return '<tr>' + r.map(function (c) { return '<td>' + inline(c) + '</td>'; }).join('') + '</tr>';
      }).join('') + '</tbody></table></div>';
  }

  function listItems(lines) {
    var items = [];
    lines.forEach(function (l) {
      var indent = l.match(/^\s*/)[0].length;
      var m = l.match(/^\s*(-|\d+\.)\s+(.*)$/);
      if (!m) { if (items.length) items[items.length - 1].text += ' ' + l.trim(); return; }
      var it = { ordered: m[1] !== '-', text: m[2], children: [] };
      var c = it.text.match(/^\[( |x)\]\s+(.*)$/);
      if (c) { it.check = true; it.checked = c[1] === 'x'; it.text = c[2]; }
      if (indent >= 2 && items.length) items[items.length - 1].children.push(it); else items.push(it);
    });
    return renderItems(items);
  }
  function renderItems(items) {
    var html = '', i = 0;
    function kind(it) { return it.check ? 'check' : it.ordered ? 'ol' : 'ul'; }
    while (i < items.length) {
      var t = kind(items[i]), grp = [];
      while (i < items.length && kind(items[i]) === t) grp.push(items[i++]);
      var tag = t === 'ol' ? 'ol' : 'ul';
      html += '<' + tag + (t === 'check' ? ' class="checklist"' : '') + '>' + grp.map(function (it) {
        var body = t === 'check'
          ? '<label><input type="checkbox"' + (it.checked ? ' checked' : '') + '><span>' + inline(it.text) + '</span></label>'
          : inline(it.text);
        return '<li>' + body + (it.children.length ? renderItems(it.children) : '') + '</li>';
      }).join('') + '</' + tag + '>';
    }
    return html;
  }

  function md(src) {
    var lines = String(src).replace(/\r/g, '').split('\n');
    var out = [], i = 0, m;
    function isList(l) { return /^\s*(-|\d+\.)\s+/.test(l); }
    function isStart(l) { return /^(#{2,4}\s|:::|\||>|---\s*$|@\w+\s)/.test(l) || isList(l); }
    while (i < lines.length) {
      var line = lines[i];
      if (!line.trim()) { i++; continue; }
      if ((m = line.match(/^:::(\w+)\s*(.*)$/))) {
        var buf = []; i++;
        while (i < lines.length && !/^:::\s*$/.test(lines[i])) { buf.push(lines[i]); i++; }
        i++;
        out.push(callout(m[1], m[2].trim(), buf.join('\n')));
        continue;
      }
      if ((m = line.match(/^@(\w+)\s+(.*)$/))) { out.push(directive(m[1], m[2])); i++; continue; }
      if ((m = line.match(/^(#{2,4})\s+(.*)$/))) { var n = m[1].length; out.push('<h' + n + '>' + inline(m[2]) + '</h' + n + '>'); i++; continue; }
      if (/^---+\s*$/.test(line)) { out.push('<hr>'); i++; continue; }
      if (/^\|/.test(line)) { var rows = []; while (i < lines.length && /^\|/.test(lines[i])) rows.push(lines[i++]); out.push(table(rows)); continue; }
      if (/^>/.test(line)) { var b = []; while (i < lines.length && /^>/.test(lines[i])) b.push(lines[i++].replace(/^>\s?/, '')); out.push('<blockquote>' + inline(b.join(' ')) + '</blockquote>'); continue; }
      if (isList(line)) {
        var lb = [];
        while (i < lines.length && (isList(lines[i]) || (lb.length && /^\s{2,}\S/.test(lines[i])))) lb.push(lines[i++]);
        out.push(listItems(lb)); continue;
      }
      var p = [];
      while (i < lines.length && lines[i].trim() && !isStart(lines[i])) p.push(lines[i++].trim());
      out.push('<p>' + inline(p.join(' ')) + '</p>');
    }
    return out.join('\n');
  }
  A.md = md;

  /* ---------------- shell: nav, theme, search ---------------- */
  var THEME_KEY = 'ea-academy-theme';
  function applyTheme(t) {
    if (t) document.documentElement.setAttribute('data-theme', t);
    else document.documentElement.removeAttribute('data-theme');
    var dark = t ? t === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
    var btn = document.getElementById('themeBtn');
    if (btn) { btn.innerHTML = icon(dark ? 'sun' : 'moon'); btn.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme'); }
  }
  var savedTheme = null;
  try { savedTheme = localStorage.getItem(THEME_KEY); } catch (e) { /* ignore */ }

  function closeNav() { document.body.classList.remove('nav-open'); }

  function setActiveNav(hash) {
    $all('.mainnav a').forEach(function (a) {
      var key = a.getAttribute('data-nav');
      var on = (key === 'courses' && (/^#\/(course|learn|quiz)/.test(hash) || hash === '#/' || hash === '')) ||
        (key === 'practice' && /^#\/(practice|scenario|lab)/.test(hash)) ||
        (key === 'glossary' && /^#\/glossary/.test(hash)) ||
        (key === 'certificate' && /^#\/certificate/.test(hash));
      a.classList.toggle('active', on);
      if (on) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
    });
  }

  function setTitle(t) { document.title = (t ? t + ' | ' : '') + CFG.brand; }

  /* ---------------- views ---------------- */
  var DAY = [
    ['08:45', 'Check both inboxes and the next 48 hours of the calendar', 'ea', '#/learn/ea/3/3'],
    ['10:00', 'Find last quarter’s sales figure before the 10:30 review', 'ea', '#/learn/ea/2/3'],
    ['11:15', 'Resolve a clash between the chairman and a top client', 'ea', '#/learn/ea/3/2'],
    ['12:30', 'Set up a Teams review with the Scheduling Assistant', 'outlook', '#/learn/outlook/4/1'],
    ['14:00', 'Spot a fake payment request from “the director”', 'outlook', '#/learn/outlook/7/3'],
    ['16:00', 'Rebook a fog-cancelled Delhi flight', 'travel', '#/learn/travel/7/1'],
    ['17:30', 'Send tomorrow’s itinerary and day-of-travel message', 'travel', '#/learn/travel/6/1']
  ];

  function home() {
    setTitle('');
    var o = overall();
    var resume = null;
    if (P.last) {
      var mm = P.last.match(/^#\/learn\/(\w+)\/(\d+)\/(\d+)$/);
      if (mm && course(mm[1])) {
        var cc = course(mm[1]); var les = cc.modules[+mm[2] - 1] && cc.modules[+mm[2] - 1].lessons[+mm[3] - 1];
        if (les) resume = { href: P.last, title: les.title, course: cc };
      }
    }
    var firstCourse = A.courses[0];

    var html = '';
    html += '<section class="hero"><div class="wrap hero-grid">';
    html += '<div class="hero-copy">';
    html += '<p class="kicker">' + (o.done ? 'Welcome back, ' : 'Welcome, ') + esc(USER.name) + '. ' + esc(CFG.programTitle) + (CFG.organisation ? ', ' + esc(CFG.organisation) : '') + '</p>';
    html += '<h1>Run a director’s office with calm, speed and judgment.</h1>';
    html += '<p class="lead">Three courses written around the real work of an Executive Assistant: the role itself, Microsoft Outlook, and business travel. Read each lesson, test yourself, practise in realistic simulations, and finish as a professional EA.</p>';
    html += '<div class="cta-row">';
    if (resume) {
      html += '<a class="btn primary" href="' + resume.href + '">Continue: ' + esc(resume.title) + '</a>';
    } else {
      html += '<a class="btn primary" href="#/course/' + firstCourse.id + '">Start with Course 1</a>';
    }
    html += '<a class="btn ghost" href="#/lab/outlook">Open the Outlook practice lab</a></div>';
    if (o.done) html += '<div class="overall"><span>Your progress across the program</span>' + bar(o.pct) + '<strong>' + o.pct + '%</strong></div>';
    html += '</div>';

    html += '<div class="planner" aria-label="A typical day for an Executive Assistant">';
    html += '<div class="planner-head"><span class="planner-day">Thursday</span><span class="planner-note">A typical day. Each task links to the lesson that teaches it.</span></div>';
    html += '<ol class="planner-rows">';
    DAY.forEach(function (r) {
      var c = course(r[2]);
      html += '<li><a href="' + r[3] + '" style="--c:' + COLORS[r[2]] + '"><time>' + r[0] + '</time><span class="pl-task">' + esc(r[1]) + '</span><span class="pl-course">Course ' + c.number + '</span></a></li>';
    });
    html += '</ol></div>';
    html += '</div></section>';

    html += '<section class="wrap section"><div class="section-head"><h2>The three courses</h2><p>Take them in order, or start with the one you need most. Each course ends when every lesson is read and every module quiz is passed.</p></div>';
    html += '<div class="folders">';
    A.courses.forEach(function (c) {
      var s = stats(c);
      var cta = s.done === 0 ? 'Start course' : s.pct === 100 ? 'Review course' : 'Continue course';
      html += '<a class="folder" href="#/course/' + c.id + '" style="--c:' + COLORS[c.id] + '">' +
        '<span class="folder-tab">Course ' + c.number + '</span>' +
        '<div class="folder-body"><h3>' + esc(c.title) + '</h3><p>' + esc(c.tagline) + '</p>' +
        '<dl class="facts"><div><dt>Modules</dt><dd>' + s.modules + '</dd></div><div><dt>Lessons</dt><dd>' + s.lessons + '</dd></div><div><dt>Reading</dt><dd>' + fmtMins(s.mins) + '</dd></div></dl>' +
        '<div class="folder-prog">' + bar(s.pct) + '<span>' + s.pct + '%</span></div>' +
        '<span class="folder-cta">' + cta + icon('arrowR') + '</span></div></a>';
    });
    html += '</div></section>';

    html += '<section class="wrap section how"><div class="section-head"><h2>How the program works</h2></div><ol class="steps">' +
      '<li><h3>Read the lessons</h3><p>Short, practical chapters with scripts, templates and checklists you can copy and use at work the same day.</p></li>' +
      '<li><h3>Pass each module quiz</h3><p>' + CFG.passMark + '% or more to pass. Every answer is explained, and you can retake a quiz as often as you like.</p></li>' +
      '<li><h3>Practise in simulations</h3><p>Handle office scenarios, work inside a practice version of Outlook, and plan trips at the travel desk.</p></li>' +
      '<li><h3>Earn your certificate</h3><p>Complete all three courses to unlock the Professional Executive Assistant certificate.</p></li></ol></section>';

    var labDone = Object.keys(P.lab).length;
    html += '<section class="wrap section"><div class="section-head"><h2>Practice</h2><p>Knowing what to do and doing it under pressure are different skills. Practise both.</p></div><div class="practice-grid">' +
      practiceTile('#/practice/ea', 'chat', 'Scenario practice', A.scenarios.ea.length + ' office situations: clashes, angry callers, confidential requests, fraud and crises.', 'var(--ea)', scenDone('ea') + ' of ' + A.scenarios.ea.length + ' attempted') +
      practiceTile('#/lab/outlook', 'mail', 'Outlook practice lab', 'A working practice mailbox and calendar with 11 guided missions. Nothing is really sent.', 'var(--ol)', labDone + ' of 11 missions done') +
      practiceTile('#/practice/travel', 'plane', 'Travel desk missions', 'Plan a Delhi day trip, an international trade fair and a fog-cancellation rescue.', 'var(--tr)', scenDone('travel') + ' of ' + A.scenarios.travel.length + ' attempted') +
      '</div></section>';

    view.innerHTML = html;
  }

  function scenDone(set) { return A.scenarios[set].filter(function (s, i) { return P.scen[set + ':' + i] != null; }).length; }

  function practiceTile(href, ic, title, text, color, status) {
    return '<a class="ptile" href="' + href + '" style="--c:' + color + '">' + icon(ic, 'ptile-ic') +
      '<h3>' + esc(title) + '</h3><p>' + esc(text) + '</p><span class="ptile-status">' + esc(status) + '</span></a>';
  }

  /* ---- course overview ---- */
  function coursePage(id) {
    var c = course(id);
    if (!c) return notFound();
    setTitle(c.title);
    var s = stats(c), nx = nextStep(c);
    var html = '<section class="course-hero" style="--c:' + COLORS[c.id] + '"><div class="wrap">';
    html += '<a class="back" href="#/">' + icon('arrowL') + 'All courses</a>';
    html += '<p class="course-num">Course ' + c.number + ' of ' + A.courses.length + '</p>';
    html += '<h1>' + esc(c.title) + '</h1><p class="lead">' + esc(c.description) + '</p>';
    html += '<div class="course-stats"><div><strong>' + s.modules + '</strong><span>modules</span></div><div><strong>' + s.lessons + '</strong><span>lessons</span></div><div><strong>' + fmtMins(s.mins) + '</strong><span>reading time</span></div><div class="cs-prog"><strong>' + s.pct + '%</strong><span>complete</span>' + bar(s.pct) + '</div></div>';
    html += '<div class="cta-row">';
    if (nx) html += '<a class="btn primary" href="' + nx.href + '">' + (s.done ? 'Continue: ' : 'Start: ') + esc(nx.title) + '</a>';
    else html += '<span class="done-badge">' + icon('check') + 'Course complete</span>';
    html += '<a class="btn ghost" href="' + c.practice.route + '">' + esc(c.practice.label) + '</a></div>';
    html += '</div></section>';

    html += '<section class="wrap course-body" style="--c:' + COLORS[c.id] + '">';
    html += '<div class="outcomes"><h2>What you will be able to do</h2><ul>' + c.outcomes.map(function (o) { return '<li>' + esc(o) + '</li>'; }).join('') + '</ul></div>';
    html += '<ol class="modules">';
    c.modules.forEach(function (m, mi) {
      var md_ = 0, mt = m.lessons.length + (m.quiz && m.quiz.length ? 1 : 0);
      m.lessons.forEach(function (l, li) { if (P.lessons[lk(c.id, mi, li)]) md_++; });
      if (m.quiz && m.quiz.length && quizPassed(c.id, mi)) md_++;
      html += '<li class="module' + (md_ === mt ? ' is-done' : '') + '"><div class="module-head"><span class="mnum">' + (mi + 1) + '</span><div><h3>' + esc(m.title) + '</h3><p>' + esc(m.summary) + '</p></div><span class="mcount">' + md_ + '/' + mt + '</span></div><ul class="lesson-list">';
      m.lessons.forEach(function (l, li) {
        var done = !!P.lessons[lk(c.id, mi, li)];
        html += '<li><a href="' + lessonHref(c.id, mi, li) + '" class="' + (done ? 'done' : '') + '"><span class="tick">' + (done ? icon('check') : '') + '</span><span class="lt">' + esc(l.title) + '</span><span class="lm">' + l.minutes + ' min</span></a></li>';
      });
      if (m.quiz && m.quiz.length) {
        var q = P.quizzes[qk(c.id, mi)];
        var qd = q && q.passed;
        html += '<li><a href="' + quizHref(c.id, mi) + '" class="quiz-row ' + (qd ? 'done' : '') + '"><span class="tick">' + (qd ? icon('check') : icon('quiz')) + '</span><span class="lt">Module quiz, ' + m.quiz.length + ' questions</span><span class="lm">' + (q ? 'Best ' + q.best + '%' : 'Not taken') + '</span></a></li>';
      }
      html += '</ul></li>';
    });
    html += '</ol></section>';
    view.innerHTML = html;
  }

  /* ---- course outline (lesson + quiz pages) ---- */
  function outline(c, cur) {
    var html = '<details class="outline-box"' + (window.innerWidth > 1024 ? ' open' : '') + '><summary>Course outline<span>' + stats(c).pct + '% complete</span></summary><nav class="outline-nav">';
    c.modules.forEach(function (m, mi) {
      html += '<div class="o-mod' + (cur.m === mi ? ' current' : '') + '"><p class="o-title"><span>' + (mi + 1) + '</span>' + esc(m.title) + '</p><ul>';
      m.lessons.forEach(function (l, li) {
        var on = cur.m === mi && cur.l === li;
        html += '<li><a href="' + lessonHref(c.id, mi, li) + '" class="' + (on ? 'on ' : '') + (P.lessons[lk(c.id, mi, li)] ? 'done' : '') + '"' + (on ? ' aria-current="page"' : '') + '>' + esc(l.title) + '</a></li>';
      });
      if (m.quiz && m.quiz.length) {
        var onq = cur.m === mi && cur.quiz;
        html += '<li><a href="' + quizHref(c.id, mi) + '" class="o-quiz ' + (onq ? 'on ' : '') + (quizPassed(c.id, mi) ? 'done' : '') + '">Module quiz</a></li>';
      }
      html += '</ul></div>';
    });
    html += '</nav></details>';
    return html;
  }

  /* ---- lesson ---- */
  function lessonPage(cid, mi, li) {
    var c = course(cid);
    var m = c && c.modules[mi];
    var l = m && m.lessons[li];
    if (!l) return notFound();
    setTitle(l.title);
    P.last = lessonHref(cid, mi, li); save();
    var key = lk(cid, mi, li), done = !!P.lessons[key];
    var nx = after(c, mi, li), pv = before(c, mi, li);

    var html = '<div class="lesson-layout" style="--c:' + COLORS[c.id] + '">';
    html += '<aside class="outline">' + outline(c, { m: mi, l: li }) + '</aside>';
    html += '<article class="lesson">';
    html += '<nav class="crumbs" aria-label="Breadcrumb"><a href="#/course/' + c.id + '">Course ' + c.number + ': ' + esc(c.title) + '</a><span>/</span><span>Module ' + (mi + 1) + ': ' + esc(m.title) + '</span></nav>';
    html += '<h1>' + esc(l.title) + '</h1>';
    html += '<p class="lesson-meta"><span>Lesson ' + (li + 1) + ' of ' + m.lessons.length + '</span><span>' + icon('clock') + l.minutes + ' min read</span>' + (done ? '<span class="is-done">' + icon('check') + 'Completed</span>' : '') + '</p>';
    html += '<div class="prose">' + md(l.body) + '</div>';
    html += '<footer class="lesson-foot">';
    if (!done) html += '<button class="btn primary" type="button" data-complete>' + icon('check') + 'Mark complete and continue</button>';
    else html += '<a class="btn primary" href="' + nx.href + '">' + esc(nx.kind) + ': ' + esc(nx.label) + '</a>';
    html += '<div class="pager">' + (pv ? '<a href="' + pv.href + '" class="pv">' + icon('arrowL') + '<span><small>Previous</small>' + esc(pv.label) + '</span></a>' : '<span></span>') +
      '<a href="' + nx.href + '" class="nx"><span><small>' + esc(nx.kind) + '</small>' + esc(nx.label) + '</span>' + icon('arrowR') + '</a></div>';
    html += '</footer></article></div>';
    view.innerHTML = html;

    var btn = $('[data-complete]', view);
    if (btn) btn.addEventListener('click', function () {
      P.lessons[key] = Date.now(); save();
      toast('Lesson completed');
      location.hash = nx.href;
    });
  }

  /* ---- quiz ---- */
  function quizPage(cid, mi) {
    var c = course(cid);
    var m = c && c.modules[mi];
    if (!m || !m.quiz) return notFound();
    setTitle('Module ' + (mi + 1) + ' quiz');
    var key = qk(cid, mi), prev = P.quizzes[key];
    var nx = after(c, mi, null);

    var html = '<div class="lesson-layout" style="--c:' + COLORS[c.id] + '">';
    html += '<aside class="outline">' + outline(c, { m: mi, quiz: true }) + '</aside>';
    html += '<article class="lesson quiz">';
    html += '<nav class="crumbs" aria-label="Breadcrumb"><a href="#/course/' + c.id + '">Course ' + c.number + ': ' + esc(c.title) + '</a><span>/</span><span>Module ' + (mi + 1) + '</span></nav>';
    html += '<h1>Module ' + (mi + 1) + ' quiz</h1>';
    html += '<p class="quiz-intro">' + esc(m.title) + '. Answer all ' + m.quiz.length + ' questions. You need ' + CFG.passMark + '% to pass.' + (prev ? ' Your best score so far: <strong>' + prev.best + '%</strong>.' : '') + '</p>';
    html += '<form class="qform" novalidate>';
    m.quiz.forEach(function (q, qi) {
      html += '<fieldset class="q" data-q="' + qi + '"><legend><span class="qn">' + (qi + 1) + '</span>' + esc(q.q) + '</legend><div class="opts">';
      q.o.forEach(function (o, oi) {
        html += '<label class="opt"><input type="radio" name="q' + qi + '" value="' + oi + '"><span>' + esc(o) + '</span></label>';
      });
      html += '</div><p class="why" hidden></p></fieldset>';
    });
    html += '<div class="quiz-actions"><button class="btn primary" type="submit">Check answers</button></div></form>';
    html += '<div class="quiz-result" hidden></div>';
    html += '</article></div>';
    view.innerHTML = html;

    var form = $('.qform', view);
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var answers = m.quiz.map(function (q, qi) {
        var sel = form.querySelector('input[name="q' + qi + '"]:checked');
        return sel ? +sel.value : null;
      });
      var missing = answers.indexOf(null);
      if (missing !== -1) {
        toast('Answer every question before checking');
        var fs = form.querySelector('[data-q="' + missing + '"]');
        fs.classList.add('missing'); fs.scrollIntoView({ behavior: 'smooth', block: 'center' });
        setTimeout(function () { fs.classList.remove('missing'); }, 1600);
        return;
      }
      var right = 0;
      m.quiz.forEach(function (q, qi) {
        var fs = form.querySelector('[data-q="' + qi + '"]');
        var ok = answers[qi] === q.a;
        if (ok) right++;
        fs.classList.add(ok ? 'right' : 'wrong');
        $all('.opt', fs).forEach(function (lab, oi) {
          lab.querySelector('input').disabled = true;
          if (oi === q.a) lab.classList.add('is-answer');
          if (oi === answers[qi] && !ok) lab.classList.add('is-chosen');
        });
        var why = $('.why', fs);
        why.hidden = false;
        why.innerHTML = '<strong>' + (ok ? 'Correct.' : 'Not quite.') + '</strong> ' + esc(q.why);
      });
      var pct = Math.round(right / m.quiz.length * 100);
      var passed = pct >= CFG.passMark;
      var best = Math.max(pct, prev ? prev.best : 0);
      P.quizzes[key] = { best: best, passed: passed || !!(prev && prev.passed), at: Date.now() };
      save();
      $('.quiz-actions', view).hidden = true;
      var res = $('.quiz-result', view);
      res.hidden = false;
      res.className = 'quiz-result ' + (passed ? 'pass' : 'fail');
      res.innerHTML = '<div class="score"><strong>' + pct + '%</strong><span>' + right + ' of ' + m.quiz.length + ' correct</span></div>' +
        '<div><h2>' + (passed ? 'Module passed' : 'Not passed yet') + '</h2><p>' +
        (passed ? 'Well done. Review any explanations above, then move on.' : 'You need ' + CFG.passMark + '%. Read the explanations above, revisit the lessons, and try again.') + '</p>' +
        '<div class="cta-row">' + (passed ? '<a class="btn primary" href="' + nx.href + '">' + esc(nx.kind) + ': ' + esc(nx.label) + '</a>' : '') +
        '<button class="btn ' + (passed ? 'ghost' : 'primary') + '" type="button" data-retake>Retake quiz</button>' +
        '<a class="btn ghost" href="#/course/' + c.id + '">Course overview</a></div></div>';
      $('[data-retake]', res).addEventListener('click', function () { quizPage(cid, mi); window.scrollTo(0, 0); });
      res.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }

  /* ---- practice hub ---- */
  function practicePage(set) {
    setTitle('Practice');
    var html = '<section class="wrap page-head"><h1>Practice</h1><p class="lead">Choose a situation and decide what you would do. Every choice is scored and explained, and your best score is saved.</p></section>';
    html += '<section class="wrap section practice-page">';
    var sets = set ? [set] : ['ea', 'travel'];
    if (!set) {
      html += '<a class="lab-banner" href="#/lab/outlook">' + icon('mail', 'lb-ic') + '<div><h2>Outlook practice lab</h2><p>A working practice mailbox and calendar with 11 guided missions: replying, flagging, rules, phishing, scheduling and more.</p></div><span class="btn primary">Open the lab</span></a>';
    }
    sets.forEach(function (sid) {
      var list = A.scenarios[sid];
      var col = sid === 'ea' ? 'var(--ea)' : 'var(--tr)';
      html += '<div class="scen-set" style="--c:' + col + '"><div class="section-head"><h2>' + (sid === 'ea' ? 'Scenario practice' : 'Travel desk missions') + '</h2><p>' +
        (sid === 'ea' ? 'Situations from Course 1: The Executive Assistant.' : 'Trip-planning missions from Course 3: Travel Management. Your choices build a trip plan you can review at the end.') + '</p></div><ol class="scen-list">';
      list.forEach(function (s, i) {
        var best = P.scen[sid + ':' + i];
        html += '<li><a href="#/scenario/' + sid + '/' + (i + 1) + '"><span class="sc-tag">' + esc(s.tag) + '</span><span class="sc-title">' + esc(s.title) + '</span><span class="sc-steps">' + s.steps.length + (s.steps.length === 1 ? ' decision' : ' decisions') + '</span><span class="sc-best">' + (best != null ? 'Best ' + best + '%' : 'Not tried') + '</span></a></li>';
      });
      html += '</ol></div>';
    });
    if (set) html += '<p class="center-link"><a href="#/practice">' + icon('arrowL') + 'All practice</a></p>';
    html += '</section>';
    view.innerHTML = html;
  }

  /* ---- scenario player ---- */
  function scenarioPage(set, idx) {
    var s = A.scenarios[set] && A.scenarios[set][idx];
    if (!s) return notFound();
    setTitle(s.title);
    var col = set === 'ea' ? 'var(--ea)' : 'var(--tr)';
    var state = { step: 0, picks: [] };
    var RATING = { 2: ['Best response', 'best'], 1: ['Acceptable, with risks', 'ok'], 0: ['Risky choice', 'risky'] };

    view.innerHTML = '<div class="wrap narrow scen" style="--c:' + col + '">' +
      '<a class="back" href="#/practice/' + set + '">' + icon('arrowL') + (set === 'ea' ? 'Scenario practice' : 'Travel desk missions') + '</a>' +
      '<p class="scen-tag">' + esc(s.tag) + '</p><h1>' + esc(s.title) + '</h1>' +
      '<div class="brief"><h2>The situation</h2><p>' + esc(s.brief) + '</p></div>' +
      '<div class="scen-steps"></div></div>';
    var box = $('.scen-steps', view);

    function render() {
      var html = '';
      s.steps.forEach(function (st, si) {
        if (si > state.step) return;
        var pick = state.picks[si];
        html += '<section class="sstep' + (pick != null ? ' answered' : '') + '"><p class="sstep-n">Decision ' + (si + 1) + ' of ' + s.steps.length + '</p><h2>' + esc(st.q) + '</h2><div class="sopts">';
        st.options.forEach(function (o, oi) {
          var cls = 'sopt';
          if (pick != null) { cls += oi === pick ? ' chosen r-' + RATING[o.s][1] : (o.s === 2 ? ' is-best' : ' dim'); }
          html += '<button type="button" class="' + cls + '" data-step="' + si + '" data-opt="' + oi + '"' + (pick != null ? ' disabled' : '') + '><span class="so-t">' + esc(o.t) + '</span>' + (o.d ? '<span class="so-d">' + esc(o.d) + '</span>' : '') + '</button>';
        });
        html += '</div>';
        if (pick != null) {
          var o = st.options[pick];
          var bestOpt = st.options.filter(function (x) { return x.s === 2; })[0];
          html += '<div class="feedback r-' + RATING[o.s][1] + '" role="status"><p class="fb-rate">' + RATING[o.s][0] + '</p><p>' + esc(o.f) + '</p>' +
            (o.s < 2 && bestOpt ? '<p class="fb-best"><strong>The strongest response:</strong> ' + esc(bestOpt.t) + '</p>' : '') + '</div>';
          if (si === state.step) {
            html += '<div class="cta-row">' + (si + 1 < s.steps.length
              ? '<button class="btn primary" type="button" data-next>Next decision</button>'
              : '<button class="btn primary" type="button" data-finish>See your result</button>') + '</div>';
          }
        }
        html += '</section>';
      });
      box.innerHTML = html;
    }

    function finish() {
      var total = 0;
      state.picks.forEach(function (p, i) { total += s.steps[i].options[p].s; });
      var pct = Math.round(total / (s.steps.length * 2) * 100);
      var k = set + ':' + idx;
      P.scen[k] = Math.max(pct, P.scen[k] || 0); save();
      var verdict = pct >= 85 ? 'Professional standard' : pct >= 60 ? 'Good, with room to improve' : 'Review and try again';
      var html = '<section class="scen-result"><div class="score"><strong>' + pct + '%</strong><span>' + verdict + '</span></div>';
      html += '<div class="debrief"><h2>The lesson</h2><p>' + esc(s.debrief) + '</p></div>';
      if (set === 'travel') {
        html += '<div class="tripplan"><h2>Your trip plan</h2><ul>' + state.picks.map(function (p, i) {
          var o = s.steps[i].options[p];
          return '<li class="r-' + RATING[o.s][1] + '"><span>' + esc(o.it || o.t) + '</span><em>' + RATING[o.s][0] + '</em></li>';
        }).join('') + '</ul></div>';
      }
      var nextIdx = idx + 1 < A.scenarios[set].length ? idx + 1 : null;
      html += '<div class="cta-row"><button class="btn ' + (pct < 85 ? 'primary' : 'ghost') + '" type="button" data-again>Try again</button>' +
        (nextIdx != null ? '<a class="btn ' + (pct >= 85 ? 'primary' : 'ghost') + '" href="#/scenario/' + set + '/' + (nextIdx + 1) + '">Next: ' + esc(A.scenarios[set][nextIdx].title) + '</a>' : '') +
        '<a class="btn ghost" href="#/practice/' + set + '">All ' + (set === 'ea' ? 'scenarios' : 'missions') + '</a></div></section>';
      box.insertAdjacentHTML('beforeend', html);
      $('.scen-result', box).scrollIntoView({ behavior: 'smooth', block: 'start' });
      $('[data-again]', box).addEventListener('click', function () { scenarioPage(set, idx); window.scrollTo(0, 0); });
    }

    box.addEventListener('click', function (e) {
      var b = e.target.closest('button');
      if (!b) return;
      if (b.hasAttribute('data-opt')) {
        var si = +b.getAttribute('data-step');
        if (state.picks[si] != null) return;
        state.picks[si] = +b.getAttribute('data-opt');
        render();
        var fb = box.querySelectorAll('.feedback');
        if (fb.length) fb[fb.length - 1].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      } else if (b.hasAttribute('data-next')) {
        state.step++; render();
        var secs = box.querySelectorAll('.sstep');
        secs[secs.length - 1].scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else if (b.hasAttribute('data-finish')) {
        b.parentNode.remove();
        finish();
      }
    });
    render();
  }

  /* ---- Outlook lab ---- */
  function labPage(focus) {
    setTitle('Outlook practice lab');
    view.innerHTML = '<div class="lab-page"><div class="lab-intro wrap-wide"><a class="back" href="#/course/outlook">' + icon('arrowL') + 'Course 2: Outlook</a>' +
      '<h1>Outlook practice lab</h1><p>A practice mailbox and calendar that behave like Outlook. Work through the missions one at a time. Nothing here is really sent, and you can reset the lab whenever you like.</p></div>' +
      '<div id="ol-root" class="wrap-wide"></div></div>';
    if (window.OutlookLab) window.OutlookLab.mount(document.getElementById('ol-root'), { focus: focus });
  }

  /* ---- glossary ---- */
  function glossaryPage() {
    setTitle('Glossary');
    var areas = ['All', 'EA', 'Outlook', 'Travel'];
    var html = '<section class="wrap page-head"><h1>Glossary</h1><p class="lead">The terms used across the three courses, in plain language.</p></section>';
    html += '<section class="wrap section"><div class="gl-tools"><input type="search" class="gl-filter" placeholder="Filter terms" aria-label="Filter glossary terms"><div class="chips" role="group" aria-label="Filter by course">' +
      areas.map(function (a, i) { return '<button type="button" class="chip' + (i === 0 ? ' on' : '') + '" data-area="' + a + '">' + a + '</button>'; }).join('') + '</div></div><dl class="glossary"></dl></section>';
    view.innerHTML = html;
    var area = 'All', q = '';
    var list = A.glossary.slice().sort(function (a, b) { return a[0].localeCompare(b[0]); });
    function draw() {
      var items = list.filter(function (g) {
        return (area === 'All' || g[1] === area) && (!q || (g[0] + ' ' + g[2]).toLowerCase().indexOf(q) !== -1);
      });
      $('.glossary', view).innerHTML = items.length ? items.map(function (g) {
        var c = g[1] === 'EA' ? 'var(--ea)' : g[1] === 'Outlook' ? 'var(--ol)' : 'var(--tr)';
        return '<div class="gl-item" style="--c:' + c + '"><dt>' + esc(g[0]) + '<span>' + esc(g[1]) + '</span></dt><dd>' + esc(g[2]) + '</dd></div>';
      }).join('') : '<p class="empty">No terms match “' + esc(q) + '”. Try a shorter word.</p>';
    }
    $('.gl-filter', view).addEventListener('input', function (e) { q = e.target.value.trim().toLowerCase(); draw(); });
    $('.chips', view).addEventListener('click', function (e) {
      var b = e.target.closest('[data-area]'); if (!b) return;
      area = b.getAttribute('data-area');
      $all('.chip', view).forEach(function (x) { x.classList.toggle('on', x === b); });
      draw();
    });
    draw();
  }

  /* ---- search ---- */
  var INDEX = null;
  function plain(s) {
    return s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/:::\w+[^\n]*\n|:::/g, ' ').replace(/^@\w+.*$/gm, ' ').replace(/\[\[|\]\]/g, '').replace(/\*\*/g, '')
      .replace(/^#{2,4}\s/gm, '').replace(/\|/g, ' ').replace(/^\s*-\s(\[.\]\s)?/gm, '').replace(/-{3,}/g, ' ').replace(/\s+/g, ' ');
  }
  function buildIndex() {
    INDEX = [];
    A.courses.forEach(function (c) {
      c.modules.forEach(function (m, mi) {
        m.lessons.forEach(function (l, li) {
          INDEX.push({ c: c, mi: mi, li: li, title: l.title, mod: m.title, text: plain(l.body) });
        });
      });
    });
  }
  function searchPage(q) {
    setTitle('Search');
    if (!INDEX) buildIndex();
    $all('[data-search-form] input').forEach(function (inp) { if (inp.value !== q) inp.value = q; });
    var terms = q.toLowerCase().split(/\s+/).filter(function (t) { return t.length > 1; });
    var results = [];
    if (terms.length) {
      INDEX.forEach(function (it) {
        var hay = (it.title + ' ' + it.text).toLowerCase(), score = 0, all = true;
        terms.forEach(function (t) {
          var n = hay.split(t).length - 1;
          if (!n) all = false;
          score += n + (it.title.toLowerCase().indexOf(t) !== -1 ? 10 : 0);
        });
        if (all) results.push({ it: it, score: score });
      });
      results.sort(function (a, b) { return b.score - a.score; });
    }
    function snippet(text) {
      var low = text.toLowerCase(), pos = low.indexOf(terms[0]);
      var start = Math.max(0, pos - 80), sn = text.slice(start, start + 220);
      var out = esc((start ? '…' : '') + sn + '…');
      terms.forEach(function (t) {
        out = out.replace(new RegExp('(' + t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'ig'), '<mark>$1</mark>');
      });
      return out;
    }
    var html = '<section class="wrap page-head"><h1>Search</h1><p class="lead">' + (terms.length ? results.length + ' lesson' + (results.length === 1 ? '' : 's') + ' mention “' + esc(q) + '”.' : 'Type at least two letters in the search box.') + '</p></section>';
    html += '<section class="wrap section"><ol class="results">';
    results.slice(0, 40).forEach(function (r) {
      var it = r.it;
      html += '<li style="--c:' + COLORS[it.c.id] + '"><a href="' + lessonHref(it.c.id, it.mi, it.li) + '"><span class="r-where">Course ' + it.c.number + ', module ' + (it.mi + 1) + ': ' + esc(it.mod) + '</span><span class="r-title">' + esc(it.title) + '</span><span class="r-snip">' + snippet(it.text) + '</span></a></li>';
    });
    html += '</ol>' + (terms.length && !results.length ? '<p class="empty">No lessons match. Try a single word such as “visa”, “minutes”, “rules” or “calendar”, or browse the <a href="#/glossary">glossary</a>.</p>' : '') + '</section>';
    view.innerHTML = html;
  }

  /* ---- certificate ---- */
  function certificatePage() {
    setTitle('Certificate');
    var all = A.courses.map(function (c) { return { c: c, s: stats(c) }; });
    var complete = all.every(function (x) { return x.s.pct === 100; });
    var html = '<section class="wrap page-head"><h1>Your certificate</h1><p class="lead">Complete every lesson and pass every module quiz in all three courses to unlock the ' + esc(CFG.programTitle) + ' certificate.</p></section>';
    html += '<section class="wrap section cert-page"><div class="cert-status">';
    all.forEach(function (x) {
      var nx = nextStep(x.c);
      html += '<div class="cs-row" style="--c:' + COLORS[x.c.id] + '"><div><strong>Course ' + x.c.number + ': ' + esc(x.c.title) + '</strong><span>' + x.s.done + ' of ' + x.s.total + ' items complete</span></div>' + bar(x.s.pct) +
        (nx ? '<a href="' + nx.href + '">Continue</a>' : '<span class="ok">' + icon('check') + 'Done</span>') + '</div>';
    });
    html += '</div>';
    if (complete) {
      html += '<div class="cert-form"><label for="certName">Name as it should appear on the certificate</label><div class="cf-row"><input id="certName" type="text" autocomplete="name" value="' + esc(certName()) + '" placeholder="Your full name"><button class="btn primary" type="button" data-print>' + icon('print') + 'Print or save as PDF</button></div></div>';
    } else {
      html += '<p class="cert-locked">' + icon('lock') + 'Preview. The certificate unlocks when all three courses are complete.</p>';
    }
    var finishedDates = [];
    Object.keys(P.lessons).forEach(function (k) { finishedDates.push(P.lessons[k]); });
    Object.keys(P.quizzes).forEach(function (k) { if (P.quizzes[k].at) finishedDates.push(P.quizzes[k].at); });
    var when = finishedDates.length ? new Date(Math.max.apply(null, finishedDates)) : new Date();
    var dateStr = when.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
    html += '<div class="certificate' + (complete ? '' : ' locked') + '" aria-label="Certificate">' +
      '<div class="cert-inner"><p class="cert-brand">' + esc(CFG.brand) + (CFG.organisation ? ' &middot; ' + esc(CFG.organisation) : '') + '</p>' +
      '<p class="cert-kind">Certificate of completion</p><p class="cert-small">This certifies that</p>' +
      '<p class="cert-name">' + esc(complete ? (certName() || 'Your name') : 'Your name') + '</p>' +
      '<p class="cert-small">has successfully completed the</p><p class="cert-prog">' + esc(CFG.programTitle) + '</p>' +
      '<ul class="cert-courses">' + A.courses.map(function (c) { return '<li>' + esc(c.title) + '</li>'; }).join('') + '</ul>' +
      '<div class="cert-foot"><div><span class="line"></span><span>' + esc(dateStr) + '</span><small>Date</small></div>' +
      '<div class="seal" aria-hidden="true">' + icon('award') + '</div>' +
      '<div><span class="line"></span><span>' + esc(CFG.brand) + '</span><small>Issued by</small></div></div></div></div>';
    html += '</section>';
    view.innerHTML = html;

    var nameIn = $('#certName');
    if (nameIn) nameIn.addEventListener('input', function () {
      P.name = nameIn.value.trim(); save();
      $('.cert-name', view).textContent = P.name || 'Your name';
    });
    var pr = $('[data-print]', view);
    if (pr) pr.addEventListener('click', function () {
      if (!certName()) { toast('Enter your name first'); nameIn.focus(); return; }
      window.print();
    });
  }
  function certName() { return P.name || (USER ? USER.name : ''); }

  /* ---- sign-in ---- */
  function loginPage() {
    setTitle('Sign in');
    document.body.classList.add('signed-out');
    var users = A.auth.users();
    var colors = ['var(--ea)', 'var(--ol)', 'var(--tr)'];
    view.innerHTML = '<section class="login"><div class="login-card">' +
      '<span class="brand-mark big" aria-hidden="true"><i></i><i></i><i></i></span>' +
      '<h1>Sign in to ' + esc(CFG.brand) + '</h1>' +
      '<p class="login-sub">Choose your name and enter your password. Your lessons, quiz scores and practice results are saved to your own account' + (A.auth.cloudReady() ? ' and follow you to any device.' : '.') + '</p>' +
      '<form class="login-form" novalidate><fieldset class="who"><legend>Who is learning?</legend><div class="who-grid">' +
      users.map(function (u, i) {
        return '<label class="who-opt" style="--c:' + colors[i % 3] + '"><input type="radio" name="who" value="' + esc(u.id) + '"' + (users.length === 1 ? ' checked' : '') + '>' +
          '<span class="who-av">' + esc(u.name.charAt(0)) + '</span><span class="who-name">' + esc(u.name) + '</span></label>';
      }).join('') + '</div></fieldset>' +
      '<label class="pw-label" for="pw">Password</label><div class="pw-row"><input id="pw" type="password" autocomplete="current-password"><button type="button" class="pw-toggle" aria-pressed="false">Show</button></div>' +
      '<p class="login-err" role="alert" hidden></p>' +
      '<button class="btn primary wide" type="submit">Sign in</button></form></div></section>';
    var form = $('.login-form', view), err = $('.login-err', view), pw = $('#pw', view), btn = $('button[type=submit]', form);
    function fail(msg) { err.textContent = msg; err.hidden = false; form.classList.remove('shake'); void form.offsetWidth; form.classList.add('shake'); }
    $all('input[name="who"]', view).forEach(function (r) { r.addEventListener('change', function () { err.hidden = true; pw.focus(); }); });
    $('.pw-toggle', view).addEventListener('click', function (e) {
      var show = pw.type === 'password';
      pw.type = show ? 'text' : 'password';
      e.currentTarget.textContent = show ? 'Hide' : 'Show';
      e.currentTarget.setAttribute('aria-pressed', String(show));
    });
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var who = form.querySelector('input[name="who"]:checked');
      if (!who) return fail('Choose your name first.');
      if (!pw.value) { pw.focus(); return fail('Enter your password.'); }
      btn.disabled = true; btn.textContent = 'Signing in';
      A.auth.signIn(who.value, pw.value).then(function (ok) {
        btn.disabled = false; btn.textContent = 'Sign in';
        if (!ok) { pw.value = ''; pw.focus(); return fail('That password isn’t right. Try again.'); }
        startSession();
        route();
        toast('Welcome, ' + USER.name);
      }, function (e) {
        btn.disabled = false; btn.textContent = 'Sign in';
        fail(e.message);
      });
    });
  }

  function startSession() {
    USER = A.auth.current();
    loadUser(USER.id);
    A.sync.reset();
    document.body.classList.remove('signed-out');
    renderChip();
    runSync();
  }

  function signOut() {
    if (USER) A.sync.flush(USER.id, accessors(USER.id).get);
    A.auth.signOut();
    USER = null; P = blank();
    A.sync.reset();
    renderChip();
    if (location.hash && location.hash !== '#/') location.hash = '#/'; else route();
    toast('Signed out');
  }

  /* ---- cloud save ---- */
  var SAFE_REFRESH = /^(#\/?)?$|^#\/(course|practice|certificate|account)/;
  function runSync() {
    if (!USER || !A.sync.enabled()) return Promise.resolve(false);
    var uid = USER.id, acc = accessors(uid);
    return A.sync.syncNow(uid, acc.get, acc.set).then(function (changed) {
      if (changed && USER && USER.id === uid && SAFE_REFRESH.test(location.hash || '')) route(true);
      return changed;
    });
  }

  function syncLabel(s) {
    return ({ off: 'Saved on this device only', idle: 'Cloud save is on', pending: 'Saving to GitHub', syncing: 'Saving to GitHub', ok: 'Saved to GitHub', error: 'Cloud save problem' })[s.status] || '';
  }

  function renderChip() {
    var chip = document.getElementById('acctChip');
    if (!chip) return;
    if (!USER) { chip.hidden = true; chip.innerHTML = ''; return; }
    var s = A.sync.state();
    chip.hidden = false;
    chip.innerHTML = '<span class="acct-av">' + esc(USER.name.charAt(0)) + '<i class="sync-dot s-' + s.status + '"></i></span><span class="acct-name">' + esc(USER.name) + '</span>';
    chip.title = USER.name + ': ' + syncLabel(s) + (s.status === 'error' ? '. ' + s.error : '');
    chip.setAttribute('aria-label', 'Account, ' + USER.name + '. ' + syncLabel(s));
  }

  function fmtTime(d) { return d ? d.toLocaleTimeString('en-IN', { hour: 'numeric', minute: '2-digit' }) : ''; }

  function syncPanelInner() {
    var s = A.sync.state(), h = '';
    if (A.sync.enabled()) {
      var line = s.status === 'ok' ? 'Saved to GitHub at ' + esc(fmtTime(s.at)) + '.'
        : s.status === 'error' ? esc(s.error)
        : (s.status === 'syncing' || s.status === 'pending') ? 'Saving to GitHub.'
        : 'Cloud save is on.';
      h += '<p class="sync-line s-' + s.status + '"><i class="sync-dot s-' + s.status + '"></i><span>' + line + '</span></p>';
      h += '<p class="muted-text">Your progress saves to GitHub automatically a few seconds after every change, and loads on any computer or phone you sign in on. There is nothing to set up.</p>';
      h += '<div class="cta-row"><button class="btn ghost" type="button" data-sync-now>' + icon('refresh') + 'Sync now</button></div>';
    } else {
      h += '<p class="sync-line s-off"><i class="sync-dot s-off"></i><span>Progress is saved in this browser only.</span></p>';
      h += '<p class="muted-text">Cloud save has not been switched on for this site yet. The site owner runs the one-time setup in the README, and after that everyone’s progress saves to GitHub automatically.</p>';
    }
    return h;
  }

  function refreshSyncPanel() {
    var p = document.getElementById('syncPanel');
    if (p) { p.innerHTML = syncPanelInner(); }
  }

  /* ---- account page ---- */
  function accountPage() {
    setTitle('Account');
    var lt = 0, ld = 0, qt = 0, qd = 0;
    A.courses.forEach(function (c) {
      c.modules.forEach(function (m, mi) {
        m.lessons.forEach(function (l, li) { lt++; if (P.lessons[lk(c.id, mi, li)]) ld++; });
        if (m.quiz && m.quiz.length) { qt++; if (quizPassed(c.id, mi)) qd++; }
      });
    });
    var st = A.scenarios.ea.length + A.scenarios.travel.length, sd = Object.keys(P.scen).length;
    var labN = Object.keys(P.lab).length, labT = window.OutlookLab ? window.OutlookLab.missions.length : 11;
    var o = overall();
    var html = '<section class="wrap page-head"><h1>Your account</h1><p class="lead">Signed in as <strong>' + esc(USER.name) + '</strong>. You have completed ' + o.pct + '% of the program.</p></section>';
    html += '<section class="wrap section acct-page"><div class="acct-grid">';
    html += '<div class="panel"><h2>' + icon('user') + 'Progress</h2><dl class="stats">' +
      '<div><dt>Lessons read</dt><dd>' + ld + ' of ' + lt + '</dd></div>' +
      '<div><dt>Module quizzes passed</dt><dd>' + qd + ' of ' + qt + '</dd></div>' +
      '<div><dt>Scenarios attempted</dt><dd>' + sd + ' of ' + st + '</dd></div>' +
      '<div><dt>Outlook lab missions</dt><dd>' + labN + ' of ' + labT + '</dd></div></dl>' +
      bar(o.pct) + '<div class="cta-row"><button class="btn ghost" type="button" data-signout>' + icon('logout') + 'Sign out</button></div></div>';
    html += '<div class="panel"><h2>' + icon('cloud') + 'Cloud save</h2><div id="syncPanel">' + syncPanelInner() + '</div></div>';
    html += '<div class="panel"><h2>' + icon('download') + 'Backup</h2><p class="muted-text">Download a copy of your progress, or restore one. Restoring adds to what you already have; nothing is lost.</p>' +
      '<div class="cta-row"><button class="btn ghost" type="button" data-backup>Download my progress</button><label class="btn ghost file-btn">Restore from a file<input type="file" accept=".json,application/json" data-restore hidden></label></div></div>';
    html += '<div class="panel danger"><h2>Start over</h2><p class="muted-text">Clear every lesson, quiz score, scenario and lab mission for ' + esc(USER.name) + ' on all devices. This cannot be undone.</p>' +
      '<div class="cta-row"><button class="btn ghost danger-btn" type="button" data-reset>Reset all my progress</button></div></div>';
    html += '</div></section>';
    view.innerHTML = html;

    $('[data-signout]', view).addEventListener('click', signOut);
    $('[data-backup]', view).addEventListener('click', function () {
      var blob = new Blob([JSON.stringify(P, null, 1)], { type: 'application/json' });
      var a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'ea-academy-' + USER.id + '-' + new Date().toISOString().slice(0, 10) + '.json';
      document.body.appendChild(a); a.click();
      setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 500);
    });
    $('[data-restore]', view).addEventListener('change', function (e) {
      var f = e.target.files && e.target.files[0];
      if (!f) return;
      var rd = new FileReader();
      rd.onload = function () {
        try {
          var d = JSON.parse(rd.result);
          if (!d || typeof d !== 'object' || !d.lessons) throw new Error('bad');
          d.gen = P.gen; d.labGen = P.labGen;
          P = Object.assign(blank(), A.mergeProgress(P, d));
          save(); toast('Progress restored'); accountPage();
        } catch (err) { toast('That file is not an EA Academy progress file', 'bad'); }
      };
      rd.readAsText(f);
    });
    $('[data-reset]', view).addEventListener('click', function () {
      if (window.confirm('Reset all lessons, quizzes, scenarios and lab missions for ' + USER.name + '? This cannot be undone.')) {
        var g = (P.gen || 0) + 1;
        P = blank(); P.gen = g;
        save(); toast('Progress reset'); accountPage();
      }
    });
    document.getElementById('syncPanel').addEventListener('click', function (e) {
      if (e.target.closest('[data-sync-now]')) runSync();
    });
  }

  function notFound() {
    setTitle('Not found');
    view.innerHTML = '<section class="wrap page-head"><h1>Page not found</h1><p class="lead">This page doesn’t exist. Go back to <a href="#/">all courses</a>.</p></section>';
  }

  /* ---------------- router ---------------- */
  var routes = [
    [/^(#\/?)?$/, function () { home(); }],
    [/^#\/course\/(\w+)$/, function (m) { coursePage(m[1]); }],
    [/^#\/learn\/(\w+)\/(\d+)\/(\d+)$/, function (m) { lessonPage(m[1], +m[2] - 1, +m[3] - 1); }],
    [/^#\/quiz\/(\w+)\/(\d+)$/, function (m) { quizPage(m[1], +m[2] - 1); }],
    [/^#\/practice$/, function () { practicePage(null); }],
    [/^#\/practice\/(ea|travel)$/, function (m) { practicePage(m[1]); }],
    [/^#\/scenario\/(ea|travel)\/(\d+)$/, function (m) { scenarioPage(m[1], +m[2] - 1); }],
    [/^#\/lab\/outlook(?:\/(\d+))?$/, function (m) { labPage(m[1] ? +m[1] : null); }],
    [/^#\/glossary$/, function () { glossaryPage(); }],
    [/^#\/certificate$/, function () { certificatePage(); }],
    [/^#\/search\/(.*)$/, function (m) { searchPage(decodeURIComponent(m[1])); }],
    [/^#\/account$/, function () { accountPage(); }]
  ];

  function route(keepScroll) {
    if (window.OutlookLab) window.OutlookLab.unmount();
    closeNav();
    if (!USER) { loginPage(); window.scrollTo(0, 0); return; }
    document.body.classList.remove('signed-out');
    var hash = location.hash || '#/';
    var y = window.scrollY;
    for (var i = 0; i < routes.length; i++) {
      var m = hash.match(routes[i][0]);
      if (m) {
        routes[i][1](m);
        setActiveNav(hash);
        window.scrollTo(0, keepScroll === true ? y : 0);
        if (keepScroll !== true) view.focus({ preventScroll: true });
        return;
      }
    }
    notFound();
  }

  /* ---------------- global events ---------------- */
  document.addEventListener('click', function (e) {
    var cb = e.target.closest('[data-copy]');
    if (cb) {
      var box = cb.closest('.callout');
      var src = box.querySelector('.tpl, .script-text');
      copyText(src.innerText);
    }
  });

  window.addEventListener('hashchange', function () { route(false); });
  document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('brandName').textContent = CFG.brand;
    applyTheme(savedTheme);
    document.getElementById('themeBtn').addEventListener('click', function () {
      var cur = document.documentElement.getAttribute('data-theme') ||
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      var next = cur === 'dark' ? 'light' : 'dark';
      try { localStorage.setItem(THEME_KEY, next); } catch (err) { /* ignore */ }
      applyTheme(next);
    });
    document.getElementById('menuBtn').addEventListener('click', function () {
      document.body.classList.toggle('nav-open');
    });
    $all('[data-search-form]').forEach(function (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var q = form.querySelector('input').value.trim();
        if (q) location.hash = '#/search/' + encodeURIComponent(q);
      });
    });
    document.getElementById('yr').textContent = new Date().getFullYear();
    A.sync.on(function () { renderChip(); refreshSyncPanel(); });
    renderChip();
    route();
    if (USER) runSync();
    document.addEventListener('visibilitychange', function () {
      if (!USER) return;
      if (document.visibilityState === 'hidden') A.sync.flush(USER.id, accessors(USER.id).get);
      else if (A.sync.enabled() && A.sync.sinceLastPull() > 60000) runSync();
    });
  });
})();
