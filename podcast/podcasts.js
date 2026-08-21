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

window.PODCASTS_DATA = [

  /* ── LEER ETIQUETAS Y COMPRAR MEJOR ───────────────────────────────── */
  { id:'etiquetas-leer-1',
    cat:'Leer etiquetas y comprar mejor',
    title:'Leer etiquetas sin que te engañen (1 de 2)',
    show:'El Podcast de Soycomocomo',
    url:'https://www.youtube.com/watch?v=AsKrD0Isnxk',
    nota:'Lo que grita el frente del envase casi nunca es lo que dice el reverso. Aquí aprendes a leer el reverso antes de que el producto llegue al carrito.',
    tag:'Empieza por esta' },

  { id:'etiquetas-leer-2',
    cat:'Leer etiquetas y comprar mejor',
    title:'Leer etiquetas: el tutorial (2 de 2)',
    show:'El Podcast de Soycomocomo',
    url:'https://www.youtube.com/watch?v=oZ6qZWgrke0',
    nota:'La continuación de la anterior. Escúchalas seguidas: la primera te da el criterio y esta lo baja al detalle.',
    tag:'Va después de la primera' },

  { id:'compra-cafe',
    cat:'Leer etiquetas y comprar mejor',
    title:'Qué café comprar y cuál no',
    show:'El Podcast de Soycomocomo',
    url:'https://www.youtube.com/watch?v=q1mw4L6nVOE',
    nota:'El café es de lo poco que tomas todos los días sin fallar. Vale la pena saber cuál elegir en el súper.' },

  /* ── NUTRICIÓN ────────────────────────────────────────────────────── */
  { id:'nutricion-grasas',
    cat:'Nutrición',
    title:'Las grasas, más allá de las calorías',
    show:'El Podcast de Soycomocomo',
    url:'https://www.youtube.com/watch?v=FHL06cv7H1o',
    nota:'El macronutriente con peor fama y peor entendido: para qué sirven las grasas y por qué mirarlas solo como calorías se queda corto.' },

  { id:'nutricion-ayuno',
    cat:'Nutrición',
    title:'¿Qué rompe el ayuno intermitente?',
    show:'El Podcast de Soycomocomo',
    url:'https://www.youtube.com/watch?v=qubg5G069i4',
    nota:'Qué puedes tomar durante la ventana sin cortar el ayuno y qué sí lo rompe. Para quien ya ayuna o está por probarlo.' }

];
