import './card.modules.css'
import { Pokemon } from '../App'
import { Stats } from './cardComponents/stats/stats'
import { Types } from './cardComponents/types/types'

type Props = { pokemon: Pokemon }

export const Card: React.FC<Props> = ({ pokemon }) => {
  return (
    <article
      className="pokeCard"
      key={pokemon.id}
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
            <Types type={type} />
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
          {pokemon.stats.map(stat => (
            <Stats stat={stat} />
          ))}
        </ul>
      </div>
    </article>
  )
}
