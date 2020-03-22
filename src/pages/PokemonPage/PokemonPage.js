import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//utils
import { connect } from "../../utils/connect";

import "./PokemonPage.scss";
const useFetch = pokemonsInfo => {
  const params = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const pokemon = pokemonsInfo.pokemons.find(p => p.id == params.id);

    setPokemon(pokemon);
    setLoading(false);
  }, [params]);

  return { pokemon, loading };
};
function PokemonPage({ pokemonsInfo }) {
  const { pokemon, loading } = useFetch(pokemonsInfo);
  console.log(pokemon);
  return (
    <div>
      {loading ? null : <div className="Pokemon__name">{pokemon.name}</div>}
    </div>
  );
}

const mapStateToProps = state => ({
  other: state.other,
  pokemonsInfo: state.pokemonsInfo,
  fetch: state.fetch
});

export default connect(mapStateToProps, null)(PokemonPage);
