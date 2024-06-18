import React, { useState, ChangeEvent, FormEvent } from 'react'
import './searchbar.modules.css'
import '../App'

interface SearchBarProps {
  onSearch: (query: string) => void
}

// type Props = { onSearch: Pokemon}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState<string>('')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
  }
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onSearch(query)
  }

  return (
    <div className="buscador">
      <section className="bar">
        <img className="lupa" src="./public/Magnifying glass.svg" />
        <form onSubmit={handleSubmit}>
          <input
            className="text"
            type="text"
            placeholder="Search a Pokémon..."
            onChange={handleChange}
            value={query}
          ></input>
        </form>
        {/* <input hidden type="submit"></input> */}
      </section>
    </div>
  )
}
