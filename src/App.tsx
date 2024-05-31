import './App.modules.css'

function App() {
  return (
    <main>
      <section className="cards">
        <article className="bulbasaur">
          <title className="titles">
          <h2 className="name">Bulbasaur</h2>
          <h3 className="numero">#001</h3>
          </title>
          <img className="imgbulbasaur" src="bulbasaur.png" />
          <div className="features">
          <div className="natureFeatures">
            <label>Grass</label>
            <label>Poison</label>
          </div>
          <div className="physicalFeatures">
            <label>6.9 hg</label>
            <label>0.7 m</label>
          </div>
          <ul className="lista">
            <li>HP</li>
            <li>ATK</li>
            <li>DEF</li>
            <li>SAT</li>
            <li>SDF</li>
            <li>SPD</li>
          </ul>
          </div>
        </article>
      </section>
    </main>
  )
}

export default App
