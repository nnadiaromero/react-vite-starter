import './App.modules.css'

function App() {
  return (
    <main>
      <section className="cards">
        <article className="bulbasaur">
          <label className="titles">
            <h2 className="name">Bulbasaur</h2>
            <h3 className="numero">#001</h3>
          </label>
          <div className="features">
            <img className="imgbulbasaur" src="bulbasaur.png" />

            <div className="tags">
              <label className="tag grass">
                <img className="tagIcon" src="grass.svg" />
                Grass
              </label>
              <label className="tag poison">
                <img className="tagIcon" src="poison.svg" />
                Poison
              </label>
            </div>

            <div className="physicalFeatures">
              <label><img className="weightIcon" src="./public/weight.svg"/> 6.9 kg</label>
              <div className="line"></div>
              <label><img className="rulerIcon" src="./public/ruler.svg"/>0.7 m</label>
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
