// El centro abierto desde la app: sin destello de la portada vieja.
//   NODE_PATH=/opt/node22/lib/node_modules node pruebas/destello.cjs
const { chromium } = require(process.env.PLAYWRIGHT || 'playwright');
const F = 'file://' + require('path').join(__dirname, '..', 'index.html.html');
(async () => {
  const b = await chromium.launch(); let mal = 0;
  const ok = (n, c, x='') => { console.log((c ? '  ok   ' : '  MAL  ') + n + (c ? '' : '  ' + x)); if (!c) mal++; };
  const p = await b.newPage();
  // Registra cada pantalla visible mientras carga
  await p.addInitScript(() => { window.__vistas = []; const mirar = () => { const a = document.querySelector('.screen.active');
    if (a && !document.documentElement.classList.contains('em-saltando') && getComputedStyle(a).visibility !== 'hidden') window.__vistas.push(a.id); };
    const t = setInterval(mirar, 20); setTimeout(() => clearInterval(t), 6000); });
  await p.goto(F + '?mt_name=Mauro%20Mor%C3%B3n&mt_go=capsulas');
  await p.waitForTimeout(300);
  ok('con mt_go: al arrancar no se ve ninguna pantalla', await p.evaluate(() => document.documentElement.classList.contains('em-saltando') || document.querySelector('.screen.active').id === 's-capsulas'));
  await p.evaluate(() => document.body.classList.remove('locked'));   // entra
  await p.waitForTimeout(700);
  const r = await p.evaluate(() => ({ act: document.querySelector('.screen.active').id, salt: document.documentElement.classList.contains('em-saltando'), vistas: [...new Set(window.__vistas)] }));
  ok('al entrar llega directo a Cápsulas', r.act === 's-capsulas' && !r.salt, JSON.stringify(r));
  ok('la portada vieja nunca se vio', !r.vistas.includes('s-home'), JSON.stringify(r.vistas));
  // Mensaje de la app con la puerta aún cerrada
  const q = await b.newPage();
  await q.goto(F + '?mt_name=Mauro%20Mor%C3%B3n&mt_go=onboarding'); await q.waitForTimeout(200);
  await q.evaluate(() => window.postMessage({ tipo: 'em-ir', a: 'capsulas' }, '*')); await q.waitForTimeout(100);
  await q.evaluate(() => document.body.classList.remove('locked')); await q.waitForTimeout(700);
  ok('pedido de la app antes de entrar: se aplica al entrar', await q.evaluate(() => document.querySelector('.screen.active').id) === 's-capsulas');
  // Visual nueva sin mt_go: arranca en Onboarding; go('s-home') no lleva a la portada
  const v = await b.newPage(); await v.goto(F + '?mt_name=Mauro%20Mor%C3%B3n'); await v.waitForTimeout(300);
  ok('visual nueva: arranca en Onboarding', await v.evaluate(() => document.querySelector('.screen.active').id) === 's-onboarding');
  ok('visual nueva: ir a la portada lleva al Onboarding', await v.evaluate(() => { go('s-home'); return document.querySelector('.screen.active').id; }) === 's-onboarding');
  // Otra persona: todo igual que siempre
  const o = await b.newPage(); await o.goto(F + '?mt_name=Ana%20Perez'); await o.waitForTimeout(300);
  ok('otra persona: arranca en la portada de siempre', await o.evaluate(() => document.querySelector('.screen.active').id) === 's-home');
  ok('otra persona: la portada sigue existiendo', await o.evaluate(() => { go('s-capsulas'); go('s-home'); return document.querySelector('.screen.active').id; }) === 's-home');
  await b.close(); console.log(mal ? mal + ' MAL' : 'todo bien'); process.exit(mal ? 1 : 0);
})();
