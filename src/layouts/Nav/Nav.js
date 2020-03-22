import React, { useCallback } from "react";

//component
import IconButton from "../../components/IconButton/IconButton";
//utils
import { connect } from "../../utils/connect";
//svg
import MainIcon from "../../assests/svgs/main.svg";
//style
import "./Nav.scss";
//action
import { handleOpenSidebar } from "../../redux/actions/othersAction";

function Nav(props) {
  const { other, changeOpenSidebar, navRef } = props;

  return (
    <nav
      ref={navRef}
      className={`Navbar Navbar--sidebar--${
        other.openSideBar ? "opened" : "closed"
      }`}
    >
      <div className="Navbar__container">
        <IconButton
          icon={MainIcon}
          airaLabel="Main"
          type="circle"
          onClick={e => {
            e.preventDefault();
            changeOpenSidebar(!other.openSideBar);
          }}
        />
      </div>
    </nav>
  );
}

const mapStateToProps = state => ({
  other: state.other
});

const mapDispatchToProps = dispatch => ({
  changeOpenSidebar: useCallback(
    payload => dispatch(handleOpenSidebar(payload)),
    [dispatch]
  )
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
