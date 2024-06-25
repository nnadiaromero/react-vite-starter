import { Pokemon } from "../App"

type PokemonService = {
    getPokemons: () => Promise<Pokemon[]>
}

export const pokemonService: PokemonService = {
    getPokemons: () => {
        // Implementar lógica

        
    }
}