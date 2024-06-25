import '@testing-library/jest-dom'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SearchBar } from '../Searchbar'
import userEvent from '@testing-library/user-event'

describe('searchbar', () => {
  const mockOnSearch = vi.fn()

  it('Aparece el placeholder del input cuando query es un string vacío', () => {
    render(<SearchBar query="" onSearch={mockOnSearch} />)
    const input = screen.getByPlaceholderText('Search a Pokémon...')
    expect(input).toHaveValue('')
  })

  it('Aparece el input con contenido cuando query tiene valor', () => {
    const query = 'Pikachu'
    render(<SearchBar query={query} onSearch={mockOnSearch} />)
    const input = screen.getByPlaceholderText('Search a Pokémon...')
    expect(input).toHaveValue(query)
  })

  it('Cuando escribo en el input, se emite el evento onSearch', async () => {
    render(<SearchBar query="" onSearch={mockOnSearch} />)
    const input = screen.getByPlaceholderText('Search a Pokémon...')
    await userEvent.type(input, 'pikachu')
    expect(mockOnSearch).toHaveBeenNthCalledWith(1, 'p')
  })
})
