import React from "react";
import { Route } from "react-router-dom";

//pages
import Home from "./pages/Home/Home";
import PokemonPage from "./pages/PokemonPage/PokemonPage";

//utils
import { connect } from "./utils/connect";
//style
import "./App.scss";

function App(props) {
  const { openSideBar } = props.other;

  return (
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/pokemon/:id" component={PokemonPage} />
    </>
  );
}

// const mapStateToProps = state => ({
//   other: state.other
// });

const mapStateToProps = state => state;

export default connect(mapStateToProps, null)(App);
