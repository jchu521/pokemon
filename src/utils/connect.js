import React from "react";
import { useStateValue } from "../redux/store";

//Connect HOC
export const connect = (mapStateToProps, mapDispatchToProps) => {
  return Component => {
    return function() {
      const [state, dispatch] = useStateValue();
      let props = { ...props };

      if (mapStateToProps !== null) {
        const stateToProps = mapStateToProps(state);
        props = { ...props, ...stateToProps };
      }
      if (mapDispatchToProps !== null) {
        const dispatchToProps = mapDispatchToProps(dispatch);
        props = { ...props, ...dispatchToProps };
      }
      // const props = { ...props, ...stateToProps, ...dispatchToProps };
      return <Component {...props} />;
    };
  };
};
