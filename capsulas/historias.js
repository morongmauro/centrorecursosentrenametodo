/* ═══════════════════════════════════════════════════════════════════════
   CÁPSULAS EN HISTORIAS — la visual nueva
   ═══════════════════════════════════════════════════════════════════════

   Cada cápsula, contada en pantallas cortas (como las historias de
   Instagram): una idea por pantalla, letra grande y el color de su tema.
   Se avanza tocando a la derecha y se vuelve tocando a la izquierda. Al
   final se puede abrir la lámina completa.

   La llave es el `id` de la cápsula en capsulas.js. Una cápsula que no
   esté aquí se sigue abriendo como lámina.

   Tipos de pantalla (la primera, la portada, se arma sola con el título):
     { k, h, p }          etiqueta arriba, frase grande, texto
     { k, n, nl, p }      etiqueta, número grande con su leyenda, texto
     { k, pasos:[{t,d}] } etiqueta y pasos numerados
     { k, lista:[…] }     «Cómo lo aplicas»
     { regla:[a, b] }     la frase final (b va en color)
   El contenido es el de cada lámina, partido en pantallas.
   ═══════════════════════════════════════════════════════════════════════ */

window.CAPSULAS_HISTORIAS = {

  'ent-01-capacidades': {
    sub: 'Cuál de ellas te está poniendo el techo.',
    pantallas: [
      { k: 'La idea', h: 'Tu cuerpo entrena cinco cosas a la vez.', p: 'Todas se apoyan entre sí. La que quede rezagada le pone límite a las demás.' },
      { k: 'Fuerza · la base de todo', n: '2–4', nl: 'sesiones por semana', p: 'Producir tensión contra una resistencia. Sostiene tu músculo, protege tus articulaciones y mantiene la densidad ósea. Con carga progresiva y cuerpo completo.' },
      { k: 'Movilidad · el rango que controlas', n: 'A diario', nl: 'y de cuerpo completo', p: 'Es el recorrido que sostienes con tu propia fuerza. El rango que no controlas, tu sistema nervioso lo limita apenas aparece carga.' },
      { k: 'Resistencia, potencia y coordinación', pasos: [
        { t: 'Resistencia', d: '150 minutos por semana de intensidad moderada' },
        { t: 'Potencia', d: '1–2 por semana: es la primera que se pierde con la edad' },
        { t: 'Coordinación', d: 'en cada sesión, repitiendo con buena técnica' } ] },
      { k: 'Cómo lo aplicas', lista: [
        'Cubre el cuerpo completo en la semana, no solo lo que te gusta entrenar.',
        'Movilidad diaria y corta: la constancia pesa más que la duración.',
        'Trabaja todas las articulaciones, no solo las que sientes tiesas.',
        'Si aparece dolor dentro de un rango, no lo fuerces: lo ajustamos juntos.' ] },
      { regla: ['Ninguna capacidad se sostiene sola.', 'La más rezagada marca tu techo.'] },
    ] },

  'ent-02-crece-musculo': {
    sub: 'La dosis que realmente produce hipertrofia.',
    pantallas: [
      { k: 'La idea', h: 'El músculo crece cuando construyes más de lo que degradas.', p: 'Durante semanas seguidas. Eso es la hipertrofia: fibras musculares más grandes.' },
      { k: 'Lo que la dispara', h: 'La tensión, no el cansancio.', p: 'Con tensión alta, la fibra construye más proteína durante 24 a 48 horas. Por eso entrenar un músculo dos veces por semana rinde más que una.' },
      { k: 'La dosis', n: '10–20', nl: 'series semanales por músculo', p: 'Por debajo de diez se queda corta; por encima de veinte, la fatiga sube más rápido que el resultado. Se cuenta en series, no en horas.' },
      { k: 'La condición', n: '0–3', nl: 'repeticiones de margen', p: 'Una serie cuenta si terminas cerca del punto en que no podrías otra con buena técnica. Lo que no funciona es acumular series cómodas.' },
      { k: 'Cómo lo aplicas', lista: [
        'Cuenta tus series por músculo: si alguno no llega a diez, ahí está el problema.',
        'Reparte ese volumen en dos sesiones por músculo.',
        'Sube despacio: 2 o 3 series más cada dos o tres semanas.',
        'Sin calorías y proteína suficientes, el estímulo no se convierte en tejido.' ] },
      { regla: ['El músculo responde a series exigentes acumuladas,', 'no a una sesión destructiva.'] },
    ] },

  'ent-03-lenguaje-rutina': {
    sub: 'Las variables que definen tu entrenamiento.',
    pantallas: [
      { k: 'La idea', h: '«Duro» no describe nada.', p: 'Puede ser mucho peso, muchas series, poco descanso o mucha fatiga previa. Y cada uno produce un efecto distinto.' },
      { k: 'Carga e intensidad', h: 'Los kilos, y qué tan pesados son para ti.', p: 'La intensidad compara ese peso con tu máximo (1RM). Cuarenta kilos pueden ser el 50% de alguien y el 90% de otro.' },
      { k: 'Volumen y densidad', h: 'Cuánto trabajo, y en cuánto tiempo.', p: 'Volumen: series × repeticiones × peso. Densidad: el trabajo por unidad de tiempo, y la controlas con el descanso.' },
      { k: 'Tempo y rango', h: 'Cómo ejecutas la repetición.', p: 'El tempo es la velocidad de cada fase: excéntrica cuando el músculo se alarga, concéntrica cuando se acorta. El rango (ROM) es cuánto recorrido completas.' },
      { k: 'Cómo lo aplicas', lista: [
        'Tu rutina ya trae estas variables: lo valioso es reconocerlas, no calcularlas.',
        'Un entrenamiento estructurado mueve una variable a la vez.',
        'Si no puedes subir peso: más repeticiones, bajada más controlada o más rango.',
        'El descanso es una variable, no una pausa.' ] },
      { regla: ['«Duro» no es una variable.', 'Carga, volumen, densidad y tempo sí lo son.'] },
    ] },

  'ent-04-subir-peso': {
    sub: 'Y por qué no tiene que ser cada semana.',
    pantallas: [
      { k: 'La idea', h: 'Progresar no es subir kilos cada semana.', p: 'La mayoría de tus sesiones vas a mover el mismo peso que la vez anterior. Eso es lo que se espera de un proceso que funciona.' },
      { k: 'Antes del peso, la repetición', h: 'Rango entero, bajada controlada, sin impulso.', p: 'Si cada semana ejecutas distinto, tu registro deja de poder compararse consigo mismo.' },
      { k: 'El peso lo define el rango', n: '2–3', nl: 'repeticiones de margen', p: 'El peso correcto hace exigente tu rango dejando dos o tres de margen. Si te sobraban cinco, iba liviano; si no llegaste al mínimo, iba pesado.' },
      { k: 'Sube en escalones', pasos: [
        { t: 'Semana 1 · 40 kg', d: '9 · 10 · 8 repeticiones' },
        { t: 'Semana 2 · 40 kg', d: '10 · 11 · 9 repeticiones' },
        { t: 'Semana 3 · 40 kg', d: '12 · 12 · 12: cerraste el rango' },
        { t: 'Semana 4 · 42,5 kg', d: 'y solo ahí sube el peso' } ] },
      { k: 'Cómo lo aplicas', lista: [
        'Registra peso, repeticiones y margen. Sin registro no hay progresión, hay memoria.',
        'Repite el mismo peso mientras sigas sumando repeticiones.',
        'Si al subir pierdes rango o técnica, vuelve al peso anterior y suma una repetición.',
        'Tres semanas estancado: revisa sueño, comida y volumen antes de tocar la carga.' ] },
      { regla: ['Progresar es superar tu registro anterior,', 'aunque sea por una repetición.'] },
    ] },

  'ent-05-orden-sesion': {
    sub: 'Dónde gastas la fuerza que tienes disponible.',
    pantallas: [
      { k: 'La idea', h: 'Misma sesión, mismo esfuerzo, distinto resultado.', p: 'Tu capacidad de producir fuerza cae a lo largo del entrenamiento. El orden decide dónde la gastas.' },
      { k: 'Los compuestos van primero', h: 'Sentadilla, peso muerto, press, dominada, remo.', p: 'Mueven más carga y consumen más energía. Por eso son los que más pierden cuando llegan cansados.' },
      { k: 'El aislamiento previo', h: 'Cambia quién termina la serie.', p: 'Si fatigas el tríceps antes del press, la serie acaba por el tríceps y no por el pecho: el músculo objetivo se queda sin el trabajo duro.' },
      { k: 'De mayor a menor capacidad', pasos: [
        { t: 'Compuestos pesados', d: 'descanso de 2 a 3 minutos' },
        { t: 'Resto de compuestos', d: 'descanso de 90 a 120 segundos' },
        { t: 'Aislamiento', d: 'descanso de 60 a 90 segundos' } ] },
      { k: 'Cómo lo aplicas', lista: [
        'Sigue la rutina de arriba abajo: el orden ya es parte de la prescripción.',
        'Con poco tiempo, recorta series por el final, nunca por el principio.',
        'Si el equipo está ocupado, cambia por un movimiento del mismo tipo.',
        'Deja los descansos largos donde importan: en los compuestos.' ] },
      { regla: ['La rutina ya viene ordenada.', 'El orden es parte de la dosis.'] },
    ] },

  'ent-06-entiende-rutina': {
    sub: 'Las abreviaturas que sí necesitas ahora.',
    pantallas: [
      { k: 'RIR · repeticiones en reserva', h: 'Cuántas te sobraron.', p: 'Si paraste sintiendo que podías hacer dos más, eso es RIR 2. Es la que más vas a ver: describe el esfuerzo sin depender del peso.' },
      { k: 'RPE · qué tan duro se sintió', h: 'Una escala del 1 al 10.', p: 'Un 5 es cómodo, un 7 ya se siente exigente, un 9 es casi todo lo que tenías. Mide tu percepción, no el peso.' },
      { k: 'Tu zona de trabajo', n: '7–8', nl: 'de RPE', p: 'Ahí vas a pasar la mayor parte de tus series.' },
      { k: '1RM y ROM', h: 'Tu máximo y tu recorrido.', p: '1RM es el peso más alto que podrías levantar una vez con buena técnica; se estima desde tus series. ROM es cuánto recorrido completas en cada repetición.' },
      { k: 'Cómo lo aplicas', lista: [
        'Con entender RIR y RPE ya puedes leer tu rutina completa.',
        'Anota el RIR junto al peso y las repeticiones: es lo que me deja ajustar sin verte entrenar.',
        'En un ejercicio nuevo, empieza con 3 o 4 de margen aunque puedas más.',
        'Si dudas entre dos números, reporta el más alto.' ] },
      { regla: ['RIR cuenta lo que te sobró.', 'RPE cuenta cómo lo sentiste.'] },
    ] },

  'nut-07-cada-macro': {
    sub: 'Proteína, grasa y carbohidrato en gramos por kilo.',
    pantallas: [
      { k: 'La idea', h: 'Las calorías mueven tu peso. Los macros deciden de qué está hecho.', p: 'Cada uno cumple una función que los otros no cubren.' },
      { k: 'Proteína · con lo que se construye', n: '1,6–2,2 g', nl: 'por kilo de peso', p: 'Fabrica y repara músculo, tendón, piel, enzimas y hormonas. Y es el macro que más sacia.' },
      { k: 'Grasa · hormonas y membranas', n: '0,5–0,8 g', nl: 'por kilo, como mínimo', p: 'Entre el 20 y el 35% de tus calorías. Permite absorber las vitaminas A, D, E y K: no se recorta a cero.' },
      { k: 'Carbohidrato · el combustible', n: '3–5 g', nl: 'por kilo con entreno moderado', p: 'De 5 a 8 con mucho volumen. Es el macro que más nota tu rendimiento. Con él viene la fibra: 25 a 38 g al día.' },
      { k: 'Cómo lo aplicas', lista: [
        'Primero fija tu proteína por kilo: innegociable en cualquier fase.',
        'Después la grasa, en su mínimo: recortarla del todo sale caro.',
        'El carbohidrato ocupa lo que queda, según cuánto entrenas esa semana.',
        'Reparte la proteína en 3 a 5 comidas: el mismo total rinde más.' ] },
      { regla: ['Las calorías mueven el peso.', 'Los macros deciden de qué está hecho.'] },
    ] },

  'nut-08-grasa-y-musculo': {
    sub: 'Balance energético y composición corporal.',
    pantallas: [
      { k: 'La idea', h: 'El objetivo no es el peso. Es la composición.', p: 'Lo que comes contra lo que gastas mueve la báscula. Lo que importa es cuánto de ti es músculo y cuánto es grasa.' },
      { k: 'Recomposición · las dos a la vez', n: '±5%', nl: 'alrededor del mantenimiento', p: 'Subir músculo mientras baja la grasa. La báscula se mueve poco y el cuerpo cambia. Es el camino que se sostiene durante años.' },
      { k: 'Déficit · grasa que reducir', n: '−10 a −25%', nl: 'por debajo de tu gasto', p: 'Perdiendo 0,5 a 1% de tu peso por semana. Más agresivo aumenta lo que sale de músculo y baja tu rendimiento.' },
      { k: 'Superávit · ganar tamaño', n: '+5 a +15%', nl: 'por encima de tu gasto', p: 'Subiendo 0,25 a 0,5% por semana. Comer mucho más no acelera el músculo: acelera la grasa.' },
      { k: 'Cómo lo aplicas', lista: [
        'Elige una dirección y sostenla 8 a 12 semanas.',
        'Mide tendencia, no días: promedia la semana y compárala con la anterior.',
        'En recomposición la báscula engaña: mira medidas, fotos y tus cargas.',
        'Si en dos o tres semanas nada se mueve, el ajuste es de calorías o de pasos.' ] },
      { regla: ['El balance define hacia dónde vas.', 'El entrenamiento y la proteína, qué tejido se mueve.'] },
    ] },

  'nut-09-comer-sin-pesar': {
    sub: 'Dos métodos para los días sin registro.',
    pantallas: [
      { k: 'La idea', h: 'Restaurante, reunión, casa ajena.', p: 'Para esos días hay dos métodos que se complementan: uno reparte el plato, el otro mide las porciones.' },
      { k: 'Método 1 · el plato', pasos: [
        { t: '½ verduras y frutas', d: 'más verdura que fruta' },
        { t: '¼ granos', d: 'al menos la mitad integrales' },
        { t: '¼ proteína', d: 'te dice la proporción, no la cantidad' } ] },
      { k: 'Método 2 · tu mano', pasos: [
        { t: 'Palma', d: 'proteína, unos 20 a 30 g' },
        { t: 'Puño', d: 'verduras' },
        { t: 'Mano ahuecada', d: 'carbohidrato, otros 20 a 30 g' },
        { t: 'Pulgar', d: 'la grasa de acompañamiento' } ] },
      { k: 'Cuántas porciones', h: 'Hombres, 2 de cada. Mujeres, 1 de cada.', p: 'Por comida, sobre unas cuatro comidas al día. Es el punto de partida; después se ajusta por hambre y resultado.' },
      { k: 'Cómo lo aplicas', lista: [
        'Sirve en orden: verduras, proteína, y el carbohidrato en lo que queda.',
        'Si el plato ya viene servido, corrígelo, nunca quitando proteína.',
        'En restaurante, pide verduras aparte y salsas al lado.',
        'Si en dos semanas nada se mueve, quita una mano de carbohidrato o un pulgar de grasa.' ] },
      { regla: ['No sustituyen tu registro.', 'Son tu plan B, y funcionan.'] },
    ] },

  'bie-10-dormir-mejor': {
    sub: 'Las palancas que sí puedes mover hoy.',
    pantallas: [
      { k: 'La idea', n: '7–9 h', nl: 'la referencia', p: 'El sueño es cuando ocurre la adaptación de lo que entrenaste. Si hoy no llegas ahí, lo que mueve la aguja es mejorar poco a poco.' },
      { k: 'Si tu vida no da para eso', h: 'Si duermes seis, ganar treinta minutos ya es una mejora real.', p: 'Siete horas o más es un objetivo, no un requisito para funcionar.' },
      { k: 'La palanca más barata', h: 'La regularidad.', p: 'Acostarte y levantarte a horas parecidas mejora la calidad aunque no aumentes el total. Recuperar el domingo funciona solo a medias.' },
      { k: 'Por orden de facilidad', pasos: [
        { t: 'Horario estable', d: 'lo que más rinde y menos cuesta' },
        { t: 'Luz temprano', d: '10 minutos ya anclan tu reloj' },
        { t: 'Café con margen', d: '6 horas antes, o lo que puedas' },
        { t: 'Cuarto oscuro', d: 'suma, pero va de último' } ] },
      { k: 'Cómo lo aplicas', lista: [
        'Elige una sola palanca y sostenla dos semanas antes de sumar otra.',
        'Empieza por una hora fija para levantarte: arrastra al resto.',
        'Si duermes poco, súmale 20 o 30 minutos y sostenlo.',
        'Si duermes bien y aun así amaneces sin recuperar, consúltalo con un médico.' ] },
      { regla: ['No se trata de dormir perfecto.', 'Se trata de mejorar lo que ya tienes.'] },
    ] },

  'bie-11-muevete-fuera': {
    sub: 'El NEAT, y por qué se mide caminando.',
    pantallas: [
      { k: 'La idea', h: 'Lo que te mueves fuera del entreno tiene nombre: NEAT.', p: 'Caminar, cocinar, hacer diligencias, estar de pie, subir escaleras. Es el bloque más variable de tu día.' },
      { k: 'Por qué importa', h: 'Puede cambiar cientos de calorías al día.', p: 'Entre dos personas del mismo tamaño. Tu sesión de gimnasio es una porción pequeña del total; el NEAT es el bloque grande que mueves cada día.' },
      { k: 'Cómo se mide', h: 'Con pasos.', p: 'El NEAT completo no se puede contar. Los pasos sí, y funcionan como termómetro del resto: si suben, estás más activo en general.' },
      { k: 'Cuántos', n: '8.000–10.000', nl: 'pasos antes de los 60 · 6.000–8.000 después', p: 'Para cambiar tu composición importa tu propio promedio: si hoy caminas 4.000, subir a 6.000 cambia tu gasto de verdad.' },
      { k: 'Cómo lo aplicas', lista: [
        'Busca tu promedio de las últimas dos semanas antes de fijar una meta.',
        'Sube en escalones de 1.000 a 1.500 pasos y quédate ahí dos semanas.',
        'Tres caminatas cortas suman igual que una larga.',
        'Caminar 10 a 15 minutos después de comer mejora el manejo de la glucosa.' ] },
      { regla: ['No es cardio extra.', 'Es no quedarte quieto el resto del día.'] },
    ] },

};
