export default function Buscador({ valor, onBuscar }) {
  return (
    <div className="search-box">
      <label htmlFor="buscar">Buscar personaje
        <input id="buscar" type="search" value={valor} onChange={(evento) => onBuscar(evento.target.value)} placeholder="Ej. Rick o Morty" />
      </label>
      <button className="button secondary" type="button" onClick={() => onBuscar('')}>Limpiar</button>
    </div>
  )
}
