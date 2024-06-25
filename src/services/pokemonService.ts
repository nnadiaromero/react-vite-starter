import { Pokemon, PokemonList, transformPokemon } from '../App'

type PokemonService = {
  getPokemons: () => Promise<Pokemon[]>
}

export const pokemonService: PokemonService = {
  getPokemons: async () => {
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
      return transformedPokemons
    }
  }

