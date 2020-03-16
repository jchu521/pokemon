import combineReducers from "../../utils/combineReducers";
import otherReducer from "./otherReducer";
import pokemonReducer from "./pokemonReducer";

export const rootReducer = combineReducers({
  other: otherReducer,
  pokemonsInfo: pokemonReducer
});
