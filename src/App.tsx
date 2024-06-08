import './App.modules.css'
import { Header } from './header/header'
import { SearchBar } from './searchbar/searchbar'
import { Footer } from './footer/footer'
import { useState, useEffect } from 'react'

type Pokemon = {
  abilities: string[]
  base_experience: number
  cries: string
  forms: string[]
  game_indices: string[]
  height: number
  held_items: string[]
  id: number
  is_default: boolean
  location_area_encounters: string
  moves: string[]
  name: string
  order: number
  past_abilities: string[]
  past_types: string[]
  species: { name: string; url: string }
  sprites: {
    back_default: string
    back_female: string
    back_shiny: string
    back_shiny_female: string
    front_default: string
    front_female: string
    front_shiny: string
    front_shiny_female: string
    other: {
      dream_world: string
      home: string
      ['official-artwork']: { front_default: string; front_shiny: string }
      showdown: string
    }
    versions: string
  }
  stats: [
    {
      base_stat: number
      effort: number
      stat: {
        name: string
        url: string
      }
    },
    {
      base_stat: number
      effort: number
      stat: {
        name: string
        url: string
      }
    },
    {
      base_stat: number
      effort: number
      stat: {
        name: string
        url: string
      }
    },
    {
      base_stat: number
      effort: number
      stat: {
        name: string
        url: string
      }
    },
    {
      base_stat: number
      effort: number
      stat: {
        name: string
        url: string
      }
    },
    {
      base_stat: number
      effort: number
      stat: {
        name: string
        url: string
      }
    },
  ]
  types: [
    {
      slot: number
      type: {
        name: string
        url: string
      }
    },
    {
      slot: number
      type: {
        name: string
        url: string
      }
    },
  ]
  weight: number
}
// name: string
// number: string
// image: string
// tags: { tagCharacter: string; tagWeapon: string }
// physicalFeatures: { weight: string; measure: string }
// stats: Array<{ slug: string; value: string }>
// }
// const bulbasaur: Pokemon = {
//   name: 'Bulbasaur',
//   number: '#001',
//   image:
//     'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
//   tags: {
//     tagCharacter: 'Grass',
//     tagWeapon: 'Poison',
//   },
//   physicalFeatures: {
//     weight: '6.9 kg',
//     measure: '0.7 m',
//   },
//   stats: [
//     {
//       slug: 'health-points',
//       value: '45',
//     },
//     {
//       slug: 'attack',
//       value: '45',
//     },
//     {
//       slug: 'defense',
//       value: '45',
//     },
//     {
//       slug: 'sat',
//       value: '45',
//     },
//     {
//       slug: 'sdf',
//       value: '45',
//     },
//     {
//       slug: 'speed',
//       value: '45',
//     },
//   ],
// }

type statsLista = {
  [key: string]: string
}
const statName: statsLista = {
  'hp': 'HP',
  attack: 'ATK',
  defense: 'DEF',
  "special-attack": 'SAT',
  "special-defense": 'SDF',
  speed: 'SPD',
}

function App() {
  const [bulbasaur, setBulbasur] = useState<Pokemon>()

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/1/')
      .then(response => {
        return response.json()
      })
      .then(pokemons => {
        setBulbasur(pokemons)
      })
  }, [])

  if (bulbasaur === undefined) {
    return <div>Cargando...</div>
  }

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
                <h3 className="numero">#{bulbasaur.id.toString().padStart(3, '0')}</h3>
                    {/*.padStart(3, '0')===> para que sean tres dígitos empezando por 0*/}

              </label>
              <div className="features">
                <img
                  className="imgbulbasaur"
                  src={
                    bulbasaur.sprites.other["official-artwork"].front_default
                  }
                />

                {/*hacer un map que cada elemento devuelva esto:*/}
                <div className="tags">
                  <label className="tag grass">
                    <img className="tagIcon" src="grass.svg" />{bulbasaur.types[0].type.name}
                    
                  </label>
                  <label className="tag poison">
                    <img className="tagIcon" src="poison.svg" />
                    {bulbasaur.types[1].type.name}
                  </label>
                </div>
                {/**/}
                <div className="physicalFeatures">
                  <label className="tagPhysical">
                    <img className="weightIcon" src="./public/weight.svg" />
                    {bulbasaur.weight/10} kg
                  </label>
                  <div className="line"></div>
                  <label className="tagPhysical">
                    <img className="rulerIcon" src="./public/ruler.svg" />
                    {bulbasaur.height/10} m
                  </label>

                  {/*BARRAS DE PROGRESO*/}
                </div>
                <ul className="lista">
                  <li className="itemList">
                    <label className="itemInfo">
                      <label className="item">
                        {statName[bulbasaur.stats[0].stat.name]}
                      </label>
                      <label>{bulbasaur.stats[0].base_stat.toString().padStart(3, '0')}</label>
                    </label>
                    <progress
                      className="progress"
                      max="250"
                      value={bulbasaur.stats[0].base_stat}
                    ></progress>
                  </li>
                  <li className="itemList">
                    <label className="itemInfo">
                      <label className="item">
                        {statName[bulbasaur.stats[1].stat.name]}
                      </label>
                      <label>{bulbasaur.stats[1].base_stat.toString().padStart(3, '0')}</label>
                    </label>
                    <progress
                      className="progress"
                      max="250"
                      value={bulbasaur.stats[1].base_stat}
                    ></progress>
                  </li>
                  <li className="itemList">
                    <label className="itemInfo">
                      <label className="item">
                        {statName[bulbasaur.stats[2].stat.name]}
                      </label>
                      <label>{bulbasaur.stats[2].base_stat.toString().padStart(3, '0')}</label>
                    </label>
                    <progress
                      className="progress"
                      max="250"
                      value={bulbasaur.stats[2].base_stat}
                    ></progress>
                  </li>
                  <li className="itemList">
                    <label className="itemInfo">
                      <label className="item">
                        {statName[bulbasaur.stats[3].stat.name]}
                      </label>
                      <label>{bulbasaur.stats[3].base_stat.toString().padStart(3, '0')}</label>
                      {/*.padStart(3, '0')===> para que sean tres dígitos empezando por 0*/}

                    </label>
                    <progress
                      className="progress"
                      max="250"
                      value={bulbasaur.stats[3].base_stat}
                    ></progress>
                  </li>
                  <li className="itemList">
                    <label className="itemInfo">
                      <label className="item">
                        {statName[bulbasaur.stats[4].stat.name]}
                      </label>
                      <label>{bulbasaur.stats[4].base_stat.toString().padStart(3, '0')}</label>
                    </label>
                    <progress
                      className="progress"
                      max="250"
                      value={bulbasaur.stats[4].base_stat}
                    ></progress>
                  </li>
                  <li className="itemList">
                    <label className="itemInfo">
                      <label className="item">
                        {statName[bulbasaur.stats[5].stat.name]}
                      </label>
                      <label>{bulbasaur.stats[5].base_stat.toString().padStart(3, '0')  }</label>
                    </label>
                    <progress
                      className="progress"
                      max="250"
                      value={bulbasaur.stats[5].base_stat}
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
