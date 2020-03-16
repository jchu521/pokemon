import { SAVE_POKEMONS } from "../types/pokemonTypes";

export const savePokemons = data => ({
  type: SAVE_POKEMONS,
  payload: data
});
