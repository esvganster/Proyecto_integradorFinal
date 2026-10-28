import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <main className="app-main">
      <section className="hero">
        <div><p className="eyebrow">Proyecto integrador · React</p><h1>Explora el universo de Rick and Morty.</h1><p>Busca personajes, revisa sus detalles y crea tu propia colección de favoritos con notas personales.</p><Link className="button" to="/personajes">Explorar personajes</Link></div>
        <div className="hero-art" aria-hidden="true">🛸</div>
      </section>
    </main>
  )
}
