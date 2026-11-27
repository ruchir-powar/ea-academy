/* ==========================================================
   EA Academy — sign-in and cloud save (GitHub only)
   Sign-in checks a SHA-256 hash of the password against the
   users in config.js. Cloud save stores each user's progress
   as progress/<user>.json in a private GitHub repository. The
   GitHub token is in config.js only in encrypted form, locked
   with each user's password and unlocked at sign-in.
   ========================================================== */
(function () {
  'use strict';

  var A = window.ACADEMY;
  var CFG = A.config;
  var SESSION_KEY = 'ea-academy-session';
  var TOKEN_KEY = 'ea-academy-github-token';

  function lsGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function lsSet(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* storage unavailable */ } }
  function lsDel(k) { try { localStorage.removeItem(k); } catch (e) { /* storage unavailable */ } }

  /* ---------------- SHA-256 ---------------- */
  /* Fallback for browsers without crypto.subtle. Input is a UTF-8 byte string. */
  function sha256js(ascii) {
    function rr(v, n) { return (v >>> n) | (v << (32 - n)); }
    var maxWord = Math.pow(2, 32), result = '', words = [], bitLen = ascii.length * 8;
    var hash = [], k = [], primeCounter = 0, isComposite = {}, i, j;
    for (var candidate = 2; primeCounter < 64; candidate++) {
      if (!isComposite[candidate]) {
        for (i = 0; i < 313; i += candidate) isComposite[i] = candidate;
        hash[primeCounter] = (Math.pow(candidate, 0.5) * maxWord) | 0;
        k[primeCounter++] = (Math.pow(candidate, 1 / 3) * maxWord) | 0;
      }
    }
    hash = hash.slice(0, 8);
    ascii += '\x80';
    while (ascii.length % 64 - 56) ascii += '\x00';
    for (i = 0; i < ascii.length; i++) {
      j = ascii.charCodeAt(i);
      words[i >> 2] |= j << ((3 - i) % 4) * 8;
    }
    words[words.length] = ((bitLen / maxWord) | 0);
    words[words.length] = bitLen;
    for (j = 0; j < words.length;) {
      var w = words.slice(j, j += 16), oldHash = hash;
      hash = hash.slice(0, 8);
      for (i = 0; i < 64; i++) {
        var w15 = w[i - 15], w2 = w[i - 2], a = hash[0], e = hash[4];
        var t1 = hash[7] + (rr(e, 6) ^ rr(e, 11) ^ rr(e, 25)) + ((e & hash[5]) ^ ((~e) & hash[6])) + k[i] +
          (w[i] = (i < 16) ? w[i] : (w[i - 16] + (rr(w15, 7) ^ rr(w15, 18) ^ (w15 >>> 3)) + w[i - 7] + (rr(w2, 17) ^ rr(w2, 19) ^ (w2 >>> 10))) | 0);
        var t2 = (rr(a, 2) ^ rr(a, 13) ^ rr(a, 22)) + ((a & hash[1]) ^ (a & hash[2]) ^ (hash[1] & hash[2]));
        hash = [(t1 + t2) | 0].concat(hash);
        hash[4] = (hash[4] + t1) | 0;
      }
      for (i = 0; i < 8; i++) hash[i] = (hash[i] + oldHash[i]) | 0;
    }
    for (i = 0; i < 8; i++) {
      for (j = 3; j + 1; j--) {
        var b = (hash[i] >> (j * 8)) & 255;
        result += ((b < 16) ? '0' : '') + b.toString(16);
      }
    }
    return result;
  }
  function utf8bytes(str) { return unescape(encodeURIComponent(str)); }
  function sha256(text) {
    if (window.crypto && window.crypto.subtle && window.TextEncoder) {
      return window.crypto.subtle.digest('SHA-256', new TextEncoder().encode(text)).then(function (buf) {
        return Array.prototype.map.call(new Uint8Array(buf), function (b) { return ('0' + b.toString(16)).slice(-2); }).join('');
      }, function () { return sha256js(utf8bytes(text)); });
    }
    return Promise.resolve(sha256js(utf8bytes(text)));
  }
  A.sha256 = sha256;
  A.sha256js = function (t) { return sha256js(utf8bytes(t)); };

  /* ---------------- password-locked GitHub key ----------------
     tools/setup-cloud.mjs encrypts the GitHub token once per user with
     PBKDF2-SHA256 + AES-GCM. The right password unlocks it at sign-in;
     a wrong password fails to decrypt. Nothing readable is in the code. */
  function b64bytes(b) {
    var bin = atob(b), u = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; i++) u[i] = bin.charCodeAt(i);
    return u;
  }
  function unlockVault(v, password) {
    var sub = window.crypto.subtle;
    return sub.importKey('raw', new TextEncoder().encode(password), 'PBKDF2', false, ['deriveKey'])
      .then(function (base) {
        return sub.deriveKey({ name: 'PBKDF2', salt: b64bytes(v.salt), iterations: v.iter || 600000, hash: 'SHA-256' },
          base, { name: 'AES-GCM', length: 256 }, false, ['decrypt']);
      })
      .then(function (key) { return sub.decrypt({ name: 'AES-GCM', iv: b64bytes(v.iv) }, key, b64bytes(v.data)); })
      .then(function (buf) { return new TextDecoder().decode(buf); })
      .catch(function () { return null; });
  }

  /* ---------------- sign-in ---------------- */
  A.auth = {
    users: function () { return CFG.users || []; },
    find: function (id) { return (CFG.users || []).filter(function (u) { return u.id === id; })[0] || null; },
    /* cloud save is switched on when users carry a locked key */
    cloudReady: function () { return (CFG.users || []).some(function (u) { return !!u.vault; }); },
    current: function () {
      var u = this.find(lsGet(SESSION_KEY));
      if (u && u.vault && !lsGet(TOKEN_KEY)) return null;   /* must sign in again to unlock */
      return u;
    },
    signIn: function (id, password) {
      var u = this.find(id);
      if (!u) return Promise.resolve(false);
      if (u.vault) {
        if (!(window.crypto && window.crypto.subtle && window.TextEncoder)) {
          return Promise.reject(new Error('This browser can’t sign in securely. Use an up-to-date Chrome, Edge, Safari or Firefox.'));
        }
        return unlockVault(u.vault, password).then(function (tok) {
          if (!tok) return false;
          lsSet(SESSION_KEY, id); lsSet(TOKEN_KEY, tok); shas = {};
          return true;
        });
      }
      return sha256(password).then(function (h) {
        if (u.passwordHash && h === u.passwordHash) { lsSet(SESSION_KEY, id); return true; }
        return false;
      });
    },
    signOut: function () { lsDel(SESSION_KEY); lsDel(TOKEN_KEY); shas = {}; }
  };

  /* ---------------- merging progress from two devices ---------------- */
  function num(v) { return typeof v === 'number' ? v : (v ? 1 : 0); }
  function clone(o) { return JSON.parse(JSON.stringify(o || {})); }

  A.mergeProgress = function (a, b) {
    a = a || {}; b = b || {};
    var ga = a.gen || 0, gb = b.gen || 0;
    if (ga !== gb) return clone(ga > gb ? a : b);          /* a "reset all progress" wins over older data */
    var newerA = (a.updated || 0) >= (b.updated || 0);
    var r = { gen: ga, lessons: {}, quizzes: {}, scen: {}, lab: {}, labGen: 0, name: '', last: null, updated: Math.max(a.updated || 0, b.updated || 0) };
    [b.lessons, a.lessons].forEach(function (src) {
      Object.keys(src || {}).forEach(function (k) {
        var v = num(src[k]);
        r.lessons[k] = r.lessons[k] ? Math.min(r.lessons[k], v) : v;
      });
    });
    [b.quizzes, a.quizzes].forEach(function (src) {
      Object.keys(src || {}).forEach(function (k) {
        var q = src[k] || {}, cur = r.quizzes[k];
        r.quizzes[k] = cur
          ? { best: Math.max(cur.best || 0, q.best || 0), passed: !!(cur.passed || q.passed), at: Math.max(cur.at || 0, q.at || 0) }
          : { best: q.best || 0, passed: !!q.passed, at: q.at || 0 };
      });
    });
    [b.scen, a.scen].forEach(function (src) {
      Object.keys(src || {}).forEach(function (k) { r.scen[k] = Math.max(r.scen[k] || 0, src[k] || 0); });
    });
    var la = a.labGen || 0, lb = b.labGen || 0;
    if (la !== lb) { r.labGen = Math.max(la, lb); r.lab = clone(la > lb ? a.lab : b.lab); }
    else {
      r.labGen = la;
      [b.lab, a.lab].forEach(function (src) { Object.keys(src || {}).forEach(function (k) { if (!r.lab[k]) r.lab[k] = src[k]; }); });
    }
    r.name = newerA ? (a.name || b.name || '') : (b.name || a.name || '');
    r.last = newerA ? (a.last || b.last || null) : (b.last || a.last || null);
    return r;
  };

  /* stable stringify: the same data always produces the same text */
  function canon(v) {
    if (Array.isArray(v)) return '[' + v.map(canon).join(',') + ']';
    if (v && typeof v === 'object') return '{' + Object.keys(v).sort().map(function (k) { return JSON.stringify(k) + ':' + canon(v[k]); }).join(',') + '}';
    return JSON.stringify(v === undefined ? null : v);
  }
  A.canon = canon;

  /* ---------------- GitHub cloud save ---------------- */
  var SY = CFG.sync || {};
  var listeners = [];
  var st = { status: 'off', at: null, error: '' };
  var shas = {}, busy = null, again = false, timer = null, lastPull = 0;

  function token() { return lsGet(TOKEN_KEY); }
  function setStatus(s, err) {
    st.status = s; st.error = err || '';
    if (s === 'ok') st.at = new Date();
    listeners.forEach(function (fn) { try { fn(st); } catch (e) { /* listener error */ } });
  }
  function apiBase() { return 'https://api.github.com/repos/' + encodeURIComponent(SY.owner) + '/' + encodeURIComponent(SY.repo); }
  function fileUrl(uid) { return apiBase() + '/contents/' + (SY.folder ? SY.folder + '/' : '') + encodeURIComponent(uid) + '.json'; }
  function headers(json) {
    var h = { 'Accept': 'application/vnd.github+json', 'Authorization': 'Bearer ' + token(), 'X-GitHub-Api-Version': '2022-11-28' };
    if (json) h['Content-Type'] = 'application/json';
    return h;
  }
  function b64e(str) {
    var bytes = new TextEncoder().encode(str), bin = '';
    for (var i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
    return btoa(bin);
  }
  function b64d(b64) {
    var bin = atob(String(b64).replace(/\s/g, '')), bytes = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
    return new TextDecoder().decode(bytes);
  }
  function httpError(r) {
    if (r.status === 401) return new Error('GitHub rejected the token. It may have expired or been revoked. Connect again with a new token.');
    if (r.status === 403) return new Error('The token is not allowed to do this. Check it has Contents: Read and write on ' + SY.owner + '/' + SY.repo + '.');
    if (r.status === 404) return new Error('Repository ' + SY.owner + '/' + SY.repo + ' was not found, or the token cannot see it.');
    return new Error('GitHub returned an error (' + r.status + '). Try again in a minute.');
  }
  function netError(e) {
    if (e && (e.conflict || /GitHub|token|Repository/.test(e.message))) return e;
    return new Error('Could not reach GitHub. Check the internet connection.');
  }

  function pull(uid) {
    var u = fileUrl(uid) + (SY.branch ? '?ref=' + encodeURIComponent(SY.branch) : '');
    return fetch(u, { headers: headers(false), cache: 'no-store' }).then(function (r) {
      if (r.status === 404) { shas[uid] = null; return null; }
      if (!r.ok) throw httpError(r);
      return r.json().then(function (j) {
        shas[uid] = j.sha;
        try { return JSON.parse(b64d(j.content)); } catch (e) { return null; }
      });
    });
  }

  function put(uid, data, opts) {
    var body = {
      message: 'Progress: ' + uid + ', ' + new Date().toISOString().slice(0, 16).replace('T', ' '),
      content: b64e(JSON.stringify(data, null, 1))
    };
    if (SY.branch) body.branch = SY.branch;
    if (shas[uid]) body.sha = shas[uid];
    return fetch(fileUrl(uid), { method: 'PUT', headers: headers(true), body: JSON.stringify(body), keepalive: !!(opts && opts.keepalive) }).then(function (r) {
      if (r.status === 409 || r.status === 422) { var e = new Error('conflict'); e.conflict = true; throw e; }
      if (!r.ok) throw httpError(r);
      return r.json().then(function (j) { shas[uid] = j.content && j.content.sha; });
    });
  }

  /* pull, merge with local, push the result. Resolves true when local data changed. */
  function syncNow(uid, getLocal, setLocal, attempt) {
    if (!A.sync.enabled()) { setStatus('off'); return Promise.resolve(false); }
    if (busy) { again = true; return busy; }
    clearTimeout(timer); timer = null;
    setStatus('syncing');
    busy = pull(uid).then(function (remote) {
      lastPull = Date.now();
      var local = getLocal();
      if (!local) return 'abort';               /* the user signed out mid-sync */
      var merged = remote ? A.mergeProgress(local, remote) : local;
      var changed = canon(merged) !== canon(local);
      if (changed) setLocal(merged);
      if (remote && canon(merged) === canon(remote)) return changed;
      return put(uid, merged).then(function () { return changed; });
    }).then(function (changed) {
      busy = null;
      if (changed === 'abort') { again = false; setStatus(A.sync.enabled() ? 'idle' : 'off'); return false; }
      setStatus('ok');
      if (again) { again = false; return syncNow(uid, getLocal, setLocal).then(function (c2) { return changed || c2; }); }
      return changed;
    }, function (e) {
      busy = null;
      if (e && e.conflict && (attempt || 0) < 2) return syncNow(uid, getLocal, setLocal, (attempt || 0) + 1);
      setStatus('error', netError(e).message);
      return false;
    });
    return busy;
  }

  A.sync = {
    enabled: function () { return !!(token() && SY.owner && SY.repo); },
    target: function () { return SY.owner + '/' + SY.repo; },
    state: function () { return st; },
    on: function (fn) { listeners.push(fn); },
    sinceLastPull: function () { return Date.now() - lastPull; },
    test: function () {
      return fetch(apiBase(), { headers: headers(false), cache: 'no-store' }).then(function (r) {
        if (!r.ok) throw httpError(r);
        return r.json();
      }, function (e) { throw netError(e); });
    },
    syncNow: syncNow,
    schedule: function (uid, getLocal, setLocal) {
      if (!A.sync.enabled()) return;
      clearTimeout(timer);
      if (st.status !== 'syncing') setStatus('pending');
      timer = setTimeout(function () { timer = null; syncNow(uid, getLocal, setLocal); }, 3000);
    },
    /* when the tab is hidden or closed: send a pending change straight away */
    flush: function (uid, getLocal) {
      if (!timer || !A.sync.enabled()) return;
      clearTimeout(timer); timer = null;
      var d = getLocal();
      if (!d) return;
      put(uid, d, { keepalive: true }).then(function () { setStatus('ok'); }, function () { /* merged on the next visit */ });
    },
    reset: function () { shas = {}; lastPull = 0; clearTimeout(timer); timer = null; busy = null; again = false; setStatus(A.sync.enabled() ? 'idle' : 'off'); }
  };
  if (A.sync.enabled()) st.status = 'idle';
})();
