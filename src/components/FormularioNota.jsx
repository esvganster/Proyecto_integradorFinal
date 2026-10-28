import { useState } from 'react'

export default function FormularioNota({ notaInicial = '', onGuardar }) {
  const [nota, setNota] = useState(notaInicial)
  function enviar(evento) {
    evento.preventDefault()
    onGuardar(nota)
  }
  return (
    <form className="form-card" onSubmit={enviar}>
      <label htmlFor="nota">Nota personal
        <textarea id="nota" value={nota} onChange={(evento) => setNota(evento.target.value)} placeholder="Escribe una nota..." />
      </label>
      <button className="button small" type="submit">Guardar nota</button>
    </form>
  )
}
