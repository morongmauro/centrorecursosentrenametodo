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
// Girar el teléfono con el video abierto (iPhone): entra solo a pantalla
// completa, sin nada encima, con su botón para salir; al volver a vertical
// sale solo. Y la app recibe el aviso para esconder su barra.
{
  const ctx = await b.newContext({ viewport: { width: 390, height: 844 }, userAgent: IPHONE, hasTouch: true, isMobile: true });
  let p = await ctx.newPage(); const err = []; p.on('pageerror', e => err.push(e.message));
  // Dentro de un marco, como en la app; la página de afuera anota los avisos.
  await p.route('**/*', r2 => r2.request().url().startsWith(BASE) ? r2.continue() : r2.abort());
  await p.route(BASE + '/envoltura', r2 => r2.fulfill({ contentType: 'text/html', body: '<!doctype html><body style="margin:0"><script>window.__avisos=[];addEventListener("message",e=>__avisos.push(e.data))</script><iframe src="/?mt_v2=1&mt_name=Prueba&mt_go=videos" style="border:0;position:fixed;inset:0;width:100%;height:100%"></iframe>' }));
  await p.goto(BASE + '/envoltura'); await p.waitForTimeout(1800);
  const afuera = p; const avisos = () => afuera.evaluate(() => JSON.stringify(window.__avisos.filter(m => m && m.tipo === 'em-pantalla-completa')));
  p = afuera.frames()[1];
  const i = await p.evaluate(() => PODCASTS.findIndex(x => !x.sinEmbed && podEmbedUrl(x)));
  await p.evaluate((i) => { document.body.classList.remove('locked'); podOpen(i); }, i); await p.waitForTimeout(1500);
  ok('girar · en vertical se abre normal', await p.evaluate(() => !document.getElementById('pod-lb').classList.contains('pod-cine')));
  await afuera.setViewportSize({ width: 844, height: 390 }); await p.waitForTimeout(700);
  const e = await p.evaluate(() => { const lb = document.getElementById('pod-lb'), f = document.getElementById('pod-lb-frame'), a = f.getBoundingClientRect(), v = f.querySelector('iframe, #pod-yt').getBoundingClientRect(), bt = f.querySelector('.pod-lb-full').getBoundingClientRect();
    const tapan = [...document.querySelectorAll('.pod-lb-x, .pod-lb-cap, .pod-lb-acts')].filter(x => x.offsetParent && x.getBoundingClientRect().height > 0).length;
    return { cine: lb.classList.contains('pod-cine'), w: Math.round(a.width), h: Math.round(a.height), vw: Math.round(v.width), vh: Math.round(v.height), W: innerWidth, H: innerHeight, tapan,
      boton: bt.top >= 0 && bt.right <= innerWidth && bt.top < 80 && bt.width >= 40 }; });
  e.avisos = await avisos();
  ok('girar · a lo horizontal entra solo a pantalla completa, el video entero en 16:9', e.cine && e.w >= e.W - 1 && e.h >= e.H - 1 && Math.abs(e.vw / e.vh - 16 / 9) < 0.02 && e.vh >= e.H - 1, JSON.stringify(e));
  ok('girar · sin título, cerrar ni botones encima del video', e.tapan === 0, JSON.stringify(e));
  ok('girar · botón para salir visible arriba a la derecha', e.boton, JSON.stringify(e));
  ok('girar · le avisa a la app para que esconda su barra', /"em-pantalla-completa","on":true/.test(e.avisos), e.avisos);
  await afuera.screenshot({ path: path.join(import.meta.dirname, 'video-girado.png') });
  await afuera.setViewportSize({ width: 390, height: 844 }); await p.waitForTimeout(700);
  ok('girar · al volver a vertical sale solo y le avisa a la app', await p.evaluate(() => !document.getElementById('pod-lb').classList.contains('pod-cine') && document.getElementById('pod-lb').classList.contains('open')) && /"on":false/.test(await avisos()));
  await afuera.setViewportSize({ width: 844, height: 390 }); await p.waitForTimeout(700);
  await p.locator('#pod-lb-frame .pod-lb-full').click(); await p.waitForTimeout(400);
  const n = await p.evaluate(() => { const lb = document.getElementById('pod-lb'), f = document.getElementById('pod-lb-frame').getBoundingClientRect(), x = document.querySelector('.pod-lb-x').getBoundingClientRect();
    return { cine: lb.classList.contains('pod-cine'), fBottom: Math.round(f.bottom), H: innerHeight, xTop: Math.round(x.top), scroll: lb.scrollHeight > lb.clientHeight }; });
  ok('girar · el botón sale de pantalla completa; de lado el video cabe y se puede cerrar', !n.cine && n.fBottom <= n.H && n.xTop >= 0, JSON.stringify(n));
  await afuera.screenshot({ path: path.join(import.meta.dirname, 'video-girado-normal.png') });
  await p.evaluate(() => podClose(null, true));
  ok('girar · sin errores', err.length === 0, err.join(' | '));
  await ctx.close();
}
console.log(mal ? `${mal} MAL` : 'todo bien'); await b.close(); srv.close();
