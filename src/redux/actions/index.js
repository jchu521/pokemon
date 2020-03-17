import { fetchApi, loading, fetchCompleted, fetchFailed } from "./fetchAction";
import { handleOpenSidebar } from "./othersAction";
import { savePokemons } from "./pokemonAction";

export default {
  //fetch actions
  fetchApi,
  loading,
  fetchCompleted,
  fetchFailed,
  //other actions
  handleOpenSidebar,
  //pokemon actions
  savePokemons
};
