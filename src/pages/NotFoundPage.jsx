import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return <main className="app-main"><div className="empty"><h1>Página no encontrada</h1><p>La dirección que visitaste no existe.</p><Link className="button" to="/">Volver al inicio</Link></div></main>
}
