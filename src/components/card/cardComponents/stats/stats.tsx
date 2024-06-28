import { PokemonStat, statName } from '../../../../App'
import './Stats.modules.css'

type Props = { stat: PokemonStat }

export const Stats: React.FC<Props> = ({ stat }) => {
  return (
    <li className="itemList">
      <label className="itemInfo">
        <label className="item">{statName[stat.name]}</label>
        <label>{stat.value.toString().padStart(3, '0')}</label>
      </label>
      <progress className="progress" max="250" value={stat.value}></progress>
    </li>
  )
}
