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

  /* Borra la barra y los asteriscos de este bloque para publicarlo, y
     cámbialo por el episodio que quieras:

  { id:'sueno-dormir-mejor',
    cat:'Sueño y recuperación',
    title:'Herramientas para dormir mejor',
    show:'Huberman Lab',
    url:'https://www.youtube.com/watch?v=XXXXXXXXXXX',
    dur:'1h 20 min',
    nota:'La base de todo lo que hablamos de descanso: luz, horarios y temperatura.',
    tag:'Escucha los primeros 20 min',
    nuevo:true },

  */

];
