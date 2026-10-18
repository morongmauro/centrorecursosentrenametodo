// Lecturas: pasar de Cápsulas a Guía (y volver) no rearma la cabecera ni
// hace esperar: la misma cabecera se mueve, aparece al instante y la
// pantalla no entra desplazada.   NODE_PATH=… node pruebas/lecturas-transicion.mjs
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
await p.goto(BASE + '/?mt_v2=1&mt_name=Prueba&mt_go=capsulas'); await p.waitForTimeout(2500);
let mal = 0; const ok = (n, c, x = '') => { if (!c) mal++; console.log(`  ${c ? 'ok ' : 'MAL'}  ${n}${c ? '' : '  ' + x}`); };
await p.evaluate(() => { document.body.classList.remove('locked'); go('s-capsulas'); }); await p.waitForTimeout(1500);   // deja que se precargue la guía
await p.evaluate(() => { window.__cab = document.querySelector('#s-capsulas > .v2-lect'); });
ok('Cápsulas con su cabecera', await p.evaluate(() => !!window.__cab));
await p.evaluate(() => document.querySelector('#s-capsulas .v2-lect-tabs [data-l="s-guia-alimentacion"]').click());
await p.waitForTimeout(40);
const g = await p.evaluate(() => { const c = document.querySelector('#s-guia-alimentacion > .v2-lect');
  return { activa: document.getElementById('s-guia-alimentacion').classList.contains('active'), cab: !!c, misma: c === window.__cab,
    anim: getComputedStyle(document.getElementById('s-guia-alimentacion')).animationName,
    marcada: c && c.querySelector('.is-on') && c.querySelector('.is-on').dataset.l, indice: !!document.querySelector('#s-guia-alimentacion .v2-indice') }; });
ok('al tocar Guía: ya está a la vista con la cabecera (sin esperar)', g.activa && g.cab && g.indice, JSON.stringify(g));
ok('es la MISMA cabecera, movida (no se rearma)', g.misma);
ok('la pestaña marcada es Guía', g.marcada === 's-guia-alimentacion');
ok('la pantalla no entra desplazada (sin el fundido viejo)', g.anim === 'none', g.anim);
ok('sin la sombra oscura arriba de la portada de la guía', await p.evaluate(() => getComputedStyle(document.querySelector('#s-guia-alimentacion .ga-cover'), '::before').display === 'none'));
await p.screenshot({ path: path.join(import.meta.dirname, 'lect-guia.png') });
await p.evaluate(() => document.querySelector('#s-guia-alimentacion .v2-lect-tabs [data-l="s-capsulas"]').click()); await p.waitForTimeout(40);
ok('y de vuelta a Cápsulas, la misma cabecera', await p.evaluate(() => document.querySelector('#s-capsulas > .v2-lect') === window.__cab && !document.querySelector('#s-guia-alimentacion > .v2-lect')));
ok('sin errores', err.length === 0, err.join(' | '));
console.log(mal ? `${mal} MAL` : 'todo bien'); await b.close(); srv.close();
