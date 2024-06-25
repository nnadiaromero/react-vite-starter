import { describe, it, expect } from 'vitest'
import '@testing-library/jest-dom'
import { SearchBar } from './searchbar/searchbar'
import { render } from '@testing-library/react'

// testar que aparecen las cartas (simular que la api nos devuelve x cosas y luego se comprueba si salen las cosas bien.)


describe('display de pokemons', () => {  
    const mockOnSearch = vi.fn()

    it('al buscar "bulbasaur" pinta bulbasaur', () => {
      render(<SearchBar query="bulbasaur" onSearch={mockOnSearch} />)

      expect(pokemon.name).toBe("Bulbasaur")
    })
  
    
  })
  