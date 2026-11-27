#!/usr/bin/env node
/* ==========================================================
   EA Academy — one-time cloud save setup
   Run from the ea-academy folder:

       node tools/setup-cloud.mjs

   It asks for the GitHub token and each person's password,
   checks the token can write to the private data repository,
   locks the token with each password (PBKDF2-SHA256 + AES-GCM)
   and writes the locked version into js/config.js.
   The readable token is never saved anywhere.

   Needs Node.js 18 or newer.
   ========================================================== */
import { readFileSync, writeFileSync } from 'node:fs';
import { webcrypto, createHash } from 'node:crypto';
import readline from 'node:readline';
import vm from 'node:vm';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const CONFIG = path.join(ROOT, 'js', 'config.js');
const API = (process.env.GITHUB_API_URL || 'https://api.github.com').replace(/\/$/, '');
const ITER = 600000;
const subtle = webcrypto.subtle;

const ok = (m) => console.log('  \u2713 ' + m);
const bad = (m) => { console.error('\n  \u2717 ' + m + '\n'); process.exit(1); };

/* ---------- prompts (input hidden with *) ---------- */
function ask(question, hidden) {
  return new Promise((resolve) => {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout, terminal: true });
    let muted = false;
    rl._writeToOutput = (str) => {
      if (!muted) return rl.output.write(str);
      if (str.includes('\n') || str.includes('\r')) return rl.output.write('\n');
      rl.output.write('*'.repeat(str.length));
    };
    rl.question(question, (answer) => { rl.close(); resolve(answer.trim()); });
    muted = !!hidden;
  });
}
async function askFor(key, question, hidden) {
  if (process.env[key] !== undefined) return process.env[key];       /* non-interactive use */
  return ask(question, hidden);
}

/* ---------- crypto (same algorithm the browser uses to unlock) ---------- */
const b64 = (u8) => Buffer.from(u8).toString('base64');
const fromB64 = (s) => new Uint8Array(Buffer.from(s, 'base64'));

async function deriveKey(password, salt, iter, usage) {
  const base = await subtle.importKey('raw', new TextEncoder().encode(password), 'PBKDF2', false, ['deriveKey']);
  return subtle.deriveKey({ name: 'PBKDF2', salt, iterations: iter, hash: 'SHA-256' }, base, { name: 'AES-GCM', length: 256 }, false, [usage]);
}
async function lock(token, password) {
  const salt = webcrypto.getRandomValues(new Uint8Array(16));
  const iv = webcrypto.getRandomValues(new Uint8Array(12));
  const key = await deriveKey(password, salt, ITER, 'encrypt');
  const data = new Uint8Array(await subtle.encrypt({ name: 'AES-GCM', iv }, key, new TextEncoder().encode(token)));
  return { iter: ITER, salt: b64(salt), iv: b64(iv), data: b64(data) };
}
async function unlock(v, password) {
  try {
    const key = await deriveKey(password, fromB64(v.salt), v.iter || ITER, 'decrypt');
    return new TextDecoder().decode(await subtle.decrypt({ name: 'AES-GCM', iv: fromB64(v.iv) }, key, fromB64(v.data)));
  } catch { return null; }
}
const sha256 = (t) => createHash('sha256').update(t, 'utf8').digest('hex');

/* ---------- GitHub checks ---------- */
async function gh(method, url, token, body) {
  const r = await fetch(API + url, {
    method,
    headers: { Accept: 'application/vnd.github+json', Authorization: 'Bearer ' + token, 'X-GitHub-Api-Version': '2022-11-28', ...(body ? { 'Content-Type': 'application/json' } : {}) },
    body: body ? JSON.stringify(body) : undefined
  });
  let json = null; try { json = await r.json(); } catch { /* empty body */ }
  return { status: r.status, json };
}

/* ---------- main ---------- */
async function main() {
  console.log('\nEA Academy: one-time cloud save setup\n');
  const text = readFileSync(CONFIG, 'utf8');
  const ctx = {};
  ctx.window = ctx;                    /* like a browser: window is the global object */
  vm.createContext(ctx);
  vm.runInContext(text, ctx);
  const cfg = ctx.window.ACADEMY.config;
  const { owner, repo, branch, folder } = cfg.sync || {};
  if (!owner || !repo) bad('js/config.js has no sync owner/repo.');
  const users = cfg.users || [];
  if (!users.length) bad('js/config.js has no users.');
  console.log('  Data repository: ' + owner + '/' + repo);
  console.log('  Users: ' + users.map((u) => u.name).join(', ') + '\n');

  /* 1. token */
  const token = await askFor('EA_TOKEN', '  Paste the GitHub token: ', true);
  if (!token) bad('No token entered.');
  if (/^gh[opsu]_/.test(token)) bad('That looks like a full-access token. Create a fine-grained token limited to ' + repo + ' instead (see README).');

  let r = await gh('GET', `/repos/${owner}/${repo}`, token);
  if (r.status === 401) bad('GitHub rejected the token. Copy it again, or create a new one.');
  if (r.status === 404) bad(`Can't see ${owner}/${repo}. Create it first (gh repo create ${repo} --private --add-readme) and give the token access to it.`);
  if (r.status !== 200) bad('GitHub returned ' + r.status + '. Try again in a minute.');
  if (r.json && r.json.private === false) bad(`${owner}/${repo} is public. Make it private first: gh repo edit ${owner}/${repo} --visibility private --accept-visibility-change-consequences`);
  ok('Token can see the private repository');

  const notePath = `/repos/${owner}/${repo}/contents/${folder ? folder + '/' : ''}README.md`;
  r = await gh('GET', notePath + (branch ? `?ref=${branch}` : ''), token);
  const body = {
    message: 'EA Academy: cloud save check',
    content: Buffer.from('# EA Academy progress\n\nEach signed-in person\'s progress is saved here as <id>.json by the website. Don\'t edit these files by hand.\n').toString('base64'),
    ...(branch ? { branch } : {}),
    ...(r.status === 200 && r.json && r.json.sha ? { sha: r.json.sha } : {})
  };
  r = await gh('PUT', notePath, token, body);
  if (r.status === 403 || r.status === 404) bad('The token can read but not write. Edit the token on GitHub and set Contents to "Read and write".');
  if (r.status !== 200 && r.status !== 201) bad('Test write failed (' + r.status + '): ' + ((r.json && r.json.message) || ''));
  ok('Token can save files');

  /* 2. passwords */
  console.log('\n  Now each person\'s password. Typing is hidden.\n');
  const vaults = {};
  for (const u of users) {
    const envKey = 'EA_PASSWORD_' + u.id.toUpperCase();
    const pw = await askFor(envKey, `  Password for ${u.name}: `, true);
    if (!pw) bad('Empty password for ' + u.name + '.');
    const matches = (u.vault && (await unlock(u.vault, pw)) !== null) || (u.passwordHash && sha256(pw) === u.passwordHash);
    if (!matches) {
      if (process.env[envKey] === undefined) {
        const again = await ask(`  That is a NEW password for ${u.name}. Type it again to confirm: `, true);
        if (again !== pw) bad('The two passwords did not match. Nothing was changed.');
      }
      if (pw.length < 8) bad('Use at least 8 characters for ' + u.name + '\'s password.');
      ok(u.name + ': new password set');
    } else {
      ok(u.name + ': password confirmed');
    }
    vaults[u.id] = await lock(token, pw);
    if ((await unlock(vaults[u.id], pw)) !== token) bad('Self-check failed while locking the key for ' + u.name + '.');
  }

  /* 3. write config.js */
  const block = '    users: [\n' + users.map((u, i) =>
    `      { id: '${u.id}', name: '${u.name.replace(/'/g, "\\'")}',\n        vault: ${JSON.stringify(vaults[u.id])} }` + (i < users.length - 1 ? ',' : '')
  ).join('\n') + '\n    ],';
  const re = /    users: \[[\s\S]*?\n    \],/;
  if (!re.test(text)) bad('Could not find the users list in js/config.js.');
  writeFileSync(CONFIG, text.replace(re, block));
  ok('js/config.js updated with the locked key');

  console.log('\n  Done. Publish it:\n');
  console.log('    git add .');
  console.log('    git commit -m "Switch on cloud save"');
  console.log('    git push\n');
  console.log('  After that, everyone just signs in. Progress saves to GitHub automatically.\n');
}

main().catch((e) => bad(e.message));
