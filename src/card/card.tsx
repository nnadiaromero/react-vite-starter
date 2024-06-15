import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
} from 'react'
import './card.modules.css'
import { Pokemon, statName } from '../App'

type Props = { pokemon: Pokemon }

// Tipar el pokemon
export const Card: React.FC<Props> = ({ pokemon }) => {
  return (
    <article
      className="pokeCard"
      key={pokemon.id}
      //COLORES DE LAS TARJETAS!!!
      style={{
        backgroundColor: `var(--color-type-${pokemon.types[0].type.name})`,
      }}
    >
      <label className="titles">
        <h2 className="name">{pokemon.name}</h2>
        <h3 className="numeroIdPok">
          #{pokemon.id.toString().padStart(3, '0')}
        </h3>
      </label>
      <div className="featuresPokemon">
        <img className="imagePokemon" src={pokemon.picture} />
        {/* NATURALEZA */}
        <div className="tags">
          {pokemon.types.map(type => (
            <label
              key={type.type.name}
              className={`tag ${type.type.name}`}
              style={{
                backgroundColor: `var(--color-type-${type.type.name})`,
              }}
            >
              <img className="tagIcon" src={`${type.type.name}.svg`} />
              {type.type.name}
            </label>
          ))}
        </div>

        {/* PESO Y ALTURA */}
        <div className="physicalFeatures">
          <label className="tagPhysical">
            <img className="weightIcon" src="./public/weight.svg" />
            {pokemon.weight / 10} kg
          </label>
          <div className="line"></div>
          <label className="tagPhysical">
            <img className="rulerIcon" src="./public/ruler.svg" />
            {pokemon.height / 10} m
          </label>

          {/* BARRAS DE PROGRESO */}
        </div>
        <ul className="lista">
          <li className="itemList">
            <label className="itemInfo">
              <label className="item">{statName[pokemon.stats[0].name]}</label>
              <label>
                {pokemon.stats[0].value.toString().padStart(3, '0')}
              </label>
            </label>
            <progress
              className="progress"
              max="250"
              value={pokemon.stats[0].value}
            ></progress>
          </li>
          <li className="itemList">
            <label className="itemInfo">
              <label className="item">{statName[pokemon.stats[1].name]}</label>
              <label>
                {pokemon.stats[1].value.toString().padStart(3, '0')}
              </label>
            </label>
            <progress
              className="progress"
              max="250"
              value={pokemon.stats[1].value}
            ></progress>
          </li>
          <li className="itemList">
            <label className="itemInfo">
              <label className="item">{statName[pokemon.stats[2].name]}</label>
              <label>
                {pokemon.stats[2].value.toString().padStart(3, '0')}
              </label>
            </label>
            <progress
              className="progress"
              max="250"
              value={pokemon.stats[2].value}
            ></progress>
          </li>
          <li className="itemList">
            <label className="itemInfo">
              <label className="item">{statName[pokemon.stats[3].name]}</label>
              <label>
                {pokemon.stats[3].value.toString().padStart(3, '0')}
              </label>
              {/*.padStart(3, '0')===> para que sean tres dígitos empezando por 0*/}
            </label>
            <progress
              className="progress"
              max="250"
              value={pokemon.stats[3].value}
            ></progress>
          </li>
          
          <li className="itemList">
            <label className="itemInfo">
              <label className="item">{statName[pokemon.stats[4].name]}</label>
              <label>
                {pokemon.stats[4].value.toString().padStart(3, '0')}
              </label>
            </label>
            <progress
              className="progress"
              max="250"
              value={pokemon.stats[4].value}
            ></progress>
          </li>

          <li className="itemList">
            <label className="itemInfo">
              <label className="item">{statName[pokemon.stats[5].name]}</label>
              <label>
                {pokemon.stats[5].value.toString().padStart(3, '0')}
              </label>
            </label>
            <progress
              className="progress"
              max="250"
              value={pokemon.stats[5].value}
            ></progress>
          </li>

        </ul>
      </div>
    </article>
  )
}
