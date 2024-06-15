import './App.modules.css'
import { Header } from './header/header'
import { SearchBar } from './searchbar/searchbar'
import { Footer } from './footer/footer'
import { useState, useEffect } from 'react'
import { Card } from './card/card'

type PokemonType = {
  slot: number
  type: {
    name: string
    url: string
  }
}

type PokemonStatDTO = {
  base_stat: number
  effort: number
  stat: {
    name: string
    url: string
  }
}

export type PokemonDTO = {
  result: string
  abilities: string[]
  base_experience: number
  cries: string
  forms: string[]
  game_indices: string[]
  height: number
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
  stats: PokemonStatDTO[]
  types: PokemonType[]
  weight: number
}

type PokemonStat = {
  name: string
  value: number
}

export type Pokemon = {
  height: number
  id: number
  name: string
  picture: string
  stats: PokemonStat[]
  types: PokemonType[]
  weight: number
}

function transformStat(statDTO: PokemonStatDTO) {
  return {
    name: statDTO.stat.name,
    value: statDTO.base_stat,
  }
}

function transformPokemon(pokemonDto: PokemonDTO) {
  const { height, id, name, types, weight, stats } = pokemonDto
  const newPok: Pokemon = {
    height,
    id,
    name,
    picture: pokemonDto.sprites.other['official-artwork'].front_default,
    stats: stats.map(transformStat),
    types,
    weight,
  }

  return newPok
}

//1. un tipo nuevo con las propiedas que yo necesite
//2. función con pokemonDTO que lo transforme en otro  que sea (1.)

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

export const statName: statsLista = {
  hp: 'HP',
  attack: 'ATK',
  defense: 'DEF',
  'special-attack': 'SAT',
  'special-defense': 'SDF',
  speed: 'SPD',
}

type PokemonList = {
  results: PokemonSimple[]
}

type PokemonSimple = {
  url: string
}

function App() {
  // const [pokemon, setPokemons] = useState<Pokemon>()

  // useEffect(() => {
  //   fetch('https://pokeapi.co/api/v2/pokemon/1/')
  //     .then(response => {
  //       return response.json()
  //     })
  //     .then(pokemons => {
  //       setPokemons(pokemons)
  //     })
  // }, [])

  // if (pokemon === undefined) {
  //   return <div>Cargando...</div>
  // }

  const [pokemons, setPokemons] = useState<Pokemon[]>()

  const getPokemons = async () => {
    // Obtener el listado
    const response = await fetch(
      'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151',
    )
    //Que el listado se guarde en un archivo .json
    const jsonResponse: PokemonList = await response.json()

    // console.log(jsonResponse.results)

    // jsonResponse.results.map(result => console.log(result))
    // const fetchPromises= jsonResponse.results.map(url =>)

    const promesas = jsonResponse.results.map(async result => {
      const pok = await fetch(result.url)
      return await pok.json()
    })

    const todosPoks = await Promise.all(promesas)
    //console.log(todosPoks[0])

    const transformedPokemons = todosPoks.map(transformPokemon)

    // Obtener los valores de cada uno
    // const response1 = await fetch('https://pokeapi.co/api/v2/pokemon/1/')
    // const jsonResponse1 = await response1.json()
    setPokemons(transformedPokemons)
  }

  useEffect(() => {
    getPokemons()
  }, [])

  if (pokemons === undefined) {
    return (
      <div>
        <>
          <Header />
          <SearchBar />
          <div className="grid">
            <main className="displaygrid">
              <section className="cards displaygrid">
                <section className="emptycard">
                  <img className="pokeball2" src="./public/pokeball2.svg" />
                  <div className="bordeblanco"></div>
                </section>
              </section>
              <section className="cards displaygrid">
                <section className="emptycard">
                  <img className="pokeball2" src="./public/pokeball2.svg" />
                  <div className="bordeblanco"></div>
                </section>
              </section>
              <section className="cards displaygrid">
                <section className="emptycard">
                  <img className="pokeball2" src="./public/pokeball2.svg" />
                  <div className="bordeblanco"></div>
                </section>
              </section>
              <section className="cards displaygrid">
                <section className="emptycard">
                  <img className="pokeball2" src="./public/pokeball2.svg" />
                  <div className="bordeblanco"></div>
                </section>
              </section>
              <section className="cards displaygrid">
                <section className="emptycard">
                  <img className="pokeball2" src="./public/pokeball2.svg" />
                  <div className="bordeblanco"></div>
                </section>
              </section>
              <section className="cards displaygrid">
                <section className="emptycard">
                  <img className="pokeball2" src="./public/pokeball2.svg" />
                  <div className="bordeblanco"></div>
                </section>
              </section>

              {/*EMPTY CARD */}
              {/* <section className="emptycard">
            <img className="pokeball2" src="./public/pokeball2.svg" />
            <div className="bordeblanco"></div>
          </section> */}
            </main>
          </div>
          <Footer />
        </>

        {/* <section className="emptycard">
            <img className="pokeball2" src="./public/pokeball2.svg" />
            <div className="bordeblanco"></div>
          </section> */}
      </div>
    )
  }

  return (
    <>
      <Header />
      <SearchBar />
      <div className="grid">
        <main className="displaygrid">
          <section className="cards displaygrid">
            {pokemons.map(pokemon => (
              <Card key={pokemon.id} pokemon={pokemon} />
            ))}
          </section>

          {/*EMPTY CARD */}
          {/* <section className="emptycard">
            <img className="pokeball2" src="./public/pokeball2.svg" />
            <div className="bordeblanco"></div>
          </section> */}
        </main>
      </div>
      <Footer />
    </>
  )
}

export default App
