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

   Reglas de la imagen: vertical, 1024–1440 px de ancho, menos de 600 KB.
   Sirve cualquier proporción de 4:5 en adelante (las actuales son 2:3).

   EL TITULAR VA ARRIBA. La miniatura de la rejilla muestra la parte de
   ARRIBA de la lámina y recorta el pie: es lo que hace que se reconozca
   sin abrirla. Se ven de a dos por fila, así que el texto pequeño de la
   lámina no se va a leer en la tarjeta — para eso está la descripción.
   Mientras la imagen no exista, la tarjeta se ve con el marco
   "Infografía en camino" — puedes dejar la entrada lista de antemano.

   Ojo con la sintaxis: cada bloque va entre llaves { } y separado por
   coma. Los textos van entre comillas simples.
   ═══════════════════════════════════════════════════════════════════════ */

window.CAPSULAS_DATA = [

  /* ── ENTRENAMIENTO ────────────────────────────────────────────────── */
  { id:'ent-01-capacidades',
    cat:'Entrenamiento',
    title:'Las cinco capacidades',
    file:'capsulas/01-entrenamiento-las-cinco-capacidades.png',
    nota:'Fuerza, movilidad, resistencia, potencia y coordinación: cuál te frena.',
    tag:'Empieza por aquí',
    nuevo:true },

  { id:'ent-02-crece-musculo',
    cat:'Entrenamiento',
    title:'Cómo crece el músculo',
    file:'capsulas/02-entrenamiento-como-crece-el-musculo.png',
    nota:'La dosis que produce hipertrofia: 10 a 20 series semanales por músculo.',
    nuevo:true },

  { id:'ent-03-lenguaje-rutina',
    cat:'Entrenamiento',
    title:'El lenguaje de tu rutina',
    file:'capsulas/03-entrenamiento-el-lenguaje-de-tu-rutina.png',
    nota:'Carga, volumen, densidad y tempo: las variables que definen tu entreno.',
    tag:'Para leer tu plan sin dudar',
    nuevo:true },

  { id:'ent-04-subir-peso',
    cat:'Entrenamiento',
    title:'Cuándo subir el peso',
    file:'capsulas/04-entrenamiento-cuando-subir-el-peso.png',
    nota:'Y por qué no tiene que ser cada semana. Primero suben las repeticiones.',
    nuevo:true },

  { id:'ent-05-orden-sesion',
    cat:'Entrenamiento',
    title:'El orden de la sesión',
    file:'capsulas/05-entrenamiento-el-orden-de-la-sesion.png',
    tag:'El orden es parte de la dosis',
    nota:'Dónde gastas la fuerza disponible. Los compuestos van primero.',
    nuevo:true },

  { id:'ent-06-entiende-rutina',
    cat:'Entrenamiento',
    title:'Entiende tu rutina',
    file:'capsulas/06-entrenamiento-entiende-tu-rutina.png',
    tag:'Con RIR y RPE ya lees tu plan',
    nota:'RIR, RPE, 1RM y ROM: las abreviaturas que sí necesitas ahora.',
    nuevo:true },

  /* ── NUTRICIÓN ────────────────────────────────────────────────────── */
  { id:'nut-07-cada-macro',
    cat:'Nutrición',
    title:'Cuánto de cada macro',
    file:'capsulas/07-nutricion-cuanto-de-cada-macro.png',
    nota:'Proteína, grasa y carbohidrato en gramos por kilo de tu peso.',
    tag:'Tu meta, explicada',
    nuevo:true },

  { id:'nut-08-grasa-y-musculo',
    cat:'Nutrición',
    title:'Perder grasa y ganar músculo',
    file:'capsulas/08-nutricion-perder-grasa-y-ganar-musculo.png',
    nota:'Déficit, recomposición o superávit: cuál te toca y qué esperar.',
    nuevo:true },

  { id:'nut-09-comer-sin-pesar',
    cat:'Nutrición',
    title:'Comer bien sin pesar',
    file:'capsulas/09-nutricion-comer-bien-sin-pesar.png',
    nota:'Dos métodos para los días sin registro: el plato y tu propia mano.',
    tag:'Para comer fuera',
    nuevo:true },

  /* ── BIENESTAR GENERAL ────────────────────────────────────────────── */
  { id:'bie-10-dormir-mejor',
    cat:'Bienestar general',
    title:'Dormir mejor con lo que tienes',
    file:'capsulas/10-bienestar-dormir-mejor-con-lo-que-tienes.png',
    nota:'Las palancas que sí puedes mover hoy, empezando por la más barata.',
    nuevo:true },

  { id:'bie-11-muevete-fuera',
    cat:'Bienestar general',
    title:'Muévete fuera del gimnasio',
    file:'capsulas/11-bienestar-muevete-fuera-del-gimnasio.png',
    nota:'El NEAT, y por qué se mide caminando. No es cardio extra.',
    tag:'El gasto invisible',
    nuevo:true }

];
