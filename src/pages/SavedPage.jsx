import { Link } from 'react-router-dom'
import FormularioNota from '../components/FormularioNota.jsx'
import { useSaved } from '../context/SavedContext.jsx'

export default function SavedPage() {
  const { guardados, quitar, guardarNota } = useSaved()
  return (
    <main className="app-main">
      <div className="page-heading"><p className="eyebrow">Tu colección</p><h1>Mis guardados</h1><p>Agrega una nota personal a cada personaje.</p></div>
      {guardados.length === 0 ? <div className="empty">Todavía no tienes personajes guardados. <Link to="/personajes">Explorar personajes</Link></div> : guardados.map((personaje) => (
        <article className="card saved-row" key={personaje.id}>
          <img src={personaje.imagen} alt={personaje.nombre} />
          <div><h2>{personaje.nombre}</h2><p>{personaje.especie} · {personaje.estado}</p><FormularioNota notaInicial={personaje.nota} onGuardar={(nota) => guardarNota(personaje.id, nota)} /><button className="button danger small" type="button" onClick={() => quitar(personaje.id)}>Eliminar</button></div>
        </article>
      ))}
    </main>
  )
}
