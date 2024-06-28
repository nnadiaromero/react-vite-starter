import { describe, it, expect } from 'vitest'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import App from './App'
import { pokemonService } from './Services/PokemonService'

// testar que aparecen las cartas (simular que la api nos devuelve x cosas y luego se comprueba si salen las cosas bien.)

describe('display de pokemons', () => {
  
  it('que aparezcan las tarjetas', () => {
    const spyPokemon = vi.spyOn( pokemonService, transformedPokemon)
    spyPokemon.mockReturnValue("Bulbasaur")})
    render(<App />)
  
})
