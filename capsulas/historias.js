/* ═══════════════════════════════════════════════════════════════════════
   CÁPSULAS EN HISTORIAS — la visual nueva
   ═══════════════════════════════════════════════════════════════════════

   Cada cápsula, contada en pantallas cortas (como las historias de
   Instagram): una idea por pantalla, letra grande, un ícono o un diagrama
   que la acompaña y el color de su tema. Se avanza tocando a la derecha y
   se vuelve tocando a la izquierda. Al final, la regla, las fuentes y el
   botón para abrir la lámina completa.

   EL CONTENIDO ES EL DE CADA LÁMINA, COMPLETO: cada dato, cifra, ejemplo y
   punto de «Cómo lo aplicas» está aquí, redactado para leerse en pantalla.
   Si cambias una lámina, cambia también su historia.

   La llave es el `id` de la cápsula en capsulas.js. Una cápsula que no
   esté aquí se sigue abriendo como lámina.

   Tipos de pantalla (la primera, la portada, se arma sola con el título):
     { k, h, p }                    etiqueta, frase grande, texto
     { k, n, nl, p }                número grande con su leyenda
     { k, pasos:[{t, d, ico}] }     pasos numerados (o con ícono)
     { k, lista:[…] }               «Cómo lo aplicas»
     { k, filas:[{ico, t, v}] }     tabla corta (dato y valor)
     { k, cols:[{t, v, d, fuerte}] } columnas para comparar
     { k, curva:[a, b, c] }         curva de respuesta con su zona útil
     { k, barras:[{t, v, d, alto, fuerte}] } barras (semanas, series)
     { k, escala:{ resalta, izq, der, pie } } escala del 1 al 10
     { k, deslizadores:[{t, izq, der, v}] }  variables entre dos extremos
     { k, segmentos:[{t, v, fuerte}] }       de dónde sale un total (%)
     { k, plato:true }              el plato repartido
     { regla:[a, b], fuente }       la frase final (b va en color)
   Cualquier pantalla acepta `ico` (el ícono de arriba) y `p` (texto).
   ═══════════════════════════════════════════════════════════════════════ */

window.CAPSULAS_HISTORIAS = {

  'ent-01-capacidades': {
    sub: 'Cuál de ellas te está poniendo el techo.',
    pantallas: [
      { k: 'La idea', ico: 'capas', h: 'Tu cuerpo no entrena una sola cualidad: entrena cinco a la vez.', p: 'Y todas se apoyan entre sí. La que quede rezagada le pone límite a las demás.' },
      { k: 'Fuerza · la base de todo', ico: 'pesa', n: '2 a 4', nl: 'sesiones por semana, con carga progresiva y cubriendo el cuerpo completo',
        p: 'Es tu capacidad de producir tensión contra una resistencia, y la que más transfiere: sostiene tu masa muscular, protege tus articulaciones y mantiene la densidad ósea con los años.' },
      { k: 'Movilidad · el rango que controlas', ico: 'ciclo', h: 'El rango que no controlas, tu sistema nervioso lo limita apenas aparece carga.',
        p: 'Movilidad es el recorrido articular que sostienes con tu propia fuerza; flexibilidad es hasta dónde te lleva algo externo. Se trabaja a diario y en todo el cuerpo: tobillo, cadera, columna y hombro son una cadena.' },
      { k: 'Resistencia, potencia y coordinación', pasos: [
        { ico: 'pulso', t: 'Resistencia', d: 'Sostiene tu recuperación entre series y entre sesiones: 150 minutos semanales de intensidad moderada.' },
        { ico: 'rayo', t: 'Potencia', d: 'Es fuerza aplicada rápido, y es la primera que se pierde con la edad.' },
        { ico: 'cono', t: 'Coordinación', d: 'Es eficiencia, y se entrena repitiendo patrones con buena técnica.' } ] },
      { k: 'Las cinco, y la dosis de cada una', filas: [
        { ico: 'pesa', t: 'Fuerza', v: '2–4 × semana' }, { ico: 'ciclo', t: 'Movilidad', v: 'a diario' },
        { ico: 'pulso', t: 'Resistencia', v: '150 min/sem' }, { ico: 'rayo', t: 'Potencia', v: '1–2 × semana' }, { ico: 'cono', t: 'Coordinación', v: 'cada sesión' } ],
        p: 'Las cinco se entrenan siempre. Lo que cambia de una etapa a otra es cuál recibe más atención durante ese bloque.' },
      { k: 'Cómo lo aplicas', lista: [
        'Cubre el cuerpo completo a lo largo de la semana, no solo lo que te gusta entrenar.',
        'Dale a la movilidad un espacio diario y corto: la constancia pesa más que la duración.',
        'Trabaja todas las articulaciones, no solo las que sientes tiesas.',
        'Si aparece dolor dentro de un rango, no lo fuerces: eso lo ajustamos juntos.' ] },
      { regla: ['Ninguna capacidad se sostiene sola.', 'La más rezagada marca tu techo.'],
        fuente: 'Behm et al. (2016), Applied Physiology, Nutrition and Metabolism · OMS (2020), Directrices sobre actividad física' },
    ] },

  'ent-02-crece-musculo': {
    sub: 'La dosis que realmente produce hipertrofia.',
    pantallas: [
      { k: 'La idea', ico: 'musculo', h: 'Hipertrofia es el aumento del tamaño de tus fibras musculares.',
        p: 'Ocurre cuando tu cuerpo construye más proteína muscular de la que degrada, durante semanas seguidas.' },
      { k: 'Lo que la dispara es la tensión, no el cansancio', ico: 'rayo', n: '24 a 48 h', nl: 'construyendo proteína después de una serie con tensión alta',
        p: 'Tensión mecánica es la fuerza que atraviesa el músculo mientras trabaja. Pasadas esas horas, la construcción vuelve a su nivel normal: por eso entrenar un músculo dos veces por semana rinde más que una.' },
      { k: 'La dosis se cuenta en series por músculo', ico: 'calendario', n: '10 a 20', nl: 'series semanales por grupo muscular',
        p: 'Por debajo de diez, la respuesta se queda corta en alguien que ya entrena; por encima de veinte, el beneficio se aplana y la fatiga sube más rápido que el resultado. No se cuenta en horas ni en ejercicios.' },
      { k: 'Volumen semanal y respuesta', curva: ['menos de 10 · insuficiente', '10 a 20 series · tu zona de trabajo', 'más de 20 · ya no compensa'],
        p: 'Si llevas poco tiempo entrenando, la parte baja del rango ya produce resultados. Con años de entrenamiento vas a necesitar acercarte al extremo alto.' },
      { k: 'La condición: que la serie sea exigente', ico: 'medidor', n: '0 a 3', nl: 'repeticiones de margen (RIR)',
        p: 'Una serie cuenta cuando terminas cerca del punto en que no podrías hacer otra con buena técnica. Dentro de esa condición, de 5 a 30 repeticiones el crecimiento es comparable. Lo que no funciona es acumular series cómodas.' },
      { k: 'Cómo lo aplicas', lista: [
        'Cuenta tus series semanales por músculo: si alguno no llega a diez, ahí está el problema.',
        'Reparte ese volumen en dos sesiones por músculo: misma cantidad, mejor calidad.',
        'Sube el volumen despacio: 2 o 3 series más cada dos o tres semanas.',
        'Sin calorías y proteína suficientes, el estímulo no se convierte en tejido.' ] },
      { regla: ['El músculo responde a series exigentes acumuladas,', 'no a una sesión destructiva.'],
        fuente: 'Schoenfeld, Ogborn & Krieger (2017), Journal of Sports Sciences · Refalo et al. (2023), Journal of Sports Sciences' },
    ] },

  'ent-03-lenguaje-rutina': {
    sub: 'Las variables que definen tu entrenamiento.',
    pantallas: [
      { k: 'La idea', ico: 'regla', h: 'Decir que un entreno fue «duro» no describe nada.',
        p: '«Duro» puede ser mucho peso, muchas series, poco descanso o mucha fatiga previa, y cada uno produce un efecto distinto.' },
      { k: 'Carga e intensidad', ico: 'disco', h: 'El peso, y qué tan pesado es para ti.',
        p: 'La carga son los kilos que tienes en la mano. La intensidad es ese peso comparado con tu máximo personal, que se llama 1RM (una repetición máxima). Cuarenta kilos pueden ser el 50 % del 1RM de alguien y el 90 % del de otro.' },
      { k: 'Volumen y densidad', ico: 'arena', h: 'Cuánto trabajo, y en cuánto tiempo.',
        p: 'El volumen es el trabajo total acumulado: series × repeticiones × peso. La densidad es cuánto trabajo metes por unidad de tiempo, y la controlas con el descanso. Descansar menos te deja menos repeticiones y termina bajando el volumen total.' },
      { k: 'Tempo y rango', ico: 'flechas', h: 'Cómo ejecutas la repetición.',
        p: 'El tempo es la velocidad de cada fase: la excéntrica es cuando el músculo se alarga bajo carga (bajar en una sentadilla) y la concéntrica cuando se acorta. El rango, o ROM, es cuánto recorrido completas en cada repetición.' },
      { k: 'Las variables, y hacia dónde las mueves', deslizadores: [
        { t: 'Carga', izq: 'liviano', der: 'pesado', v: 0.78 }, { t: 'Volumen', izq: 'pocas series', der: 'muchas series', v: 0.6 },
        { t: 'Densidad', izq: 'descanso largo', der: 'descanso corto', v: 0.38 }, { t: 'Tempo', izq: 'rápido', der: 'controlado', v: 0.86 } ],
        p: 'Y dos que no manejas, sino que resultan: la tensión mecánica, que es la que produce el crecimiento, y la fatiga, la caída temporal de tu capacidad de producirla.' },
      { k: 'Cómo lo aplicas', lista: [
        'Tu rutina ya trae estas variables definidas: lo valioso es reconocerlas, no calcularlas.',
        'Un entrenamiento estructurado mueve una variable a la vez, nunca todas juntas.',
        'Si no puedes subir peso, te quedan tres palancas: más repeticiones, bajada más controlada o más rango.',
        'El descanso es una variable, no una pausa: cambiarlo cambia el entrenamiento.' ] },
      { regla: ['«Duro» no es una variable.', 'Carga, volumen, densidad y tempo sí lo son.'],
        fuente: 'Zatsiorsky & Kraemer, Science and Practice of Strength Training · ACSM (2009), Medicine & Science in Sports & Exercise' },
    ] },

  'ent-04-subir-peso': {
    sub: 'Y por qué no tiene que ser cada semana.',
    pantallas: [
      { k: 'La idea', ico: 'escalera', h: 'Progresar no es subir kilos cada semana.',
        p: 'La mayoría de tus sesiones vas a mover el mismo peso que la vez anterior, y eso es exactamente lo que se espera de un proceso que funciona.' },
      { k: 'Antes del peso está la repetición', pasos: [
        { ico: 'check', t: 'Completas el rango entero', d: 'todo el recorrido, cada repetición' },
        { ico: 'reloj', t: 'Controlas la bajada', d: 'uno o dos segundos' },
        { ico: 'regla', t: 'Terminas igual que empezaste', d: 'sin cambiar de postura ni usar impulso' } ],
        p: 'Así cuenta una repetición. Si cada semana ejecutas distinto, tu registro deja de poder compararse consigo mismo.' },
      { k: 'El peso correcto lo define el rango', ico: 'medidor', n: '2 a 3', nl: 'repeticiones de margen al final de la serie',
        p: 'El rango de repeticiones prescrito ya define la carga: la correcta es la que hace exigente ese rango dejando dos o tres de margen. Si te sobraban cinco, iba liviano; si no llegaste al mínimo, iba pesado. No eliges peso y repeticiones por separado.' },
      { k: 'Sube en escalones, no en línea recta', ico: 'escalera', h: 'Una semana sin subir no es un retroceso.',
        p: 'Tu fuerza cambia con el sueño, el estrés y la fatiga acumulada. La señal es cerrar el tope del rango en todas las series sintiendo que todavía te queda capacidad. Cuando aparece, puedes subir un poco solo en las últimas series: microretos que desafían el estímulo sin arriesgar la técnica.' },
      { k: 'Cuatro semanas del mismo ejercicio', barras: [
        { t: 'Semana 1', v: '40 kg', d: '9 · 10 · 8', alto: 0.62 }, { t: 'Semana 2', v: '40 kg', d: '10 · 11 · 9', alto: 0.62 },
        { t: 'Semana 3', v: '40 kg', d: '12 · 12 · 12', alto: 0.62 }, { t: 'Semana 4', v: '42,5 kg', d: '10 · 9 · 8', alto: 0.82, fuerte: true } ],
        p: 'Primero suben las repeticiones, y solo ahí sube el peso. El valor está en lo que se acumula: sumar una repetición con el mismo peso ya es más trabajo total que la semana pasada.' },
      { k: 'Progresión dentro de la sesión · sentadilla', pasos: [
        { t: 'Serie 1 · 40 kg', d: '8 repeticiones @ RIR 2' },
        { t: 'Serie 2 · +2,5 kg → 42,5 kg', d: '8 repeticiones @ RIR 2' },
        { t: 'Serie 3 · +2,5 kg → 45 kg', d: '7 a 8 repeticiones @ RIR 2' },
        { t: 'Serie 4 · +2,5 kg → 47,5 kg', d: '6 a 8 repeticiones @ RIR 2' } ],
        p: 'En una misma sesión puedes ir subiendo de a poquito, siempre que mantengas la técnica, el rango completo y las mismas repeticiones de reserva. Aumentos pequeños (2,5 kg o 5 lb) son la sobrecarga progresiva aplicada día a día.' },
      { k: 'Cómo lo aplicas', lista: [
        'Registra peso, repeticiones y margen. Sin registro no hay progresión, hay memoria.',
        'Repite el mismo peso mientras sigas sumando repeticiones: eso ya es progresar.',
        'Si al subir pierdes rango o técnica, vuelve al peso anterior y suma una repetición.',
        'Tres semanas estancado: revisa sueño, comida y volumen antes de tocar la carga.' ] },
      { regla: ['Progresar es superar tu registro anterior,', 'aunque sea por una repetición.'],
        fuente: 'ACSM (2009), Progression Models in Resistance Training for Healthy Adults, Medicine & Science in Sports & Exercise' },
    ] },

  'ent-05-orden-sesion': {
    sub: 'Dónde gastas la fuerza que tienes disponible.',
    pantallas: [
      { k: 'La idea', ico: 'orden', h: 'Mismo entreno, mismo esfuerzo, distinto resultado.',
        p: 'Con la misma sesión y el mismo esfuerzo puedes sacar bastante más o bastante menos según el orden. Tu capacidad de producir fuerza cae a lo largo del entrenamiento.' },
      { k: 'Los compuestos van primero', ico: 'pesa', h: 'Sentadilla, peso muerto, press, dominada, remo.',
        p: 'Un ejercicio compuesto involucra varias articulaciones y grandes grupos musculares: más carga, más energía y más transferencia. Por eso son los que más pierden cuando llegan cansados: menos peso y peor técnica.' },
      { k: 'El aislamiento previo cambia quién termina la serie', cols: [
        { t: 'Aislamiento antes', v: 'Fatiga el tríceps', d: 'la serie del press termina por el tríceps' },
        { t: 'Compuesto primero', v: 'El pecho limita', d: 'la serie termina por el músculo objetivo', fuerte: true } ],
        p: 'Un ejercicio de aislamiento trabaja un músculo alrededor de una articulación. Si fatigas el tríceps antes de un press, la serie acaba por una razón distinta a la que querías y el músculo objetivo se queda sin el trabajo duro.' },
      { k: 'El criterio es tu prioridad, no una lista fija', pasos: [
        { ico: 'objetivo', t: 'Define tu prioridad', d: 'qué quieres mejorar ahora' },
        { ico: 'flecha', t: 'Ponlo primero', d: 'cuando tienes más fuerza disponible' },
        { ico: 'grafica', t: 'Progresa mejor', d: 'con más calidad y más carga' } ],
        p: 'Si el objetivo del ciclo es un movimiento concreto, ese va con la fuerza intacta. El orden general es el punto de partida; tu prioridad lo ajusta.' },
      { k: 'La sesión, de mayor a menor capacidad', pasos: [
        { t: 'Compuestos pesados', d: 'descanso de 2 a 3 minutos' },
        { t: 'Resto de compuestos', d: 'descanso de 90 a 120 segundos' },
        { t: 'Aislamiento', d: 'descanso de 60 a 90 segundos' } ],
        p: 'El descanso baja junto con el orden: los primeros necesitan recuperación completa para sostener la carga; los últimos ya no buscan mover el máximo peso.' },
      { k: 'Cómo lo aplicas', lista: [
        'Sigue la rutina de arriba abajo: el orden ya es parte de la prescripción.',
        'Con poco tiempo, recorta series por el final, nunca por el principio.',
        'Si el equipo está ocupado, cambia por un movimiento del mismo tipo.',
        'Deja los descansos largos donde importan: en los compuestos.' ] },
      { regla: ['La rutina ya viene ordenada.', 'El orden es parte de la dosis.'],
        fuente: 'Simão et al. (2012), Exercise Order in Resistance Training, Sports Medicine' },
    ] },

  'ent-06-entiende-rutina': {
    sub: 'Las abreviaturas que sí necesitas ahora.',
    pantallas: [
      { k: 'La idea', ico: 'lista', h: 'Unas pocas abreviaturas son esenciales.',
        p: 'En el entrenamiento de fuerza vas a escuchar abreviaturas todo el tiempo. Con unas pocas ya entiendes tu plan; el resto puede esperar.' },
      { k: 'RIR · repeticiones en reserva', ico: 'flecha', h: 'Cuántas repeticiones te sobraron.',
        p: 'Si paraste sintiendo que podías hacer dos más, eso es RIR 2. Es la que más vas a ver en tu rutina porque describe el esfuerzo sin depender del peso que uses.' },
      { k: 'RPE · qué tan duro se sintió', ico: 'medidor', h: 'Una escala del 1 al 10 para la intensidad que sentiste.',
        p: 'Un 5 es cómodo, un 7 ya se siente exigente, un 9 es casi todo lo que tenías. No mide el peso ni las repeticiones: mide tu percepción de la sesión.' },
      { k: 'La escala, y las dos que más vas a usar', escala: { resalta: [7, 8], izq: 'cómodo', der: 'puedo más', pie: 'tu zona de trabajo' },
        p: 'RPE: qué tan duro se sintió, del 1 al 10. RIR: cuántas repeticiones te sobraron.' },
      { k: '1RM y ROM · tu máximo y tu recorrido', ico: 'disco', h: 'Lo que podrías una vez, y cuánto recorres.',
        p: '1RM es el peso más alto que podrías levantar una sola vez con buena técnica; se usa como referencia de intensidad y se estima desde tus propias series. ROM es el rango de movimiento: cuánto recorrido completas en cada repetición.' },
      { k: 'Más adelante verás otras', ico: 'libro', h: 'Tempo, TUT, AMRAP, deload, PR y DOMS.',
        p: 'DOMS son las agujetas, que dependen de la novedad del ejercicio y no miden si la sesión sirvió.' },
      { k: 'Cómo lo aplicas', lista: [
        'Con entender RIR y RPE ya puedes leer tu rutina completa.',
        'Anota el RIR junto al peso y las repeticiones: es lo que me deja ajustar sin verte entrenar.',
        'En un ejercicio nuevo, empieza con 3 o 4 de margen aunque puedas más.',
        'Si dudas entre dos números, reporta el más alto: casi siempre te queda más de lo que crees.' ] },
      { regla: ['RIR cuenta lo que te sobró.', 'RPE cuenta cómo lo sentiste.'],
        fuente: 'Zourdos et al. (2016), Journal of Strength and Conditioning Research' },
    ] },

  'nut-07-cada-macro': {
    sub: 'Proteína, grasa y carbohidrato en gramos por kilo.',
    pantallas: [
      { k: 'La idea', ico: 'balanza', h: 'Las calorías deciden hacia dónde se mueve tu peso.',
        p: 'Los macronutrientes deciden de qué está hecho ese peso, y cada uno cumple una función que los otros no cubren.' },
      { k: 'Proteína · el material con el que se construye', ico: 'cuadros', n: '1,6 a 2,2 g', nl: 'por kilo de peso: ahí se aplana el beneficio',
        p: 'Aporta los aminoácidos con los que fabricas y reparas músculo, tendón, piel, enzimas y hormonas, y es el macro que más sacia. Por encima de eso puede tener sentido en un déficit exigente o con mucho volumen, pero pasado cierto punto solo desplaza al resto de la dieta.' },
      { k: 'Grasa · hormonas, membranas y transporte', ico: 'gota', n: '0,5 a 0,8 g', nl: 'por kilo: el mínimo funcional, entre el 20 y el 35 % de tus calorías',
        p: 'Forma las membranas de tus células, es la materia prima de las hormonas esteroideas y permite absorber las vitaminas A, D, E y K. Por eso no se recorta a cero para ganar margen calórico.' },
      { k: 'Carbohidrato · el combustible del trabajo duro', ico: 'llama', n: '3 a 5 g', nl: 'por kilo con entrenamiento moderado · 5 a 8 con mucho volumen',
        p: 'Se almacena como glucógeno y sostiene el esfuerzo intenso; tu cerebro además consume glucosa todo el día. Es el macro que más nota tu rendimiento. Y con él viene la fibra: 25 a 38 g diarios.' },
      { k: 'El orden en que se fijan', pasos: [
        { ico: 'cuadros', t: 'Primero, la proteína', d: 'se protege incluso cuando bajan las calorías' },
        { ico: 'gota', t: 'Después, la grasa', d: 'en su mínimo' },
        { ico: 'llama', t: 'El carbohidrato', d: 'ocupa lo que queda' } ] },
      { k: 'Cómo lo aplicas', lista: [
        'Fija tu proteína por kilo de peso y trátala como innegociable en cualquier fase.',
        'Cuida el mínimo de grasa: recortarla del todo sale caro a nivel hormonal.',
        'Ajusta el carbohidrato según cuánto entrenas esa semana.',
        'Reparte la proteína en 3 a 5 comidas: el mismo total, repartido, rinde más.' ] },
      { regla: ['Las calorías mueven el peso.', 'Los macros deciden de qué está hecho.'],
        fuente: 'Morton et al. (2018), British Journal of Sports Medicine · Jäger et al. (2017), ISSN Position Stand: Protein and Exercise' },
    ] },

  'nut-08-grasa-y-musculo': {
    sub: 'Balance energético y composición corporal.',
    pantallas: [
      { k: 'La idea', ico: 'balanza', h: 'El objetivo no es el peso: es la composición.',
        p: 'La diferencia entre lo que comes y lo que gastas mueve tu peso. Lo que importa es cuánto de ti es músculo y cuánto es grasa.' },
      { k: 'Recomposición · las dos cosas a la vez', ico: 'ciclo', n: '±5 %', nl: 'alrededor de tu mantenimiento',
        p: 'Significa subir masa muscular mientras baja la grasa corporal. La báscula se mueve poco y aun así el cuerpo cambia. Se trabaja con proteína alta y entrenamiento progresivo, y para quien ya está en un punto intermedio es el camino que se sostiene durante años.' },
      { k: 'Déficit · cuando hay grasa que reducir', ico: 'abajo', n: '−10 a −25 %', nl: 'por debajo de tu gasto · perdiendo 0,5 a 1 % de tu peso por semana',
        p: 'Tiene sentido cuando reducir grasa es la prioridad y hay margen para hacerlo. Más agresivo aumenta la parte que sale de masa muscular y baja tu rendimiento.' },
      { k: 'Superávit · cuando buscas ganar tamaño', ico: 'flecha', n: '+5 a +15 %', nl: 'por encima de tu gasto · ganando 0,25 a 0,5 % del peso por semana',
        p: 'Es la fase para construir músculo más rápido y suele responder a un objetivo estético concreto. Comer mucho más no acelera el músculo: acelera la grasa, que después toca revertir.' },
      { k: 'Las tres direcciones, y para quién es cada una', cols: [
        { t: 'Déficit', v: '−10 a −25 %', d: 'cuando hay grasa que reducir' },
        { t: 'Recomposición', v: '±5 %', d: 'ganas músculo y pierdes grasa', fuerte: true },
        { t: 'Superávit', v: '+5 a +15 %', d: 'cuando buscas ganar tamaño' } ],
        p: 'Las tres comparten lo mismo: proteína suficiente y entrenamiento de fuerza progresivo. Sin eso, cualquiera mueve el peso en la dirección equivocada.' },
      { k: 'Cómo lo aplicas', lista: [
        'Elige una dirección y sostenla 8 a 12 semanas: cambiar cada tres no produce nada.',
        'Mide tendencia, no días: promedia la semana y compárala con la anterior.',
        'En recomposición la báscula engaña: mira medidas, fotos y tu registro de cargas.',
        'Si en dos o tres semanas nada se mueve, el ajuste es de calorías o de pasos.' ] },
      { regla: ['El balance define hacia dónde vas.', 'El entrenamiento y la proteína, qué tejido se mueve.'],
        fuente: 'Barakat et al. (2020), Strength and Conditioning Journal · Helms et al. (2014), Journal of the International Society of Sports Nutrition' },
    ] },

  'nut-09-comer-sin-pesar': {
    sub: 'Dos métodos para los días sin registro.',
    pantallas: [
      { k: 'La idea', ico: 'plato', h: 'Un restaurante, una reunión, la casa de alguien más.',
        p: 'Para esos días existen dos métodos distintos que se complementan: uno reparte el plato, el otro mide las porciones.' },
      { k: 'Método 1 · MyPlate reparte el plato', plato: true,
        p: 'Es la guía oficial del Departamento de Agricultura de Estados Unidos y funciona por proporciones visuales: la mitad en verduras y frutas (más verdura que fruta), un cuarto en granos, con al menos la mitad integrales, y un cuarto en proteína. Te dice en qué proporción, pero no cuánta comida.' },
      { k: 'Método 2 · la mano mide la cantidad', pasos: [
        { ico: 'mano', t: 'Palma', d: 'proteína · unos 20 a 30 g' },
        { ico: 'puno', t: 'Puño cerrado', d: 'verduras' },
        { ico: 'mano', t: 'Mano ahuecada', d: 'carbohidrato · otros 20 a 30 g' },
        { ico: 'pulgar', t: 'Pulgar', d: 'la grasa de acompañamiento' } ],
        p: 'Aquí sí hay cantidad, y funciona porque tu mano escala con tu tamaño corporal.' },
      { k: 'Cuántas porciones, y la diferencia por sexo', cols: [
        { t: 'Hombres', v: '2 de cada', d: '2 palmas · 2 puños · 2 manos · 2 pulgares por comida' },
        { t: 'Mujeres', v: '1 de cada', d: '1 palma · 1 puño · 1 mano · 1 pulgar por comida' } ],
        p: 'No es que un hombre necesite el doble: son cifras de arranque sobre unas cuatro comidas diarias y diferencias promedio de tamaño, que después se ajustan por hambre y resultado.' },
      { k: 'Cómo se combinan', ico: 'mano', h: 'El plato decide la proporción; la mano decide cuánto.',
        p: 'Juntos resuelven la comida sin báscula.' },
      { k: 'Cómo lo aplicas', lista: [
        'Sirve en orden: primero las verduras, después la proteína, y el carbohidrato en lo que queda.',
        'Si el plato ya viene servido, no lo reconstruyas: corrígelo, y nunca quitando proteína.',
        'En restaurante, pide verduras aparte y las salsas al lado antes de que llegue.',
        'Si en dos semanas nada se mueve, quita una mano de carbohidrato o un pulgar de grasa.' ] },
      { regla: ['No sustituyen tu registro.', 'Son tu plan B, y funcionan.'],
        fuente: 'USDA, MyPlate · Dietary Guidelines for Americans 2020–2025 · Precision Nutrition, Hand-Size Portion Guide' },
    ] },

  'bie-10-dormir-mejor': {
    sub: 'Las palancas que sí puedes mover hoy.',
    pantallas: [
      { k: 'La idea', ico: 'luna', n: '7 a 9 h', nl: 'la referencia de sueño',
        p: 'El sueño es cuando ocurre la adaptación de todo lo que entrenaste. Si hoy no llegas ahí no pasa nada dramático: lo que mueve la aguja es mejorar poco a poco.' },
      { k: 'Cuánto, y qué hacer si tu vida no da para eso', ico: 'cama', h: 'Si hoy duermes seis, ganar treinta minutos ya es una mejora real.',
        p: 'La recomendación de las sociedades del sueño es siete horas o más para un adulto. Es un objetivo, no un requisito para funcionar, y mejorar media hora vale más que quedarte con la sensación de que estás haciendo todo mal.' },
      { k: 'La regularidad es la palanca más barata', ico: 'calendario', h: 'Horas parecidas para acostarte y para levantarte.',
        p: 'Tu reloj interno se sincroniza con horarios estables: eso mejora la calidad de lo que duermes aunque no aumentes el total, y no te cuesta ni tiempo ni dinero. Dormir poco entre semana y recuperar el domingo funciona solo a medias.' },
      { k: 'Qué notas cuando el descanso queda corto', ico: 'bateria', h: 'Menos fuerza, más hambre.',
        p: 'Baja la producción de fuerza y la calidad de tus series, se alarga la recuperación y el hambre sube inclinándose hacia lo más calórico. No es una catástrofe, es información: si una semana entrenaste peor, mirar cómo dormiste suele explicar más que cambiar la rutina.' },
      { k: 'Tu día, y las palancas por orden de facilidad', pasos: [
        { ico: 'reloj', t: 'Horario estable', d: 'lo que más rinde y menos cuesta' },
        { ico: 'sol', t: 'Luz temprano', d: '10 minutos ya anclan tu reloj' },
        { ico: 'cafe', t: 'Café con margen', d: '6 horas antes, o lo que puedas' },
        { ico: 'luna', t: 'Cuarto oscuro', d: 'suma, pero va de último' } ],
        p: 'Elige una sola palanca y sostenla dos semanas antes de sumar otra. Intentar cambiarlo todo la misma noche es la forma más rápida de abandonarlo.' },
      { k: 'Cómo lo aplicas', lista: [
        'Empieza por una hora fija para levantarte: es más fácil de controlar y arrastra al resto.',
        'Si duermes poco, súmale 20 o 30 minutos y sostenlo. Los saltos grandes no se mantienen.',
        'La cafeína no está prohibida: solo intenta que la última sea lo más temprano que puedas.',
        'Si duermes bien y con regularidad y aun así amaneces sin recuperar, consúltalo con un médico.' ] },
      { regla: ['No se trata de dormir perfecto.', 'Se trata de mejorar lo que ya tienes.'],
        fuente: 'Watson et al. (2015), Joint Consensus Statement AASM & Sleep Research Society · Drake et al. (2013), Journal of Clinical Sleep Medicine' },
    ] },

  'bie-11-muevete-fuera': {
    sub: 'El NEAT, y por qué se mide caminando.',
    pantallas: [
      { k: 'La idea', ico: 'huellas', h: 'Todo lo que te mueves fuera del entreno tiene nombre: NEAT.',
        p: 'Gasto energético por actividad no asociada al ejercicio. Es el bloque más variable de tu día.' },
      { k: 'Qué es el NEAT, exactamente', ico: 'zapato', h: 'Todo lo que no es dormir, digerir ni entrenar.',
        p: 'Caminar, cocinar, hacer diligencias, estar de pie, subir escaleras. Entre dos personas del mismo tamaño, el NEAT puede diferir cientos de calorías al día.' },
      { k: 'De dónde sale tu gasto', segmentos: [
        { t: 'Metabolismo basal', v: 65 }, { t: 'NEAT', v: 10, fuerte: true }, { t: 'Entreno', v: 20 }, { t: '', v: 5 } ],
        p: 'Tu metabolismo basal es el bloque más grande, pero es estable, y tu sesión de gimnasio es una porción pequeña del total. El NEAT es el único bloque grande que mueves cada día.' },
      { k: 'Por qué los pasos son la forma de medirlo', ico: 'telefono', h: 'Los pasos son la parte que sí se cuenta.',
        p: 'El NEAT completo no se puede contar: nadie mide cuántas veces te levantas de la silla. Los pasos funcionan como termómetro del resto: si suben, estás más activo en general. No es que caminar sea mágico, es que es lo medible.' },
      { k: 'Cuántos pasos tienen sentido', ico: 'objetivo', n: '8.000 a 10.000', nl: 'pasos antes de los 60 años · 6.000 a 8.000 después',
        p: 'Para salud, el beneficio se acumula hasta ahí y luego la curva se aplana. Pero para cambiar tu composición, la cifra que importa es tu propio promedio: si hoy caminas 4.000, subir a 6.000 cambia tu gasto de verdad.' },
      { k: 'Cómo subir los pasos', pasos: [
        { t: 'Tu promedio', d: 'de las últimas 2 semanas' },
        { t: '+1.000 a 1.500', d: 'el escalón' },
        { t: 'Sosténlo', d: '2 semanas antes del siguiente' } ],
        p: 'Revisa el promedio semanal junto con tu peso. Si los pasos bajan y la tendencia se estanca, la explicación suele estar ahí y no en lo que comes.' },
      { k: 'Cómo lo aplicas', lista: [
        'Busca tu promedio de las últimas dos semanas antes de fijar cualquier meta.',
        'Sube en escalones de 1.000 a 1.500 pasos y quédate ahí dos semanas.',
        'Tres caminatas cortas suman igual que una larga y se cumplen más fácil.',
        'Caminar 10 o 15 minutos después de comer suma pasos y mejora el manejo de la glucosa.' ] },
      { regla: ['No es cardio extra.', 'Es no quedarte quieto el resto del día.'],
        fuente: 'Levine (2002), Best Practice & Research Clinical Endocrinology · Paluch et al. (2022), The Lancet Public Health' },
    ] },

};
