// Videos (podcast): el video se ve entero (sin recorte arriba y abajo) y el
// botón de pantalla completa funciona: la real en computador/Android y el
// «modo cine» en iPhone.   NODE_PATH=… node pruebas/videos-pantalla.mjs
import { createRequire } from 'module'; import http from 'node:http'; import fs from 'node:fs'; import path from 'node:path';
const r = createRequire(import.meta.url); const { chromium } = r('playwright');
const RAIZ = path.join(import.meta.dirname, '..');
const srv = http.createServer((q, s) => { let f = decodeURIComponent(new URL(q.url, 'http://x').pathname); if (f === '/') f = '/index.html.html';
  const p = path.join(RAIZ, f); if (!fs.existsSync(p) || fs.statSync(p).isDirectory()) { s.writeHead(404); return s.end(); }
  s.writeHead(200, { 'Content-Type': { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.png': 'image/png', '.svg': 'image/svg+xml', '.webp': 'image/webp' }[path.extname(p)] || 'application/octet-stream' }); fs.createReadStream(p).pipe(s); });
await new Promise(x => srv.listen(0, x)); const BASE = `http://127.0.0.1:${srv.address().port}`;
const b = await chromium.launch();
let mal = 0; const ok = (n, c, x = '') => { if (!c) mal++; console.log(`  ${c ? 'ok ' : 'MAL'}  ${n}${c ? '' : '  ' + x}`); };
const IPHONE = 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1';
for (const [tag, ua, w, h] of [['iPhone', IPHONE, 390, 844], ['computador', null, 1280, 800]]) {
  const ctx = await b.newContext({ viewport: { width: w, height: h }, ...(ua ? { userAgent: ua } : {}) });
  const p = await ctx.newPage(); const err = []; p.on('pageerror', e => err.push(e.message));
  await p.route('**/*', r2 => r2.request().url().startsWith(BASE) ? r2.continue() : r2.abort());
  await p.goto(BASE + '/?mt_v2=1&mt_name=Prueba&mt_go=videos'); await p.waitForTimeout(1500);
  const i = await p.evaluate(() => PODCASTS.findIndex(x => !x.sinEmbed && podEmbedUrl(x)));
  await p.evaluate((i) => { document.body.classList.remove('locked'); podOpen(i); }, i); await p.waitForTimeout(2500);
  const m = await p.evaluate(() => { const f = document.getElementById('pod-lb-frame'), v = f.querySelector('iframe, #pod-yt'); const a = f.getBoundingClientRect(), c = v.getBoundingClientRect();
    return { fT: Math.round(a.top), fH: Math.round(a.height), vT: Math.round(c.top), vH: Math.round(c.height), boton: !!f.querySelector('.pod-lb-full') }; });
  ok(`${tag} · el video ocupa el cuadro justo, sin recorte`, Math.abs(m.fT - m.vT) <= 1 && Math.abs(m.fH - m.vH) <= 1, JSON.stringify(m));
  ok(`${tag} · tiene el botón de pantalla completa`, m.boton);
  await p.locator('#pod-lb-frame .pod-lb-full').click(); await p.waitForTimeout(500);
  const e = await p.evaluate(() => { const f = document.getElementById('pod-lb-frame'), a = f.getBoundingClientRect(), v = f.querySelector('iframe, #pod-yt').getBoundingClientRect();
    return { cine: document.getElementById('pod-lb').classList.contains('pod-cine'), real: document.fullscreenElement === f, w: Math.round(a.width), h: Math.round(a.height), vw: Math.round(v.width), vh: Math.round(v.height), W: innerWidth, H: innerHeight }; });
  ok(`${tag} · al tocarlo el video llena la pantalla (${e.real ? 'pantalla completa real' : 'modo cine'})`, (tag === 'iPhone' ? e.cine : (e.real || e.cine)) && e.w >= e.W - 1 && e.h >= e.H - 1, JSON.stringify(e));
  ok(`${tag} · y se ve entero, en 16:9`, Math.abs(e.vw / e.vh - 16 / 9) < 0.02 && e.vw <= e.W + 1 && e.vh <= e.H + 1, JSON.stringify(e));
  await p.screenshot({ path: path.join(import.meta.dirname, `video-pantalla-${tag}.png`) });
  await p.locator('#pod-lb-frame .pod-lb-full').click(); await p.waitForTimeout(400);
  ok(`${tag} · tocarlo otra vez vuelve al tamaño normal`, await p.evaluate(() => !document.getElementById('pod-lb').classList.contains('pod-cine') && !document.fullscreenElement));
  ok(`${tag} · sin errores`, err.length === 0, err.join(' | '));
  await ctx.close();
}
console.log(mal ? `${mal} MAL` : 'todo bien'); await b.close(); srv.close();
