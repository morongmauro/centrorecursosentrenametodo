/* ═══════════════════════════════════════════════════════════════════════
   CÁPSULAS INFORMATIVAS — el listado del centro de recursos
   ═══════════════════════════════════════════════════════════════════════

   ─── LO MÍNIMO ────────────────────────────────────────────────────────
   Para publicar una lámina basta con SUBIR LA IMAGEN a esta carpeta.
   No hace falta escribir nada aquí: el centro la detecta sola y la coloca
   en su categoría. (Lo hace capsulas/manifest.js, que se reescribe solo
   cada vez que subes una imagen.)

   Para que eso funcione, EL NOMBRE DEL ARCHIVO importa:

       categoria-titulo-con-guiones.png

       nutricion-como-armar-el-plato.png
         → categoría Nutrición · título "Como armar el plato"

       entrenamiento-cuando-subir-el-peso.png
         → categoría Entrenamiento · título "Cuando subir el peso"

       bienestar-manejar-el-estres.png
         → categoría Bienestar general · título "Manejar el estres"

   Primera palabra = categoría. Vale entrenamiento, entreno, fuerza,
   movilidad, cardio, tecnica · nutricion, alimentacion, comida, dieta,
   recetas · bienestar, habitos, sueno, descanso, mentalidad, estres,
   salud. Si no reconoce la primera palabra, la manda a Bienestar general
   y usa el nombre completo como título.

   ─── CUANDO QUIERES MÁS QUE ESO ───────────────────────────────────────
   El título que sale del nombre del archivo no lleva tildes ni dos puntos,
   y no trae descripción. Cuando quieras ponerle el título bonito y el
   texto que se lee bajo la miniatura, agrega su bloque aquí abajo
   apuntando al MISMO archivo: lo que escribas manda sobre lo automático.

   Campos:
     id     · llave del avance de lectura. NO la cambies una vez publicada:
              quien ya la vio la vería como pendiente otra vez.
     cat    · Entrenamiento · Nutrición · Bienestar general. Son las tres
              que existen; cualquier otra cosa cae en Bienestar general.
     title  · título de la tarjeta y pie del visor.
     file   · ruta de la imagen desde la raíz del repo.
     nota   · la descripción que va DEBAJO de la imagen, de DOS LÍNEAS.
              Es lo que se lee sin abrir la lámina. Máximo ~70 caracteres:
              lo que se pase de dos líneas se corta solo en la tarjeta
              (completo se ve al abrirla). Una frase, no un párrafo.
     tag    · etiqueta corta al pie (opcional).
     nuevo  · true pinta la etiqueta "Nuevo" (desaparece al abrirla).

   El ORDEN de los bloques aquí ya no decide el orden en pantalla: el
   centro agrupa siempre en Entrenamiento → Nutrición → Bienestar general.
   Dentro de cada categoría sí manda el orden en que estén escritos.

   Reglas de la imagen: 4:5 vertical, 1080–1440 px de ancho, menos de
   600 KB, y el titular debe leerse ya en la miniatura — ahora se ven de
   a dos por fila, así que el texto pequeño no se lee sin abrirla.
   Mientras la imagen no exista, la tarjeta se ve con el marco
   "Infografía en camino" — puedes dejar la entrada lista de antemano.

   Ojo con la sintaxis: cada bloque va entre llaves { } y separado por
   coma. Los textos van entre comillas simples.
   ═══════════════════════════════════════════════════════════════════════ */

window.CAPSULAS_DATA = [

  /* ── ENTRENAMIENTO ────────────────────────────────────────────────── */
  { id:'ent-01-capacidades',
    cat:'Entrenamiento',
    title:'Las cinco capacidades físicas',
    file:'capsulas/01-entrenamiento-las-cinco-capacidades.png',
    nota:'Fuerza, resistencia, velocidad, flexibilidad y coordinación.',
    tag:'Empieza por aquí',
    nuevo:true },

  { id:'ent-02-crece-musculo',
    cat:'Entrenamiento',
    title:'Cómo crece el músculo',
    file:'capsulas/02-entrenamiento-como-crece-el-musculo.png',
    nota:'Qué pasa dentro del músculo y qué necesita después para crecer.',
    nuevo:true },

  { id:'ent-03-lenguaje-rutina',
    cat:'Entrenamiento',
    title:'El lenguaje de tu rutina',
    file:'capsulas/03-entrenamiento-el-lenguaje-de-tu-rutina.png',
    nota:'Series, repeticiones, RIR, tempo: qué significa cada palabra.',
    tag:'Para no perderte en el plan',
    nuevo:true },

  { id:'ent-04-subir-peso',
    cat:'Entrenamiento',
    title:'Cuándo subir el peso',
    file:'capsulas/04-entrenamiento-cuando-subir-el-peso.png',
    nota:'La señal de que ya toca subir, cuánto, y qué hacer si te estancas.',
    nuevo:true },

  { id:'ent-05-orden-sesion',
    cat:'Entrenamiento',
    title:'El orden de la sesión',
    file:'capsulas/05-entrenamiento-el-orden-de-la-sesion.png',
    nota:'Qué va primero y qué va al final, y por qué ese orden importa.',
    nuevo:true },

  { id:'ent-06-entiende-rutina',
    cat:'Entrenamiento',
    title:'Entiende tu rutina',
    file:'capsulas/06-entrenamiento-entiende-tu-rutina.png',
    nota:'Qué busca cada bloque de tu plan y qué pasa si te saltas uno.',
    nuevo:true },

  /* ── NUTRICIÓN ────────────────────────────────────────────────────── */
  { id:'nut-07-cada-macro',
    cat:'Nutrición',
    title:'Cuánto de cada macro',
    file:'capsulas/07-nutricion-cuanto-de-cada-macro.png',
    nota:'Proteína, carbohidrato y grasa: cuánto de cada uno y por qué.',
    tag:'Tu meta, explicada',
    nuevo:true },

  { id:'nut-08-grasa-y-musculo',
    cat:'Nutrición',
    title:'Perder grasa y ganar músculo',
    file:'capsulas/08-nutricion-perder-grasa-y-ganar-musculo.png',
    nota:'Si se puede a la vez, en qué casos y qué esperar de verdad.',
    nuevo:true },

  { id:'nut-09-comer-sin-pesar',
    cat:'Nutrición',
    title:'Comer bien sin pesar',
    file:'capsulas/09-nutricion-comer-bien-sin-pesar.png',
    nota:'Servirte bien sin pesar: la mano como medida, el plato como guía.',
    tag:'Para comer fuera',
    nuevo:true },

  /* ── BIENESTAR GENERAL ────────────────────────────────────────────── */
  { id:'bie-10-dormir-mejor',
    cat:'Bienestar general',
    title:'Dormir mejor con lo que tienes',
    file:'capsulas/10-bienestar-dormir-mejor-con-lo-que-tienes.png',
    nota:'Qué se rompe cuando duermes mal y las palancas que sí controlas.',
    nuevo:true },

  { id:'bie-11-muevete-fuera',
    cat:'Bienestar general',
    title:'Muévete fuera del gimnasio',
    file:'capsulas/11-bienestar-muevete-fuera-del-gimnasio.png',
    nota:'El gasto del resto del día: cuánto suma y cómo subirlo.',
    tag:'El cardio invisible',
    nuevo:true }

];
