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
  // Lecturas: cabecera curva con su frase y el cerebro en blanco; Videos: frase sin curva
  const l = await b.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 });
  await l.goto(F + '?mt_name=Mauro%20Mor%C3%B3n&mt_go=lecturas'); await l.waitForTimeout(300);
  await l.evaluate(() => document.body.classList.remove('locked')); await l.waitForTimeout(1200);
  const cabL = l.locator('#s-capsulas [data-v2-cab="lecturas"]');
  ok('Lecturas: cabecera curva, frase y cerebro blanco', (await cabL.count()) === 1 && await cabL.isVisible()
    && /Lee poco/.test(await cabL.innerText()) && (await cabL.locator('.v2-cab-banda').count()) === 1 && (await cabL.locator('svg[data-ilustracion="aprende"]').count()) === 1);
  await l.screenshot({ path: require('path').join(__dirname, 'lecturas.png') });
  await l.evaluate(() => window.postMessage({ tipo: 'em-ir', a: 'videos' }, '*')); await l.waitForTimeout(800);
  const cabV = l.locator('#s-capsulas [data-v2-cab="videos"]');
  ok('Videos: su frase, sin curva', (await cabV.count()) === 1 && await cabV.isVisible() && /Dale play/.test(await cabV.innerText()) && (await cabV.locator('.v2-cab-banda').count()) === 0);
  await l.screenshot({ path: require('path').join(__dirname, 'videos.png') });
  // La guía (necesita servirse por http para cargar guiaalimentacion.html)
  if (process.env.CENTRO_URL) {
    const g = await b.newPage({ viewport: { width: 390, height: 844 } });
    await g.goto(process.env.CENTRO_URL + '?mt_name=Mauro%20Mor%C3%B3n&mt_go=guia'); await g.waitForTimeout(300);
    await g.evaluate(() => document.body.classList.remove('locked')); await g.waitForTimeout(3000);
    ok('guía: índice con un botón por capítulo y sin asistente de lectura', (await g.locator('.v2-cap').count()) === 15 && (await g.locator('.ga-fab-stack:visible, .pg-fab:visible').count()) === 0);
    await g.locator('.v2-cap').nth(2).click(); await g.waitForTimeout(500);
    ok('guía: el botón abre solo ese capítulo', (await g.locator('.ga-section:visible').count()) === 1);
    ok('guía: «En esencia» con letra oscura', await g.locator('.v2-abierto .ga-takeaway li').first().evaluate(el => getComputedStyle(el).color === 'rgb(31, 31, 31)'));
    await g.locator('.v2-abierto .v2-cap-nav .volver').first().click(); await g.waitForTimeout(400);
    ok('guía: «Índice» vuelve al índice', (await g.locator('.v2-indice:visible').count()) === 1);
  }
  await b.close(); console.log(mal ? mal + ' MAL' : 'todo bien'); process.exit(mal ? 1 : 0);
})();
