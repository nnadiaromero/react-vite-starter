import './App.modules.css'
type modelo = {
  name: string
  number: string
  image: string
  stats:  Array<{slug:string; value: number}>
  tags: string[]
}
const pokemon: modelo = {
  name: 'Bulbasaur',
  number: "#001",
  image:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
  stats: [
    {
      slug: 'health-points',
      value: 45,
    },
    {
      slug: 'attack',
      value: 45,
    },
    {
      slug: 'defense',
      value: 45,
    },
    {
      slug: 'sat',
      value: 45,
    },
    {
      slug: 'sdf',
      value: 45,
    },
    {
      slug: 'speed',
      value: 45,
    },
  ],
  tags: []
}

type statsLista ={
  [key:string]: string
}
const statName: statsLista = {
  'health-points': 'HP',
  'attack': "ATK",
  
}

function App() {
  return (
    <main>
      <section className="cards">
        <article className="bulbasaur">
          <label className="titles">
            <h2 className="name">{pokemon.name}</h2>
            <h3 className="numero">{pokemon.number}</h3>
          </label>
          <div className="features">
            <img className="imgbulbasaur" src={pokemon.image} />

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

              {/*BARRAS DE PROGRESO*/}
            </div>
            <ul className="lista">
              <li className="itemList">
                <label className="itemInfo">
                  <label className="item">
                    {statName[pokemon.stats[0].slug]}
                  </label>
                  <label>{statName[pokemon.stats[0].value]}</label>
                </label>
                <progress className="progress" max="250" value="45"></progress>
              </li>
              <li className="itemList">
                <label className="itemInfo">
                  <label className="item">{statName[pokemon.stats[1].slug]}</label>
                  <label>045</label>
                </label>
                <progress className="progress" max="250" value="45"></progress>
              </li>
              <li className="itemList">
                <label className="itemInfo">
                  <label className="item">DEF</label>
                  <label>045</label>
                </label>
                <progress className="progress" max="250" value="45"></progress>
              </li>
              <li className="itemList">
                <label className="itemInfo">
                  <label className="item">SAT</label>
                  <label>045</label>
                </label>
                <progress className="progress" max="250" value="45"></progress>
              </li>
              <li className="itemList">
                <label className="itemInfo">
                  <label className="item">SDF</label>
                  <label>045</label>
                </label>
                <progress className="progress" max="250" value="45"></progress>
              </li>
              <li className="itemList">
                <label className="itemInfo">
                  <label className="item">SPD</label>
                  <label>045</label>
                </label>
                <progress className="progress" max="250" value="45"></progress>
              </li>
            </ul>
          </div>
        </article>
      </section>
    </main>
  )
}

export default App
