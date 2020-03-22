import React from "react";
import { Route } from "react-router-dom";

//pages
import Home from "./pages/Home/Home";
import PokemonPage from "./pages/PokemonPage/PokemonPage";

//style
import "./App.scss";

function App(props) {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/pokemon/:id" component={PokemonPage} />
    </>
  );
}

export default App;
