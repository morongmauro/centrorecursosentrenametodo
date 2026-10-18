// Cápsulas como lectura: abre las 11, revisa que esté TODO su texto, que
// nada se salga de lo ancho, que al llegar a la regla quede leída y que
// «‹ Cápsulas» cierre. Guarda capturas en pruebas/lectura/.
//   NODE_PATH=… node pruebas/lectura.mjs
import { createRequire } from 'module'; import http from 'node:http'; import fs from 'node:fs'; import path from 'node:path';
const r = createRequire(import.meta.url); const { chromium } = r('playwright');
const RAIZ = path.join(import.meta.dirname, '..'); const SAL = path.join(import.meta.dirname, 'lectura'); fs.mkdirSync(SAL, { recursive: true });
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
const faltan = [], anchas = [], noLeidas = [];
for (const id of ids) {
  await p.evaluate((id) => { localStorage.removeItem('em_v2_hist_pos'); capOpen(CAPSULAS.findIndex(c => c.id === id)); }, id); await p.waitForTimeout(350);
  const d = await p.evaluate((id) => {
    const caja = document.getElementById('v2-lec'), H = window.CAPSULAS_HISTORIAS[id], txt = [];
    const junta = (v, k) => { if (v == null || ['ico', 'quiz', 'alto', 'v', 'resalta', 'fuerte', 'radar', 'plato'].includes(k)) return;
      if (typeof v === 'string') txt.push(v); else if (Array.isArray(v)) v.forEach(x => junta(x)); else if (typeof v === 'object') Object.keys(v).forEach(kk => junta(v[kk], kk)); };
    H.pantallas.forEach(s => junta(s));
    // En minúsculas: los títulos de las columnas se ven en mayúsculas. «La idea» es solo
    // la etiqueta de la primera tarjeta, que va arriba junto al título.
    const norm = s => s.replace(/\s+/g, ' ').trim().toLowerCase();
    const visto = norm(caja.innerText + ' ' + [...caja.querySelectorAll('svg text')].map(t => t.textContent).join(' '));
    // Lo de la curva viene partido por « · » en dos renglones del gráfico.
    const falta = txt.flatMap(t => t.split(' · ')).map(norm).filter(t => t && t !== 'la idea' && !visto.includes(t));
    return { abierta: caja.classList.contains('abierta'), h1: caja.querySelector('h1').textContent, falta,
      ancha: caja.scrollWidth > caja.clientWidth + 1, regla: !!caja.querySelector('[data-fin]'), ver: !!caja.querySelector('.ver'), alto: caja.scrollHeight };
  }, id);
  if (d.falta.length) faltan.push(id + ': ' + d.falta.slice(0, 3).join(' | '));
  if (d.ancha) anchas.push(id);
  ok(`${id}: se abre como lectura, con la regla y sin «Ver la lámina»`, d.abierta && d.regla && !d.ver, JSON.stringify(d).slice(0, 200));
  if (['ent-01-capacidades', 'ent-04-subir-peso', 'nut-09-comer-sin-pesar', 'bie-11-muevete-fuera'].includes(id))
    await p.locator('#v2-lec').screenshot({ path: path.join(SAL, id + '.png') }).catch(() => {});
  await p.evaluate(() => { const c = document.getElementById('v2-lec'); c.scrollTop = c.scrollHeight; }); await p.waitForTimeout(400);
  if (!(await p.evaluate((id) => capGetRead().includes(id), id))) noLeidas.push(id);
  await p.locator('#v2-lec .volver').click(); await p.waitForTimeout(200);
  if (await p.evaluate(() => document.getElementById('v2-lec').classList.contains('abierta'))) ok(id + ': «‹ Cápsulas» cierra', false);
}
ok('está TODO el texto de cada cápsula', faltan.length === 0, faltan.join(' || '));
ok('nada se sale de lo ancho', anchas.length === 0, anchas.join(', '));
ok('al llegar al final queda leída', noLeidas.length === 0, noLeidas.join(', '));
const m = await p.evaluate(() => [...document.querySelectorAll('#cap-gal .m, .v2-cap-dest-pie span')].map(e => e.textContent).slice(0, 3));
ok('la lista dice los minutos de lectura (no «pantallas»)', m.length && m.every(t => /min de lectura/.test(t)), m.join(' / '));
ok('sin errores', err.length === 0, err.join(' | '));
console.log(mal ? `${mal} MAL` : 'todo bien'); await b.close(); srv.close();
