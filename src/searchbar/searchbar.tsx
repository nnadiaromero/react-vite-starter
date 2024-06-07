import './searchbar.modules.css'

export function SearchBar() {
  return (
    <div className="buscador">
      <section className="bar">
        <img className="lupa" src="./public/Magnifying glass.svg" />

        <input
          className="text"
          type="text"
          placeholder="Search a Pokémon..."
        ></input>
        {/* <input hidden type="submit"></input> */}
      </section>
    </div>
  )
}
