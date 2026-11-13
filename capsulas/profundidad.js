/* ═══════════════════════════════════════════════════════════════════════
   CÁPSULAS · LA CAPA DE COACH — lo que convierte la lectura en aprendizaje
   ═══════════════════════════════════════════════════════════════════════

   Se suma a cada cápsula de historias.js (no la reemplaza: todo su texto
   sigue saliendo). La lectura queda en cuatro momentos:

     1. Para qué te sirve   logro (lo que vas a poder hacer) y tesuena (una
                            situación en la que el cliente se reconoce).
     2. El concepto         las tarjetas de historias.js. Una tarjeta puede
                            calcular su número con el peso del cliente:
                            tuyo: { id de la pantalla → [min, máx] por kilo,
                            unidad, decimales }. Y `comida` la traduce a
                            alimentos reales.
     3. De entender a hacer criterio (el «depende de…» del coach), mito (el
                            error común), hoy (una sola acción, hoy mismo).
     4. Que quede          caso (una pregunta de situación, no de memoria),
                            pregunta (la de su coach: la respuesta le llega
                            al CRM) y sigue (la cápsula siguiente).

   En los textos, **así** se ve en negrita.
   ═══════════════════════════════════════════════════════════════════════ */

window.CAPSULAS_PROFUNDIDAD = {

  'ent-01-capacidades': {
    logro: ['Reconocer cuál de las cinco capacidades te está frenando.', 'Saber cuánto necesita cada una por semana.'],
    tesuena: { cita: '«Soy fuerte, pero me ahogo subiendo escaleras.»', p: 'No es falta de ganas: es una capacidad rezagada poniéndole techo a las demás.' },
    criterio: '**Si tienes más de 50 años,** la fuerza y la potencia van primero: son las que antes se pierden y las que más te protegen de una caída. **Si te lesionas seguido,** casi siempre lo que falta es movilidad o control, no más fuerza.',
    mito: { cree: 'Si estoy fuerte, lo demás viene solo.', real: 'La fuerza transfiere mucho, pero la movilidad y la resistencia se entrenan aparte o se quedan atrás.' },
    hoy: { t: '¿Cuál de las cinco sientes más floja?', p: 'Dale cinco minutos hoy: movilidad de cadera, una caminata rápida o unos saltos suaves. Lo que importa es empezar a mirarla.' },
    caso: { q: 'Carlos levanta bien, pero en la segunda serie ya está sin aire y tarda mucho en recuperarse. ¿Qué capacidad le pone el techo?', op: ['La fuerza', 'La resistencia', 'La coordinación'], ok: 1, por: 'Exacto: su recuperación entre series depende de la resistencia. Al mejorarla, entrena con más calidad todo lo demás.' },
    pregunta: '¿cuál de las cinco capacidades sientes que más te falta trabajar?',
    sigue: 'ent-02-crece-musculo',
  },

  'ent-02-crece-musculo': {
    logro: ['Saber cuánto trabajo necesita un músculo para crecer.', 'Distinguir una serie que cuenta de una que no.'],
    tesuena: { cita: '«Salgo destruido del gimnasio y aun así no veo cambios.»', p: 'El cansancio no es la señal. Lo que construye es la tensión que acumulas a lo largo de la semana.' },
    criterio: '**Si llevas menos de un año entrenando,** 10 series por músculo ya es mucho estímulo. **Si llevas años,** suele hacer falta acercarse a 15 o 20 y cuidar más la recuperación. **Si un músculo no crece,** antes de sumar series revisa que las que haces terminen cerca del fallo.',
    mito: { cree: 'Si no me duele al día siguiente, no sirvió.', real: 'Las agujetas miden lo nuevo que fue el ejercicio, no cuánto va a crecer el músculo.' },
    hoy: { t: 'Cuenta las series de un músculo en tu semana.', p: 'Elige el que más quieres mejorar y suma cuántas series le das entre todas tus sesiones. ¿Llega a diez?' },
    caso: { q: 'Laura hace 3 series de sentadilla una vez por semana, cómodas, terminando con 6 repeticiones de sobra. ¿Qué le falta?', op: ['Más peso, aunque pierda técnica', 'Más series a la semana y terminar más cerca del fallo', 'Cambiar de ejercicio'], ok: 1, por: 'Le falta volumen semanal y esfuerzo: tres series cómodas no alcanzan a ser estímulo.' },
    pregunta: '¿qué te sorprendió de cómo crece el músculo?',
    sigue: 'ent-04-subir-peso',
  },

  'ent-03-lenguaje-rutina': {
    logro: ['Leer tu rutina y entender qué te pide cada número.', 'Saber qué mover cuando te estancas.'],
    tesuena: { cita: '«Hoy entrené durísimo.»', p: '¿Durísimo cómo? Sin nombrar la variable no sabemos qué cambió ni qué repetir la próxima vez.' },
    criterio: '**Para ganar fuerza,** manda la carga. **Para ganar músculo,** manda el volumen cerca del fallo. **Si tienes poco tiempo,** acorta el descanso solo en los ejercicios pequeños: haces más trabajo sin quitarle calidad a los grandes.',
    mito: { cree: 'Descansar menos siempre es mejor: se suda más.', real: 'En los ejercicios pesados, descansar poco te quita repeticiones y baja el estímulo.' },
    hoy: { t: 'Mira el primer ejercicio de tu rutina de hoy.', p: 'Identifica sus variables: series, repeticiones, margen (RIR) y descanso. Eso exacto es lo que te pido cumplir.' },
    caso: { q: 'Llevas tres semanas con 40 kg en el press y no logras subir. ¿Qué mueves primero?', op: ['Subo a 45 kg de todas formas', 'Con 40 kg, sumo repeticiones o bajo más controlado', 'Cambio todas las variables a la vez'], ok: 1, por: 'Una variable a la vez: más repeticiones o más control con el mismo peso ya es progresar.' },
    pregunta: '¿hay algo de tu rutina que todavía no te quede claro?',
    sigue: 'ent-06-entiende-rutina',
  },

  'ent-04-subir-peso': {
    logro: ['Saber exactamente cuándo te toca subir el peso.', 'Progresar sin sacrificar la técnica.'],
    tesuena: { cita: '«Llevo dos semanas con el mismo peso; siento que no avanzo.»', p: 'Si estás sumando repeticiones o controlando mejor, sí avanzas. El peso es lo último en moverse.' },
    criterio: '**En los ejercicios grandes** (sentadilla, peso muerto, press), sube de 2,5 a 5 kg. **En los pequeños** (elevaciones laterales, curl), sube de 1 a 2 kg o suma repeticiones: ahí cualquier salto de peso es, en proporción, enorme.',
    mito: { cree: 'Si no subo kilos, me estanqué.', real: 'Una repetición más con el mismo peso ya es más trabajo que la semana pasada.' },
    hoy: { t: 'Anota tu registro en el primer ejercicio de hoy.', p: 'Peso, repeticiones de cada serie y cuántas te sobraron. La próxima vez, tu meta es superar una sola de esas cifras.' },
    caso: { q: 'Tu rango es de 8 a 12. Hoy hiciste 12, 12 y 12 con 30 kg y te sobraban dos en cada serie. ¿Qué haces la próxima sesión?', op: ['Subo a 32,5 kg', 'Me quedo en 30 kg', 'Subo a 40 kg'], ok: 0, por: 'Cerraste el tope del rango con margen: toca un escalón pequeño y volver a sumar repeticiones desde ahí.' },
    pregunta: 'con lo que leíste, ¿en qué ejercicio crees que ya te toca subir el peso?',
    sigue: 'ent-05-orden-sesion',
  },

  'ent-05-orden-sesion': {
    logro: ['Entender por qué tu rutina viene en ese orden.', 'Saber qué recortar cuando tienes poco tiempo.'],
    tesuena: { cita: '«Empiezo por lo que me gusta y dejo la sentadilla para el final.»', p: 'Así llegas al ejercicio que más resultado da con la fuerza ya gastada.' },
    criterio: '**Si un músculo está rezagado,** puede ir primero aunque sea un aislamiento: la prioridad manda. **Si una articulación está sensible,** un aislamiento ligero antes sirve de calentamiento específico. Fuera de esos casos, los compuestos van primero.',
    mito: { cree: 'El orden da igual mientras haga todos los ejercicios.', real: 'El mismo trabajo en otro orden cambia cuánta carga mueves y qué músculo termina la serie.' },
    hoy: { t: 'Antes de entrenar, mira tus dos primeros ejercicios.', p: 'Esos son los que hoy merecen tu mejor energía y tu descanso completo entre series.' },
    caso: { q: 'Te quedan 35 minutos y tu sesión tiene seis ejercicios. ¿Qué haces?', op: ['Hago completos los primeros y dejo los últimos', 'Hago los seis con la mitad de series cada uno', 'Empiezo por el aislamiento que más me gusta'], ok: 0, por: 'Se recorta por el final: los primeros son los que más resultado dan con la fuerza intacta.' },
    pregunta: '¿qué cambiarías en cómo haces tu sesión después de leerla?',
    sigue: 'ent-03-lenguaje-rutina',
  },

  'ent-06-entiende-rutina': {
    logro: ['Leer el RIR y el RPE de tu rutina sin dudar.', 'Reportar tu esfuerzo para que pueda ajustarte bien.'],
    tesuena: { cita: '«En la app dice RIR 2… ¿eso qué es?»', p: 'Es la forma de pedirte un esfuerzo exacto sin que yo tenga que saber cuánto pesas en cada ejercicio.' },
    criterio: '**Al empezar,** casi todos calculan que les queda menos de lo que les queda: por eso en un ejercicio nuevo dejo 3 o 4 de margen. **Con meses de práctica,** tu cálculo se afina y podemos trabajar más cerca del fallo con seguridad.',
    mito: { cree: 'Si llego al fallo en todas las series, progreso más.', real: 'Ir al fallo siempre suma fatiga sin sumar resultado: dejar 1 a 3 de margen rinde igual con menos costo.' },
    hoy: { t: 'En tu próxima serie, cuenta las que te sobraron.', p: 'Al terminar, pregúntate: ¿cuántas más podía hacer con buena técnica? Ese número es tu RIR.' },
    caso: { q: 'Terminaste la serie sintiendo que podías hacer una más, pero no dos. ¿Qué anotas?', op: ['RIR 1', 'RIR 3', 'RPE 5'], ok: 0, por: 'Te sobró una: RIR 1. En la escala de esfuerzo sería un 9.' },
    pregunta: '¿qué parte de tu rutina entiendes mejor ahora?',
    sigue: 'ent-04-subir-peso',
  },

  'nut-07-cada-macro': {
    logro: ['Calcular cuánta proteína, grasa y carbohidrato necesitas tú.', 'Armar un día de comida que los cumpla.'],
    tesuena: { cita: '«Como bien y entreno, pero mi cuerpo no cambia.»', p: 'Casi nunca es cuánto comes. Es de qué está hecho lo que comes.' },
    comp: [{ t: 'Calorías', v: 'cuánto pesas: sube o baja' }, { t: 'Macros', v: 'de qué: músculo o grasa', fuerte: true }],
    compPie: 'Dos personas pueden comer las mismas calorías y terminar con cuerpos distintos. La diferencia está en los macros.',
    tuyo: {
      1: { f: [1.6, 2.2], u: 'g de proteína al día' },
      2: { f: [0.5, 0.8], u: 'g de grasa al día' },
      3: { f: [3, 5], u: 'g de carbohidrato al día' },
    },
    comida: { en: 1, t: 'Cómo se ve en tu plato', items: [{ t: 'Pechuga · 150 g', d: '45 g de proteína' }, { t: '3 huevos', d: '18 g' }, { t: 'Yogur griego · 170 g', d: '17 g' }, { t: 'Atún · 1 lata', d: '26 g' }], pie: 'Suman 106 g. Si tu número es más alto, falta una porción más.' },
    criterio: '**Ve al tope del rango** si estás bajando grasa, entrenas mucho o tienes más de 50 años. **¿Más de 2,2 g por kilo?** No hace daño, pero le quita espacio al resto de tu comida.',
    mito: { cree: 'Más proteína, más músculo.', real: 'Pasado tu rango, lo que construye músculo es el entrenamiento, no más proteína.' },
    hoy: { t: 'Mira tu desayuno: ¿tiene 25 a 30 g de proteína?', p: 'Si no llega, súmale una porción: huevos, yogur griego o atún.' },
    caso: { q: 'Ana pesa 60 kg y quiere bajar grasa sin perder músculo. ¿Qué fija primero?', op: ['El carbohidrato', 'La proteína', 'La grasa'], ok: 1, por: 'Exacto: de 96 a 132 g al día. Es lo que cuida su músculo mientras baja.' },
    pregunta: '¿qué alimento con proteína te queda más fácil sumar en tu día?',
    sigue: 'nut-08-grasa-y-musculo',
  },

  'nut-08-grasa-y-musculo': {
    logro: ['Saber cuál de las tres direcciones te toca ahora.', 'Medir si funciona sin que la báscula te engañe.'],
    tesuena: { cita: '«Bajo un kilo, subo un kilo… la báscula me tiene loco.»', p: 'El peso de un día sube y baja con el agua, la sal y la comida del día anterior. La tendencia es la que habla.' },
    tuyo: {
      2: { f: [0.005, 0.01], u: 'kg por semana: tu ritmo sano de bajada', dec: 1 },
      3: { f: [0.0025, 0.005], u: 'kg por semana: tu ritmo sano de subida', dec: 2 },
    },
    criterio: '**Si estás empezando o vuelves después de una pausa,** la recomposición funciona muy bien: ganas músculo y pierdes grasa a la vez. **Si llevas años entrenando y ya estás delgado,** suele rendir más alternar fases de superávit y de déficit.',
    mito: { cree: 'Para perder grasa hay que comer lo menos posible.', real: 'Un déficit muy agresivo hace que una parte grande de lo que bajas salga de músculo, y tu rendimiento cae.' },
    hoy: { t: 'Pésate mañana en ayunas, después de ir al baño.', p: 'Hazlo tres o más días a la semana y compara el promedio de cada semana, no los días sueltos.' },
    caso: { q: 'Pedro pesa 80 kg y quiere bajar grasa. En cuatro semanas bajó 6 kg y se siente débil. ¿Qué pasa?', op: ['Va perfecto: entre más rápido, mejor', 'Va demasiado rápido: está perdiendo músculo', 'Debería pasar a superávit'], ok: 1, por: 'Su ritmo sano es de 0,4 a 0,8 kg por semana. A 1,5 kg semanales, buena parte sale de músculo.' },
    pregunta: '¿qué es lo más importante que te llevas para tu objetivo?',
    sigue: 'nut-09-comer-sin-pesar',
  },

  'nut-09-comer-sin-pesar': {
    logro: ['Armar un plato equilibrado en cualquier lugar, sin báscula.', 'Medir tus porciones con tu propia mano.'],
    tesuena: { cita: '«Cuando como fuera, no tengo idea de cuánto me sirvo.»', p: 'No necesitas pesar nada: tu plato y tu mano ya son una herramienta precisa.' },
    criterio: '**Si tu objetivo es bajar grasa,** empieza quitando una mano de carbohidrato o un pulgar de grasa en la cena. **Si entrenas mucho o tienes mucha hambre,** súmala en la comida de antes o de después de entrenar.',
    mito: { cree: 'Comer fuera arruina el plan.', real: 'Un plato bien armado en un restaurante cumple igual. Lo que lo arruina es comer sin estructura varias veces por semana.' },
    hoy: { t: 'En tu próxima comida, mira tu plato antes de empezar.', p: '¿La mitad es verdura? ¿Hay una palma de proteína? Corrige solo lo que falte.' },
    caso: { q: 'En un restaurante te sirven pasta con pollo y nada de verdura. ¿Qué ajustas?', op: ['Dejo el pollo', 'Pido una ensalada aparte y dejo parte de la pasta', 'No como'], ok: 1, por: 'Sumas la verdura que falta y bajas un poco el carbohidrato, sin tocar la proteína.' },
    pregunta: '¿qué idea de la cápsula vas a usar esta semana?',
    sigue: 'nut-07-cada-macro',
  },

  'bie-10-dormir-mejor': {
    logro: ['Elegir la palanca de sueño que más te sirve hoy.', 'Notar cómo tu descanso cambia tu entrenamiento.'],
    tesuena: { cita: '«Duermo seis horas y siento que es lo que hay.»', p: 'Puede ser. Pero media hora más, y a horas parecidas, ya cambia cómo entrenas y cuánta hambre tienes.' },
    criterio: '**Si amaneces cansado aunque duermas horas,** revisa la regularidad antes que el total. **Si roncas fuerte o te despiertas sin aire,** coméntalo con un médico: eso no se arregla con hábitos.',
    mito: { cree: 'El fin de semana recupero lo que no dormí.', real: 'Ayuda un poco, pero desordena tu reloj interno y el lunes amaneces peor.' },
    hoy: { t: 'Pon una alarma para acostarte, no solo para levantarte.', p: 'Calcula: tu hora de levantarte menos siete horas y media. Esa es tu hora de ir a la cama esta noche.' },
    caso: { q: 'Entre semana duermes de 12 a 6 y el sábado hasta las 11. ¿Qué cambias primero?', op: ['Levantarme a una hora parecida todos los días', 'Dormir más también el domingo', 'Tomar más café por la mañana'], ok: 0, por: 'La regularidad es la palanca más barata: arrastra todo lo demás.' },
    pregunta: '¿qué hábito de sueño vas a probar esta semana?',
    sigue: 'bie-11-muevete-fuera',
  },

  'bie-11-muevete-fuera': {
    logro: ['Saber cuántos pasos te tocan a ti.', 'Subirlos sin depender de más gimnasio.'],
    tesuena: { cita: '«Entreno una hora y paso el resto del día sentado.»', p: 'Esa hora suma, pero las otras quince deciden buena parte de lo que gastas al día.' },
    criterio: '**Si estás bajando grasa y te estancas,** antes de recortar comida revisa los pasos: suelen caer sin que lo notes. **Si tienes molestias de rodilla o cadera,** varias caminatas cortas rinden más que una larga.',
    mito: { cree: 'Si entreno fuerte, puedo estar quieto el resto del día.', real: 'El entrenamiento es una parte pequeña de tu gasto total; el movimiento del día pesa más.' },
    hoy: { t: 'Mira tu promedio de pasos de la última semana.', p: 'Está en la app de salud de tu teléfono. Tu meta de esta semana es ese número más mil.' },
    caso: { q: 'Tu promedio es de 4.500 pasos. ¿Cuál es una meta inteligente para estas dos semanas?', op: ['10.000 desde mañana', 'Entre 5.500 y 6.000', 'Quedarme igual'], ok: 1, por: 'Un escalón de 1.000 a 1.500 pasos se sostiene; un salto grande se abandona.' },
    pregunta: '¿cómo vas a sumar movimiento fuera del gimnasio esta semana?',
    sigue: 'bie-10-dormir-mejor',
  },

};
