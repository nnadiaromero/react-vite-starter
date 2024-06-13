import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
} from 'react'
import './card.modules.css'
import { statName } from '../App'
import { Pokemon } from '../App'

// Tipar el pokemon
export function Card({ pokemon }: Pokemon) {
  return (
    <article
      className="bulbasaur"
      key={pokemon.id}
      //COLORES DE LAS TARJETAS!!!
      style={{ backgroundColor: `var(--color-type-${pokemon.types[0].type.name})` }}
    >
      <label className="titles">
        <h2 className="name">{pokemon.name}</h2>
        <h3 className="numero">#{pokemon.id.toString().padStart(3, '0')}</h3>
      </label>
      <div className="features">
        <img
          className="imgbulbasaur"
          src={pokemon.sprites.other['official-artwork'].front_default}
        />
        {/* NATURALEZA */}
        <div className="tags">
          {pokemon.types.map(
            (type: {
              type: {
                name:
                  | string
                  | number
                  | boolean
                  | ReactElement<any, string | JSXElementConstructor<any>>
                  | Iterable<ReactNode>
                  | ReactPortal
                  | null
                  | undefined
              }
            }) => (
              <label className={`tag ${type.type.name}`}>
                <img className="tagIcon" src={`${type.type.name}.svg`} />
                {type.type.name}
              </label>
            ),
          )}
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
              <label className="item">
                {statName[pokemon.stats[0].stat.name]}
              </label>
              <label>
                {pokemon.stats[0].base_stat.toString().padStart(3, '0')}
              </label>
            </label>
            <progress
              className="progress"
              max="250"
              value={pokemon.stats[0].base_stat}
            ></progress>
          </li>
          <li className="itemList">
            <label className="itemInfo">
              <label className="item">
                {statName[pokemon.stats[1].stat.name]}
              </label>
              <label>
                {pokemon.stats[1].base_stat.toString().padStart(3, '0')}
              </label>
            </label>
            <progress
              className="progress"
              max="250"
              value={pokemon.stats[1].base_stat}
            ></progress>
          </li>
          <li className="itemList">
            <label className="itemInfo">
              <label className="item">
                {statName[pokemon.stats[2].stat.name]}
              </label>
              <label>
                {pokemon.stats[2].base_stat.toString().padStart(3, '0')}
              </label>
            </label>
            <progress
              className="progress"
              max="250"
              value={pokemon.stats[2].base_stat}
            ></progress>
          </li>
          <li className="itemList">
            <label className="itemInfo">
              <label className="item">
                {statName[pokemon.stats[3].stat.name]}
              </label>
              <label>
                {pokemon.stats[3].base_stat.toString().padStart(3, '0')}
              </label>
              {/*.padStart(3, '0')===> para que sean tres dígitos empezando por 0*/}
            </label>
            <progress
              className="progress"
              max="250"
              value={pokemon.stats[3].base_stat}
            ></progress>
          </li>
          <li className="itemList">
            <label className="itemInfo">
              <label className="item">
                {statName[pokemon.stats[4].stat.name]}
              </label>
              <label>
                {pokemon.stats[4].base_stat.toString().padStart(3, '0')}
              </label>
            </label>
            <progress
              className="progress"
              max="250"
              value={pokemon.stats[4].base_stat}
            ></progress>
          </li>
          <li className="itemList">
            <label className="itemInfo">
              <label className="item">
                {statName[pokemon.stats[5].stat.name]}
              </label>
              <label>
                {pokemon.stats[5].base_stat.toString().padStart(3, '0')}
              </label>
            </label>
            <progress
              className="progress"
              max="250"
              value={pokemon.stats[5].base_stat}
            ></progress>
          </li>
        </ul>
      </div>
    </article>
  )
}
