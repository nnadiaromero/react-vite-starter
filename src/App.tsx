import './App.modules.css'
import { Header } from './header/header'
import { SearchBar } from './searchbar/searchbar'
import { Footer } from './footer/footer'
import { useState, useEffect } from 'react'
import { EmptyCard } from './emptyCard/emptyCard'
import { PokemonDTO, PokemonStatDTO } from './dto/typesDto'
import { Card } from './components/card/card'

export type PokemonType = {
  slot: number
  type: {
    name: string
    url: string
  }
}

export type PokemonStat = {
  name: string
  value: number
}

export type Pokemon = {
  [x: string]: any
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
  const [pokemons, setPokemons] = useState<Pokemon[]>()

  const getPokemons = async () => {
    // Obtener el listado
    const response = await fetch(
      'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151',
    )
    //Que el listado se guarde en un archivo .json
    const jsonResponse: PokemonList = await response.json()

    const promesas = jsonResponse.results.map(async result => {
      const pok = await fetch(result.url)
      return await pok.json()
    })

    const todosPoks = await Promise.all(promesas)

    const transformedPokemons = todosPoks.map(transformPokemon)

    // Obtener los valores de cada uno
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
              <EmptyCard />
              <EmptyCard />
              <EmptyCard />
              <EmptyCard />
              <EmptyCard />
              <EmptyCard />
            </main>
          </div>
          <Footer />
        </>
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
        </main>
      </div>
      <Footer />
    </>
  )
}

export default App
