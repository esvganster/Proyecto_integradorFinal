export default function AboutPage() {
  return (
    <main className="app-main">
      <div className="page-heading"><p className="eyebrow">Información</p><h1>Acerca del proyecto</h1></div>
      <div className="two-column"><section className="info-card"><h2>Tecnologías</h2><ul className="list-clean"><li>React y Vite</li><li>React Router</li><li>Rick and Morty API</li><li>Context API</li></ul></section><section className="info-card"><h2>Qué practico</h2><ul className="list-clean"><li>Componentes y props</li><li>Hooks y formularios</li><li>Persistencia local</li><li>Rutas y estados</li></ul></section></div>
    </main>
  )
}
