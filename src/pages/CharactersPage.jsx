import { useMemo, useState } from 'react'
import Buscador from '../components/Buscador.jsx'
import ListaPersonajes from '../components/ListaPersonajes.jsx'
import useDebounce from '../hooks/useDebounce.js'
import useFetch from '../hooks/useFetch.js'
import { adaptar } from '../utils/adaptar.js'
import { API_CHARACTERS } from '../utils/constants.js'

const adaptarRespuesta = (respuesta) => respuesta.results.map(adaptar)

export default function CharactersPage() {
  const { datos, cargando, error } = useFetch(API_CHARACTERS, adaptarRespuesta)
  const [busqueda, setBusqueda] = useState('')
  const termino = useDebounce(busqueda)
  const personajes = useMemo(() => {
    if (!datos) return []
    const texto = termino.trim().toLowerCase()
    return texto ? datos.filter((personaje) => personaje.nombre.toLowerCase().includes(texto)) : datos
  }, [datos, termino])
  if (cargando) return <main className="app-main"><div className="loading">Cargando personajes...</div></main>
  if (error) return <main className="app-main"><div className="error-box">{error}</div></main>
  return (
    <main className="app-main">
      <div className="page-heading"><p className="eyebrow">Colección</p><h1>Personajes</h1><p>Encuentra a tus personajes favoritos.</p></div>
      <Buscador valor={busqueda} onBuscar={setBusqueda} />
      <p className="result-count">{personajes.length} resultados</p>
      {personajes.length === 0 ? <div className="empty">Sin resultados</div> : <ListaPersonajes personajes={personajes} />}
    </main>
  )
}
