import { useState } from 'react'
import './searchbar.modules.css'
import { Pokemon } from '../App'

//almacenar texto del input en componente
//filtrar la info
// https://salehmubashar.com/blog/create-a-search-bar-in-react-js

type Props = { pokemon: Pokemon }

export const SearchBar: React.FC<Props> = ({ pokemon }) => {
  const [inputText, setInputText] = useState('')

  const inputHandler = e => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase()
    setInputText(lowerCase)
  }
type poke={
  name: string
}
if (inputText.length > 0) {
    pokemon.filter((poke: poke) => {
    return poke.name.match(inputText);
});
}
  return (
    <div className="buscador">
      <section className="bar">
        <img className="lupa" src="./public/Magnifying glass.svg" />

        <input
          className="text"
          type="text"
          placeholder="Search a Pokémon..."
          onChange={inputHandler}
          value={inputText}
        ></input>
        {/* <input hidden type="submit"></input> */}
      </section>
    </div>
  )
}
