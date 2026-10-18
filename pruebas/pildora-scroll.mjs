// Dentro de la app, el centro le cuenta a la app cuánto se bajó (em-scroll),
// para que la píldora «Aprendizaje» se vaya al bajar y vuelva arriba del todo.
// Los carruseles de lado no cuentan.   NODE_PATH=… node pruebas/pildora-scroll.mjs
import { createRequire } from 'module'; import http from 'node:http'; import fs from 'node:fs'; import path from 'node:path';
const r = createRequire(import.meta.url); const { chromium } = r('playwright');
const RAIZ = path.join(import.meta.dirname, '..');
const srv = http.createServer((q, s) => { let f = decodeURIComponent(new URL(q.url, 'http://x').pathname); if (f === '/') f = '/index.html.html';
  const p = path.join(RAIZ, f); if (!fs.existsSync(p) || fs.statSync(p).isDirectory()) { s.writeHead(404); return s.end(); }
  s.writeHead(200, { 'Content-Type': { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.png': 'image/png', '.svg': 'image/svg+xml', '.webp': 'image/webp' }[path.extname(p)] || 'application/octet-stream' }); fs.createReadStream(p).pipe(s); });
await new Promise(x => srv.listen(0, x)); const BASE = `http://127.0.0.1:${srv.address().port}`;
const b = await chromium.launch();
let mal = 0; const ok = (n, c, x = '') => { if (!c) mal++; console.log(`  ${c ? 'ok ' : 'MAL'}  ${n}${c ? '' : '  ' + x}`); };
const ctx = await b.newContext({ viewport: { width: 390, height: 844 } });
const p = await ctx.newPage(); const err = []; p.on('pageerror', e => err.push(e.message));
await p.route('**/*', r2 => r2.request().url().startsWith(BASE) ? r2.continue() : r2.fulfill({ status: 200, body: '[]', contentType: 'application/json' }));
await p.route(BASE + '/envoltura', r2 => r2.fulfill({ contentType: 'text/html', body: '<!doctype html><body style="margin:0"><script>window.__y=[];addEventListener("message",e=>{if(e.data&&e.data.tipo==="em-scroll")__y.push(e.data.y)})</script><iframe src="/?mt_v2=1&mt_name=Prueba&mt_go=capsulas" style="border:0;position:fixed;inset:0;width:100%;height:100%"></iframe>' }));
await p.goto(BASE + '/envoltura'); await p.waitForTimeout(3000);
const f = p.frames().find(x => x !== p.mainFrame());
await f.evaluate(() => document.body.classList.remove('locked'));
const ult = () => p.evaluate(() => window.__y[window.__y.length - 1]);
// Al terminar de cargar, el centro vuelve arriba solo una vez: se baja
// hasta que el bajón se quede.
for (let i = 0; i < 6; i++) {
  await p.mouse.move(200, 500); await p.mouse.wheel(0, 400); await p.waitForTimeout(600);
  if (await f.evaluate(() => scrollY > 24)) break;
  await f.evaluate(() => window.scrollTo(0, 0)); await p.waitForTimeout(400);
}
const bajo = await ult();
ok('al bajar, el centro avisa a la app cuánto bajó', bajo > 24, String(bajo));
await f.evaluate(() => window.scrollTo(0, 0)); await p.waitForTimeout(300);
const arriba = await ult();
ok('al volver arriba del todo, avisa 0', arriba === 0, String(arriba));
// Un carrusel de lado no cuenta.
const n0 = await p.evaluate(() => window.__y.length);
await f.evaluate(() => { const d = document.createElement('div'); d.style.cssText = 'overflow-x:auto;width:200px;white-space:nowrap'; d.innerHTML = '<div style="width:900px;height:40px"></div>'; document.body.appendChild(d); d.scrollLeft = 300; });
await p.waitForTimeout(300);
ok('un carrusel de lado no cambia la píldora', (await p.evaluate(() => window.__y.length)) === n0);
// Fuera de la app (abierto solo) no manda nada ni falla.
const p2 = await ctx.newPage(); const err2 = []; p2.on('pageerror', e => err2.push(e.message));
await p2.goto(BASE + '/?mt_v2=1&mt_name=Prueba'); await p2.waitForTimeout(1200);
await p2.evaluate(() => window.scrollTo(0, 300)); await p2.waitForTimeout(200);
ok('sin errores', !err.length && !err2.length, [...err, ...err2].join(' | '));
await b.close(); srv.close();
console.log(mal ? `\n${mal} fallo(s)` : '\ntodo bien'); process.exit(mal ? 1 : 0);
