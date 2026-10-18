// Cápsulas: la pregunta rápida antes de la regla (responder marca la correcta,
// explica y «Seguir» lleva al final).  NODE_PATH=… node pruebas/quiz.mjs
import { createRequire } from 'module'; import http from 'node:http'; import fs from 'node:fs'; import path from 'node:path';
const r = createRequire(import.meta.url); const { chromium } = r('playwright');
const RAIZ = path.join(import.meta.dirname, '..');
const srv = http.createServer((q, s) => { let f = decodeURIComponent(new URL(q.url, 'http://x').pathname); if (f === '/') f = '/index.html.html';
  const p = path.join(RAIZ, f); if (!fs.existsSync(p) || fs.statSync(p).isDirectory()) { s.writeHead(404); return s.end(); }
  s.writeHead(200, { 'Content-Type': { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.png': 'image/png', '.svg': 'image/svg+xml', '.webp': 'image/webp' }[path.extname(p)] || 'application/octet-stream' }); fs.createReadStream(p).pipe(s); });
await new Promise(x => srv.listen(0, x)); const BASE = `http://127.0.0.1:${srv.address().port}`;
const b = await chromium.launch(); const ctx = await b.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, hasTouch: true });
const p = await ctx.newPage(); const err = []; p.on('pageerror', e => err.push(e.message));
await p.route('**/*', r2 => r2.request().url().startsWith(BASE) ? r2.continue() : r2.fulfill({ status: 200, body: '[]', contentType: 'application/json' }));
await p.goto(BASE + '/?mt_v2=1&mt_name=Prueba'); await p.waitForTimeout(2500);
let mal = 0; const ok = (n, c, x = '') => { if (!c) mal++; console.log(`  ${c ? 'ok ' : 'MAL'}  ${n}${c ? '' : '  ' + x}`); };
const i = await p.evaluate(() => CAPSULAS.findIndex(c => c.id === 'ent-04-subir-peso'));
await p.evaluate((i) => capOpen(i), i); await p.waitForTimeout(400);
const n = await p.evaluate(() => document.querySelectorAll('#v2-hist .barras span').length);
for (let k = 0; k < n - 2; k++) { await p.locator('#v2-hist .toque.adelante').click(); await p.waitForTimeout(120); }
ok('la penúltima pantalla es la pregunta rápida', await p.locator('#v2-hist [data-pantalla="quiz"]').count() === 1, await p.locator('#v2-hist .lam').innerText());
await p.screenshot({ path: path.join(import.meta.dirname, 'quiz-1.png') });
await p.locator('#v2-hist .quiz-op').nth(1).click(); await p.waitForTimeout(300);
const res = await p.locator('#v2-hist .quiz-res').innerText();
ok('al responder mal: marca la correcta y explica', /Casi\./.test(res) && /aunque sea por una repetición/.test(res) && await p.locator('#v2-hist .quiz-op.bien').count() === 1, res);
await p.screenshot({ path: path.join(import.meta.dirname, 'quiz-2.png') });
await p.locator('#v2-hist .quiz-sigue').click(); await p.waitForTimeout(300);
ok('«Seguir» lleva a la regla final', await p.locator('#v2-hist [data-pantalla="regla"]').count() === 1);
ok('queda la respuesta guardada', await p.evaluate(() => JSON.parse(localStorage.getItem('em_v2_quiz') || '{}')['ent-04-subir-peso'] === 0));
ok('sin errores', err.length === 0, err.join(' | '));
console.log(mal ? `${mal} MAL` : 'todo bien'); await b.close(); srv.close();
