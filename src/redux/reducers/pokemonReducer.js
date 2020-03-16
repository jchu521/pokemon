import { SAVE_POKEMONS } from "../types/pokemonTypes";

export default (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case SAVE_POKEMONS:
      return { ...state, pokemons: payload };

    default:
      return state;
  }
};
