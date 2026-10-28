import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'
import { SavedProvider } from './context/SavedContext.jsx'
import HomePage from './pages/HomePage.jsx'
import CharactersPage from './pages/CharactersPage.jsx'
import CharacterDetailPage from './pages/CharacterDetailPage.jsx'
import SavedPage from './pages/SavedPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import './App.css'

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <SavedProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/personajes" element={<CharactersPage />} />
            <Route path="/personajes/:id" element={<CharacterDetailPage />} />
            <Route path="/guardados" element={<SavedPage />} />
            <Route path="/acerca" element={<AboutPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </SavedProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}
