import './App.modules.css'
import { Header } from './Header/Header'
import { SearchBar } from './Searchbar/Searchbar'
import { Footer } from './Footer/Footer'
import { useState, useEffect } from 'react'
import { EmptyCard } from './EmptyCard/EmptyCard'
import { PokemonDTO, PokemonStatDTO } from './Dto/TypesDto'
import { Card } from './Components/card/Card'
import { pokemonService } from './Services/PokemonService'

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

export function transformPokemon(pokemonDto: PokemonDTO) {
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

export type PokemonList = {
  results: PokemonSimple[]
}

type PokemonSimple = {
  url: string
}
function App() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const [query, setQuery] = useState<string>('')
  const [error, setError] = useState(false)

  // setPokemons(transformedPokemons)
  // } catch (err) {
  //   setError(true)
  // }

  const handleSearch = (query: string) => {
    setQuery(query)
  }

  // Obtener los valores de cada uno
  useEffect(() => {
    //getPokemons()
    const onLoad = async () => {
      try {
        const result = await pokemonService.getPokemons()
        setPokemons(result)
      } catch (error) {
        setError(true)
      }
    }

    onLoad()
  }, [])

  const getContent = () => {
    if (error) {
      return (
        <div className="error">
          <img className="iconoConexion" src="alert.svg" />
          <p>An error occurred getting Pokémons.</p>
          <p>Please, try it later</p>
        </div>
      )
    }

    if (pokemons.length === 0) {
      return (
        <div className="wrapper">
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
        </div>
      )
    }

    if (queryPokemons.length === 0) {
      return (
        <div className="error">
          <img className="iconoAlert" src="pokeNot.svg" />
          <p>There is no results for "{query}"</p>
        </div>
      )
    }

    return (
      <div className="wrapper">
        <div className="grid">
          <main className="displaygrid">
            {queryPokemons.map(pokemon => (
              <Card key={pokemon.id} pokemon={pokemon} />
            ))}
          </main>
        </div>
      </div>
    )
  }

  const queryPokemons: Pokemon[] = pokemons.filter(queryPokemon => {
    return queryPokemon.name.match(query.toLowerCase())
  })

  return (
    <div className="container">
      <div>
        <Header />

        <SearchBar query={query} onSearch={handleSearch} />

        {getContent()}
      </div>

      <Footer />
    </div>
  )
}

export default App
