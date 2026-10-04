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
  // Lecturas: cabecera curva con su frase y la kettlebell leyendo; Videos: frase sin curva
  const l = await b.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 });
  await l.goto(F + '?mt_name=Mauro%20Mor%C3%B3n&mt_go=lecturas'); await l.waitForTimeout(300);
  await l.evaluate(() => document.body.classList.remove('locked')); await l.waitForTimeout(1200);
  const cabL = l.locator('#s-capsulas [data-v2-cab="lecturas"]');
  ok('Lecturas: cabecera curva, frase y kettlebell leyendo', (await cabL.count()) === 1 && await cabL.isVisible()
    && /Lee poco/.test(await cabL.innerText()) && (await cabL.locator('.v2-cab-banda').count()) === 1 && (await cabL.locator('svg[data-ilustracion="aprende"]').count()) === 1);
  await l.screenshot({ path: require('path').join(__dirname, 'lecturas.png') });
  await l.evaluate(() => window.postMessage({ tipo: 'em-ir', a: 'videos' }, '*')); await l.waitForTimeout(800);
  const cabV = l.locator('#s-capsulas [data-v2-cab="videos"]');
  ok('Videos: su frase, sin curva', (await cabV.count()) === 1 && await cabV.isVisible() && /Dale play/.test(await cabV.innerText()) && (await cabV.locator('.v2-cab-banda').count()) === 0);
  await l.screenshot({ path: require('path').join(__dirname, 'videos.png') });
  // Entrando desde la app con un nombre que se valida en línea: mientras
  // tanto NO se ve la pantalla de entrar con el nombre; si no tiene acceso, sí.
  {
    const n = await b.newPage({ viewport: { width: 390, height: 844 } });
    let soltar; const respuesta = new Promise(r => { soltar = r; });
    await n.route('**/api/authorize', async r => { await respuesta; r.fulfill({ status: 200, contentType: 'application/json', body: '{"authorized":false}' }); });
    await n.goto(F + '?mt_name=Persona%20Nueva&mt_go=lecturas', { waitUntil: 'domcontentloaded' }); await n.waitForTimeout(500);
    const oculto = await n.evaluate(() => { const l = document.querySelector('.login-screen'); return !l || getComputedStyle(l).visibility === 'hidden'; });
    soltar(); await n.waitForTimeout(800);
    const visible = await n.evaluate(() => { const l = document.querySelector('.login-screen'); return !!l && getComputedStyle(l).visibility !== 'hidden'; });
    ok('desde la app: no asoma la pantalla de entrar mientras valida; sin acceso, sí aparece', oculto && visible, JSON.stringify([oculto, visible]));
    await n.close();
  }
  // Cápsulas en historias: portadas por tema, una pantalla por toque, vista al final
  await l.evaluate(() => window.postMessage({ tipo: 'em-ir', a: 'lecturas' }, '*')); await l.waitForTimeout(600);
  await l.evaluate(() => { try { localStorage.removeItem('em_cap_read'); } catch (e) {} capRender(); });
  ok('cápsulas: portadas de historia, una por cápsula', (await l.locator('.v2-hcard[data-historia]').count()) === (await l.evaluate(() => CAPSULAS.length)));
  await l.locator('[data-historia="ent-04-subir-peso"]').click(); await l.waitForTimeout(400);
  const nPant = await l.evaluate(() => window.CAPSULAS_HISTORIAS['ent-04-subir-peso'].pantallas.length + 1);
  ok('historia: abre en la portada con sus barras', await l.locator('.v2-hist.abierta [data-pantalla="portada"]').isVisible() && (await l.locator('.v2-hist .barras span').count()) === nPant);
  for (let i = 0; i < nPant - 1; i++) { await l.locator('.v2-hist .toque.adelante').click(); await l.waitForTimeout(80); }
  ok('historia: la última es la regla, con sus fuentes, y queda vista', await l.locator('.v2-hist [data-pantalla="regla"]').isVisible() && /ACSM/.test(await l.locator('.v2-hist [data-fuente]').innerText())
    && await l.evaluate(() => JSON.parse(localStorage.getItem('em_cap_read') || '[]').includes('ent-04-subir-peso')));
  // Cada cápsula publicada tiene su historia, con íconos o diagramas, y ninguna pantalla se corta.
  ok('historias: todas las cápsulas tienen la suya, y con diagramas (escala, curva, barras, plato…)', await l.evaluate(() => {
    const H = window.CAPSULAS_HISTORIAS;
    const tipos = new Set(); Object.values(H).forEach(h => h.pantallas.forEach(s => Object.keys(s).forEach(k => tipos.add(k))));
    return CAPSULAS.every(c => H[c.id]) && ['escala', 'curva', 'barras', 'plato', 'deslizadores', 'segmentos', 'cols', 'filas', 'ico', 'fuente'].every(t => tipos.has(t));
  }));
  await l.locator('.v2-hist .ver').click(); await l.waitForTimeout(400);
  ok('historia: «Ver la lámina» abre la imagen completa', await l.evaluate(() => document.getElementById('cap-lb').classList.contains('open')));
  await l.evaluate(() => capClose(null, true));
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
