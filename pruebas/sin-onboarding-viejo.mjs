// Visual nueva: al entrar al centro (Aprendizaje) nunca se ve, ni un instante,
// la portada vieja ni el onboarding viejo: cae directo en Lecturas. Sin la
// visual nueva, todo sigue como antes.   NODE_PATH=… node pruebas/sin-onboarding-viejo.mjs
import { createRequire } from 'module'; import http from 'node:http'; import fs from 'node:fs'; import path from 'node:path';
const r = createRequire(import.meta.url); const { chromium } = r('playwright');
const RAIZ = path.join(import.meta.dirname, '..');
const srv = http.createServer((q, s) => { let f = decodeURIComponent(new URL(q.url, 'http://x').pathname); if (f === '/') f = '/index.html.html';
  const p = path.join(RAIZ, f); if (!fs.existsSync(p) || fs.statSync(p).isDirectory()) { s.writeHead(404); return s.end(); }
  s.writeHead(200, { 'Content-Type': { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.png': 'image/png', '.svg': 'image/svg+xml', '.webp': 'image/webp' }[path.extname(p)] || 'application/octet-stream' }); fs.createReadStream(p).pipe(s); });
await new Promise(x => srv.listen(0, x)); const BASE = `http://127.0.0.1:${srv.address().port}`;
const b = await chromium.launch();
let mal = 0; const ok = (n, c, x = '') => { if (!c) mal++; console.log(`  ${c ? 'ok ' : 'MAL'}  ${n}${c ? '' : '  ' + x}`); };
async function abrir(q) {
  const ctx = await b.newContext({ viewport: { width: 390, height: 844 } });
  // Desde el primer instante: ¿alguna vez se ve la portada o el onboarding viejos?
  await ctx.addInitScript(() => {
    window.__vistos = new Set();
    const mira = () => ['s-home', 's-onboarding'].forEach(id => { const e = document.getElementById(id); if (e && getComputedStyle(e).display !== 'none' && e.classList.contains('active')) window.__vistos.add(id); });
    new MutationObserver(mira).observe(document, { subtree: true, attributes: true, attributeFilter: ['class'], childList: true });
    const t = setInterval(mira, 16); setTimeout(() => clearInterval(t), 6000);
  });
  const p = await ctx.newPage(); const err = []; p.on('pageerror', e => err.push(e.message));
  await p.route('**/*', r2 => r2.request().url().startsWith(BASE) ? r2.continue() : r2.fulfill({ status: 200, body: '[]', contentType: 'application/json' }));
  await p.goto(BASE + '/' + q); await p.waitForTimeout(1500);
  await p.evaluate(() => document.body.classList.remove('locked')); await p.waitForTimeout(400);
  return { ctx, p, err };
}
for (const [q, nombre] of [['?mt_v2=1&mt_name=Prueba', 'sin destino'], ['?mt_v2=1&mt_name=Prueba&mt_go=onboarding', 'con mt_go=onboarding'], ['?mt_v2=1&mt_name=Prueba&mt_go=capsulas', 'con mt_go=capsulas']]) {
  const { ctx, p, err } = await abrir(q);
  const d = await p.evaluate(() => ({ vistos: [...window.__vistos], activa: document.querySelector('.screen.active')?.id, cab: !!document.querySelector('#s-capsulas > .v2-lect') }));
  ok(`visual nueva, ${nombre}: nunca se ve la portada ni el onboarding viejos`, d.vistos.length === 0, d.vistos.join(','));
  ok(`visual nueva, ${nombre}: queda en Lecturas con su cabecera`, d.activa === 's-capsulas' && d.cab, JSON.stringify(d));
  if (nombre === 'sin destino') {
    await p.evaluate(() => window.postMessage({ tipo: 'em-ir', a: 'home' }, '*')); await p.waitForTimeout(300);
    ok('visual nueva: la app pide «inicio» → Lecturas', await p.evaluate(() => document.querySelector('.screen.active')?.id === 's-capsulas' && window.__vistos.size === 0));
    await p.evaluate(() => go('s-onboarding')); await p.waitForTimeout(200);
    ok('visual nueva: un enlace al onboarding viejo → Lecturas', await p.evaluate(() => document.querySelector('.screen.active')?.id === 's-capsulas' && window.__vistos.size === 0));
  }
  ok(`visual nueva, ${nombre}: sin errores`, err.length === 0, err.join(' | '));
  await ctx.close();
}
const { ctx, p } = await abrir('?mt_name=Prueba');
ok('sin la visual nueva: la portada de siempre', await p.evaluate(() => document.querySelector('.screen.active')?.id === 's-home'));
await ctx.close();
console.log(mal ? `${mal} MAL` : 'todo bien'); await b.close(); srv.close();
