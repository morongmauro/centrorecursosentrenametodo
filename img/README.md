# Imágenes del centro de recursos

El nombre del archivo importa: el código busca exactamente ese nombre. Si un
archivo no existe, la sección se muestra sin foto en vez de romperse.

Son **16 imágenes** en total. Estado a día de hoy: 5 puestas, 11 pendientes.

---

## 1. Portadas (hero) → carpeta `img/`

| Sección | Archivo | Estado |
|---|---|---|
| **Home** del centro | `hero-inicio.png` | ⬜ falta — mientras tanto cae a `hero-home.png` |
| **Onboarding** (índice de 4 pasos) | `hero-home.png` | ✅ |
| **Cápsulas informativas** | `hero-capsulas.png` | ✅ |
| **Guía de alimentación** | `hero-guia.png` | ✅ |
| **Preguntas frecuentes** | `hero-faq.png` | ⬜ falta |

**No llevan foto:** las tres secciones del onboarding (Cómo funciona el
programa · Cómo funciona la app de entrenamiento · Tu Journey) y la guía
rápida. Son lectura, y una portada fotográfica distraía del texto.

> `hero-programa.png` quedó **sin uso** desde que esas secciones perdieron la
> foto. Se puede borrar.

### Cómo deben ser

- **Vertical o cuadrada.** Se muestran a unos 390 × 250 px y recortan **por el
  centro**: el sujeto tiene que estar centrado, no arriba ni en una esquina.
- **Ancho mínimo 1200 px.**
- **La mitad de abajo se desvanece** hacia el color de la página. Todo lo
  importante debe estar en el **tercio superior**.
- **Sin texto dentro** — encima va el título.
- Que **no se parezcan entre sí**. Una por sección, cada una con su tema.

### Qué poner en las dos que faltan

- **`hero-faq.png`** — una toma tuya **explicando**: hablando a cámara,
  corrigiendo a alguien, señalando algo. Es la sección donde el cliente te
  pregunta a ti, y ninguna otra portada tiene tu cara. Alternativa: cenital de
  cuaderno o tablero con anotaciones.
- **`hero-inicio.png`** — la cara del centro. Algo que hable de *método* más
  que de esfuerzo, y que se distinga de la foto de gimnasio que ya usa el
  onboarding.

---

## 2. Cápsulas informativas → carpeta `img/capsulas/`

Las seis están pendientes. Sin el archivo, la tarjeta muestra el marco
"Infografía en camino".

| Cápsula | Archivo |
|---|---|
| Proteína: cuánta y cuándo | `nutricion-proteina.png` |
| El plato balanceado, en 3 pasos | `nutricion-plato-balanceado.png` |
| El orden de los ejercicios importa | `entrenamiento-orden-ejercicios.png` |
| RPE: entrena con percepción | `entrenamiento-rpe.png` |
| Dormir es entrenar | `habitos-dormir.png` |
| Pasos diarios: el cardio invisible | `habitos-pasos-diarios.png` |

Proporción **4:5 vertical**, 1080–1440 px de ancho, menos de 600 KB. El
titular debe leerse **ya en la miniatura**: si solo se entiende ampliada, la
rejilla se ve muda.

Para publicar una cápsula nueva: suelta la imagen aquí y agrega su entrada al
array `CAPSULAS` en `index.html.html` (busca `var CAPSULAS = [`). El `id` de
cada cápsula es la clave del avance de lectura — **no lo cambies** una vez
publicada, o quien ya la vio la verá como pendiente otra vez.

---

## 3. Guía "Cómo usar el Meal Tracker" → carpeta `img/`

Capturas de pantalla del teléfono, **verticales, sin recortar**. Las cinco
están pendientes; si falta una, esa figura desaparece sola y la slide se lee
igual.

| Slide | Archivo | Qué capturar |
|---|---|---|
| Qué hay en cada pestaña | `mt-01-hoy.png` | La pantalla Hoy con los anillos y "Tus herramientas" |
| Qué hay en cada pestaña | `mt-02-chat.png` | El chat registrando una comida |
| Registra como hablas | `mt-03-registro.png` | El desglose de una comida con calorías y macros |
| Ajusta lo que haga falta | `mt-04-desempeno.png` | Mi semana: las gráficas de adherencia |
| Ayuda con las proporciones | `mt-05-proporciones.png` | La respuesta con los gramos calculados |

---

## 4. Tutorial de la app de entrenamiento → carpeta `img/`

Van dentro de "Cómo funciona la app". No son portadas: se ven completas, sin
tratamiento.

| Archivo | Estado |
|---|---|
| `app-tutorial-01-rutina-del-dia.png` | ✅ en uso |
| `app-tutorial-02-ejecucion-videos.png` | ✅ en uso |
| `app-tutorial-03-galeria-workouts.png` | ✅ en uso |
| `app-tutorial-06-fotos-progreso.png` | ✅ en uso |
| `app-tutorial-04-meta-nutricional.png` | ⚠️ **existe pero nadie lo llama** |
| `app-tutorial-05-galeria-recetas.png` | ⚠️ **existe pero nadie lo llama** |

Los dos últimos están en el repo pero el código no los referencia: nadie los
ve. O se borran, o se decide en qué paso del tutorial entran.

---

## 5. Otras

- `kettlebell.png` — foto de producto de la pantalla de acceso (PNG con fondo
  transparente). No se toca.

---

## Peso de los archivos

Las portadas actuales pesan entre 2,8 MB y 6,9 MB cada una: unos **19 MB** en
total. En datos móviles el hero tarda varios segundos en aparecer.

Exportadas como **JPG calidad 80 (o WebP) a 1200 px de ancho** quedan en
**150–300 KB** sin diferencia visible en un teléfono. Si cambias la extensión,
hay que actualizar el nombre en el código.
