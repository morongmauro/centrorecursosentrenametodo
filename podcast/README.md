# Podcast recomendados

Los episodios de la segunda pestaña de *Cápsulas informativas*. Se cargan en
**`podcast/podcasts.js`** — un link por episodio, sin abrir `index.html.html`
y sin subir ningún archivo: la miniatura la sirve YouTube.

**Mientras la lista esté vacía, la pestaña “Podcast” no aparece.** La sección
se ve como siempre, solo con las infografías.

## Una entrada

```js
{ id:'sueno-dormir-mejor',
  cat:'Sueño y recuperación',
  title:'Herramientas para dormir mejor',
  show:'Huberman Lab',
  url:'https://www.youtube.com/watch?v=XXXXXXXXXXX',
  dur:'1h 20 min',
  nota:'La base de todo lo que hablamos de descanso: luz, horarios y temperatura.',
  tag:'Escucha los primeros 20 min',
  nuevo:true },
```

| campo | para qué sirve |
|---|---|
| `id` | llave del “visto”. **No la cambies** una vez publicado. |
| `title` | el título que pones tú, en español y corto. No tiene que ser el del video. |
| `url` | el link **tal cual lo copias**. |
| `cat` | encabezado de grupo. Si falta, agrupa en “Recomendados”. |
| `show` | nombre del podcast o del canal. |
| `dur` | duración, texto libre. Se pinta sobre la miniatura. |
| `nota` | **por qué lo recomiendas.** Es lo que hace que le den play. |
| `tag` | etiqueta corta al pie. |
| `nuevo` | `true` pinta la etiqueta “Nuevo”. |
| `sinEmbed` | `true` si el dueño del video no permite incrustarlo: abre YouTube. |
| `thumb` | imagen propia para la tarjeta (`podcast/mi-imagen.jpg`). |

## Qué links sirven

```
https://www.youtube.com/watch?v=XXXXXXXXXXX
https://youtu.be/XXXXXXXXXXX
https://www.youtube.com/live/XXXXXXXXXXX
https://www.youtube.com/shorts/XXXXXXXXXXX
https://www.youtube.com/playlist?list=PLYYYYYYYY
```

De YouTube se saca la miniatura sola y el episodio **se reproduce dentro del
centro** (`youtube-nocookie`: no deja cookies de seguimiento hasta que le dan
play). Da igual si el link trae `?si=` o `&t=120s`.

**Instagram, Spotify o Apple Podcasts** también valen: esas tarjetas abren la
app correspondiente en vez de reproducir aquí. Como no dan miniatura pública,
déjale una imagen en esta carpeta y apúntala en `thumb`.

## Criterio editorial

- **Pocos y buenos.** Seis a ocho episodios vivos; si crece, se archiva.
- La `nota` es tuya, no el resumen del episodio: por qué se lo mandas a él.
- Si el episodio dura dos horas, usa `tag` para decir qué parte escuchar.
- Prioriza lo que ya explicas en consulta: dormir, proteína, adherencia,
  alcohol, cardio. La cápsula lo resume; el podcast lo profundiza.

## Notas

- Los “vistos” se guardan local (`em_pod_seen`) y en Supabase con
  `source:'podcast'`, así el chulo verde sobrevive a otro teléfono.
- **No cuentan para el aro de progreso del Home**: ese aro mide el material
  del método (onboarding, guía y cápsulas); los podcast son recomendación,
  no tarea.
- Si acabas de subir un cambio y no lo ves, recarga forzando: el navegador
  guarda `podcasts.js` unos minutos.
