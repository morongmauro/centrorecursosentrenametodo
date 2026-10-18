/* ═══════════════════════════════════════════════════════════════════════
   PORTADAS DE LAS CÁPSULAS — el dibujo de cada una
   ═══════════════════════════════════════════════════════════════════════

   Cada portada lleva el gráfico que la cápsula tiene adentro (el pentágono
   de las capacidades, la curva del volumen, los anillos de los macros…),
   dibujado como un ícono de Apple: vidrio blanco translúcido, luz arriba,
   un brillo suave detrás de lo importante y el amarillo de la marca solo
   en el dato que la cápsula responde. Sin texto adentro: el título y la
   frase van en la tarjeta.

   window.CAP_PORTADAS[id](u) devuelve el <svg>; `u` hace únicos los ids de
   los degradados (la misma cápsula sale dos veces en la lista). Todas
   usan el mismo lienzo, 160 × 120.
   ═══════════════════════════════════════════════════════════════════════ */
(function () {
  var AM = '#F2C94C';

  // Lo común: luz de arriba a abajo, vidrio, amarillo con brillo, un
  // resplandor para las líneas y una sombra corta para lo que flota.
  function defs(u) {
    return '<defs>'
      + '<linearGradient id="bl' + u + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#fff" stop-opacity=".72"/></linearGradient>'
      + '<linearGradient id="vi' + u + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".30"/><stop offset="1" stop-color="#fff" stop-opacity=".10"/></linearGradient>'
      + '<linearGradient id="bo' + u + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".75"/><stop offset="1" stop-color="#fff" stop-opacity=".18"/></linearGradient>'
      + '<linearGradient id="am' + u + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFE7A3"/><stop offset="1" stop-color="' + AM + '"/></linearGradient>'
      + '<linearGradient id="ar' + u + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".42"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient>'
      + '<filter id="br' + u + '" filterUnits="userSpaceOnUse" x="-20" y="-20" width="200" height="160"><feGaussianBlur stdDeviation="3.2"/></filter>'
      + '<filter id="so' + u + '" filterUnits="userSpaceOnUse" x="-20" y="-20" width="200" height="160"><feDropShadow dx="0" dy="2.5" stdDeviation="2.6" flood-color="#000" flood-opacity=".22"/></filter>'
      + '</defs>';
  }
  var svg = function (u, cuerpo) { return '<svg viewBox="0 0 160 120" aria-hidden="true" focusable="false">' + defs(u) + cuerpo + '</svg>'; };
  // Vidrio: relleno translúcido con su borde de luz.
  var vidrio = function (u) { return 'fill="url(#vi' + u + ')" stroke="url(#bo' + u + ')" stroke-width="1"'; };
  var pt = function (cx, cy, r, a) { return [cx + r * Math.cos(a), cy + r * Math.sin(a)]; };
  var f1 = function (n) { return Math.round(n * 10) / 10; };
  // Arco de anillo (de a0 a a1, en grados, 0 = arriba).
  function arco(cx, cy, r, a0, a1) {
    var p0 = pt(cx, cy, r, (a0 - 90) * Math.PI / 180), p1 = pt(cx, cy, r, (a1 - 90) * Math.PI / 180);
    return 'M' + f1(p0[0]) + ' ' + f1(p0[1]) + ' A' + r + ' ' + r + ' 0 ' + (a1 - a0 > 180 ? 1 : 0) + ' 1 ' + f1(p1[0]) + ' ' + f1(p1[1]);
  }

  var P = {};

  // Las cinco capacidades: el pentágono, con la rezagada en amarillo
  // (la que marca el techo).
  P['ent-01-capacidades'] = function (u) {
    var cx = 80, cy = 63, R = 47, v = [0.95, 0.78, 0.84, 0.42, 0.72], s = '';
    var esq = function (r) { var o = []; for (var k = 0; k < 5; k++) o.push(pt(cx, cy, r, (-90 + 72 * k) * Math.PI / 180)); return o; };
    var poli = function (ps) { return ps.map(function (p) { return f1(p[0]) + ',' + f1(p[1]); }).join(' '); };
    s += '<polygon points="' + poli(esq(R)) + '" ' + vidrio(u) + ' stroke-linejoin="round"/>';
    [0.66, 0.33].forEach(function (f) { s += '<polygon points="' + poli(esq(R * f)) + '" fill="none" stroke="#fff" stroke-opacity=".22" stroke-width=".8" stroke-linejoin="round"/>'; });
    esq(R).forEach(function (p) { s += '<line x1="' + cx + '" y1="' + cy + '" x2="' + f1(p[0]) + '" y2="' + f1(p[1]) + '" stroke="#fff" stroke-opacity=".18" stroke-width=".8"/>'; });
    var forma = []; for (var k = 0; k < 5; k++) forma.push(pt(cx, cy, R * v[k], (-90 + 72 * k) * Math.PI / 180));
    s += '<polygon points="' + poli(forma) + '" fill="#fff" fill-opacity=".5" filter="url(#br' + u + ')"/>';
    s += '<polygon points="' + poli(forma) + '" fill="#fff" fill-opacity=".38" stroke="url(#bl' + u + ')" stroke-width="2.4" stroke-linejoin="round"/>';
    forma.forEach(function (p, k) { if (k !== 3) s += '<circle cx="' + f1(p[0]) + '" cy="' + f1(p[1]) + '" r="3" fill="#fff" filter="url(#so' + u + ')"/>'; });
    var d = forma[3];
    s += '<circle cx="' + f1(d[0]) + '" cy="' + f1(d[1]) + '" r="13" fill="' + AM + '" fill-opacity=".4" filter="url(#br' + u + ')"/>'
      + '<circle cx="' + f1(d[0]) + '" cy="' + f1(d[1]) + '" r="10" fill="none" stroke="' + AM + '" stroke-opacity=".7" stroke-width="1.4"/>'
      + '<circle cx="' + f1(d[0]) + '" cy="' + f1(d[1]) + '" r="5.6" fill="url(#am' + u + ')" filter="url(#so' + u + ')"/>';
    return svg(u, s);
  };

  // Cómo crece el músculo: la respuesta al volumen, que sube y se aplana,
  // con la zona de 10 a 20 series en vidrio y el punto dulce en amarillo.
  P['ent-02-crece-musculo'] = function (u) {
    var c = 'M12 100 C 34 99, 46 84, 60 66 S 88 30, 112 26 S 140 24, 150 25';
    return svg(u,
      '<rect x="58" y="12" width="56" height="94" rx="12" ' + vidrio(u) + '/>'
      + '<line x1="10" y1="104" x2="152" y2="104" stroke="#fff" stroke-opacity=".3" stroke-width="1" stroke-linecap="round"/>'
      + '<path d="' + c + ' L150 104 L12 104 Z" fill="url(#ar' + u + ')"/>'
      + '<path d="' + c + '" fill="none" stroke="#fff" stroke-opacity=".75" stroke-width="5" filter="url(#br' + u + ')"/>'
      + '<path d="' + c + '" fill="none" stroke="url(#bl' + u + ')" stroke-width="3" stroke-linecap="round"/>'
      + '<circle cx="86" cy="40" r="11" fill="' + AM + '" fill-opacity=".3" filter="url(#br' + u + ')"/>'
      + '<circle cx="86" cy="40" r="5" fill="url(#am' + u + ')" stroke="#fff" stroke-width="1.6" filter="url(#so' + u + ')"/>');
  };

  // El lenguaje de tu rutina: carga, volumen, densidad y tempo como
  // deslizadores (los valores son los de la cápsula).
  P['ent-03-lenguaje-rutina'] = function (u) {
    var v = [0.78, 0.6, 0.38, 0.86], s = '', x0 = 20, x1 = 140;
    v.forEach(function (f, k) {
      var y = 24 + k * 24, x = x0 + (x1 - x0) * f;
      s += '<rect x="' + x0 + '" y="' + (y - 5) + '" width="' + (x1 - x0) + '" height="10" rx="5" ' + vidrio(u) + '/>'
        + '<rect x="' + x0 + '" y="' + (y - 5) + '" width="' + f1(x - x0) + '" height="10" rx="5" fill="' + (k === 0 ? 'url(#am' + u + ')' : 'url(#bl' + u + ')') + '" fill-opacity="' + (k === 0 ? 1 : 0.8) + '"/>'
        + '<circle cx="' + f1(x) + '" cy="' + y + '" r="9" fill="#fff" filter="url(#so' + u + ')"/>'
        + '<circle cx="' + f1(x) + '" cy="' + y + '" r="8.4" fill="none" stroke="#000" stroke-opacity=".06"/>';
    });
    return svg(u, s);
  };

  // Cuándo subir el peso: cuatro semanas; tres iguales (suben las reps) y
  // la cuarta sube, en amarillo, con su flecha.
  P['ent-04-subir-peso'] = function (u) {
    var h = [0.62, 0.62, 0.62, 0.82], s = '', base = 106, w = 22, gap = 12, x = 80 - (4 * w + 3 * gap) / 2;
    s += '<line x1="14" y1="' + base + '" x2="146" y2="' + base + '" stroke="#fff" stroke-opacity=".3" stroke-width="1" stroke-linecap="round"/>';
    h.forEach(function (f, k) {
      var alto = 92 * f, y = base - alto, ult = k === 3;
      if (ult) s += '<rect x="' + f1(x) + '" y="' + f1(y) + '" width="' + w + '" height="' + f1(alto) + '" rx="8" fill="' + AM + '" fill-opacity=".45" filter="url(#br' + u + ')"/>';
      s += '<rect x="' + f1(x) + '" y="' + f1(y) + '" width="' + w + '" height="' + f1(alto) + '" rx="8" ' + (ult ? 'fill="url(#am' + u + ')" filter="url(#so' + u + ')"' : vidrio(u)) + '/>';
      // Las reps que suben dentro de cada barra igual: tres rayitas que crecen.
      if (!ult) for (var r = 0; r <= k; r++) s += '<rect x="' + f1(x + 6) + '" y="' + f1(base - 10 - r * 7) + '" width="' + (w - 12) + '" height="3" rx="1.5" fill="#fff" fill-opacity=".85"/>';
      x += w + gap;
    });
    var xa = 80 + (4 * w + 3 * gap) / 2 - w / 2;
    s += '<path d="M' + f1(xa - 6) + ' 14 L' + f1(xa) + ' 8 L' + f1(xa + 6) + ' 14" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>';
    return svg(u, s);
  };

  // El orden de la sesión: tres bloques en fila con la fuerza disponible
  // como una batería que se gasta: el compuesto primero, con todo.
  P['ent-05-orden-sesion'] = function (u) {
    var lleno = [1, 0.62, 0.3], s = '';
    lleno.forEach(function (f, k) {
      var y = 14 + k * 33, x = 20, w = 120, hh = 24;
      s += '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + hh + '" rx="12" ' + vidrio(u) + '/>'
        + '<rect x="' + (x + 3) + '" y="' + (y + 3) + '" width="' + f1((w - 6) * f) + '" height="' + (hh - 6) + '" rx="9" fill="' + (k === 0 ? 'url(#am' + u + ')' : 'url(#bl' + u + ')') + '" fill-opacity="' + (k === 0 ? 1 : 0.78 - k * 0.12) + '"' + (k === 0 ? ' filter="url(#so' + u + ')"' : '') + '/>'
        + '<circle cx="' + (x + 15) + '" cy="' + (y + hh / 2) + '" r="7.5" fill="' + (k === 0 ? '#fff' : 'rgba(255,255,255,.92)') + '"/>'
        + '<text x="' + (x + 15) + '" y="' + (y + hh / 2 + 3.6) + '" text-anchor="middle" font-size="10.5" font-weight="800" fill="#1D1D1F" font-family="Figtree, system-ui, sans-serif">' + (k + 1) + '</text>';
    });
    return svg(u, s);
  };

  // Entiende tu rutina: la escala RPE del 1 al 10 como medidor, con el 7 y
  // el 8 (tu zona de trabajo) en amarillo.
  P['ent-06-entiende-rutina'] = function (u) {
    var cx = 80, cy = 78, r = 54, s = '', a0 = -120, paso = 24, hueco = 4.2;
    for (var k = 0; k < 10; k++) {
      var a = a0 + k * paso, zona = k === 6 || k === 7;
      var d = arco(cx, cy, r, a + hueco / 2, a + paso - hueco / 2);
      if (zona) s += '<path d="' + d + '" fill="none" stroke="' + AM + '" stroke-opacity=".55" stroke-width="16" stroke-linecap="round" filter="url(#br' + u + ')"/>';
      s += '<path d="' + d + '" fill="none" stroke="' + (zona ? 'url(#am' + u + ')' : '#fff') + '" stroke-opacity="' + (zona ? 1 : (0.22 + k * 0.05)) + '" stroke-width="11" stroke-linecap="round"/>';
    }
    // La aguja apunta al 8.
    var ang = (a0 + 7.5 * paso - 90) * Math.PI / 180, p = pt(cx, cy, r - 16, ang);
    s += '<line x1="' + cx + '" y1="' + cy + '" x2="' + f1(p[0]) + '" y2="' + f1(p[1]) + '" stroke="#fff" stroke-width="3.2" stroke-linecap="round" filter="url(#so' + u + ')"/>'
      + '<circle cx="' + cx + '" cy="' + cy + '" r="7" fill="#fff" filter="url(#so' + u + ')"/>';
    return svg(u, s);
  };

  // Cuánto de cada macro: proteína, grasa y carbohidrato como los anillos
  // de actividad.
  P['nut-07-cada-macro'] = function (u) {
    var cx = 80, cy = 60, anillos = [[48, 300, 'url(#bl' + u + ')'], [35, 210, 'url(#am' + u + ')'], [22, 250, 'url(#bl' + u + ')']], s = '';
    anillos.forEach(function (a, k) {
      s += '<circle cx="' + cx + '" cy="' + cy + '" r="' + a[0] + '" fill="none" stroke="#fff" stroke-opacity=".16" stroke-width="10"/>';
      var d = arco(cx, cy, a[0], 0, a[1]);
      s += '<path d="' + d + '" fill="none" stroke="' + (k === 1 ? AM : '#fff') + '" stroke-opacity=".5" stroke-width="12" stroke-linecap="round" filter="url(#br' + u + ')"/>'
        + '<path d="' + d + '" fill="none" stroke="' + a[2] + '" stroke-opacity="' + (k === 2 ? 0.78 : 1) + '" stroke-width="10" stroke-linecap="round"/>';
    });
    return svg(u, s);
  };

  // Perder grasa y ganar músculo: la recomposición: la grasa baja, el
  // músculo sube, y se cruzan.
  P['nut-08-grasa-y-musculo'] = function (u) {
    var sube = 'M14 92 C 50 88, 92 52, 146 24', baja = 'M14 30 C 54 34, 96 66, 146 92';
    var s = '';
    [36, 62, 88].forEach(function (y) { s += '<line x1="12" y1="' + y + '" x2="148" y2="' + y + '" stroke="#fff" stroke-opacity=".14" stroke-width="1"/>'; });
    s += '<path d="' + sube + ' L146 106 L14 106 Z" fill="url(#ar' + u + ')"/>'
      + '<path d="' + baja + '" fill="none" stroke="#fff" stroke-opacity=".55" stroke-width="2.6" stroke-linecap="round" stroke-dasharray="1 7"/>'
      + '<circle cx="146" cy="92" r="4" fill="#fff" fill-opacity=".6"/>'
      + '<path d="' + sube + '" fill="none" stroke="#fff" stroke-opacity=".7" stroke-width="5" filter="url(#br' + u + ')"/>'
      + '<path d="' + sube + '" fill="none" stroke="url(#bl' + u + ')" stroke-width="3.2" stroke-linecap="round"/>'
      + '<circle cx="80" cy="61" r="10" fill="' + AM + '" fill-opacity=".3" filter="url(#br' + u + ')"/>'
      + '<circle cx="80" cy="61" r="4.6" fill="url(#am' + u + ')" stroke="#fff" stroke-width="1.5" filter="url(#so' + u + ')"/>'
      + '<circle cx="146" cy="24" r="5" fill="#fff" filter="url(#so' + u + ')"/>';
    return svg(u, s);
  };

  // Comer bien sin pesar: el plato visto desde arriba: la mitad verdura y
  // fruta, un cuarto granos, un cuarto proteína (en amarillo).
  P['nut-09-comer-sin-pesar'] = function (u) {
    var cx = 80, cy = 60, s = '';
    var cuna = function (r, a0, a1) {
      var p0 = pt(cx, cy, r, (a0 - 90) * Math.PI / 180), p1 = pt(cx, cy, r, (a1 - 90) * Math.PI / 180);
      return 'M' + cx + ' ' + cy + ' L' + f1(p0[0]) + ' ' + f1(p0[1]) + ' A' + r + ' ' + r + ' 0 ' + (a1 - a0 > 180 ? 1 : 0) + ' 1 ' + f1(p1[0]) + ' ' + f1(p1[1]) + ' Z';
    };
    s += '<circle cx="' + cx + '" cy="' + (cy + 3) + '" r="52" fill="#000" fill-opacity=".14" filter="url(#br' + u + ')"/>'
      + '<circle cx="' + cx + '" cy="' + cy + '" r="52" ' + vidrio(u) + '/>'
      + '<circle cx="' + cx + '" cy="' + cy + '" r="41" fill="#fff" fill-opacity=".1" stroke="#fff" stroke-opacity=".35" stroke-width=".8"/>';
    s += '<path d="' + cuna(37, 182, 358) + '" fill="url(#bl' + u + ')" fill-opacity=".9"/>'
      + '<path d="' + cuna(37, 2, 88) + '" fill="#fff" fill-opacity=".45"/>'
      + '<path d="' + cuna(37, 92, 178) + '" fill="url(#am' + u + ')" filter="url(#so' + u + ')"/>';
    return svg(u, s);
  };

  // Dormir mejor: la luna con su brillo y, abajo, la noche por fases como
  // la muestra la app Salud.
  P['bie-10-dormir-mejor'] = function (u) {
    var s = '', luna = 'M70 6 a29 29 0 1 0 33 38 a23 23 0 1 1 -33 -38 z';
    s += '<path d="' + luna + '" fill="#fff" fill-opacity=".55" filter="url(#br' + u + ')"/>'
      + '<path d="' + luna + '" fill="url(#bl' + u + ')"/>';
    [[118, 14, 1.8], [134, 32, 1.3], [112, 40, 1], [34, 18, 1.4], [46, 46, 1]].forEach(function (e) { s += '<circle cx="' + e[0] + '" cy="' + e[1] + '" r="' + e[2] + '" fill="#fff" fill-opacity=".85"/>'; });
    // Fases como la app Salud: tramos por nivel (0 despierto, 3 profundo)
    // unidos por su línea; el sueño profundo, el más brillante.
    var fases = [[12, 1], [16, 2], [18, 3], [12, 2], [10, 1], [16, 2], [14, 3], [12, 2], [8, 0], [14, 1]], x = 14, prev = null;
    fases.forEach(function (f) {
      var y = 80 + f[1] * 9, prof = f[1] === 3;
      if (prev) s += '<line x1="' + x + '" y1="' + (prev + 3.5) + '" x2="' + x + '" y2="' + (y + 3.5) + '" stroke="#fff" stroke-opacity=".35" stroke-width="1"/>';
      if (prof) s += '<rect x="' + x + '" y="' + y + '" width="' + f[0] + '" height="7" rx="3.5" fill="#fff" fill-opacity=".8" filter="url(#br' + u + ')"/>';
      s += '<rect x="' + x + '" y="' + y + '" width="' + f[0] + '" height="7" rx="3.5" fill="#fff" fill-opacity="' + (prof ? 1 : 0.32 + f[1] * 0.16) + '"/>';
      x += f[0]; prev = y;
    });
    return svg(u, s);
  };

  // Muévete fuera del gimnasio: el NEAT son pasos: huellas que avanzan
  // hasta completar el anillo.
  P['bie-11-muevete-fuera'] = function (u) {
    var s = '', cx = 118, cy = 40;
    s += '<circle cx="' + cx + '" cy="' + cy + '" r="24" fill="none" stroke="#fff" stroke-opacity=".16" stroke-width="8"/>'
      + '<path d="' + arco(cx, cy, 24, 0, 290) + '" fill="none" stroke="' + AM + '" stroke-opacity=".5" stroke-width="10" stroke-linecap="round" filter="url(#br' + u + ')"/>'
      + '<path d="' + arco(cx, cy, 24, 0, 290) + '" fill="none" stroke="url(#am' + u + ')" stroke-width="8" stroke-linecap="round"/>';
    // El camino, como una ruta de Mapas: ancha en vidrio con su línea de
    // pasos adentro, desde el punto de salida hasta el anillo.
    var ruta = 'M18 104 C 40 104, 44 82, 62 80 S 88 84, 96 62';
    s += '<path d="' + ruta + '" fill="none" stroke="#000" stroke-opacity=".12" stroke-width="13" stroke-linecap="round" filter="url(#br' + u + ')"/>'
      + '<path d="' + ruta + '" fill="none" stroke="#fff" stroke-opacity=".28" stroke-width="12" stroke-linecap="round"/>'
      + '<path d="' + ruta + '" fill="none" stroke="#fff" stroke-width="3.4" stroke-linecap="round" stroke-dasharray="0.1 8"/>'
      + '<circle cx="18" cy="104" r="6.5" fill="#fff" filter="url(#so' + u + ')"/><circle cx="18" cy="104" r="3" fill="' + AM + '"/>';
    return svg(u, s);
  };

  window.CAP_PORTADAS = P;
})();
