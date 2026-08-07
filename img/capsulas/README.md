# Cápsulas informativas — imágenes

Cada cápsula del centro de recursos es **una sola imagen** (la infografía).
La miniatura de la rejilla y la versión ampliada del visor son la MISMA
imagen: el navegador la reutiliza desde caché al abrir el zoom, así que no
hay que exportar dos versiones.

## Cómo publicar una cápsula nueva

1. Exporta la infografía y déjala en esta carpeta.
2. Abre `index.html.html`, busca `var CAPSULAS = [` y agrega una entrada:

   ```js
   { id:'nutricion-fibra',
     cat:'Nutrición',
     title:'Fibra: la que casi nadie alcanza',
     file:'img/capsulas/nutricion-fibra.png',
     nuevo:true },
   ```

3. Listo. El orden del array es el orden de la rejilla, y las cápsulas se
   agrupan automáticamente por `cat` (categorías consecutivas quedan bajo
   un mismo encabezado, así que mantén juntas las de la misma categoría).

| campo   | para qué sirve                                              |
|---------|-------------------------------------------------------------|
| `id`    | clave del avance de lectura. **No la cambies** una vez publicada: si la cambias, quien ya la vio la verá como pendiente otra vez. |
| `cat`   | encabezado de grupo en la rejilla (`Nutrición`, `Entrenamiento`, `Hábitos`…). |
| `title` | título bajo la miniatura y pie en el visor.                  |
| `file`  | ruta de la imagen desde la raíz del repo.                    |
| `nuevo` | `true` pinta la etiqueta "Nuevo" (desaparece sola cuando el cliente la abre). |

## Formato recomendado

- **Proporción vertical**, cercana a 4:5 — es la que usa la miniatura. Otras
  proporciones funcionan, pero la miniatura recorta por el centro.
- **Ancho 1080–1440 px**: suficiente para verse nítida a pantalla completa
  en móvil sin inflar la descarga.
- **PNG** si la infografía tiene texto o áreas planas (se ve más limpia);
  **JPG de calidad alta** si es sobre todo fotografía.
- Apunta a **menos de 600 KB por imagen**. Las cápsulas se cargan con
  `loading="lazy"`, pero la pantalla muestra varias a la vez.
- El texto de la infografía debe leerse **en la miniatura al menos a nivel
  de titular**: si sólo se entiende ampliada, la rejilla se ve muda.

## Nombres de archivo

`categoria-tema.png`, en minúsculas y sin tildes ni espacios:

```
nutricion-proteina.png
entrenamiento-rpe.png
habitos-dormir.png
```

## Si una imagen todavía no existe

La cápsula sigue apareciendo en la rejilla con el marco "Infografía en
camino" en vez de una imagen rota — así puedes dejar la entrada preparada
en `CAPSULAS` antes de tener el diseño listo.
