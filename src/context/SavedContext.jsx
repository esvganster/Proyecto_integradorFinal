/* eslint-disable react-refresh/only-export-components */
import { createContext, useCallback, useContext, useMemo } from 'react'
import useLocalStorage from '../hooks/useLocalStorage.js'

const SavedContext = createContext(null)

export function SavedProvider({ children }) {
  const [guardados, setGuardados] = useLocalStorage('rif-guardados', [])
  const guardar = useCallback((personaje) => {
    setGuardados((actuales) => actuales.some((item) => item.id === personaje.id) ? actuales : [...actuales, { ...personaje, nota: '' }])
  }, [setGuardados])
  const quitar = useCallback((id) => setGuardados((actuales) => actuales.filter((item) => item.id !== id)), [setGuardados])
  const guardarNota = useCallback((id, nota) => setGuardados((actuales) => actuales.map((item) => item.id === id ? { ...item, nota } : item)), [setGuardados])
  const value = useMemo(() => ({ guardados, guardar, quitar, guardarNota }), [guardados, guardar, quitar, guardarNota])
  return <SavedContext.Provider value={value}>{children}</SavedContext.Provider>
}

export function useSaved() {
  return useContext(SavedContext)
}
