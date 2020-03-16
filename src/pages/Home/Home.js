import React, { useEffect, useState } from "react";

//components
import SearchBar from "../../components/SearchBar/SearchBar";
import CardGroup from "../../components/CardGroup/CardGroup";
import Card from "../../components/Card/Card";
//utils
import { connect } from "../../utils/connect";
//apis
import { fetchPokemons } from "../../apis/pokemon/index";
//action
import { savePokemons } from "../../redux/actions/pokemonAction";
//style
import "./Home.scss";

function Home({ other, savePokemons, pokemonsInfo }) {
  const { openSideBar, pages } = other;
  const [loading, setLoading] = useState(true);

  const init = async () => {
    try {
      const data = await fetchPokemons();
      savePokemons(data);
    } catch (err) {
      console.error("Failed to get data");
    }
  };
  console.log(pokemonsInfo);
  useEffect(() => {
    init();
  }, []);

  useEffect(() => {
    if (pokemonsInfo && pokemonsInfo.pokemons) {
      setLoading(false);
    }
  }, [pokemonsInfo]);

  return (
    <div className={`Home Home--sidebar--${openSideBar ? "opened" : "closed"}`}>
      <h1 className="Home--header">{pages[0].title}</h1>
      <SearchBar placeholder="Search for Pokémon" />
      <div className="Home--pokemon--cards">
        {loading ? null : <CardGroup number={5} data={pokemonsInfo.pokemons} />}
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  other: state.other,
  pokemonsInfo: state.pokemonsInfo
});

const mapDispatchToProps = dispatch => ({
  savePokemons: data => dispatch(savePokemons(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
