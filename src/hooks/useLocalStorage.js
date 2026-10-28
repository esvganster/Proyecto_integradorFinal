import { useCallback, useEffect, useState } from 'react'

export default function useLocalStorage(clave, valorInicial) {
  const [valor, setValor] = useState(() => {
    const guardado = localStorage.getItem(clave)
    if (!guardado) return valorInicial
    try { return JSON.parse(guardado) } catch { return valorInicial }
  })
  useEffect(() => { localStorage.setItem(clave, JSON.stringify(valor)) }, [clave, valor])
  const actualizar = useCallback((siguiente) => setValor((actual) => typeof siguiente === 'function' ? siguiente(actual) : siguiente), [])
  return [valor, actualizar]
}
