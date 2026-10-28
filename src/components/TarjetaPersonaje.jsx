import { memo } from 'react'
import { Link } from 'react-router-dom'
import { useSaved } from '../context/SavedContext.jsx'

function TarjetaPersonaje({ personaje }) {
  const { guardados, guardar, quitar } = useSaved()
  const guardado = guardados.some((item) => item.id === personaje.id)
  return (
    <article className="card">
      <img className="character-image" src={personaje.imagen} alt={personaje.nombre} />
      <h2>{personaje.nombre}</h2>
      <p>{personaje.estado} · {personaje.especie}</p>
      <p>Origen: {personaje.origen}</p>
      <div className="card-actions">
        <Link className="button small" to={`/personajes/${personaje.id}`}>Ver detalle</Link>
        <button className={guardado ? 'favorite active' : 'favorite'} type="button" onClick={() => guardado ? quitar(personaje.id) : guardar(personaje)} aria-label={guardado ? 'Quitar de guardados' : 'Guardar personaje'}>{guardado ? '★' : '☆'}</button>
      </div>
    </article>
  )
}

export default memo(TarjetaPersonaje)
