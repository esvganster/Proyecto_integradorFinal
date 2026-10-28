import { NavLink } from 'react-router-dom'
import { useSaved } from '../context/SavedContext.jsx'
import { useTheme } from '../context/ThemeContext.jsx'

export default function Navbar() {
  const { tema, alternarTema } = useTheme()
  const { guardados } = useSaved()
  const enlaces = [['/', 'Inicio'], ['/personajes', 'Personajes'], ['/guardados', 'Guardados'], ['/acerca', 'Acerca']]
  return (
    <nav className="navbar">
      <NavLink className="brand" to="/">Rick Explorer</NavLink>
      <div className="nav-links">{enlaces.map(([ruta, texto]) => <NavLink key={ruta} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to={ruta}>{ruta === '/guardados' ? `${texto} (${guardados.length})` : texto}</NavLink>)}</div>
      <button className="theme-button" type="button" onClick={alternarTema}>{tema === 'claro' ? '🌙' : '☀️'} Tema</button>
    </nav>
  )
}
