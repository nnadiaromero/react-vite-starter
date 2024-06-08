import './App.modules.css'
import { Header } from './header/header'
import { SearchBar } from './searchbar/searchbar'
import { Footer } from './footer/footer'

type Pokemon = {
  name: string
  number: string
  image: string
  tags: { tagCharacter: string; tagWeapon: string }
  physicalFeatures: { weight: string; measure: string }
  stats: Array<{ slug: string; value: string }>
}
const bulbasaur: Pokemon = {
  name: 'Bulbasaur',
  number: '#001',
  image:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
  tags: {
    tagCharacter: 'Grass',
    tagWeapon: 'Poison',
  },
  physicalFeatures: {
    weight: '6.9 kg',
    measure: '0.7 m',
  },
  stats: [
    {
      slug: 'health-points',
      value: '45',
    },
    {
      slug: 'attack',
      value: '45',
    },
    {
      slug: 'defense',
      value: '45',
    },
    {
      slug: 'sat',
      value: '45',
    },
    {
      slug: 'sdf',
      value: '45',
    },
    {
      slug: 'speed',
      value: '45',
    },
  ],
}

type statsLista = {
  [key: string]: string
}
const statName: statsLista = {
  'health-points': 'HP',
  attack: 'ATK',
  defense: 'DEF',
  sat: 'SAT',
  sdf: 'SDF',
  speed: 'SPD',
}

function App() {
  return (
    <>
      <Header />
      <SearchBar />
      <div className="grid">
        <main className="displaygrid">
          <section className="cards">
            <article className="bulbasaur">
              <label className="titles">
                <h2 className="name">{bulbasaur.name}</h2>
                <h3 className="numero">{bulbasaur.number}</h3>
              </label>
              <div className="features">
                <img className="imgbulbasaur" src={bulbasaur.image} />

                <div className="tags">
                  <label className="tag grass">
                    <img className="tagIcon" src="grass.svg" />
                    {bulbasaur.tags.tagCharacter}
                  </label>
                  <label className="tag poison">
                    <img className="tagIcon" src="poison.svg" />
                    {bulbasaur.tags.tagWeapon}
                  </label>
                </div>

                <div className="physicalFeatures">
                  <label className="tagPhysical">
                    <img className="weightIcon" src="./public/weight.svg" />
                    {bulbasaur.physicalFeatures.weight}
                  </label>
                  <div className="line"></div>
                  <label className="tagPhysical">
                    <img className="rulerIcon" src="./public/ruler.svg" />
                    {bulbasaur.physicalFeatures.measure}
                  </label>

                  {/*BARRAS DE PROGRESO*/}
                </div>
                <ul className="lista">
                  <li className="itemList">
                    <label className="itemInfo">
                      <label className="item">
                        {statName[bulbasaur.stats[0].slug]}
                      </label>
                      <label>{bulbasaur.stats[0].value.padStart(3, '0')}</label>
                    </label>
                    <progress
                      className="progress"
                      max="250"
                      value="45"
                    ></progress>
                  </li>
                  <li className="itemList">
                    <label className="itemInfo">
                      <label className="item">
                        {statName[bulbasaur.stats[1].slug]}
                      </label>
                      <label>{bulbasaur.stats[1].value.padStart(3, '0')}</label>
                    </label>
                    <progress
                      className="progress"
                      max="250"
                      value="45"
                    ></progress>
                  </li>
                  <li className="itemList">
                    <label className="itemInfo">
                      <label className="item">
                        {statName[bulbasaur.stats[2].slug]}
                      </label>
                      <label>{bulbasaur.stats[2].value.padStart(3, '0')}</label>
                    </label>
                    <progress
                      className="progress"
                      max="250"
                      value="45"
                    ></progress>
                  </li>
                  <li className="itemList">
                    <label className="itemInfo">
                      <label className="item">
                        {statName[bulbasaur.stats[3].slug]}
                      </label>
                      <label>{bulbasaur.stats[3].value.padStart(3, '0')}</label>
                    </label>
                    <progress
                      className="progress"
                      max="250"
                      value="45"
                    ></progress>
                  </li>
                  <li className="itemList">
                    <label className="itemInfo">
                      <label className="item">
                        {statName[bulbasaur.stats[4].slug]}
                      </label>
                      <label>{bulbasaur.stats[4].value.padStart(3, '0')}</label>
                    </label>
                    <progress
                      className="progress"
                      max="250"
                      value="45"
                    ></progress>
                  </li>
                  <li className="itemList">
                    <label className="itemInfo">
                      <label className="item">
                        {statName[bulbasaur.stats[5].slug]}
                      </label>
                      <label>{bulbasaur.stats[5].value.padStart(3, '0')}</label>
                    </label>
                    <progress
                      className="progress"
                      max="250"
                      value="45"
                    ></progress>
                  </li>
                </ul>
              </div>
            </article>
          </section>

          <section className="emptycard">
            <img className="pokeball2" src="./public/pokeball2.svg" />
            <div className="bordeblanco"></div>
          </section>

          <section className="emptycard">
            <img className="pokeball2" src="./public/pokeball2.svg" />
            <div className="bordeblanco"></div>
          </section>

          <section className="emptycard">
            <img className="pokeball2" src="./public/pokeball2.svg" />
            <div className="bordeblanco"></div>
          </section>

          <section className="emptycard">
            <img className="pokeball2" src="./public/pokeball2.svg" />
            <div className="bordeblanco"></div>
          </section>

          <section className="emptycard">
            <img className="pokeball2" src="./public/pokeball2.svg" />
            <div className="bordeblanco"></div>
          </section>
          
        </main>
      </div>
      <Footer />
    </>
  )
}

export default App
