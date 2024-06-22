import React, { ChangeEvent } from 'react'
import './searchbar.modules.css'
import '../App'

type SearchBarProps = {
  query: string
  onSearch: (query: string) => void
}

export const SearchBar: React.FC<SearchBarProps> = ({ query, onSearch }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value)
  }

  return (
    <div className="buscador">
      <section className="bar">
        <img className="lupa" src="./public/Magnifying glass.svg" />
        <input
          className="text"
          type="text"
          placeholder="Search a Pokémon..."
          onChange={handleChange}
          value={query}
        />
      </section>
    </div>
  )
}
