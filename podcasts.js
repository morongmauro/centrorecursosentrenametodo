/* ═══════════════════════════════════════════════════════════════════════
   PODCAST RECOMENDADOS — los links del centro de recursos
   ═══════════════════════════════════════════════════════════════════════

   Este archivo es el ÚNICO que hay que tocar para publicar un episodio.
   No abras index.html.html.

   Mientras esta lista esté vacía, la pestaña "Podcast" no aparece: la
   sección se ve exactamente como antes, solo con las infografías.

   Campos:
     id     · llave del "visto". NO la cambies una vez publicado.
     cat    · encabezado de grupo (Sueño, Nutrición, Mentalidad…).
     title  · el título que pones tú, en español y corto.
              No tiene que ser el del video.
     show   · nombre del podcast o del canal.
     url    · el link, tal cual lo copias.
     dur    · duración, texto libre ('54 min', '1h 20 min'). Opcional.
     nota   · POR QUÉ lo recomiendas. Es lo que hace que le den play.
     tag    · etiqueta corta al pie ('Escucha los primeros 20 min').
     nuevo  · true pinta la etiqueta "Nuevo".
     thumb  · imagen propia para la tarjeta (opcional). Ver abajo.
     sinEmbed · true si el dueño del video no deja incrustarlo.

   Qué links sirven:
     https://www.youtube.com/watch?v=XXXXXXXXXXX
     https://youtu.be/XXXXXXXXXXX
     https://www.youtube.com/live/XXXXXXXXXXX
     https://www.youtube.com/shorts/XXXXXXXXXXX
     https://www.youtube.com/playlist?list=PLYYYYYYYY
   De YouTube se saca la miniatura sola y el video se reproduce DENTRO
   del centro. Da igual si el link trae ?si= o &t=120s: se ignora.

   Otros links (Instagram, Spotify, Apple Podcasts) también valen: la
   tarjeta abre la app correspondiente en vez de reproducir aquí. Como
   esas plataformas no dan miniatura pública, ponle una imagen propia:
   déjala en esta carpeta y apunta thumb:'podcast/mi-imagen.jpg'.

   Ojo con la sintaxis: cada bloque va entre llaves { } y separado por
   coma. Los textos van entre comillas simples.
   ═══════════════════════════════════════════════════════════════════════ */

/* ── PARA EDITAR UN EPISODIO ────────────────────────────────────────────
   Cada bloque de aquí abajo es una fila: los mismos campos, en el mismo
   orden, siempre. Lo que puedes cambiar sin miedo es el TEXTO QUE ESTÁ
   ENTRE COMILLAS:

     cat   · la etiqueta con la que se agrupa   ← cámbiala cuando quieras
     show  · el nombre del podcast o del canal  ← cámbialo cuando quieras
     nota  · la descripción de la tarjeta       ← esta es la tuya, reescríbela

   Las dos reglas que sí importan:
     1. No borres las comillas ni la coma del final de cada línea.
     2. El id NO se toca: es la llave del "visto" de cada cliente.

   Si dos episodios llevan la misma cat, ponlos JUNTOS: el encabezado se
   pinta una sola vez y agrupa todo lo que venga seguido.
   ───────────────────────────────────────────────────────────────────── */

window.PODCASTS_DATA = [

  /* ── LEER ETIQUETAS Y COMPRAR MEJOR ───────────────────────────────── */
  { id:'etiquetas-leer-1',
    cat:'Leer etiquetas y comprar mejor',
    show:'El Podcast de Soycomocomo',
    title:'Leer etiquetas sin que te engañen (1 de 2)',
    nota:'Lo que grita el frente del envase casi nunca es lo que dice el reverso. Aquí aprendes a leer el reverso antes de que el producto llegue al carrito.',
    url:'https://www.youtube.com/watch?v=AsKrD0Isnxk',
    tag:'Empieza por esta' },

  { id:'etiquetas-leer-2',
    cat:'Leer etiquetas y comprar mejor',
    show:'El Podcast de Soycomocomo',
    title:'Leer etiquetas: el tutorial (2 de 2)',
    nota:'La continuación de la anterior. Escúchalas seguidas: la primera te da el criterio y esta lo baja al detalle.',
    url:'https://www.youtube.com/watch?v=oZ6qZWgrke0',
    tag:'Va después de la primera' },

  { id:'compra-yogures',
    cat:'Leer etiquetas y comprar mejor',
    show:'El Podcast de Soycomocomo',
    title:'Kéfir, griego, proteico o desnatado: cuál elegir',
    nota:'La comparación de los cuatro, para que elijas el tuyo en el pasillo del súper sin quedarte mirando la nevera.',
    url:'https://www.youtube.com/watch?v=ZMohU6G0m34' },

  /* ── CAFÉ Y VINAGRE DE MANZANA ────────────────────────────────────── */
  { id:'compra-cafe',
    cat:'Café y vinagre de manzana',
    show:'El Podcast de Soycomocomo',
    title:'Qué café comprar y cuál no',
    nota:'El café es de lo poco que tomas todos los días sin fallar. Este te dice cuál comprar; el siguiente, por qué te conviene.',
    url:'https://www.youtube.com/watch?v=q1mw4L6nVOE' },

  { id:'cafe-beneficios',
    cat:'Café y vinagre de manzana',
    show:'El Podcast de Soycomocomo',
    title:'Los beneficios del café, uno por uno',
    nota:'Qué hace de verdad el café en tu cuerpo. Va con el anterior: aquel explica cuál elegir y este por qué vale la pena.',
    url:'https://www.youtube.com/watch?v=Cz0Lt1NWV48' },

  { id:'vinagre-manzana',
    cat:'Café y vinagre de manzana',
    show:'El Podcast de Soycomocomo',
    title:'Vinagre de manzana: ¿es para tanto?',
    nota:'Repasa los beneficios que se le atribuyen, cuánto hay de cierto en cada uno y cómo tomarlo si decides usarlo.',
    url:'https://www.youtube.com/watch?v=Fvjh4NHCKkc',
    dur:'24 min' },

  /* ── NUTRICIÓN ────────────────────────────────────────────────────── */
  { id:'nutricion-grasas',
    cat:'Nutrición',
    show:'El Podcast de Soycomocomo',
    title:'Las grasas, más allá de las calorías',
    nota:'El macronutriente con peor fama y peor entendido: para qué sirven las grasas y por qué mirarlas solo como calorías se queda corto.',
    url:'https://www.youtube.com/watch?v=FHL06cv7H1o' },

  { id:'nutricion-ayuno',
    cat:'Nutrición',
    show:'El Podcast de Soycomocomo',
    title:'¿Qué rompe el ayuno intermitente?',
    nota:'Qué puedes tomar durante la ventana sin cortar el ayuno y qué sí lo rompe. Para quien ya ayuna o está por probarlo.',
    url:'https://www.youtube.com/watch?v=qubg5G069i4' },

  /* ── SALUD ────────────────────────────────────────────────────────── */
  { id:'salud-metabolica-inmune',
    cat:'Salud',
    show:'El Podcast de Soycomocomo',
    title:'Salud metabólica y sistema inmune',
    nota:'Qué tiene que ver cómo está tu metabolismo con lo bien que te defiendes. Para quien cree que cuidarse es solo cuestión de peso.',
    url:'https://www.youtube.com/watch?v=v9Haod8krck' },

  { id:'dolor-menstrual',
    cat:'Salud',
    show:'El Podcast de Soycomocomo',
    title:'Dolor menstrual: alimentos y suplementos que ayudan',
    nota:'Que la regla duela tanto no es normal, y hay margen para hacer algo. Con Carlos González, fisioterapeuta y especialista en PNI.',
    url:'https://www.youtube.com/watch?v=lGJTfPQ-rgc',
    tag:'No, no es normal que duela así' }

];
