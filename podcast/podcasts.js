/* ═══════════════════════════════════════════════════════════════════════
   PODCAST RECOMENDADOS — los links del centro de recursos
   ═══════════════════════════════════════════════════════════════════════

   Este archivo es el ÚNICO que hay que tocar para publicar un episodio.
   No abras index.html.html.

   Mientras esta lista esté vacía, la pestaña "Podcast" no aparece: la
   sección se ve exactamente como antes, solo con las infografías.

   Campos:
     id     · llave del "visto". NO la cambies una vez publicado.
     cat    · Entrenamiento · Nutrición · Bienestar general. Son las tres
              categorías que existen. Cualquier otra cosa (Sueño,
              Mentalidad, Hábitos…) cae sola en Bienestar general, así que
              no se abren separadores con un solo episodio dentro.
     title  · EL TÍTULO. Es lo primero que se lee en la tarjeta y lo que
              hace que le den play. En español, corto y concreto — no
              tiene que ser el del video.
     show   · nombre del podcast o del canal. Va DEBAJO del título y en
              letra chica: es contexto, no el gancho.
     url    · el link, tal cual lo copias.
     dur    · duración, texto libre ('54 min', '1h 20 min'). Opcional.
     nota   · POR QUÉ lo recomiendas. En la galería se recorta a tres
              líneas; completa se lee al abrir el episodio.
     tag    · etiqueta corta al pie ('Escucha los primeros 20 min').
     nuevo  · true pinta la etiqueta "Nuevo".
     thumb  · imagen propia para la tarjeta (opcional). Ver abajo.
     sinEmbed · true si el dueño del video no deja incrustarlo.
     audio  · link para ESCUCHAR el episodio (Spotify, Apple Podcasts,
              iVoox…). Opcional pero MUY recomendado — lee lo de abajo.

   ─── SOBRE ESCUCHAR CON LA PANTALLA APAGADA ───────────────────────────
   El reproductor de YouTube incrustado SE PAUSA cuando el cliente bloquea
   el teléfono. No es algo que se pueda arreglar desde el centro: YouTube
   reserva la reproducción en segundo plano para su propia app y para
   Premium, y la bloquea en los reproductores incrustados de terceros.
   Cualquier truco para saltárselo va contra sus condiciones y deja de
   funcionar en la siguiente actualización.

   Por eso existe el campo `audio`. Cuando lo llenas, el visor muestra un
   botón "Escuchar" que abre Spotify o Apple Podcasts, donde el audio SÍ
   sigue sonando con la pantalla apagada. Si el episodio también está en
   esas plataformas, ponlo: es la diferencia entre que lo vean y que lo
   escuchen mientras caminan.

   Sin `audio`, el visor le dice al cliente que abra el episodio en la app
   de YouTube, que tiene sus propias reglas de segundo plano.

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

   Ya no hace falta ponerlos juntos por categoría: el centro los agrupa
   solo, siempre en el orden Entrenamiento → Nutrición → Bienestar
   general. Dentro de cada grupo se respeta el orden en que estén aquí.
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

  /* ── SUPLEMENTOS ──────────────────────────────────────────────────── */
  { id:'suple-colageno',
    cat:'Suplementos',
    show:'Dr. Carlos Jaramillo',
    title:'Qué colágeno elegir, según para qué lo quieres',
    nota:'No todos sirven para lo mismo. Míralo antes de gastar en el primero que te recomienden en la farmacia.',
    url:'https://www.youtube.com/watch?v=qNTqP6S4tkA' },

  { id:'suple-creatina-mayores',
    cat:'Suplementos',
    show:'Dr. Carlos Jaramillo',
    title:'Creatina después de los 70',
    nota:'La creatina no es cosa solo de gimnasio ni solo de gente joven. Un caso concreto en una persona mayor.',
    url:'https://www.youtube.com/watch?v=3C4JZ4ShhW8' },

  { id:'suple-magnesio-senales',
    cat:'Suplementos',
    show:'Dr. Carlos Jaramillo',
    title:'Calambres, insomnio y antojos de dulce: ¿te falta magnesio?',
    nota:'Tres molestias que parecen no tener nada que ver y pueden apuntar al mismo sitio.',
    url:'https://www.youtube.com/watch?v=HfecHtMTmWM',
    tag:'Primero este' },

  { id:'suple-magnesio-cual',
    cat:'Suplementos',
    show:'Dr. Carlos Jaramillo',
    title:'Qué magnesio tomar y cuál no',
    nota:'Va después del anterior: si te falta, este te dice cuál comprar y cuál es el que se vende mucho y aprovechas poco.',
    url:'https://www.youtube.com/watch?v=-6rmn-F62mY',
    tag:'Y después este' },

  /* ── AYUNO Y APETITO ──────────────────────────────────────────────── */
  { id:'nutricion-ayuno',
    cat:'Ayuno y apetito',
    show:'El Podcast de Soycomocomo',
    title:'¿Qué rompe el ayuno intermitente?',
    nota:'Qué puedes tomar durante la ventana sin cortar el ayuno y qué sí lo rompe. Para quien ya ayuna o está por probarlo.',
    url:'https://www.youtube.com/watch?v=qubg5G069i4' },

  { id:'ayuno-siete-dias',
    cat:'Ayuno y apetito',
    show:'Dr. Carlos Jaramillo',
    title:'Qué pasa en el cuerpo con siete días de ayuno',
    nota:'Para entender el mecanismo, no para copiarlo: una semana de ayuno no es algo que se improvise por tu cuenta.',
    url:'https://www.youtube.com/watch?v=_VbvRmqe3zA' },

  { id:'hormona-hambre',
    cat:'Ayuno y apetito',
    show:'Dr. Carlos Jaramillo',
    title:'La hormona del hambre: por qué no paras de comer',
    nota:'Si sientes que nunca te llenas, esto explica por qué el hambre no es solo cuestión de fuerza de voluntad.',
    url:'https://www.youtube.com/watch?v=vdhCCdGT6hU' },

  /* ── NUTRICIÓN Y SALUD ────────────────────────────────────────────── */
  { id:'nutricion-grasas',
    cat:'Nutrición y salud',
    show:'El Podcast de Soycomocomo',
    title:'Las grasas, más allá de las calorías',
    nota:'El macronutriente con peor fama y peor entendido: para qué sirven las grasas y por qué mirarlas solo como calorías se queda corto.',
    url:'https://www.youtube.com/watch?v=FHL06cv7H1o' },

  { id:'dormir-descanso',
    cat:'Nutrición y salud',
    show:'Dr. Carlos Jaramillo',
    title:'Duermes ocho horas y sigues cansado',
    nota:'Estar ocho horas en la cama no es lo mismo que descansar ocho horas. Por qué te levantas fundido aunque cumplas con el horario.',
    url:'https://www.youtube.com/watch?v=9PZNBvWtQxM' },

  { id:'salud-metabolica-inmune',
    cat:'Nutrición y salud',
    show:'El Podcast de Soycomocomo',
    title:'Salud metabólica y sistema inmune',
    nota:'Qué tiene que ver cómo está tu metabolismo con lo bien que te defiendes. Para quien cree que cuidarse es solo cuestión de peso.',
    url:'https://www.youtube.com/watch?v=v9Haod8krck' },

  /* Este no lleva nota: el título no dice de qué va y no pude
     identificarlo. Escríbeme dos palabras de su contenido y la redacto.
     Mientras tanto la tarjeta se ve bien, solo sin la línea de nota. */
  { id:'deportistas',
    cat:'Nutrición y salud',
    show:'Dr. Carlos Jaramillo',
    title:'Si entrenas en serio, esto va para ti',
    url:'https://www.youtube.com/watch?v=JbZpnc6kyQU' },

  /* ── HORMONAS ─────────────────────────────────────────────────────── */
  { id:'dolor-menstrual',
    cat:'Hormonas',
    show:'El Podcast de Soycomocomo',
    title:'Dolor menstrual: alimentos y suplementos que ayudan',
    nota:'Que la regla duela tanto no es normal, y hay margen para hacer algo. Con Carlos González, fisioterapeuta y especialista en PNI.',
    url:'https://www.youtube.com/watch?v=lGJTfPQ-rgc',
    tag:'No, no es normal que duela así' },

  { id:'hormonas-testosterona',
    cat:'Hormonas',
    show:'Dr. Carlos Jaramillo',
    title:'Testosterona: qué la baja y qué la sostiene',
    nota:'Después de los 30 baja sola, poco a poco. Qué acelera esa caída y qué está en tu mano para frenarla.',
    url:'https://www.youtube.com/watch?v=riiEnoDbL0E' }

];
