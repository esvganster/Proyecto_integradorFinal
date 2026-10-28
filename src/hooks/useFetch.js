import { useEffect, useState } from 'react'

export default function useFetch(url, transformar = (valor) => valor) {
  const [datos, setDatos] = useState(null)
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)
  useEffect(() => {
    let cancelado = false
    async function cargar() {
      try {
        setCargando(true); setError(null)
        const respuesta = await fetch(url)
        if (!respuesta.ok) throw new Error('No se pudieron cargar los datos.')
        const resultado = await respuesta.json()
        if (!cancelado) setDatos(transformar(resultado))
      } catch (err) {
        if (!cancelado) setError(err.message)
      } finally {
        if (!cancelado) setCargando(false)
      }
    }
    cargar()
    return () => { cancelado = true }
  }, [url, transformar])
  return { datos, cargando, error }
}
