import { fetchApi, loading, fetchCompleted, fetchFailed } from "./fetchAction";
import { handleOpenSidebar, handleSearch } from "./othersAction";
import { savePokemons } from "./pokemonAction";

export default {
  //fetch actions
  fetchApi,
  loading,
  fetchCompleted,
  fetchFailed,
  //other actions
  handleOpenSidebar,
  handleSearch,
  //pokemon actions
  savePokemons
};
