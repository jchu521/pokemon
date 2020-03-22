import React, {
  useEffect,
  useState,
  useCallback,
  useRef,
  forwardRef
} from "react";

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

const useContentHeight = (headerRef, navRef, searchRef) => {
  const viewHeight = isNaN(window.innerHeight)
    ? window.clientHeight * 0.8
    : window.innerHeight * 0.8;
  const [height, setHeight] = useState(viewHeight);

  const getContentHeight = () => {
    const navElementHeight =
      navRef && navRef.current && navRef.current.offsetHeight;
    const searchElementHeight =
      searchRef && searchRef.current && searchRef.current.offsetHeight;
    const headerElementHeight =
      headerRef && headerRef.current && headerRef.current.offsetHeight;

    if (navElementHeight && headerElementHeight && searchElementHeight) {
      setHeight(
        (
          viewHeight * 0.9 -
          navElementHeight -
          headerElementHeight -
          searchElementHeight
        ).toFixed(0)
      );
    }
  };
  useEffect(getContentHeight, [headerRef, navRef, searchRef]);

  window.onresize = getContentHeight;
  return { height };
};

function Home({ other, savePokemons, fetch, pokemonsInfo, fetchApi }) {
  const { openSideBar, pages, search } = other;
  const [pokemons, setPokemons] = useState([]);
  const navRef = useRef(null);
  const headerRef = useRef(null);
  const searchRef = useRef(null);
  const { height } = useContentHeight(headerRef, navRef, searchRef);
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
      <Nav navRef={navRef} />
      {openSideBar && <Sidebar />}
      <div
        className={`Home Home--sidebar--${openSideBar ? "opened" : "closed"}`}
      >
        <h1 ref={headerRef} className="Home--header">
          {pages[0].title}
        </h1>
        <SearchBar searchRef={searchRef} placeholder="Search for Pokémon" />
        <div
          id="content"
          className="Home--pokemon--cards"
          style={{
            maxHeight: height,
            overflowY: "auto"
          }}
        >
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
