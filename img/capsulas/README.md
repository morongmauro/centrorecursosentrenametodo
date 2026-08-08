# Imágenes del centro de recursos

Todas las imágenes van en esta carpeta (`img/`), **salvo las cápsulas**, que
tienen la suya (`img/capsulas/` — ver el README de ahí).

El nombre del archivo importa: el código busca exactamente ese nombre. Si un
archivo no existe, la portada se muestra sin foto en vez de romperse.

## Portadas (hero)

Solo estas cinco pantallas llevan foto de portada:

| Archivo | Dónde sale | Estado |
|---|---|---|
| `hero-inicio.png` | **Home** del centro | **Falta.** Mientras no exista se usa `hero-home.png` |
| `hero-capsulas.png` | Subpágina **Cápsulas informativas** | Ya está |
| `hero-guia.png` | Portada de la **Guía de alimentación** | Ya está |
| `hero-faq.png` | Subpágina **Preguntas frecuentes** | **Falta.** Sin ella la portada sale en grafito, sin foto |
| `hero-home.png` | Portada del **Onboarding** (el índice de los 4 pasos) | Ya está |

Las **subsecciones del onboarding** (Cómo funciona el programa, Cómo funciona
la app, Meal Tracking, Tu Journey) **no llevan foto**: son lectura, y una
portada fotográfica en cada una distrae del texto. `hero-programa.png` quedó
sin uso — puedes borrarlo.

### Cómo deben ser

- **Vertical o cuadrada.** La portada mide unos 390 × 390 px en pantalla y
  recorta **por el centro**: el sujeto tiene que estar centrado, no arriba
  ni en una esquina.
- **Ancho mínimo 1200 px.**
- **La mitad de abajo se desvanece** hacia el color de la página. Todo lo
  importante de la foto debe estar en el **tercio superior**; lo de abajo
  no se va a ver.
- **Sin texto dentro de la imagen** — encima va el título.
- Que **no sean parecidas entre sí**: hoy hay dos de gimnasio y se
  confunden. Una por pantalla, cada una con su tema.

### Qué poner en las dos que faltan

- **`hero-faq.png`** — una toma tuya **explicando**: hablando a cámara,
  corrigiendo a alguien, señalando algo. Es la sección donde el cliente te
  pregunta a ti, y ninguna otra portada tiene tu cara. Alternativa: cenital
  de cuaderno o tablero con anotaciones.
- **`hero-inicio.png`** — la cara del centro. Algo que hable de *método* más
  que de esfuerzo: material ordenado, un plano amplio y calmado, algo que se
  distinga de la foto de gimnasio que ya usa el onboarding.

## Capturas del tutorial de la app

Se usan dentro de "Cómo funciona la app". No son portadas y no llevan
tratamiento: se ven completas.

```
app-tutorial-01-rutina-del-dia.png
app-tutorial-02-ejecucion-videos.png
app-tutorial-03-galeria-workouts.png
app-tutorial-04-meta-nutricional.png
app-tutorial-05-galeria-recetas.png
app-tutorial-06-fotos-progreso.png
```

## Otras

- `kettlebell.png` — foto de producto de la pantalla de acceso (PNG con
  fondo transparente).

## Peso de los archivos

Las portadas actuales pesan entre 2,8 MB y 6,9 MB cada una: unos 19 MB en
total. En datos móviles el hero tarda varios segundos en aparecer.

Exportadas como **JPG de calidad 80 (o WebP) a 1200 px de ancho** quedan en
**150–300 KB** sin diferencia visible en un teléfono. Si cambias la
extensión, hay que actualizar el nombre en el código.
