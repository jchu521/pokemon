import React, { Component } from "react";
import { useStateValue } from "../redux/store";

//Connect HOC
export const connect = (mapStateToProps, mapDispatchToProps) => Component => {
  return function(props) {
    const [state, dispatch] = useStateValue();

    let newProps = { ...props };
    if (mapStateToProps !== null) {
      const stateToProps = mapStateToProps(state);
      newProps = { ...newProps, ...stateToProps };
    }
    if (mapDispatchToProps !== null) {
      const dispatchToProps = mapDispatchToProps(dispatch);
      newProps = { ...newProps, ...dispatchToProps };
    }

    return <Component {...newProps} />;
  };
};
