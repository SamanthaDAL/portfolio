import './App.css'

function App() {
  return (
    <main>
      <section className="hero" aria-labelledby="page-title">
        <p className="eyebrow">Portfolio</p>
        <h1 id="page-title">Sam</h1>
        <p className="role">Software Developer</p>
        <p className="introduction">
          I build thoughtful, reliable digital experiences. This space is a simple snapshot of my work and what I am exploring next.
        </p>
      </section>

      <section className="projects" aria-labelledby="projects-title">
        <div className="section-heading">
          <p className="eyebrow">Selected work</p>
          <h2 id="projects-title">Projects</h2>
        </div>

        <article className="project-card">
          <p className="project-type">Web application</p>
          <h3>Sample Project</h3>
          <p>A placeholder project card for a future product or portfolio case study.</p>
        </article>
      </section>
    </main>
  )
}

export default App
