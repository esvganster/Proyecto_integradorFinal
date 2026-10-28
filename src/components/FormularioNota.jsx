import { useState } from 'react'

export default function FormularioNota({ notaInicial = '', onGuardar }) {
  const [nota, setNota] = useState(notaInicial)
  const [guardada, setGuardada] = useState(false)
  function enviar(evento) {
    evento.preventDefault()
    onGuardar(nota)
    setGuardada(true)
  }
  function cambiarNota(evento) {
    setNota(evento.target.value)
    setGuardada(false)
  }
  return (
    <form className="form-card" onSubmit={enviar}>
      <label htmlFor="nota">Nota personal
        <textarea id="nota" value={nota} onChange={cambiarNota} placeholder="Escribe una nota..." />
      </label>
      <button className="button small" type="submit">Guardar nota</button>
      {guardada && <small className="save-message" role="status">Nota guardada correctamente.</small>}
    </form>
  )
}
