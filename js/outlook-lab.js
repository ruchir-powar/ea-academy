/* ==========================================================
   EA Academy — Outlook practice lab
   A self-contained practice mailbox and calendar with guided
   missions. Nothing is sent anywhere.
   ========================================================== */
(function () {
  'use strict';

  var A = window.ACADEMY;
  var DOMAIN = 'yourcompany.in';
  var ME = { name: 'Neha Joshi', email: 'neha.joshi@' + DOMAIN };
  var DIRECTOR = 'vikram.shah@' + DOMAIN;
  var CONTACTS = [
    { name: 'Vikram Shah', email: DIRECTOR, role: 'Managing Director' },
    { name: 'Rajesh Mehta', email: 'rajesh.mehta@horizonretail.com', role: 'Horizon Retail' },
    { name: 'Anita Desai', email: 'anita.desai@' + DOMAIN, role: 'Finance' },
    { name: 'Karan Malhotra', email: 'karan.malhotra@' + DOMAIN, role: 'Sales' },
    { name: 'Sunita Rao', email: 'sunita.rao@' + DOMAIN, role: 'HR' },
    { name: 'Accounts Team', email: 'accounts@' + DOMAIN, role: 'Accounts' }
  ];
  var FOLDERS = [
    { id: 'inbox', name: 'Inbox' }, { id: 'drafts', name: 'Drafts' }, { id: 'sent', name: 'Sent Items' },
    { id: 'archive', name: 'Archive' }, { id: 'junk', name: 'Junk Email' }, { id: 'deleted', name: 'Deleted Items' },
    { id: 'clients', name: 'Clients', custom: true }, { id: 'finance', name: 'Finance', custom: true }, { id: 'travel', name: 'Travel', custom: true }
  ];
  var CATS = [
    { id: 'Urgent', color: '#c4314b' }, { id: 'Director action', color: '#c55a11' }, { id: 'Waiting', color: '#a88600' },
    { id: 'Finance', color: '#2e7d32' }, { id: 'Travel', color: '#1565c0' }, { id: 'Clients', color: '#7b4fb0' }
  ];
  var FILES = ['Expense_Report_Nov.pdf', 'Board_Agenda_Dec.docx', 'Horizon_Quotation_v3.pdf'];

  /* other people's busy times, by weekday index (0 = Monday) */
  var BUSY = {};
  BUSY['karan.malhotra@' + DOMAIN] = { 1: [[14, 15]], 3: [[11, 12], [15, 16]] };
  BUSY['anita.desai@' + DOMAIN] = { 2: [[10, 11]], 3: [[14, 15.5]] };
  BUSY['rajesh.mehta@horizonretail.com'] = { 3: [[9, 12]] };
  BUSY['sunita.rao@' + DOMAIN] = { 3: [[12, 13]] };
  BUSY['accounts@' + DOMAIN] = {};

  /* ---------------- helpers ---------------- */
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function toast(m, k) { if (A.toast) A.toast(m, k); }
  function initials(n) { return n.split(/\s+/).map(function (w) { return w[0]; }).join('').slice(0, 2).toUpperCase(); }
  function hue(s) { var h = 0; for (var i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) % 360; return h; }
  function nameOf(email) { var c = CONTACTS.filter(function (x) { return x.email === email; })[0]; return c ? c.name : email; }
  function catColor(id) { var c = CATS.filter(function (x) { return x.id === id; })[0]; return c ? c.color : '#777'; }
  function folderName(id) { var f = FOLDERS.filter(function (x) { return x.id === id; })[0]; return f ? f.name : id; }
  function fmtTime(t) {
    var h = Math.floor(t), m = Math.round((t - h) * 60);
    var hh = h > 12 ? h - 12 : h;
    return hh + ':' + (m < 10 ? '0' : '') + m + (h >= 12 ? ' pm' : ' am');
  }
  function nowStr() {
    var d = new Date(), h = d.getHours(), m = d.getMinutes();
    return (h % 12 || 12) + ':' + (m < 10 ? '0' : '') + m + (h >= 12 ? ' pm' : ' am');
  }

  var I = {
    compose: '<path d="M4 20h4L18.5 9.5a2.1 2.1 0 00-3-3L5 17v3z"/>',
    reply: '<path d="M10 7L4 12l6 5"/><path d="M4 12h9a7 7 0 017 7"/>',
    replyall: '<path d="M12 7l-6 5 6 5"/><path d="M7 7l-5 5 5 5"/><path d="M6 12h8a7 7 0 017 7"/>',
    forward: '<path d="M14 7l6 5-6 5"/><path d="M20 12h-9a7 7 0 00-7 7"/>',
    trash: '<path d="M4.5 7h15M9.5 7V4.5h5V7M6.5 7l1 13h9l1-13"/>',
    archive: '<rect x="3.5" y="4.5" width="17" height="4" rx="1"/><path d="M5 8.5V19a1 1 0 001 1h12a1 1 0 001-1V8.5M10 12.5h4"/>',
    folder: '<path d="M3.5 7a2 2 0 012-2H10l2 2h6.5a2 2 0 012 2v8.5a2 2 0 01-2 2h-13a2 2 0 01-2-2z"/>',
    tag: '<path d="M3.5 12.5V4.5h8l9 9-8 8z"/><circle cx="8" cy="9" r="1.3"/>',
    flag: '<path d="M5.5 21V4M5.5 4.5h11l-2.5 4 2.5 4h-11"/>',
    unread: '<rect x="3" y="5.5" width="18" height="13" rx="2"/><path d="M3.5 7l8.5 6 8.5-6"/>',
    shield: '<path d="M12 3l7.5 3v6c0 4.5-3.2 7.8-7.5 9-4.3-1.2-7.5-4.5-7.5-9V6z"/><path d="M12 8v5M12 16v.2"/>',
    rules: '<path d="M4 6h10M4 12h7M4 18h10"/><path d="M17 9l3 3-3 3"/>',
    away: '<path d="M7 21V4.5h10V21M4 21h16"/><circle cx="14" cy="13" r=".9" fill="currentColor"/>',
    cal: '<rect x="3.5" y="5" width="17" height="15.5" rx="2"/><path d="M3.5 10h17M8 3v4M16 3v4"/>',
    mail: '<rect x="3" y="5.5" width="18" height="13" rx="2"/><path d="M3.5 7l8.5 6 8.5-6"/>',
    clip: '<path d="M20 11.5l-8.2 8.2a5 5 0 01-7-7L13 4.5a3.3 3.3 0 014.7 4.7L9.5 17.4a1.7 1.7 0 01-2.4-2.4l7.6-7.6"/>',
    back: '<path d="M14.5 6l-6 6 6 6"/>',
    video: '<rect x="3" y="6.5" width="12" height="11" rx="2"/><path d="M15 10.5l6-3v9l-6-3"/>',
    x: '<path d="M6 6l12 12M18 6L6 18"/>',
    search: '<circle cx="11" cy="11" r="6.5"/><path d="M16 16l4.5 4.5"/>',
    check: '<path d="M5 12.5l4.2 4.2L19 7"/>',
    caret: '<path d="M7 10l5 5 5-5"/>',
    replied: '<path d="M10 8L5 12l5 4"/><path d="M5 12h8a5 5 0 015 5"/>',
    plus: '<path d="M12 5v14M5 12h14"/>'
  };
  function ic(n) {
    return '<svg class="oi" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (I[n] || '') + '</svg>';
  }

  function weekDays() {
    var d = new Date(); d.setHours(0, 0, 0, 0);
    var diff = (8 - d.getDay()) % 7 || 7;
    d.setDate(d.getDate() + diff);
    var out = [];
    for (var i = 0; i < 5; i++) { var x = new Date(d); x.setDate(d.getDate() + i); out.push(x); }
    return out;
  }
  var DAYS = weekDays();
  function dayLabel(i, long) {
    return DAYS[i].toLocaleDateString('en-IN', long ? { weekday: 'long', day: 'numeric', month: 'long' } : { weekday: 'short', day: 'numeric', month: 'short' });
  }

  /* ---------------- seed data ---------------- */
  function mk(o) {
    return Object.assign({ folder: 'inbox', to: [ME.email], cc: [], read: true, flag: false, cats: [], att: [], imp: 'normal', ext: false, phish: false, reported: false, replied: false, date: 'Today' }, o);
  }
  function seedEmails() {
    return [
      mk({ id: 'e1', from: { name: 'Rajesh Mehta', email: 'rajesh.mehta@horizonretail.com' }, ext: true, read: false, time: '10:42 am',
        subject: 'Revised quotation for the Q3 order',
        body: 'Dear Neha,\n\nThank you for sharing the order status yesterday. Before we confirm the Q3 order, we need a revised quotation reflecting the volume discount we discussed with Vikram.\n\nCould you also find 45 minutes for Vikram and me next week? Tuesday or Wednesday afternoon works best for me.\n\nBest regards,\nRajesh Mehta\nHead of Sourcing, Horizon Retail\n+91 98200 11223' }),
      mk({ id: 'e2', from: { name: 'Vikram Shah', email: DIRECTOR }, time: '9:58 am', cats: ['Director action'],
        subject: 'Board meeting agenda: please circulate',
        body: 'Neha,\n\nPlease circulate the agenda for next Friday’s board meeting to all board members by tomorrow evening, and book the board room from 10 to 1 with lunch for eight.\n\nThanks,\nVikram' }),
      mk({ id: 'e3', from: { name: 'Anita Desai', email: 'anita.desai@' + DOMAIN }, read: false, time: '9:31 am', att: ['INV-2291_Grand-Residency.pdf'],
        subject: 'Invoice INV-2291: approval needed by Friday',
        body: 'Hi Neha,\n\nThe Grand Residency invoice for Vikram’s Delhi stay is attached. It needs his approval by Friday so we can release payment on time. The company GSTIN is on the invoice, so we can claim the GST.\n\nThanks,\nAnita\nFinance' }),
      mk({ id: 'e4', from: { name: 'Grand Residency Reservations', email: 'reservations@grandresidency.com' }, ext: true, time: '8:47 am',
        subject: 'Booking confirmed: Grand Residency, New Delhi (GR-558213)',
        body: 'Dear Ms. Joshi,\n\nWe are pleased to confirm the reservation for Mr. Vikram Shah.\n\nConfirmation number: GR-558213\nArrival: Thursday, 12 December\nDeparture: Friday, 13 December\nRoom: Club room, high floor, breakfast included\n\nFree cancellation until 11 December, 6:00 pm.\n\nWarm regards,\nReservations Team\nGrand Residency, Aerocity' }),
      mk({ id: 'e5', from: { name: 'IT Helpdesk', email: 'it-helpdesk@yourcompany-secure.net' }, ext: true, read: false, phish: true, imp: 'high', time: '8:12 am',
        subject: 'Action required: your mailbox password expires today',
        body: 'Dear user,\n\nYour mailbox password will expire in 2 hours. To avoid losing access to your email, verify your account immediately using the link below.\n\n[[LINK]]\n\nIf you do not verify today, your mailbox will be suspended and all messages deleted.\n\nRegards,\nIT Helpdesk' }),
      mk({ id: 'e6', from: { name: 'Travelia Bookings', email: 'bookings@travelia.in' }, ext: true, time: 'Yesterday', date: 'Yesterday',
        subject: 'E-ticket: Mumbai to Delhi, 12 Dec (PNR K7PQ2M)',
        body: 'Your booking is confirmed.\n\nPassenger: Mr. Vikram Rajesh Shah\nFlight: 6E 2135, Mumbai T2 07:15 to Delhi T1 09:25\nPNR: K7PQ2M\nSeat: 3C\n\nWeb check-in opens 48 hours before departure.' }),
      mk({ id: 'e7', from: { name: 'Karan Malhotra', email: 'karan.malhotra@' + DOMAIN }, read: false, time: 'Yesterday', date: 'Yesterday',
        subject: 'Weekly review with Vikram and Anita',
        body: 'Hi Neha,\n\nCan you set up our weekly review with Vikram and Anita for next Thursday? 45 minutes to an hour on Teams is fine. I’m out of the office on Thursday afternoon between 3 and 4.\n\nThanks,\nKaran' }),
      mk({ id: 'e8', from: { name: 'Sunita Rao', email: 'sunita.rao@' + DOMAIN }, time: 'Yesterday', date: 'Yesterday',
        subject: 'December leave calendar',
        body: 'Hi all,\n\nPlease share your planned leave for December by Friday so we can publish the team calendar.\n\nRegards,\nSunita\nHR' }),
      mk({ id: 'e9', from: { name: 'Travelia Offers', email: 'offers@travelia.in' }, ext: true, time: 'Mon', date: 'Monday',
        subject: 'Weekend getaways from ₹2,999',
        body: 'Escape the city this weekend with our handpicked hotel deals.\n\nUnsubscribe from these emails at any time.' })
    ];
  }

  function seedEvents() {
    var ev = [];
    for (var d = 0; d < 5; d++) ev.push({ id: 'sd' + d, day: d, start: 9.5, end: 10, title: 'Daily stand-up', teams: true, attendees: [], cat: 'Director action' });
    ev.push({ id: 'v1', day: 0, start: 11, end: 12.5, title: 'Leadership meeting', loc: 'Board room', attendees: [] });
    ev.push({ id: 'v2', day: 1, start: 11, end: 12.5, title: 'Horizon Retail: client visit', loc: 'Board room', cat: 'Clients', attendees: [] });
    ev.push({ id: 'v3', day: 2, start: 14, end: 15, title: 'Bank relationship manager', loc: 'Director’s cabin', attendees: [] });
    ev.push({ id: 'v4', day: 3, start: 10, end: 11, title: 'Factory review', loc: 'Andheri plant', attendees: [] });
    ev.push({ id: 'v5', day: 3, start: 13, end: 14, title: 'Lunch (blocked)', cat: 'Waiting', attendees: [] });
    ev.push({ id: 'v6', day: 4, start: 16, end: 17, title: 'Board preparation', cat: 'Urgent', attendees: [] });
    return ev;
  }

  function fresh() {
    return {
      view: 'mail', folder: 'inbox', sel: null, search: '', searches: [], opened: {}, mobileRead: false,
      emails: seedEmails(), events: seedEvents(), rules: [],
      oof: { on: false, timed: false, start: '', end: '', intMsg: '', external: true, audience: 'anyone', extMsg: '' },
      modal: null, menu: null, compose: null, meeting: null, ruleForm: null, oofForm: null, eventSel: null,
      openMission: 1, nextId: 100
    };
  }

  /* ---------------- missions ---------------- */
  function em(id) { return S.emails.filter(function (e) { return e.id === id; })[0] || {}; }
  function userText(body) { return String(body || '').split('\n----- Original message')[0]; }

  var MISSIONS = [
    { id: 1, title: 'Read the client’s email', task: 'Open the unread email from Rajesh Mehta about the revised quotation.', hint: 'Click the message in the list. Unread messages are shown in bold with a blue bar.',
      check: function () { return !!S.opened.e1; } },
    { id: 2, title: 'Flag it for follow-up', task: 'Flag Rajesh’s email so it goes onto your to-do list.', hint: 'Select the email, then click Flag on the ribbon, or the small flag on the message in the list.',
      check: function () { return !!em('e1').flag; } },
    { id: 3, title: 'Reply and copy the director', task: 'Reply to Rajesh, add Vikram Shah in Cc, and write a short reply of at least one sentence.', hint: 'Select the email and click Reply. Click Cc, type “Vikram”, write your reply above the original message, then Send.',
      check: function () {
        return S.emails.some(function (e) {
          return e.folder === 'sent' && e.replyTo === 'e1' && e.cc.indexOf(DIRECTOR) !== -1 && userText(e.body).trim().length >= 20;
        });
      } },
    { id: 4, title: 'Categorise the invoice', task: 'Give Anita’s invoice email the green Finance category.', hint: 'Select the email, open Categorize on the ribbon and choose Finance.',
      check: function () { return (em('e3').cats || []).indexOf('Finance') !== -1; } },
    { id: 5, title: 'File the hotel confirmation', task: 'Move the Grand Residency booking confirmation into the Travel folder.', hint: 'Select it, open Move to and choose Travel. On a computer you can also drag it onto the folder.',
      check: function () { return em('e4').folder === 'travel'; } },
    { id: 6, title: 'Create a rule', task: 'Create a rule that moves every email from bookings@travelia.in into the Travel folder, and run it on the inbox now.', hint: 'Ribbon: Rules. Condition: From contains “bookings@travelia.in”. Action: Move to folder, Travel. Keep “Run this rule now” ticked.',
      check: function () {
        return S.rules.some(function (r) { return r.field === 'from' && /travelia/i.test(r.val) && r.action === 'move' && r.target === 'travel'; }) && em('e6').folder === 'travel';
      } },
    { id: 7, title: 'Report the phishing email', task: 'One email in the inbox is a phishing attempt. Find it and report it.', hint: 'Check every sender’s address. A genuine IT team uses the company domain and never asks you to verify your password through a link. Select it, then Report phishing.',
      check: function () { return !!em('e5').reported; } },
    { id: 8, title: 'Search by sender', task: 'Use the search box with the from: operator to find all emails from Anita.', hint: 'Type from:anita in the search box at the top and press Enter.',
      check: function () { return S.searches.some(function (q) { return /from:\s*"?anita/i.test(q); }); } },
    { id: 9, title: 'Send an important email with an attachment', task: 'Send a new email to accounts@yourcompany.in with “expense” in the subject, marked High importance, with the expense report attached.', hint: 'New mail. To: accounts. Add a subject, set Importance to High, click Attach and choose Expense_Report_Nov.pdf, then Send.',
      check: function () {
        return S.emails.some(function (e) {
          return e.folder === 'sent' && e.to.indexOf('accounts@' + DOMAIN) !== -1 && /expense/i.test(e.subject) && e.imp === 'high' && e.att.length > 0;
        });
      } },
    { id: 10, title: 'Schedule a meeting', task: 'In Vikram’s calendar, schedule a Teams meeting called “Weekly Review” on Thursday with Karan Malhotra and Anita Desai, at a time when all three are free.', hint: 'Go to Calendar, then New meeting. Add both attendees, choose Thursday, and use the Scheduling Assistant to find a slot with no grey blocks for anyone. Turn on Teams meeting.',
      check: function () {
        return S.events.some(function (ev) {
          return ev.mine && /weekly\s*review/i.test(ev.title) && ev.day === 3 && ev.teams &&
            ev.attendees.indexOf('karan.malhotra@' + DOMAIN) !== -1 && ev.attendees.indexOf('anita.desai@' + DOMAIN) !== -1 &&
            conflicts(ev).length === 0;
        });
      } },
    { id: 11, title: 'Set up automatic replies', task: 'Turn on automatic replies for a time period, with a message for people outside the organisation that names someone to contact instead.', hint: 'Ribbon: Automatic replies. Turn them on, tick “Send replies only during this time period”, set the dates, and write the outside message (at least a couple of sentences).',
      check: function () { var o = S.oof; return o.on && o.timed && o.start && o.end && o.external && o.extMsg.trim().length >= 30; } }
  ];

  function checkMissions() {
    var newly = [];
    MISSIONS.forEach(function (m) {
      if (!A.progress.labDone(m.id) && m.check()) { A.progress.markLab(m.id); newly.push(m); }
    });
    if (newly.length) {
      toast('Mission complete: ' + newly[newly.length - 1].title, 'good');
      var nx = MISSIONS.filter(function (m) { return !A.progress.labDone(m.id); })[0];
      S.openMission = nx ? nx.id : null;
      render();
    }
  }

  /* ---------------- calendar logic ---------------- */
  function busyBlocks(email, day, excludeId) {
    if (email === DIRECTOR) {
      return S.events.filter(function (x) { return x.day === day && x.id !== excludeId; }).map(function (x) { return [x.start, x.end]; });
    }
    var base = (BUSY[email] && BUSY[email][day]) ? BUSY[email][day].slice() : [];
    S.events.forEach(function (x) {
      if (x.day === day && x.id !== excludeId && x.attendees && x.attendees.indexOf(email) !== -1) base.push([x.start, x.end]);
    });
    return base;
  }
  function conflicts(ev) {
    var people = [DIRECTOR].concat(ev.attendees || []);
    return people.filter(function (p) {
      return busyBlocks(p, ev.day, ev.id).some(function (b) { return ev.start < b[1] && ev.end > b[0]; });
    }).map(nameOf);
  }

  /* ---------------- search ---------------- */
  function matchSearch(e, q) {
    var re = /(\w+):("[^"]+"|\S+)|"([^"]+)"|(\S+)/g, m, ok = true;
    var all = (e.subject + ' ' + e.body + ' ' + e.from.name + ' ' + e.from.email).toLowerCase();
    while ((m = re.exec(q)) !== null) {
      if (m[1]) {
        var k = m[1].toLowerCase(), v = m[2].replace(/"/g, '').toLowerCase();
        if (k === 'from') ok = ok && (e.from.name + ' ' + e.from.email).toLowerCase().indexOf(v) !== -1;
        else if (k === 'to') ok = ok && e.to.concat(e.cc).map(nameOf).concat(e.to, e.cc).join(' ').toLowerCase().indexOf(v) !== -1;
        else if (k === 'subject') ok = ok && e.subject.toLowerCase().indexOf(v) !== -1;
        else if (k === 'hasattachments' || k === 'hasattachment') ok = ok && ((v === 'yes' || v === 'true') ? e.att.length > 0 : e.att.length === 0);
        else if (k === 'category') ok = ok && e.cats.some(function (c) { return c.toLowerCase().indexOf(v) !== -1; });
        else if (k === 'is') ok = ok && (v === 'unread' ? !e.read : v === 'read' ? e.read : v === 'flagged' ? e.flag : true);
        else ok = ok && all.indexOf((k + ':' + v)) !== -1;
      } else {
        ok = ok && all.indexOf((m[3] || m[4]).toLowerCase()) !== -1;
      }
    }
    return ok;
  }

  /* ---------------- state + mount ---------------- */
  var S = null, root = null, onDocClick = null, onDocKey = null;

  function mount(el, opts) {
    root = el;
    S = fresh();
    var nx = MISSIONS.filter(function (m) { return !A.progress.labDone(m.id); })[0];
    S.openMission = (opts && opts.focus) || (nx ? nx.id : 1);
    if (S.openMission === 10) S.view = 'calendar';
    root.addEventListener('click', onClick);
    root.addEventListener('change', onChange);
    root.addEventListener('input', onInput);
    root.addEventListener('submit', onSubmit);
    root.addEventListener('keydown', onKey);
    root.addEventListener('dragstart', onDragStart);
    root.addEventListener('dragover', onDragOver);
    root.addEventListener('drop', onDrop);
    onDocClick = function (e) { if (e.__olHandled) return; if (S && S.menu && root && !root.contains(e.target)) { S.menu = null; render(); } };
    onDocKey = function (e) {
      if (e.key === 'Escape' && S) {
        if (S.menu) { S.menu = null; render(); } else if (S.modal) { closeModal(); render(); }
      }
    };
    document.addEventListener('click', onDocClick);
    document.addEventListener('keydown', onDocKey);
    render();
    if (opts && opts.focus) {
      var m = root.querySelector('#olm-' + opts.focus);
      if (m && window.innerWidth < 1200) m.scrollIntoView({ block: 'center' });
    }
  }
  function unmount() {
    if (onDocClick) document.removeEventListener('click', onDocClick);
    if (onDocKey) document.removeEventListener('keydown', onDocKey);
    onDocClick = onDocKey = null;
    root = null; S = null;
  }

  /* ---------------- forms sync ---------------- */
  function val(f) {
    var el = root && root.querySelector('[data-f="' + f + '"]');
    if (!el) return undefined;
    return el.type === 'checkbox' ? el.checked : el.value;
  }
  function syncForms() {
    if (!root || !S) return;
    var v;
    if (S.modal === 'compose' && S.compose) {
      ['to', 'cc', 'bcc', 'subj', 'body', 'imp'].forEach(function (k) { v = val('c-' + k); if (v !== undefined) S.compose[k] = v; });
    }
    if (S.modal === 'meeting' && S.meeting) {
      var mm = S.meeting;
      if ((v = val('m-title')) !== undefined) mm.title = v;
      if ((v = val('m-att')) !== undefined) mm.attIn = v;
      if ((v = val('m-day')) !== undefined) mm.day = +v;
      if ((v = val('m-start')) !== undefined) mm.start = +v;
      if ((v = val('m-dur')) !== undefined) mm.dur = +v;
      if ((v = val('m-teams')) !== undefined) mm.teams = v;
      if ((v = val('m-loc')) !== undefined) mm.loc = v;
      if ((v = val('m-notes')) !== undefined) mm.notes = v;
    }
    if (S.modal === 'rules' && S.ruleForm) {
      ['name', 'field', 'val', 'action', 'target'].forEach(function (k) { v = val('r-' + k); if (v !== undefined) S.ruleForm[k] = v; });
      if ((v = val('r-run')) !== undefined) S.ruleForm.run = v;
    }
    if (S.modal === 'oof' && S.oofForm) {
      var o = S.oofForm;
      if ((v = val('o-on')) !== undefined) o.on = v;
      if ((v = val('o-timed')) !== undefined) o.timed = v;
      if ((v = val('o-start')) !== undefined) o.start = v;
      if ((v = val('o-end')) !== undefined) o.end = v;
      if ((v = val('o-int')) !== undefined) o.intMsg = v;
      if ((v = val('o-ext')) !== undefined) o.external = v;
      if ((v = val('o-aud')) !== undefined) o.audience = v;
      if ((v = val('o-extmsg')) !== undefined) o.extMsg = v;
    }
  }

  function closeModal() { S.modal = null; S.compose = null; S.meeting = null; S.ruleForm = null; S.oofForm = null; S.eventSel = null; }

  /* ---------------- rendering ---------------- */
  function render() {
    if (!root || !S) return;
    var active = document.activeElement;
    var activeF = active && active.getAttribute && active.getAttribute('data-f');
    var selStart = activeF && active.selectionStart;
    root.innerHTML = '<div class="ol-lab">' + missionsHtml() + appHtml() + '</div>' + modalHtml() + menuHtml();
    if (activeF) {
      var el = root.querySelector('[data-f="' + activeF + '"]');
      if (el) { el.focus(); try { if (selStart != null) el.setSelectionRange(selStart, selStart); } catch (e) { /* not a text field */ } }
    }
  }

  function missionsHtml() {
    var done = MISSIONS.filter(function (m) { return A.progress.labDone(m.id); }).length;
    var pct = Math.round(done / MISSIONS.length * 100);
    var h = '<aside class="olm" aria-label="Missions"><div class="olm-head"><h2>Missions</h2><span>' + done + ' of ' + MISSIONS.length + ' complete</span>' +
      '<div class="bar"><span style="width:' + pct + '%"></span></div></div>' +
      '<div class="olm-dots" role="group" aria-label="Choose a mission">' + MISSIONS.map(function (m) {
        var d = A.progress.labDone(m.id);
        return '<button type="button" data-act="mission-pick" data-id="' + m.id + '" class="' + (d ? 'done ' : '') + (S.openMission === m.id ? 'on' : '') + '" aria-label="Mission ' + m.id + (d ? ', complete' : '') + '">' + m.id + '</button>';
      }).join('') + '</div><ol class="olm-list">';
    MISSIONS.forEach(function (m) {
      var d = A.progress.labDone(m.id), open = S.openMission === m.id;
      h += '<li id="olm-' + m.id + '" class="olm-item' + (d ? ' done' : '') + (open ? ' open' : '') + '">' +
        '<button type="button" class="olm-toggle" data-act="mission" data-id="' + m.id + '" aria-expanded="' + open + '"><span class="olm-n">' + (d ? ic('check') : m.id) + '</span><span class="olm-t">' + esc(m.title) + '</span></button>';
      if (open) {
        h += '<div class="olm-body"><p>' + esc(m.task) + '</p><details><summary>Show a hint</summary><p>' + esc(m.hint) + '</p></details>';
        if (m.id === 10 && S.view !== 'calendar') h += '<button type="button" class="olm-go" data-act="view-cal">Go to the calendar</button>';
        if (m.id !== 10 && S.view === 'calendar') h += '<button type="button" class="olm-go" data-act="view-mail">Go to mail</button>';
        h += '</div>';
      }
      h += '</li>';
    });
    h += '</ol><button type="button" class="olm-reset" data-act="reset">Reset the lab</button></aside>';
    return h;
  }

  function rb(act, icon, label, disabled, extra) {
    return '<button type="button" class="rb' + (extra || '') + '" data-act="' + act + '"' + (disabled ? ' disabled' : '') + '>' + ic(icon) + '<span>' + label + '</span></button>';
  }

  function appHtml() {
    var sel = S.sel && em(S.sel).id ? em(S.sel) : null;
    var noSel = !sel;
    var h = '<div class="ol-app' + (S.view === 'calendar' ? ' is-cal' : '') + (S.mobileRead ? ' show-read' : '') + '">';
    h += '<div class="ol-top"><div class="ol-brand">' + ic('mail') + '<span>Outlook</span><small>practice</small></div>' +
      '<form class="ol-search" data-form="search" role="search">' + ic('search') + '<input name="q" type="search" value="' + esc(S.search) + '" placeholder="Search mail, e.g. from:anita" aria-label="Search mail"></form>' +
      '<div class="ol-me" title="' + esc(ME.name) + '">' + initials(ME.name) + '</div></div>';
    h += '<div class="ol-ribbon" role="toolbar" aria-label="Ribbon">';
    if (S.view === 'mail') {
      h += rb('new', 'compose', 'New mail', false, ' primary') + '<span class="rsep"></span>' +
        rb('reply', 'reply', 'Reply', noSel) + rb('replyall', 'replyall', 'Reply all', noSel) + rb('forward', 'forward', 'Forward', noSel) + '<span class="rsep"></span>' +
        rb('delete', 'trash', 'Delete', noSel) + rb('archive', 'archive', 'Archive', noSel) +
        rb('menu-move', 'folder', 'Move to', noSel, ' has-menu') + rb('menu-cat', 'tag', 'Categorize', noSel, ' has-menu') +
        rb('flag', 'flag', sel && sel.flag ? 'Clear flag' : 'Flag', noSel) + rb('unread', 'unread', sel && !sel.read ? 'Mark read' : 'Mark unread', noSel) +
        rb('report', 'shield', 'Report phishing', noSel) + '<span class="rsep"></span>' +
        rb('rules', 'rules', 'Rules', false) + rb('oof', 'away', 'Automatic replies', false);
    } else {
      h += rb('newmeeting', 'plus', 'New meeting', false, ' primary') + '<span class="rsep"></span><span class="rinfo">' + ic('cal') + 'Week of ' + esc(dayLabel(0, true)) + '</span>';
    }
    h += '</div><div class="ol-body">';
    h += '<nav class="ol-rail" aria-label="Apps"><button type="button" data-act="view-mail" class="' + (S.view === 'mail' ? 'on' : '') + '" aria-label="Mail">' + ic('mail') + '<span>Mail</span></button>' +
      '<button type="button" data-act="view-cal" class="' + (S.view === 'calendar' ? 'on' : '') + '" aria-label="Calendar">' + ic('cal') + '<span>Calendar</span></button></nav>';
    h += S.view === 'mail' ? mailHtml(sel) : calHtml();
    h += '</div></div>';
    return h;
  }

  function unreadCount(fid) { return S.emails.filter(function (e) { return e.folder === fid && !e.read; }).length; }

  function mailHtml(sel) {
    var h = '<aside class="ol-folders" aria-label="Folders"><p class="ol-acct">' + esc(ME.email) + '</p>';
    FOLDERS.forEach(function (f, i) {
      if (i === 6) h += '<p class="ol-fgroup">Your folders</p>';
      var n = unreadCount(f.id);
      h += '<button type="button" class="ol-folder' + (S.folder === f.id && !S.search ? ' on' : '') + '" data-act="folder" data-id="' + f.id + '" data-drop="' + f.id + '">' + ic('folder') + '<span>' + f.name + '</span>' + (n ? '<b>' + n + '</b>' : '') + '</button>';
    });
    h += '</aside>';

    var list = S.search ? S.emails.filter(function (e) { return e.folder !== 'deleted' && matchSearch(e, S.search); }) : S.emails.filter(function (e) { return e.folder === S.folder; });
    h += '<section class="ol-list" aria-label="Message list"><div class="ol-lhead">';
    if (S.search) {
      h += '<div><strong>Search results</strong><span>' + list.length + ' for “' + esc(S.search) + '”</span></div><button type="button" class="ol-clear" data-act="search-clear">Clear</button>';
    } else {
      h += '<div><strong>' + esc(folderName(S.folder)) + '</strong><span>' + list.length + ' item' + (list.length === 1 ? '' : 's') + '</span></div>' +
        '<select class="ol-fsel" data-sel="folder" aria-label="Choose folder">' + FOLDERS.map(function (f) { return '<option value="' + f.id + '"' + (f.id === S.folder ? ' selected' : '') + '>' + f.name + '</option>'; }).join('') + '</select>';
    }
    h += '</div>';
    if (S.oof.on) h += '<div class="ol-oofbar">' + ic('away') + '<span>Automatic replies are on.</span><button type="button" data-act="oof">Edit</button><button type="button" data-act="oof-off">Turn off</button></div>';
    h += '<div class="ol-items">';
    if (!list.length) h += '<p class="ol-empty">' + (S.search ? 'No messages match. Check the spelling, or try fewer words.' : 'This folder is empty.') + '</p>';
    list.forEach(function (e) {
      var prev = e.body.replace(/\[\[LINK\]\]/g, '').replace(/\s+/g, ' ').slice(0, 90);
      h += '<div class="ol-item' + (e.read ? '' : ' unread') + (S.sel === e.id ? ' sel' : '') + '" role="button" tabindex="0" draggable="true" data-act="open" data-id="' + e.id + '">' +
        '<span class="ol-av" style="--h:' + hue(e.from.name) + '">' + initials(e.from.name) + '</span><div class="ol-im">' +
        '<div class="ol-r1"><span class="ol-from">' + esc(e.folder === 'sent' ? 'To: ' + e.to.map(nameOf).join(', ') : e.from.name) + '</span><span class="ol-time">' + esc(e.time) + '</span></div>' +
        '<div class="ol-r2">' + (e.imp === 'high' ? '<span class="ol-bang" title="High importance">!</span>' : '') + '<span class="ol-subj">' + esc(e.subject) + '</span>' +
        (e.att.length ? '<span class="ol-ico" title="Has attachment">' + ic('clip') + '</span>' : '') + (e.replied ? '<span class="ol-ico" title="Replied">' + ic('replied') + '</span>' : '') + '</div>' +
        '<div class="ol-prev">' + esc(prev) + '</div>' +
        (e.cats.length ? '<div class="ol-cats">' + e.cats.map(function (c) { return '<span style="--cc:' + catColor(c) + '">' + esc(c) + '</span>'; }).join('') + '</div>' : '') +
        '</div><button type="button" class="ol-qflag' + (e.flag ? ' on' : '') + '" data-act="qflag" data-id="' + e.id + '" aria-label="' + (e.flag ? 'Clear flag' : 'Flag') + '">' + ic('flag') + '</button></div>';
    });
    h += '</div></section>';

    h += '<section class="ol-read" aria-label="Reading pane">';
    if (!sel) {
      h += '<div class="ol-noread">' + ic('mail') + '<p>Select an email to read it.</p></div>';
    } else {
      var body = sel.body.split(/\n{2,}/).map(function (p) {
        if (p.trim() === '[[LINK]]') return '<p><a class="ol-plink" href="http://yourcompany-secure.net/verify-login.php" data-act="phishlink">Verify my account now</a></p>';
        return '<p>' + esc(p).replace(/\n/g, '<br>') + '</p>';
      }).join('');
      h += '<div class="ol-rin"><button type="button" class="ol-back" data-act="back">' + ic('back') + 'Back to list</button>' +
        '<h3 class="ol-rsubj">' + (sel.imp === 'high' ? '<span class="ol-bang">!</span>' : '') + esc(sel.subject) + '</h3>';
      if (sel.reported) h += '<div class="ol-banner good">' + ic('shield') + 'Reported as phishing and moved to Junk Email. Well spotted.</div>';
      else if (sel.ext) h += '<div class="ol-banner ext">External sender. Be careful with links and attachments, and check the sender’s address.</div>';
      h += '<div class="ol-rhead"><span class="ol-av" style="--h:' + hue(sel.from.name) + '">' + initials(sel.from.name) + '</span><div class="ol-rwho"><strong>' + esc(sel.from.name) + '</strong> <span class="ol-addr">&lt;' + esc(sel.from.email) + '&gt;</span>' +
        '<div class="ol-rto">To: ' + esc(sel.to.map(nameOf).join('; ')) + (sel.cc.length ? '<br>Cc: ' + esc(sel.cc.map(nameOf).join('; ')) : '') + '</div></div><time>' + esc(sel.date + ', ' + sel.time) + '</time></div>';
      if (sel.cats.length || sel.flag) {
        h += '<div class="ol-rtags">' + sel.cats.map(function (c) { return '<span class="ol-chip" style="--cc:' + catColor(c) + '">' + esc(c) + '</span>'; }).join('') +
          (sel.flag ? '<span class="ol-flagged">' + ic('flag') + 'Flagged for follow-up</span>' : '') + '</div>';
      }
      if (sel.att.length) h += '<div class="ol-atts">' + sel.att.map(function (a) { return '<span class="ol-att">' + ic('clip') + esc(a) + '</span>'; }).join('') + '</div>';
      h += '<div class="ol-rbody">' + body + '</div>' +
        '<div class="ol-ract">' + rb('reply', 'reply', 'Reply') + rb('replyall', 'replyall', 'Reply all') + rb('forward', 'forward', 'Forward') + '</div></div>';
    }
    h += '</section>';
    return h;
  }

  function calHtml() {
    var HH = 46, hours = [];
    for (var t = 9; t < 18; t++) hours.push(t);
    var h = '<section class="ol-cal"><div class="ol-calhead"><div><strong>Vikram Shah, calendar</strong><span>You have delegate access: you can create and edit events.</span></div></div>';
    h += '<div class="ol-week" style="--hh:' + HH + 'px"><div class="ol-wcorner"></div>';
    for (var d = 0; d < 5; d++) h += '<div class="ol-wday">' + esc(dayLabel(d)) + '</div>';
    h += '<div class="ol-wtimes">' + hours.map(function (x) { return '<span>' + (x > 12 ? x - 12 : x) + (x >= 12 ? ' pm' : ' am') + '</span>'; }).join('') + '</div>';
    for (d = 0; d < 5; d++) {
      h += '<div class="ol-wcol">';
      S.events.filter(function (e) { return e.day === d; }).forEach(function (e) {
        var col = e.mine ? 'var(--ol)' : e.cat ? catColor(e.cat) : '#5b6b85';
        h += '<button type="button" class="ol-ev' + (e.mine ? ' mine' : '') + (e.end - e.start <= 0.5 ? ' short' : '') + '" data-act="event" data-id="' + e.id + '" style="top:' + ((e.start - 9) * HH) + 'px;height:' + Math.max(18, (e.end - e.start) * HH - 2) + 'px;--ec:' + col + '"><strong>' + esc(e.title) + '</strong><span>' + fmtTime(e.start) + (e.teams ? ' · Teams' : '') + '</span></button>';
      });
      h += '</div>';
    }
    h += '</div>';
    h += '<div class="ol-agenda">';
    for (d = 0; d < 5; d++) {
      h += '<h4>' + esc(dayLabel(d, true)) + '</h4><ul>';
      S.events.filter(function (e) { return e.day === d; }).sort(function (a, b) { return a.start - b.start; }).forEach(function (e) {
        h += '<li><button type="button" data-act="event" data-id="' + e.id + '" class="' + (e.mine ? 'mine' : '') + '"><time>' + fmtTime(e.start) + '–' + fmtTime(e.end) + '</time><span>' + esc(e.title) + '</span></button></li>';
      });
      h += '</ul>';
    }
    h += '</div></section>';
    return h;
  }

  /* ---------------- menus ---------------- */
  function menuHtml() {
    if (!S.menu) return '';
    var m = S.menu, h = '<div class="ol-pop" role="menu" style="left:' + m.x + 'px;top:' + m.y + 'px">';
    var sel = em(S.sel);
    if (m.type === 'move') {
      FOLDERS.filter(function (f) { return ['drafts', 'sent', 'deleted', 'junk'].indexOf(f.id) === -1 && f.id !== sel.folder; }).forEach(function (f) {
        h += '<button type="button" role="menuitem" data-act="move-to" data-id="' + f.id + '">' + ic('folder') + esc(f.name) + '</button>';
      });
    } else {
      CATS.forEach(function (c) {
        var on = sel.cats && sel.cats.indexOf(c.id) !== -1;
        h += '<button type="button" role="menuitemcheckbox" aria-checked="' + on + '" data-act="cat-toggle" data-id="' + esc(c.id) + '"><span class="ol-sw" style="--cc:' + c.color + '"></span>' + esc(c.id) + (on ? ic('check') : '') + '</button>';
      });
      h += '<button type="button" role="menuitem" data-act="cat-clear" class="muted">Clear all categories</button>';
    }
    return h + '</div>';
  }

  /* ---------------- modals ---------------- */
  function modalHtml() {
    if (!S.modal) return '';
    var h = '<div class="ol-modal" role="dialog" aria-modal="true" aria-labelledby="ol-dt"><div class="ol-dialog' + (S.modal === 'meeting' ? ' wide' : '') + '">';
    if (S.modal === 'compose') h += composeHtml();
    else if (S.modal === 'meeting') h += meetingHtml();
    else if (S.modal === 'rules') h += rulesHtml();
    else if (S.modal === 'oof') h += oofHtml();
    else if (S.modal === 'event') h += eventHtml();
    else if (S.modal === 'phished') h += phishedHtml();
    else if (S.modal === 'notphish') h += notPhishHtml();
    return h + '</div></div>';
  }
  function dhead(title, sub) {
    return '<header class="ol-dh"><div><h3 id="ol-dt">' + esc(title) + '</h3>' + (sub ? '<span>' + esc(sub) + '</span>' : '') + '</div><button type="button" class="ol-x" data-act="close" aria-label="Close">' + ic('x') + '</button></header>';
  }
  function warnHtml(w, softAct) {
    if (!w) return '';
    return '<div class="ol-warn' + (w.soft ? ' soft' : '') + '" role="alert"><span>' + esc(w.msg) + '</span>' + (w.soft && softAct ? '<button type="button" class="ol-btn" data-act="' + softAct + '">Send anyway</button>' : '') + '</div>';
  }
  var DL = '<datalist id="ol-people">' + CONTACTS.map(function (c) { return '<option value="' + esc(c.name) + '">' + esc(c.email) + '</option>'; }).join('') + '</datalist>';

  function composeHtml() {
    var c = S.compose;
    var title = c.mode === 'new' ? 'New message' : c.mode === 'forward' ? 'Forward' : c.mode === 'replyall' ? 'Reply all' : 'Reply';
    var h = dhead(title, 'From: ' + ME.name + ' <' + ME.email + '>') + '<div class="ol-db">' + DL;
    h += '<div class="ol-field"><label for="c-to">To</label><input id="c-to" data-f="c-to" list="ol-people" value="' + esc(c.to) + '" placeholder="Name or email; separate several with a semicolon" autocomplete="off">' +
      '<span class="ol-ccb">' + (!c.showCc ? '<button type="button" data-act="c-showcc">Cc</button>' : '') + (!c.showBcc ? '<button type="button" data-act="c-showbcc">Bcc</button>' : '') + '</span></div>';
    if (c.showCc) h += '<div class="ol-field"><label for="c-cc">Cc</label><input id="c-cc" data-f="c-cc" list="ol-people" value="' + esc(c.cc) + '" autocomplete="off"></div>';
    if (c.showBcc) h += '<div class="ol-field"><label for="c-bcc">Bcc</label><input id="c-bcc" data-f="c-bcc" list="ol-people" value="' + esc(c.bcc) + '" autocomplete="off"></div>';
    h += '<div class="ol-field"><label for="c-subj">Subject</label><input id="c-subj" data-f="c-subj" value="' + esc(c.subj) + '" autocomplete="off"></div>';
    h += '<div class="ol-ctools"><label>Importance <select data-f="c-imp"><option value="normal"' + (c.imp === 'normal' ? ' selected' : '') + '>Normal</option><option value="high"' + (c.imp === 'high' ? ' selected' : '') + '>High</option><option value="low"' + (c.imp === 'low' ? ' selected' : '') + '>Low</option></select></label>' +
      '<button type="button" class="ol-btn" data-act="c-attach">' + ic('clip') + 'Attach</button></div>';
    if (c.picker) {
      h += '<div class="ol-picker"><p>Choose a file from your computer</p>' + FILES.map(function (f) { return '<button type="button" data-act="c-pick" data-id="' + esc(f) + '">' + ic('clip') + esc(f) + '</button>'; }).join('') + '</div>';
    }
    if (c.att.length) h += '<div class="ol-atts">' + c.att.map(function (a, i) { return '<span class="ol-att">' + ic('clip') + esc(a) + '<button type="button" data-act="c-unatt" data-id="' + i + '" aria-label="Remove ' + esc(a) + '">' + ic('x') + '</button></span>'; }).join('') + '</div>';
    h += '<textarea data-f="c-body" aria-label="Message body" placeholder="Write your message">' + esc(c.body) + '</textarea></div>';
    h += '<footer class="ol-df">' + warnHtml(c.warn, 'c-sendforce') + '<button type="button" class="ol-btn" data-act="close">Discard</button><button type="button" class="ol-btn primary" data-act="c-send">Send</button></footer>';
    return h;
  }

  function hourOptions(sel) {
    var h = '';
    for (var t = 9; t < 18; t += 0.5) h += '<option value="' + t + '"' + (t === sel ? ' selected' : '') + '>' + fmtTime(t) + '</option>';
    return h;
  }
  function gridHtml() {
    var m = S.meeting, day = m.day, start = m.start, end = start + m.dur / 60;
    var people = [{ email: DIRECTOR, name: 'Vikram Shah', org: true }].concat(m.att.map(function (e) { return { email: e, name: nameOf(e) }; }));
    var slots = [];
    for (var t = 9; t < 18; t += 0.5) slots.push(t);
    var h = '<div class="sa-scroll"><div class="sa-grid"><div class="sa-row sa-hdr"><span class="sa-name">' + esc(dayLabel(day)) + '</span>' +
      slots.map(function (t) { return '<button type="button" class="sa-h" data-act="m-slot" data-t="' + t + '" aria-label="Start at ' + fmtTime(t) + '">' + (t % 1 === 0 ? (t > 12 ? t - 12 : t) : '') + '</button>'; }).join('') + '</div>';
    people.forEach(function (p) {
      var busy = busyBlocks(p.email, day, null);
      h += '<div class="sa-row"><span class="sa-name">' + esc(p.name) + (p.org ? '<small>organiser</small>' : '') + '</span>' + slots.map(function (t) {
        var b = busy.some(function (r) { return t < r[1] && t + 0.5 > r[0]; });
        var s = t >= start && t < end;
        return '<button type="button" class="sa-c' + (b ? ' busy' : '') + (s ? ' sel' : '') + (b && s ? ' clash' : '') + '" data-act="m-slot" data-t="' + t + '" aria-label="' + esc(p.name) + ' at ' + fmtTime(t) + (b ? ', busy' : ', free') + '"></button>';
      }).join('') + '</div>';
    });
    h += '</div></div>';
    var cf = conflicts({ id: null, day: day, start: start, end: end, attendees: m.att });
    h += '<p class="sa-status ' + (cf.length ? 'bad' : 'good') + '">' + (cf.length ? esc(cf.join(', ')) + (cf.length > 1 ? ' are' : ' is') + ' busy at this time. Choose a column where nobody is busy.' : (m.att.length ? 'Everyone is free at ' + fmtTime(start) + '.' : 'Add attendees to see their availability.')) + '</p>';
    return h;
  }

  function meetingHtml() {
    var m = S.meeting;
    var h = dhead('New meeting', 'In Vikram Shah’s calendar') + '<div class="ol-db">' + DL;
    h += '<div class="ol-field"><label for="m-title">Title</label><input id="m-title" data-f="m-title" value="' + esc(m.title) + '" placeholder="Add a title" autocomplete="off"></div>';
    h += '<div class="ol-field"><label for="m-att">Attendees</label><div class="ol-attwrap">' + m.att.map(function (e, i) {
      return '<span class="ol-pchip">' + esc(nameOf(e)) + '<button type="button" data-act="m-rm" data-id="' + i + '" aria-label="Remove ' + esc(nameOf(e)) + '">' + ic('x') + '</button></span>';
    }).join('') + '<input id="m-att" data-f="m-att" list="ol-people" value="' + esc(m.attIn || '') + '" placeholder="Type a name, then Add" autocomplete="off"><button type="button" class="ol-btn" data-act="m-add">Add</button></div></div>';
    h += '<div class="ol-row3"><label>Day<select data-f="m-day">' + [0, 1, 2, 3, 4].map(function (d) { return '<option value="' + d + '"' + (d === m.day ? ' selected' : '') + '>' + esc(dayLabel(d)) + '</option>'; }).join('') + '</select></label>' +
      '<label>Start<select data-f="m-start">' + hourOptions(m.start) + '</select></label>' +
      '<label>Duration<select data-f="m-dur">' + [30, 45, 60, 90].map(function (d) { return '<option value="' + d + '"' + (d === m.dur ? ' selected' : '') + '>' + d + ' min</option>'; }).join('') + '</select></label></div>';
    h += '<label class="ol-switch"><input type="checkbox" data-f="m-teams"' + (m.teams ? ' checked' : '') + '><span></span>' + ic('video') + 'Teams meeting</label>';
    h += '<div class="ol-field"><label for="m-loc">Location</label><input id="m-loc" data-f="m-loc" value="' + esc(m.loc) + '" placeholder="Room or address" autocomplete="off"></div>';
    h += '<div class="ol-sa"><h4>Scheduling Assistant</h4><p class="sa-legend"><span class="lg busy"></span>Busy<span class="lg sel"></span>Your meeting<span class="lg clash"></span>Conflict</p><div id="ol-grid">' + gridHtml() + '</div></div>';
    h += '<textarea data-f="m-notes" aria-label="Meeting notes" placeholder="Agenda and notes for attendees">' + esc(m.notes) + '</textarea></div>';
    h += '<footer class="ol-df">' + warnHtml(m.warn, 'm-sendforce') + '<button type="button" class="ol-btn" data-act="close">Cancel</button><button type="button" class="ol-btn primary" data-act="m-send">Send</button></footer>';
    return h;
  }

  function rulesHtml() {
    var r = S.ruleForm;
    var h = dhead('Rules', 'Rules act on new messages as they arrive') + '<div class="ol-db">';
    if (S.rules.length) {
      h += '<ul class="ol-rlist">' + S.rules.map(function (x, i) {
        return '<li><div><strong>' + esc(x.name) + '</strong><span>If ' + (x.field === 'from' ? 'From' : 'Subject') + ' contains “' + esc(x.val) + '”, ' +
          (x.action === 'move' ? 'move to ' + esc(folderName(x.target)) : x.action === 'cat' ? 'categorise as ' + esc(x.target) : 'flag it') + '</span></div><button type="button" class="ol-btn" data-act="rule-del" data-id="' + i + '">Delete</button></li>';
      }).join('') + '</ul>';
    }
    h += '<h4 class="ol-h4">New rule</h4>';
    h += '<div class="ol-field"><label for="r-name">Name</label><input id="r-name" data-f="r-name" value="' + esc(r.name) + '" placeholder="e.g. Travel bookings" autocomplete="off"></div>';
    h += '<div class="ol-cond"><span>When a message arrives where</span><select data-f="r-field" aria-label="Condition"><option value="from"' + (r.field === 'from' ? ' selected' : '') + '>From contains</option><option value="subject"' + (r.field === 'subject' ? ' selected' : '') + '>Subject contains</option></select>' +
      '<input data-f="r-val" value="' + esc(r.val) + '" placeholder="text or address" aria-label="Condition value" autocomplete="off"></div>';
    var targets = r.action === 'move' ? FOLDERS.filter(function (f) { return ['sent', 'drafts', 'deleted'].indexOf(f.id) === -1; }).map(function (f) { return [f.id, f.name]; })
      : r.action === 'cat' ? CATS.map(function (c) { return [c.id, c.id]; }) : [];
    h += '<div class="ol-cond"><span>Do this</span><select data-f="r-action" aria-label="Action"><option value="move"' + (r.action === 'move' ? ' selected' : '') + '>Move to folder</option><option value="cat"' + (r.action === 'cat' ? ' selected' : '') + '>Categorise</option><option value="flag"' + (r.action === 'flag' ? ' selected' : '') + '>Flag for follow-up</option></select>' +
      (targets.length ? '<select data-f="r-target" aria-label="Target">' + targets.map(function (t) { return '<option value="' + esc(t[0]) + '"' + (t[0] === r.target ? ' selected' : '') + '>' + esc(t[1]) + '</option>'; }).join('') + '</select>' : '') + '</div>';
    h += '<label class="ol-check"><input type="checkbox" data-f="r-run"' + (r.run ? ' checked' : '') + '>Run this rule now on messages already in the Inbox</label></div>';
    h += '<footer class="ol-df">' + warnHtml(r.warn) + '<button type="button" class="ol-btn" data-act="close">Close</button><button type="button" class="ol-btn primary" data-act="rule-save">Save rule</button></footer>';
    return h;
  }

  function oofHtml() {
    var o = S.oofForm;
    var h = dhead('Automatic replies', ME.email) + '<div class="ol-db">';
    h += '<label class="ol-switch big"><input type="checkbox" data-f="o-on"' + (o.on ? ' checked' : '') + '><span></span>Turn on automatic replies</label>';
    h += '<label class="ol-check"><input type="checkbox" data-f="o-timed"' + (o.timed ? ' checked' : '') + '>Send replies only during this time period</label>';
    h += '<div class="ol-row2"><label>Start<input type="date" data-f="o-start" value="' + esc(o.start) + '"></label><label>End<input type="date" data-f="o-end" value="' + esc(o.end) + '"></label></div>';
    h += '<label class="ol-lbl">Inside your organisation</label><textarea data-f="o-int" rows="3" placeholder="A short message for colleagues">' + esc(o.intMsg) + '</textarea>';
    h += '<label class="ol-check"><input type="checkbox" data-f="o-ext"' + (o.external ? ' checked' : '') + '>Send replies outside your organisation</label>';
    h += '<select data-f="o-aud" aria-label="Who outside the organisation"><option value="contacts"' + (o.audience === 'contacts' ? ' selected' : '') + '>Only to my contacts</option><option value="anyone"' + (o.audience === 'anyone' ? ' selected' : '') + '>To anyone outside my organisation</option></select>';
    h += '<label class="ol-lbl">Outside your organisation</label><textarea data-f="o-extmsg" rows="5" placeholder="Dates you are away, and who to contact instead">' + esc(o.extMsg) + '</textarea></div>';
    h += '<footer class="ol-df">' + warnHtml(o.warn) + '<button type="button" class="ol-btn" data-act="close">Cancel</button><button type="button" class="ol-btn primary" data-act="oof-save">Save</button></footer>';
    return h;
  }

  function eventHtml() {
    var e = S.events.filter(function (x) { return x.id === S.eventSel; })[0];
    if (!e) return dhead('Event', '');
    var h = dhead(e.title, dayLabel(e.day, true) + ', ' + fmtTime(e.start) + ' to ' + fmtTime(e.end)) + '<div class="ol-db ol-evd">';
    h += '<p><strong>Location:</strong> ' + esc(e.teams ? 'Microsoft Teams meeting' + (e.loc ? ' and ' + e.loc : '') : (e.loc || 'Not set')) + '</p>';
    h += '<p><strong>Attendees:</strong> ' + esc(['Vikram Shah (organiser)'].concat((e.attendees || []).map(nameOf)).join(', ')) + '</p>';
    if (e.notes) h += '<p><strong>Notes:</strong> ' + esc(e.notes) + '</p>';
    if (e.mine) { var cf = conflicts(e); if (cf.length) h += '<p class="sa-status bad">Conflict: ' + esc(cf.join(', ')) + ' busy at this time.</p>'; }
    h += '</div><footer class="ol-df">' + (e.mine ? '<button type="button" class="ol-btn" data-act="ev-del">Cancel meeting</button>' : '') + '<button type="button" class="ol-btn primary" data-act="close">Close</button></footer>';
    return h;
  }

  function phishedHtml() {
    return dhead('You clicked a phishing link', 'This is a training mailbox, so nothing happened') + '<div class="ol-db ol-evd">' +
      '<p>In real life, this link would open a fake login page designed to steal your password. Signs you could have spotted:</p>' +
      '<ul><li>The sender address is <strong>it-helpdesk@yourcompany-secure.net</strong>, not the company domain.</li><li>It creates urgency: “expires in 2 hours”, “mailbox will be suspended”.</li><li>Hovering over the link shows an outside web address.</li><li>Genuine IT teams never ask you to verify your password through an email link.</li></ul>' +
      '<p>If this ever happens for real: don’t enter anything, tell IT immediately, and change your password.</p></div>' +
      '<footer class="ol-df"><button type="button" class="ol-btn primary" data-act="close">Understood</button></footer>';
  }
  function notPhishHtml() {
    var e = em(S.sel);
    return dhead('This email looks genuine', '') + '<div class="ol-db ol-evd"><p>The message from <strong>' + esc(e.from.name) + '</strong> &lt;' + esc(e.from.email) + '&gt; shows no signs of phishing: the address matches the sender, there is no pressure to click a link, and nothing asks for passwords or payments.</p>' +
      '<p>Reporting genuine emails sends them to Junk and can block real senders. Look again: check each sender’s address carefully, and look for urgency and requests to “verify”.</p></div>' +
      '<footer class="ol-df"><button type="button" class="ol-btn primary" data-act="close">Keep looking</button></footer>';
  }

  /* ---------------- actions ---------------- */
  function openCompose(mode, src) {
    var c = { mode: mode, to: '', cc: '', bcc: '', subj: '', body: '', imp: 'normal', att: [], showCc: false, showBcc: false, picker: false, warn: null, replyTo: null };
    if (src) {
      var quote = '\n\n----- Original message -----\nFrom: ' + src.from.name + ' <' + src.from.email + '>\nSent: ' + src.date + ', ' + src.time + '\nSubject: ' + src.subject + '\n\n' + src.body.replace(/\[\[LINK\]\]/g, '[link removed]');
      if (mode === 'reply' || mode === 'replyall') {
        c.to = src.from.email;
        c.subj = (/^re:/i.test(src.subject) ? '' : 'RE: ') + src.subject;
        c.replyTo = src.id;
        if (mode === 'replyall') {
          var others = src.to.concat(src.cc).filter(function (a) { return a !== ME.email && a !== src.from.email; });
          if (others.length) { c.cc = others.join('; '); c.showCc = true; }
        }
      } else {
        c.subj = (/^fw:/i.test(src.subject) ? '' : 'FW: ') + src.subject;
        c.att = src.att.slice();
      }
      c.body = quote;
    }
    S.compose = c; S.modal = 'compose';
  }

  function resolve(str) {
    var ok = [], bad = [];
    String(str || '').split(/[;,]/).map(function (t) { return t.trim(); }).filter(Boolean).forEach(function (t) {
      var m = t.match(/<([^>]+)>/); if (m) t = m[1].trim();
      if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)) { ok.push(t.toLowerCase()); return; }
      var hits = CONTACTS.filter(function (c) { return c.name.toLowerCase().indexOf(t.toLowerCase()) !== -1 || c.email.split('@')[0].indexOf(t.toLowerCase()) !== -1; });
      if (hits.length === 1) ok.push(hits[0].email); else bad.push(t);
    });
    return { ok: ok.filter(function (x, i, a) { return a.indexOf(x) === i; }), bad: bad };
  }

  function sendCompose(force) {
    var c = S.compose;
    var to = resolve(c.to), cc = resolve(c.cc), bcc = resolve(c.bcc);
    var bad = to.bad.concat(cc.bad, bcc.bad);
    if (bad.length) { c.warn = { msg: 'Outlook can’t match “' + bad[0] + '” to one person. Type a full email address, or pick a name from the suggestions.' }; return; }
    if (!to.ok.length) { c.warn = { msg: 'Add at least one recipient in the To line.' }; return; }
    if (!force) {
      if (!c.subj.trim()) { c.warn = { msg: 'This message has no subject. Send it anyway?', soft: true }; return; }
      if (/attach/i.test(userText(c.body)) && !c.att.length) { c.warn = { msg: 'You mentioned an attachment, but nothing is attached. Send anyway?', soft: true }; return; }
    }
    S.emails.unshift({
      id: 's' + (S.nextId++), folder: 'sent', from: { name: ME.name, email: ME.email }, to: to.ok, cc: cc.ok, bcc: bcc.ok,
      subject: c.subj.trim() || '(no subject)', body: c.body, att: c.att.slice(), imp: c.imp, read: true, flag: false, cats: [],
      ext: false, phish: false, reported: false, replied: false, date: 'Today', time: nowStr(), replyTo: c.replyTo
    });
    if (c.replyTo) { var o = em(c.replyTo); if (o.id) o.replied = true; }
    closeModal();
    toast('Message sent');
  }

  function addAttendee() {
    var m = S.meeting;
    var r = resolve(m.attIn);
    m.warn = null;
    if (r.bad.length) { m.warn = { msg: 'Couldn’t find “' + r.bad[0] + '”. Pick a name from the suggestions.' }; return; }
    r.ok.forEach(function (e) { if (e !== DIRECTOR && m.att.indexOf(e) === -1) m.att.push(e); });
    m.attIn = '';
  }

  function sendMeeting(force) {
    var m = S.meeting;
    if (m.attIn && m.attIn.trim()) addAttendee();
    if (m.warn && !m.warn.soft) return;
    if (!m.title.trim()) { m.warn = { msg: 'Add a title for the meeting.' }; return; }
    if (!m.att.length) { m.warn = { msg: 'Add at least one attendee.' }; return; }
    var ev = { id: 'ev' + (S.nextId++), day: m.day, start: m.start, end: m.start + m.dur / 60, title: m.title.trim(), attendees: m.att.slice(), teams: m.teams, loc: m.loc, notes: m.notes, mine: true };
    if (ev.end > 18) { m.warn = { msg: 'The meeting runs past 6:00 pm. Choose an earlier start or a shorter duration.' }; return; }
    var cf = conflicts(ev);
    if (cf.length && !force) { m.warn = { msg: cf.join(', ') + (cf.length > 1 ? ' are' : ' is') + ' busy at this time. Send anyway?', soft: true }; return; }
    S.events.push(ev);
    closeModal();
    toast(cf.length ? 'Meeting sent, but ' + cf.join(', ') + ' cannot attend at that time' : 'Meeting invitation sent to ' + ev.attendees.length + ' attendee' + (ev.attendees.length > 1 ? 's' : ''), cf.length ? 'bad' : '');
  }

  function applyRule(r, emails) {
    var n = 0;
    emails.forEach(function (e) {
      var hay = r.field === 'from' ? (e.from.name + ' ' + e.from.email) : e.subject;
      if (hay.toLowerCase().indexOf(r.val.toLowerCase()) === -1) return;
      n++;
      if (r.action === 'move') e.folder = r.target;
      else if (r.action === 'cat') { if (e.cats.indexOf(r.target) === -1) e.cats.push(r.target); }
      else e.flag = true;
    });
    return n;
  }

  function onClick(e) {
    e.__olHandled = true;
    var el = e.target.closest('[data-act]');
    if (!el || !root.contains(el)) {
      if (S.menu && !e.target.closest('.ol-pop')) { S.menu = null; render(); }
      return;
    }
    if (el.tagName === 'A') e.preventDefault();
    syncForms();
    var act = el.getAttribute('data-act'), id = el.getAttribute('data-id');
    var sel = S.sel ? em(S.sel) : null;
    if (act !== 'menu-move' && act !== 'menu-cat' && act !== 'cat-toggle') S.menu = null;

    switch (act) {
      case 'view-mail': S.view = 'mail'; break;
      case 'view-cal': S.view = 'calendar'; break;
      case 'folder': S.folder = id; S.search = ''; S.sel = null; S.mobileRead = false; break;
      case 'open': {
        var m = em(id); S.sel = id; m.read = true; S.opened[id] = true; S.mobileRead = true; break;
      }
      case 'back': S.mobileRead = false; break;
      case 'qflag': { var q = em(id); q.flag = !q.flag; toast(q.flag ? 'Flagged for follow-up' : 'Flag cleared'); break; }
      case 'new': openCompose('new'); break;
      case 'reply': case 'replyall': case 'forward': if (sel) openCompose(act, sel); break;
      case 'delete': if (sel) { sel.folder = sel.folder === 'deleted' ? 'deleted' : 'deleted'; S.sel = null; S.mobileRead = false; toast('Moved to Deleted Items'); } break;
      case 'archive': if (sel) { sel.folder = 'archive'; S.sel = null; S.mobileRead = false; toast('Archived'); } break;
      case 'menu-move': case 'menu-cat': {
        if (!sel) break;
        var type = act === 'menu-move' ? 'move' : 'cat';
        if (S.menu && S.menu.type === type) { S.menu = null; break; }
        var r = el.getBoundingClientRect();
        S.menu = { type: type, x: Math.max(8, Math.min(r.left, window.innerWidth - 230)), y: r.bottom + 4 };
        break;
      }
      case 'move-to': if (sel) { sel.folder = id; toast('Moved to ' + folderName(id)); S.sel = null; S.mobileRead = false; } break;
      case 'cat-toggle': if (sel) {
        var i = sel.cats.indexOf(id);
        if (i === -1) sel.cats.push(id); else sel.cats.splice(i, 1);
        S.menu = null;
      } break;
      case 'cat-clear': if (sel) sel.cats = []; break;
      case 'flag': if (sel) { sel.flag = !sel.flag; toast(sel.flag ? 'Flagged for follow-up' : 'Flag cleared'); } break;
      case 'unread': if (sel) sel.read = !sel.read; break;
      case 'report':
        if (sel) {
          if (sel.phish) { sel.reported = true; sel.folder = 'junk'; toast('Reported as phishing', 'good'); }
          else { S.modal = 'notphish'; }
        }
        break;
      case 'phishlink': S.modal = 'phished'; break;
      case 'search-clear': S.search = ''; break;
      case 'rules': S.modal = 'rules'; S.ruleForm = { name: '', field: 'from', val: '', action: 'move', target: 'travel', run: true, warn: null }; break;
      case 'rule-save': {
        var rf = S.ruleForm;
        if (!rf.val.trim()) { rf.warn = { msg: 'Enter the text or address the rule should look for.' }; break; }
        var rule = { name: rf.name.trim() || (rf.field === 'from' ? 'From ' : 'Subject ') + rf.val.trim(), field: rf.field, val: rf.val.trim(), action: rf.action, target: rf.action === 'flag' ? '' : rf.target };
        S.rules.push(rule);
        var n = rf.run ? applyRule(rule, S.emails.filter(function (x) { return x.folder === 'inbox'; })) : 0;
        if (S.sel && em(S.sel).folder !== S.folder) { S.sel = null; S.mobileRead = false; }
        S.ruleForm = { name: '', field: 'from', val: '', action: 'move', target: 'travel', run: true, warn: null };
        closeModal();
        toast('Rule saved' + (rf.run ? '. It acted on ' + n + ' message' + (n === 1 ? '' : 's') + ' in the Inbox' : ''));
        break;
      }
      case 'rule-del': S.rules.splice(+id, 1); break;
      case 'oof': S.modal = 'oof'; S.oofForm = Object.assign({}, S.oof, { warn: null }); break;
      case 'oof-off': S.oof.on = false; toast('Automatic replies turned off'); break;
      case 'oof-save': {
        var o = S.oofForm;
        o.warn = null;
        if (o.on && o.timed && (!o.start || !o.end)) { o.warn = { msg: 'Choose both a start and an end date.' }; break; }
        if (o.on && o.timed && o.end < o.start) { o.warn = { msg: 'The end date is before the start date.' }; break; }
        if (o.on && o.external && !o.extMsg.trim()) { o.warn = { msg: 'Write the message for people outside your organisation, or untick that option.' }; break; }
        S.oof = { on: o.on, timed: o.timed, start: o.start, end: o.end, intMsg: o.intMsg, external: o.external, audience: o.audience, extMsg: o.extMsg };
        closeModal();
        toast(S.oof.on ? 'Automatic replies are on' : 'Automatic replies saved (off)');
        break;
      }
      case 'close': closeModal(); break;
      case 'c-showcc': S.compose.showCc = true; break;
      case 'c-showbcc': S.compose.showBcc = true; break;
      case 'c-attach': S.compose.picker = !S.compose.picker; break;
      case 'c-pick': if (S.compose.att.indexOf(id) === -1) S.compose.att.push(id); S.compose.picker = false; S.compose.warn = null; break;
      case 'c-unatt': S.compose.att.splice(+id, 1); break;
      case 'c-send': S.compose.warn = null; sendCompose(false); break;
      case 'c-sendforce': sendCompose(true); break;
      case 'newmeeting': S.modal = 'meeting'; S.meeting = { title: '', att: [], attIn: '', day: 0, start: 9, dur: 30, teams: false, loc: '', notes: '', warn: null }; break;
      case 'm-add': addAttendee(); break;
      case 'm-rm': S.meeting.att.splice(+id, 1); break;
      case 'm-slot': {
        var t = +el.getAttribute('data-t'), mt = S.meeting;
        mt.start = Math.min(t, 18 - mt.dur / 60); mt.warn = null; break;
      }
      case 'm-send': S.meeting.warn = null; sendMeeting(false); break;
      case 'm-sendforce': sendMeeting(true); break;
      case 'event': S.modal = 'event'; S.eventSel = id; break;
      case 'ev-del': S.events = S.events.filter(function (x) { return x.id !== S.eventSel; }); closeModal(); toast('Meeting cancelled'); break;
      case 'mission': S.openMission = S.openMission === +id ? null : +id; break;
      case 'mission-pick': S.openMission = +id; break;
      case 'reset':
        if (window.confirm('Reset the practice mailbox and clear all mission progress?')) {
          var keepRoot = root; A.progress.resetLab(); S = fresh(); root = keepRoot; toast('Lab reset');
        }
        break;
    }
    render();
    checkMissions();
  }

  function onChange(e) {
    var t = e.target;
    if (t.getAttribute('data-sel') === 'folder') { S.folder = t.value; S.sel = null; S.search = ''; S.mobileRead = false; render(); return; }
    var f = t.getAttribute('data-f');
    if (!f) return;
    syncForms();
    if (S.modal === 'meeting' && /^m-(day|start|dur|teams)$/.test(f)) {
      S.meeting.warn = null;
      var g = root.querySelector('#ol-grid'); if (g) g.innerHTML = gridHtml();
      return;
    }
    if (S.modal === 'rules' && f === 'r-action') {
      S.ruleForm.target = S.ruleForm.action === 'move' ? 'travel' : S.ruleForm.action === 'cat' ? CATS[0].id : '';
      render();
    }
  }
  function onInput() { syncForms(); }

  function onSubmit(e) {
    var form = e.target.closest('[data-form="search"]');
    if (!form) return;
    e.preventDefault();
    var q = form.querySelector('input').value.trim();
    S.search = q; S.sel = null; S.mobileRead = false; S.view = 'mail';
    if (q) S.searches.push(q);
    render();
    checkMissions();
  }

  function onKey(e) {
    var t = e.target;
    if (t.getAttribute && t.getAttribute('data-f') === 'm-att' && e.key === 'Enter') {
      e.preventDefault(); syncForms(); addAttendee(); render(); return;
    }
    if ((e.key === 'Enter' || e.key === ' ') && t.classList && t.classList.contains('ol-item')) {
      e.preventDefault(); t.click();
    }
  }

  function onDragStart(e) {
    var it = e.target.closest && e.target.closest('.ol-item');
    if (!it) return;
    e.dataTransfer.setData('text/plain', it.getAttribute('data-id'));
    e.dataTransfer.effectAllowed = 'move';
  }
  function onDragOver(e) { if (e.target.closest && e.target.closest('[data-drop]')) e.preventDefault(); }
  function onDrop(e) {
    var f = e.target.closest && e.target.closest('[data-drop]');
    if (!f) return;
    e.preventDefault();
    var id = e.dataTransfer.getData('text/plain'), m = em(id);
    if (!m.id) return;
    m.folder = f.getAttribute('data-drop');
    if (S.sel === id) { S.sel = null; S.mobileRead = false; }
    toast('Moved to ' + folderName(m.folder));
    render(); checkMissions();
  }

  window.OutlookLab = { mount: mount, unmount: unmount, missions: MISSIONS };
})();
