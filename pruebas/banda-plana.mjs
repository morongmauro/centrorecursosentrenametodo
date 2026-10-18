// La banda naranja de la cabecera se ve plana, como en las otras secciones:
// la franja clara de arriba (.em-top-fade) se apaga mientras la banda está a
// la vista y vuelve al bajar.   NODE_PATH=… node pruebas/banda-plana.mjs
import { createRequire } from 'module'; import http from 'node:http'; import fs from 'node:fs'; import path from 'node:path';
const r = createRequire(import.meta.url); const { chromium } = r('playwright');
const RAIZ = path.join(import.meta.dirname, '..');
const srv = http.createServer((q, s) => { let f = decodeURIComponent(new URL(q.url, 'http://x').pathname); if (f === '/') f = '/index.html.html';
  const p = path.join(RAIZ, f); if (!fs.existsSync(p) || fs.statSync(p).isDirectory()) { s.writeHead(404); return s.end(); }
  s.writeHead(200, { 'Content-Type': { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.png': 'image/png', '.svg': 'image/svg+xml', '.webp': 'image/webp' }[path.extname(p)] || 'application/octet-stream' }); fs.createReadStream(p).pipe(s); });
await new Promise(x => srv.listen(0, x)); const BASE = `http://127.0.0.1:${srv.address().port}`;
const b = await chromium.launch();
let mal = 0; const ok = (n, c, x = '') => { if (!c) mal++; console.log(`  ${c ? 'ok ' : 'MAL'}  ${n}${c ? '' : '  ' + x}`); };
const p = await (await b.newContext({ viewport: { width: 390, height: 844 } })).newPage(); const err = []; p.on('pageerror', e => err.push(e.message));
await p.route('**/*', r2 => r2.request().url().startsWith(BASE) ? r2.continue() : r2.fulfill({ status: 200, body: '[]', contentType: 'application/json' }));
await p.goto(BASE + '/?mt_v2=1&mt_name=Prueba&mt_go=capsulas'); await p.waitForTimeout(2500);
await p.evaluate(() => document.body.classList.remove('locked')); await p.waitForTimeout(1500);
const opac = () => p.evaluate(() => Number(getComputedStyle(document.querySelector('.em-top-fade')).opacity));
const banda = await p.evaluate(() => getComputedStyle(document.querySelector('.v2-cab-banda')).backgroundImage);
ok('la banda es naranja medio (opción 2)', /242, 166, 107/.test(banda), banda);
ok('arriba del todo, la franja clara no tapa la banda', (await opac()) === 0, String(await opac()));
for (let i = 0; i < 6 && !(await p.evaluate(() => scrollY > 300)); i++) { await p.mouse.move(200, 500); await p.mouse.wheel(0, 500); await p.waitForTimeout(500); }
await p.waitForTimeout(400);
ok('al bajar, la franja vuelve para desenfocar lo que pasa por detrás', (await opac()) > 0.9, String(await opac()));
ok('sin errores', err.length === 0, err.join(' | '));
await b.close(); srv.close();
console.log(mal ? `\n${mal} mal` : '\ntodo bien'); process.exit(mal ? 1 : 0);
