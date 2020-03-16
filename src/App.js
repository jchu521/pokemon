import React from "react";

//layouts
import Nav from "./layouts/Nav/Nav";
import Sidebar from "./layouts/Sidebar/Sidebar";
//components
import Home from "./pages/Home/Home";

//utils
import { connect } from "./utils/connect";
//style
import "./App.scss";

function App(props) {
  const { openSideBar } = props.other;

  return (
    <>
      <Nav />
      {openSideBar && <Sidebar />}
      <Home />
    </>
  );
}

const mapStateToProps = state => ({
  other: state.other
});

export default connect(mapStateToProps, null)(App);
