import { useEffect, useState } from 'react'

export default function useDebounce(valor, retraso = 400) {
  const [estable, setEstable] = useState(valor)
  useEffect(() => {
    const temporizador = setTimeout(() => setEstable(valor), retraso)
    return () => clearTimeout(temporizador)
  }, [valor, retraso])
  return estable
}
