# Rick Explorer · Proyecto integrador final

Dashboard de personajes de Rick and Morty creado con React, JavaScript y Vite. Permite consultar la API pública, buscar personajes, ver detalles, guardar favoritos con notas y cambiar el tema visual.

## Ejecutar

```powershell
cd C:\Users\santo\Documents\talending_React\Proyecto_integradorFinal
npm install
npm run dev
```

Abre la dirección que muestre Vite, normalmente `http://localhost:5173`.

## Rutas

- `/`: inicio.
- `/personajes`: lista, búsqueda y guardados.
- `/personajes/:id`: detalle dinámico.
- `/guardados`: personajes guardados y notas.
- `/acerca`: información del proyecto.
- Cualquier otra dirección muestra la página 404.

## Estructura

- `components/`: piezas visuales reutilizables.
- `pages/`: vistas con estado y lógica.
- `context/`: tema y personajes guardados.
- `hooks/`: petición, persistencia y debounce.
- `utils/`: URL y adaptación de datos de la API.

## Comprobar

```powershell
npm run lint
npm run build
```

La API utilizada es `https://rickandmortyapi.com/api/character`.
