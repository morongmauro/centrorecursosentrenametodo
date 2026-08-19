/* ═══════════════════════════════════════════════════════════════════════
   CÁPSULAS INFORMATIVAS — el listado del centro de recursos
   ═══════════════════════════════════════════════════════════════════════

   Este archivo es el ÚNICO que hay que tocar para publicar una cápsula.
   No abras index.html.html.

   Para publicar una cápsula nueva:
     1. Deja su imagen en esta misma carpeta (capsulas/).
     2. Agrega su bloque aquí abajo, junto a las de su misma categoría.

   Campos:
     id     · llave del avance de lectura. NO la cambies una vez publicada:
              quien ya la vio la vería como pendiente otra vez.
     cat    · encabezado de grupo. Las de la misma categoría van juntas.
     title  · título de la tarjeta y pie del visor.
     file   · ruta de la imagen desde la raíz del repo.
     nota   · de qué va la lámina, en una o dos líneas. Es lo que se lee
              en la tarjeta antes de abrirla.
     tag    · etiqueta corta al pie (opcional).
     nuevo  · true pinta la etiqueta "Nuevo" (desaparece al abrirla).

   Reglas de la imagen: 4:5 vertical, 1080–1440 px de ancho, menos de
   600 KB, y el titular debe leerse ya en la miniatura.
   Mientras la imagen no exista, la tarjeta se ve con el marco
   "Infografía en camino" — puedes dejar la entrada lista de antemano.

   Ojo con la sintaxis: cada bloque va entre llaves { } y separado por
   coma. Los textos van entre comillas simples.
   ═══════════════════════════════════════════════════════════════════════ */

window.CAPSULAS_DATA = [

  /* ── NUTRICIÓN ────────────────────────────────────────────────────── */
  { id:'nutricion-proteina',
    cat:'Nutrición',
    title:'Proteína: cuánta y cuándo',
    file:'capsulas/nutricion-proteina.png',
    nota:'Cuántos gramos te tocan al día según tu peso, cómo repartirlos en el día y de dónde sacarlos.',
    tag:'El macro que más cuesta cerrar',
    nuevo:true },

  { id:'nutricion-plato',
    cat:'Nutrición',
    title:'El plato balanceado, en 3 pasos',
    file:'capsulas/nutricion-plato-balanceado.png',
    nota:'Cómo servirte bien cuando no puedes pesar ni registrar: mitad vegetales, un cuarto proteína, un cuarto carbohidrato.',
    tag:'Para comer fuera' },

  /* ── ENTRENAMIENTO ────────────────────────────────────────────────── */
  { id:'entreno-sobrecarga',
    cat:'Entrenamiento',
    title:'Sobrecarga progresiva: así se progresa',
    file:'capsulas/entrenamiento-sobrecarga-progresiva.png',
    nota:'Por qué el músculo solo cambia si le pides más, y las cuatro formas de pedir más sin subir el peso a lo loco.',
    tag:'La ley que sostiene tu rutina',
    nuevo:true },

  { id:'entreno-orden',
    cat:'Entrenamiento',
    title:'El orden de los ejercicios importa',
    file:'capsulas/entrenamiento-orden-ejercicios.png',
    nota:'Qué va primero y qué va al final, y por qué llegar cansado a lo pesado te cuesta el estímulo del día.' },

  { id:'entreno-rpe',
    cat:'Entrenamiento',
    title:'RPE: entrena con percepción',
    file:'capsulas/entrenamiento-rpe.png',
    nota:'La escala del 6 al 10 para elegir el peso solo: cuántas repeticiones dejar en reserva y cuándo subir.' },

  { id:'entreno-maquinas',
    cat:'Entrenamiento',
    title:'Configura la máquina antes de la serie',
    file:'capsulas/entrenamiento-configurar-maquinas.png',
    nota:'Asiento, respaldo, apoyos y recorrido: los cuatro ajustes que convierten una máquina incómoda en la correcta para ti.',
    tag:'30 segundos que cambian el ejercicio',
    nuevo:true },

  { id:'entreno-herramientas',
    cat:'Entrenamiento',
    title:'Bandas, kettlebell y mancuernas: cuándo usar cada una',
    file:'capsulas/entrenamiento-herramientas.png',
    nota:'Qué hace bien cada herramienta, para qué NO sirve, y con cuál resolver un entrenamiento fuera del gym.',
    nuevo:true },

  /* ── MOVILIDAD ────────────────────────────────────────────────────── */
  { id:'movilidad-para-que',
    cat:'Movilidad',
    title:'Movilidad: para qué sirve de verdad',
    file:'capsulas/movilidad-para-que-sirve.png',
    nota:'Los tres usos que sí tiene —prevenir, corregir y darte rango para levantar más— y cuál te toca a ti.',
    tag:'No es estirar por estirar',
    nuevo:true },

  /* ── HÁBITOS ──────────────────────────────────────────────────────── */
  { id:'habitos-sueno',
    cat:'Hábitos',
    title:'Dormir es entrenar',
    file:'capsulas/habitos-dormir.png',
    nota:'Qué se rompe cuando duermes mal —fuerza, recuperación y apetito— y las tres palancas que sí controlas.' },

  { id:'habitos-pasos',
    cat:'Hábitos',
    title:'Pasos diarios: el cardio invisible',
    file:'capsulas/habitos-pasos-diarios.png',
    nota:'El gasto que ocurre fuera del gimnasio, cuánto subirlo por semana y de dónde salen esos pasos sin buscar tiempo extra.' }

];
