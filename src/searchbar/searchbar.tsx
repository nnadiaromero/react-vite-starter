import "./searchbar.modules.css"

export function SearchBar() {
  return (
    <div className="buscador">
      <input className="barra" type="text" placeholder="Search a Pokémon..."></input>
      <img className="lupa" src="./public/Magnifying glass.svg" />

      <input hidden type="submit"></input>
    </div>
  )
}
