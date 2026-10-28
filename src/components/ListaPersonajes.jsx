import TarjetaPersonaje from './TarjetaPersonaje.jsx'

export default function ListaPersonajes({ personajes }) {
  return <section className="card-grid" aria-label="Personajes">{personajes.map((personaje) => <TarjetaPersonaje key={personaje.id} personaje={personaje} />)}</section>
}
