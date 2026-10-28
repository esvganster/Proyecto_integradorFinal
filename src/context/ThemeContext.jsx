/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useMemo } from 'react'
import useLocalStorage from '../hooks/useLocalStorage.js'

const ThemeContext = createContext(null)

export function ThemeProvider({ children }) {
  const [tema, setTema] = useLocalStorage('rif-tema', 'claro')
  useEffect(() => { document.documentElement.dataset.theme = tema }, [tema])
  const value = useMemo(() => ({ tema, alternarTema: () => setTema((actual) => actual === 'claro' ? 'oscuro' : 'claro') }), [tema, setTema])
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  return useContext(ThemeContext)
}
