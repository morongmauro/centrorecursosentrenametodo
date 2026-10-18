// Cápsulas estilo lámina: recorre las 11 de punta a punta y revisa que cada
// ilustración cargue, que nada se salga de lo ancho y que la portada traiga
// la idea. Guarda capturas de cada pantalla en pruebas/laminas/.
//   NODE_PATH=… node pruebas/laminas.mjs
import { createRequire } from 'module'; import http from 'node:http'; import fs from 'node:fs'; import path from 'node:path';
const r = createRequire(import.meta.url); const { chromium } = r('playwright');
const RAIZ = path.join(import.meta.dirname, '..'); const SAL = path.join(import.meta.dirname, 'laminas'); fs.mkdirSync(SAL, { recursive: true });
const srv = http.createServer((q, s) => { let f = decodeURIComponent(new URL(q.url, 'http://x').pathname); if (f === '/') f = '/index.html.html';
  const p = path.join(RAIZ, f); if (!fs.existsSync(p) || fs.statSync(p).isDirectory()) { s.writeHead(404); return s.end(); }
  s.writeHead(200, { 'Content-Type': { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.png': 'image/png', '.svg': 'image/svg+xml', '.webp': 'image/webp' }[path.extname(p)] || 'application/octet-stream' }); fs.createReadStream(p).pipe(s); });
await new Promise(x => srv.listen(0, x)); const BASE = `http://127.0.0.1:${srv.address().port}`;
const b = await chromium.launch(); const ctx = await b.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, hasTouch: true });
const p = await ctx.newPage(); const err = []; p.on('pageerror', e => err.push(e.message));
await p.route('**/*', r2 => r2.request().url().startsWith(BASE) ? r2.continue() : r2.fulfill({ status: 200, body: '[]', contentType: 'application/json' }));
await p.goto(BASE + '/?mt_v2=1&mt_name=Prueba'); await p.waitForTimeout(2500);
let mal = 0; const ok = (n, c, x = '') => { if (!c) mal++; console.log(`  ${c ? 'ok ' : 'MAL'}  ${n}${c ? '' : '  ' + x}`); };
const ids = await p.evaluate(() => Object.keys(window.CAPSULAS_HISTORIAS));
let imgs = 0, rotas = [], anchas = [], esperadas = 0;
for (const id of ids) {
  esperadas += await p.evaluate((id) => window.CAPSULAS_HISTORIAS[id].pantallas.filter(s => s.img).length, id);
  await p.evaluate((id) => { localStorage.removeItem('em_v2_hist_pos'); capOpen(CAPSULAS.findIndex(c => c.id === id)); }, id); await p.waitForTimeout(350);
  const n = await p.evaluate(() => document.querySelectorAll('#v2-hist .barras span').length);
  for (let k = 0; k < n; k++) {
    await p.evaluate(() => document.querySelectorAll('#v2-hist img').forEach(i => i.loading = 'eager'));
    await p.waitForFunction(() => [...document.querySelectorAll('#v2-hist img')].every(i => i.complete), null, { timeout: 4000 }).catch(() => {});
    await p.waitForTimeout(380);
    const d = await p.evaluate(() => { const l = document.querySelector('#v2-hist .lam');
      return { img: [...l.querySelectorAll('img')].map(i => ({ src: i.getAttribute('src'), w: i.naturalWidth })), ancho: l.scrollWidth > l.clientWidth + 1 || document.querySelector('#v2-hist').scrollWidth > 391,
        tipo: l.firstElementChild && l.firstElementChild.dataset.pantalla }; });
    d.img.forEach(x => { imgs++; if (!x.w) rotas.push(x.src); });
    if (d.ancho) anchas.push(id + ' #' + k);
    if (k === 0) ok(id + ': portada', d.tipo === 'portada');
    await p.screenshot({ path: path.join(SAL, `${id}-${String(k).padStart(2, '0')}.png`) });
    if (k < n - 1) { const q = await p.locator('#v2-hist .quiz-op').count();
      if (q) { await p.locator('#v2-hist .quiz-op').first().click(); await p.waitForTimeout(200); await p.screenshot({ path: path.join(SAL, `${id}-${String(k).padStart(2, '0')}b.png`) }); await p.locator('#v2-hist .quiz-sigue').click(); }
      else await p.locator('#v2-hist .toque.adelante').click(); }
  }
  ok(id + ': termina en la regla', await p.locator('#v2-hist [data-pantalla="regla"]').count() === 1);
  await p.locator('#v2-hist .listo').click(); await p.waitForTimeout(200);
}
ok(`todas las ilustraciones cargan (${imgs} de ${esperadas})`, rotas.length === 0 && imgs === esperadas, rotas.join(', '));
ok('nada se sale de lo ancho', anchas.length === 0, anchas.join(', '));
ok('sin errores', err.length === 0, err.join(' | '));
console.log(mal ? `${mal} MAL` : 'todo bien'); await b.close(); srv.close();
