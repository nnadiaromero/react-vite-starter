import { Pokemon } from '../../App'
import './Card.modules.css'
import { Stats } from './cardComponents/Stats/Stats'
import { Types } from './cardComponents/Types/Types'

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
            <Types key={type.type.name} type={type} />
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
        </div>

        {/* BARRAS DE PROGRESO */}
        <ul className="lista">
          {pokemon.stats.map(stat => (
            <Stats key={stat.name} stat={stat} />
          ))}
        </ul>
      </div>
    </article>
  )
}
