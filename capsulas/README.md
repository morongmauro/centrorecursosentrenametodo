# Cápsulas informativas

Todo lo de una cápsula vive en esta carpeta: **la imagen y su entrada**.
No hay que abrir `index.html.html` para publicar.

## Cómo publicar una cápsula

1. Deja la infografía aquí, en `capsulas/`.
2. Abre **`capsulas/capsulas.js`** y agrega su bloque, junto a las de su
   misma categoría:

   ```js
   { id:'nutricion-fibra',
     cat:'Nutrición',
     title:'Fibra: la que casi nadie alcanza',
     file:'capsulas/nutricion-fibra.png',
     nota:'Cuánta te falta al día y de dónde sacarla sin cambiar tu menú.',
     tag:'La que casi nadie alcanza',
     nuevo:true },
   ```

3. Listo. El orden del archivo es el orden de la lista, y las cápsulas se
   agrupan por `cat` (categorías consecutivas quedan bajo un mismo
   encabezado, así que mantén juntas las de la misma categoría).

| campo   | para qué sirve |
|---------|----------------|
| `id`    | llave del avance de lectura. **No la cambies** una vez publicada: si la cambias, quien ya la vio la verá como pendiente otra vez. |
| `cat`   | encabezado de grupo (`Nutrición`, `Entrenamiento`, `Movilidad`, `Hábitos`…). |
| `title` | título de la tarjeta y pie del visor. |
| `file`  | ruta de la imagen desde la raíz del repo (`capsulas/loquesea.png`). |
| `nota`  | **de qué va la lámina**, en una o dos líneas. Es lo que se lee en la tarjeta antes de abrirla. |
| `tag`   | etiqueta corta al pie. Opcional. |
| `nuevo` | `true` pinta la etiqueta “Nuevo” (desaparece sola cuando el cliente la abre). |

> Si acabas de subir un cambio y no lo ves, recarga forzando: el navegador
> guarda `capsulas.js` unos minutos.

## Formato de la imagen

- **Proporción vertical, 4:5** — es la que usa la tarjeta. Otras
  proporciones funcionan, pero recorta por el centro.
- **Ancho 1080–1440 px**: nítida a pantalla completa en móvil sin inflar la
  descarga.
- **PNG** si la infografía tiene texto o áreas planas (se ve más limpia);
  **JPG de calidad alta** si es sobre todo fotografía.
- Menos de **600 KB por imagen**. Se cargan con `loading="lazy"`, pero la
  pantalla muestra varias a la vez.
- El titular debe leerse **ya en la miniatura**: si solo se entiende
  ampliada, la lista se ve muda.

## Nombres de archivo

`categoria-tema.png`, en minúsculas y sin tildes ni espacios:

```
nutricion-proteina.png
entrenamiento-rpe.png
movilidad-para-que-sirve.png
habitos-dormir.png
```

## Si una imagen todavía no existe

La cápsula sigue apareciendo con el marco **“Infografía en camino”** en vez
de una imagen rota — así puedes dejar la entrada preparada antes de tener el
diseño listo. Es justo como se ven ahora las diez de `capsulas.js`.

## El guion de cada cápsula

Los esquemas de contenido (qué dice cada lámina, bloque por bloque) están en
**`CAPSULAS.md`**, en la raíz del repo.
