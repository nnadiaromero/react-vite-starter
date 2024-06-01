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
              <label className="tagPhysical">
                <img className="weightIcon" src="./public/weight.svg" /> 6.9 kg
              </label>
              <div className="line"></div>
              <label className="tagPhysical">
                <img className="rulerIcon" src="./public/ruler.svg" />
                0.7 m
              </label>
            </div>

            <ul className="lista">
              <li className="itemList">
                <label className="itemInfo">
                  <label className="item">HP</label>
                  <label>045</label>
                </label>
                <progress max="250" value="45"></progress>
              </li>
              <li className="itemList">
                <label className="itemInfo">
                  <label className="item">ATK</label>
                  <label>045</label>
                </label>
                <progress max="250" value="45"></progress>
              </li>
              <li className="itemList">
                <label className="itemInfo">
                  <label className="item">DEF</label>
                  <label>045</label>
                </label>
                <progress max="250" value="45"></progress>
              </li>
              <li className="itemList">
                <label className="itemInfo">
                  <label className="item">SAT</label>
                  <label>045</label>
                </label>
                <progress max="250" value="45"></progress>
              </li>
              <li className="itemList">
                <label className="itemInfo">
                  <label className="item">SDF</label>
                  <label>045</label>
                </label>
                <progress max="250" value="45"></progress>
              </li>
              <li className="itemList">
                <label className="itemInfo">
                  <label className="item">SPD</label>
                  <label>045</label>
                </label>
                <progress max="250" value="45"></progress>
              </li>
            </ul>
          </div>
        </article>
      </section>
    </main>
  )
}

export default App
