import { PokemonType } from '../../../../App'
import './types.modules.css'

type Props = { type: PokemonType }

export const Types: React.FC<Props> = ({ type }) => {
  return (
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
  )
}
