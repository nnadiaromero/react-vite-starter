import { PokemonType } from "../App"


export type PokemonDTO = {
    result: string
    abilities: string[]
    base_experience: number
    cries: string
    forms: string[]
    game_indices: string[]
    height: number
    id: number
    is_default: boolean
    location_area_encounters: string
    moves: string[]
    name: string
    order: number
    past_abilities: string[]
    past_types: string[]
    species: { name: string; url: string }
    sprites: {
      back_default: string
      back_female: string
      back_shiny: string
      back_shiny_female: string
      front_default: string
      front_female: string
      front_shiny: string
      front_shiny_female: string
      other: {
        dream_world: string
        home: string
        ['official-artwork']: { front_default: string; front_shiny: string }
        showdown: string
      }
      versions: string
    }
    stats: PokemonStatDTO[]
    types: PokemonType[]
    weight: number
  }
  
export type PokemonStatDTO = {
    base_stat: number
    effort: number
    stat: {
      name: string
      url: string
    }
  }
  