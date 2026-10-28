import { Link, useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch.js'
import { adaptar } from '../utils/adaptar.js'

export default function CharacterDetailPage() {
  const { id } = useParams()
  const { datos, cargando, error } = useFetch(`https://rickandmortyapi.com/api/character/${id}`, adaptar)
  if (cargando) return <main className="app-main"><div className="loading">Cargando detalle...</div></main>
  if (error) return <main className="app-main"><div className="error-box">No se encontró este personaje.</div></main>
  return (
    <main className="app-main">
      <Link className="button secondary small" to="/personajes">← Volver</Link>
      <section className="detail" style={{ marginTop: 24 }}>
        <img className="detail-image" src={datos.imagen} alt={datos.nombre} />
        <div><p className="eyebrow">Detalle del personaje</p><h1>{datos.nombre}</h1><div className="info-card"><p><strong>Estado:</strong> {datos.estado}</p><p><strong>Especie:</strong> {datos.especie}</p><p><strong>Género:</strong> {datos.genero}</p><p><strong>Origen:</strong> {datos.origen}</p></div></div>
      </section>
    </main>
  )
}
