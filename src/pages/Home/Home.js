import React, { useEffect, useState, useCallback } from "react";

//components
import SearchBar from "../../components/SearchBar/SearchBar";
import CardGroup from "../../components/CardGroup/CardGroup";
//layouts
import Nav from "../../layouts/Nav/Nav";
import Sidebar from "../../layouts/Sidebar/Sidebar";

//utils
import { connect } from "../../utils/connect";
//apis
import { fetchPokemons } from "../../apis/pokemon/index";
//actions
import actions from "../../redux/actions";
//style
import "./Home.scss";

function Home({ other, savePokemons, fetch, pokemonsInfo, fetchApi }) {
  const { openSideBar, pages, search } = other;
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetchApi(fetchPokemons, savePokemons);
  }, []);

  useEffect(() => {
    if (pokemonsInfo && pokemonsInfo.pokemons) {
      if (search !== "") {
        const searchPokemons = pokemonsInfo.pokemons.filter(p => {
          var regex = new RegExp(search, "g");
          return p.name.match(regex);
        });

        setPokemons(searchPokemons);
      } else {
        setPokemons(pokemonsInfo.pokemons);
      }
    }
  }, [search, pokemonsInfo]);

  return (
    <>
      <Nav />
      {openSideBar && <Sidebar />}
      <div
        className={`Home Home--sidebar--${openSideBar ? "opened" : "closed"}`}
      >
        <h1 className="Home--header">{pages[0].title}</h1>
        <SearchBar placeholder="Search for Pokémon" />
        <div className="Home--pokemon--cards">
          <CardGroup number={5} data={pokemons} />
        </div>
      </div>
    </>
  );
}

const mapStateToProps = state => ({
  other: state.other,
  pokemonsInfo: state.pokemonsInfo,
  fetch: state.fetch
});

const mapDispatchToProps = dispatch => {
  const { savePokemons, fetchApi } = actions;

  return {
    fetchApi: (fetchFunc, dispatchFunc) =>
      dispatch(fetchApi(fetchFunc, dispatchFunc)),
    savePokemons: useCallback(data => dispatch(savePokemons(data)), [dispatch])
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
