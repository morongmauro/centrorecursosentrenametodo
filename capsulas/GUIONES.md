# Cápsulas informativas — guiones de contenido

Documento de trabajo para producir las láminas. El **listado técnico** vive
en `capsulas/capsulas.js` y el **cómo publicar** en `capsulas/README.md`;
esto es el *qué dice* cada cápsula.

## Dónde vive cada cosa

Todo en **`morongmauro/centrorecursosentrenametodo`**:

| Pieza | Ruta |
|---|---|
| La imagen de la cápsula | `capsulas/<archivo>.png` |
| La entrada que la publica | `capsulas/capsulas.js` |
| Cómo publicar (campos, formato) | `capsulas/README.md` |
| Los links de podcast | `podcast/podcasts.js` |

Publicar = **dos pasos**: subes la imagen a `capsulas/` y agregas su bloque a
`capsulas.js`. Nunca hay que abrir `index.html.html`.

> El `id` de cada cápsula es la llave del avance de lectura (local y en
> Supabase). **No lo cambies** una vez publicada.

---

## Las diez, en el orden en que ya están cargadas

| # | Categoría | Título | `id` | Archivo |
|---|---|---|---|---|
| 1 | Nutrición | Proteína: cuánta y cuándo | `nutricion-proteina` | `nutricion-proteina.png` |
| 2 | Nutrición | El plato balanceado, en 3 pasos | `nutricion-plato` | `nutricion-plato-balanceado.png` |
| 3 | Entrenamiento | Cómo elegir el peso y progresar | `entreno-sobrecarga` | `entrenamiento-elegir-peso.png` |
| 4 | Entrenamiento | El orden de los ejercicios importa | `entreno-orden` | `entrenamiento-orden-ejercicios.png` |
| 5 | Entrenamiento | RPE: entrena con percepción | `entreno-rpe` | `entrenamiento-rpe.png` |
| 6 | Entrenamiento | Configura la máquina antes de la serie | `entreno-maquinas` | `entrenamiento-configurar-maquinas.png` |
| 7 | Entrenamiento | Bandas, kettlebell y mancuernas | `entreno-herramientas` | `entrenamiento-herramientas.png` |
| 8 | Movilidad | Movilidad: para qué sirve de verdad | `movilidad-para-que` | `movilidad-para-que-sirve.png` |
| 9 | Hábitos | Dormir es entrenar | `habitos-sueno` | `habitos-dormir.png` |
| 10 | Hábitos | Pasos diarios: el cardio invisible | `habitos-pasos` | `habitos-pasos-diarios.png` |

**Orden de producción sugerido:** 1 → 3 → 9 → 5 → 8 → 6 → 2 → 7 → 10 → 4.
Primero las que más preguntas te ahorran (proteína, sobrecarga, sueño); el
orden de ejercicios va al final porque ya viene resuelto en la app.

Formato: **4:5 vertical, 1080–1440 px de ancho, < 600 KB**, y el titular debe
leerse **ya en la miniatura**.

---

## Plantilla común de lámina

Misma estructura en las diez, para que la lista se lea como una colección y
no como diez diseños sueltos:

```
┌───────────────────────────────┐
│  CATEGORÍA (versalitas)       │  ← Nutrición / Entrenamiento / Movilidad / Hábitos
│                               │
│  TITULAR                      │  ← 2–5 palabras, Bebas Neue
│  bajada de una línea          │  ← la promesa concreta
│                               │
│  ── bloque 1 ──               │  ← 3 bloques numerados,
│  ── bloque 2 ──               │     un dato + una frase cada uno
│  ── bloque 3 ──               │
│                               │
│  ▸ LA REGLA                   │  ← lo único que debe recordar
│                               │
│  entrenaconmetodo · Mauro M.  │
└───────────────────────────────┘
```

**Una idea por lámina**, máximo ~70 palabras, números grandes, nada de
párrafos. Paleta del centro: oliva `#8A9558`, oliva oscuro `#4A5238`, crema
`#F7F4ED`, grafito `#1F1F1F`.

> La `nota` de cada entrada en `capsulas.js` es el resumen que el cliente lee
> **antes** de abrir la lámina. Escríbela como lo que se lleva, no como el
> índice: “Cuántos gramos te tocan y cómo repartirlos”, no “Sobre la proteína”.

---

## 1 · Proteína: cuánta y cuándo

**Objetivo:** que deje de improvisar el macro que más le cuesta alcanzar.
**Le habla a:** quien registra en el Meal Tracker y siempre queda corto.

| Bloque | Contenido |
|---|---|
| Titular | **PROTEÍNA** · *cuánta y cuándo* |
| Bajada | Es el macro que más cuesta alcanzar y el que más protege tu músculo. |
| 1 · Cuánta | **1,6–2,2 g por kilo de peso al día.** Ej.: 70 kg → 110–155 g. Tu meta exacta la fija tu coach en la app. |
| 2 · Cuándo | **Repártela en 3–5 tomas de 25–40 g.** Toda junta en la cena no rinde igual. |
| 3 · De dónde | Huevo, pollo, carne magra, pescado, lácteos, atún, proteína en polvo, legumbres. **La que sostengas todos los días.** |
| La regla | *Si solo vas a cuidar un número, cuida este.* |

**Visual:** las comidas del día con la porción de proteína marcada.
**Qué NO decir:** que más proteína siempre es mejor; dosis de suplementos.

---

## 2 · El plato balanceado, en 3 pasos

**Objetivo:** darle una forma de servirse bien cuando no puede pesar ni registrar.
**Le habla a:** el que come fuera, en casa ajena o sin tiempo.

| Bloque | Contenido |
|---|---|
| Titular | **EL PLATO** · *balanceado en 3 pasos* |
| Bajada | Para los días en que no puedes pesar nada. |
| 1 · Mitad | **½ plato de vegetales.** Volumen y saciedad por muy pocas calorías. |
| 2 · Un cuarto | **¼ de proteína.** Del tamaño y grosor de tu palma. |
| 3 · Un cuarto | **¼ de carbohidrato.** Un puño cerrado. Grasa de acompañamiento: un pulgar. |
| La regla | *Sirve en ese orden y el plato se arma solo.* |

**Visual:** el círculo del plato dividido, con la mano como medida al lado.
**Qué NO decir:** que sustituye al registro — es el plan B, no el método.

---

## 3 · Cómo elegir el peso y progresar

**Objetivo:** darle el procedimiento completo —con qué peso empieza, cuándo
sube y cuánto— para que no dependa de preguntarte cada semana.
**Le habla a:** el que lleva meses con los mismos kilos, y el que sube por
impulso y pierde la técnica.
**No confundir con la de RPE:** aquella enseña el *lenguaje* (qué se siente
un 8); esta es el *procedimiento* (qué peso pongo hoy y cuándo lo cambio).

| Bloque | Contenido |
|---|---|
| Titular | **EL PESO** · *cómo elegirlo y cuándo subirlo* |
| Bajada | El peso correcto no es el que más pesa: es el que te deja cerrar el rango con buena técnica. |
| 1 · La primera vez | Elige un peso con el que llegues **al tope del rango dejando 2–3 repeticiones en reserva**. Si te sobran cinco, iba liviano; si no llegas al mínimo, iba pesado. **Anótalo.** |
| 2 · Cuándo subir | **Doble progresión:** primero suben las repeticiones dentro del rango; cuando cierras **el tope en todas las series** con 2 en reserva, sube el peso. |
| 3 · Cuánto subir | **El salto más pequeño disponible**: 2,5–5 kg abajo, 1–2,5 kg arriba. Las repeticiones bajarán: es normal, vuelves a escalar el rango. |
| La regla | *Progresar es superar tu registro anterior, aunque sea por una repetición.* |

**Visual:** dos semanas de la misma serie — las repeticiones llenando el
rango 8→12 y, al cerrarlo, el salto de peso que reinicia el ciclo.
**Qué NO decir:** porcentajes de 1RM ni periodización — eso lo pone la
programación, no el cliente.

---

## 4 · El orden de los ejercicios importa

**Objetivo:** que no llegue reventado a lo que de verdad mueve la aguja.
**Le habla a:** quien improvisa el orden o deja lo pesado para el final.

| Bloque | Contenido |
|---|---|
| Titular | **EL ORDEN** · *importa* |
| Bajada | Tu energía es limitada. Gástala donde más rinde. |
| 1 · Primero | **Lo técnico y lo pesado.** Sentadilla, peso muerto, press: con el sistema fresco. |
| 2 · Después | **Multiarticulares y accesorios.** Remo, jalón, zancada. |
| 3 · Al final | **Aislamiento y core.** Bíceps, gemelo, abdomen: fatigarlos antes te arruina lo demás. |
| La regla | *La rutina viene ordenada. Síguela de arriba abajo.* |

**Visual:** escalera descendente de 3 peldaños con el icono de cada tipo.
**Qué NO decir:** pre-fatiga ni técnicas avanzadas — es una cápsula de base.

---

## 5 · RPE: entrena con percepción

**Objetivo:** que sepa elegir el peso sin depender de que le digan el número.
**Le habla a:** el que se queda corto “por si acaso” y el que llega al fallo siempre.

| Bloque | Contenido |
|---|---|
| Titular | **RPE** · *entrena con percepción* |
| Bajada | Cuánto te queda en el tanque al terminar la serie. |
| 1 · La escala | **RPE 6** = te sobran 4 · **RPE 8** = te quedan 2 · **RPE 10** = no podías una más. |
| 2 · Dónde vivir | **La mayoría de tus series: RPE 7–8.** Ahí está el estímulo sin destrozarte. |
| 3 · Cómo usarlo | Si terminas y te sobraban 4 repeticiones, **sube el peso la próxima**. |
| La regla | *Dejar 1–2 repeticiones en reserva no es entrenar menos: es poder repetirlo mañana.* |

**Visual:** regla del 6 al 10 con la zona 7–8 resaltada en oliva.
**Qué NO decir:** que el fallo esté prohibido; matices por ejercicio.

---

## 6 · Configura la máquina antes de la serie

**Objetivo:** que deje de entrenar en una máquina ajustada para otra persona.
**Le habla a:** el que se sienta y empieza sin tocar nada.

| Bloque | Contenido |
|---|---|
| Titular | **LA MÁQUINA** · *ajústala antes* |
| Bajada | La máquina no se adapta sola. Treinta segundos cambian el ejercicio. |
| 1 · Altura | **Alinea tu articulación con el eje de la máquina**: la rodilla en extensiones, el hombro en el press. Si no coincide, el trabajo se va a otro sitio. |
| 2 · Apoyos | **Espalda pegada al respaldo, pies firmes**, y el rodillo o cinturón ajustado para que el cuerpo no se levante en la última repetición. |
| 3 · Recorrido | Rango **completo pero sin dolor**; usa los topes si los tiene. |
| La regla | *Anota tu número de asiento. La próxima vez tardas cinco segundos.* |

**Visual:** silueta de una máquina con tres marcas numeradas y una tarjetita
tipo “asiento 4 · respaldo 2”.
**Qué NO decir:** ajustes específicos de marcas concretas.

---

## 7 · Bandas, kettlebell y mancuernas: cuándo usar cada una

**Objetivo:** que sepa con qué resolver el día que no hay gym o no hay máquina libre.
**Le habla a:** el que entrena en casa, viaja, o tiene el rack ocupado.

| Bloque | Contenido |
|---|---|
| Titular | **TUS HERRAMIENTAS** · *cuándo usar cada una* |
| Bajada | No compiten. Cada una resuelve algo distinto. |
| 1 · Mancuernas | **La base.** Carga progresiva y trabajo lado a lado: sirven para casi todo y te dejan medir el progreso. |
| 2 · Bandas | **Activar y asistir.** Glúteo y hombro antes de entrenar, dominadas asistidas, y el entrenamiento del viaje. Ojo: cuesta medir cuánto pesan. |
| 3 · Kettlebell | **Bisagra y balístico.** Swing para cadera potente, goblet para sentadilla con buena postura. Técnica primero, carga después. |
| La regla | *La herramienta no entrena. Elige la que te deje progresar y medirlo.* |

**Visual:** tres columnas con el icono de cada herramienta: *para qué sí* /
*para qué no*.
**Qué NO decir:** que las bandas sustituyen el trabajo pesado.

---

## 8 · Movilidad: para qué sirve de verdad

**Objetivo:** sacar la movilidad del cajón de “estirar un poco” y darle un
para qué según el caso.
**Le habla a:** el que la salta por falta de tiempo y el que la hace sin saber por qué.

| Bloque | Contenido |
|---|---|
| Titular | **MOVILIDAD** · *para qué sirve* |
| Bajada | No es estirar por estirar. Tiene tres usos, y uno es el tuyo. |
| 1 · Preventiva | **Mantener el rango que ya tienes.** Va en el calentamiento, 5 minutos, todos los días de entreno. |
| 2 · Correctiva | **Recuperar lo que perdiste** o corregir una asimetría que te limita. Trabajo específico y diario, no una vez a la semana. |
| 3 · Rendimiento | **Más rango útil = mejor posición.** Mejor sentadilla, mejor press, más carga con seguridad. |
| La regla | *Movilidad es el rango que puedes controlar con fuerza. Si no lo controlas, es solo flexibilidad.* |

**Visual:** tres columnas —prevenir · corregir · rendir— con el momento de la
sesión en que entra cada una.
**Qué NO decir:** diagnósticos ni tratamiento de lesión. Si hay dolor, va a
consulta contigo o a fisioterapia.

---

## 9 · Dormir es entrenar

**Objetivo:** que trate el sueño como parte del plan, no como lo que sobra.
**Le habla a:** el que entrena bien, come bien y no avanza.

| Bloque | Contenido |
|---|---|
| Titular | **DORMIR** · *es entrenar* |
| Bajada | Lo que no recuperas de noche no lo compensas de día. |
| 1 · Cuánto | **7–9 horas.** Y a horas parecidas todos los días, fines de semana incluidos. |
| 2 · Qué se rompe | Menos fuerza y peor recuperación, **más hambre y más antojos** al día siguiente. |
| 3 · Tres palancas | Luz natural al despertar · **cafeína, nada 8 h antes de dormir** · cuarto oscuro y fresco. |
| La regla | *Una semana durmiendo mal se ve en tu registro antes que en el espejo.* |

**Visual:** franja de 24 h con el bloque de sueño y los cortes de cafeína y pantallas.
**Qué NO decir:** suplementos para dormir; promesas hormonales.

---

## 10 · Pasos diarios: el cardio invisible

**Objetivo:** mostrarle el gasto que ocurre fuera del gimnasio y que sí controla.
**Le habla a:** el que entrena 4 días y pasa los otros 7 sentado.

| Bloque | Contenido |
|---|---|
| Titular | **PASOS** · *el cardio invisible* |
| Bajada | Lo que te mueves fuera del gym pesa más de lo que crees. |
| 1 · El dato | Una hora de entrenamiento es **una fracción de tu gasto diario**. El resto lo pone el movimiento del día. |
| 2 · La meta | **Sube 1.000 pasos sobre tu promedio** y sostenlo dos semanas antes de volver a subir. |
| 3 · De dónde salen | Llamadas caminando · bajarte una parada antes · 10 min después de comer. |
| La regla | *No es cardio extra. Es no quedarte quieto el resto del día.* |

**Visual:** barra que compara “1 h de entreno” con “el resto del día”.
**Qué NO decir:** los 10.000 pasos como cifra mágica; calorías por paso.

---

## Checklist antes de subir cada cápsula

- [ ] 4:5 vertical, 1080–1440 px de ancho, menos de 600 KB
- [ ] El titular se lee en la miniatura, sin ampliar
- [ ] Máximo tres bloques + una regla de cierre
- [ ] Nombre de archivo exacto al de la tabla (minúsculas, sin tildes)
- [ ] El `id` de la entrada **no** se tocó
- [ ] La `nota` dice qué se lleva el cliente, no de qué trata
