import combineReducers from "../../utils/combineReducers";
import otherReducer from "./otherReducer";
import pokemonReducer from "./pokemonReducer";
import fetchReducer from "./fetchReducer";

export const rootReducer = combineReducers({
  other: otherReducer,
  pokemonsInfo: pokemonReducer,
  fetch: fetchReducer
});
