import React from "react";

//utils
import { connect } from "../../utils/connect";

//style
import "./Sidebar.scss";

function Sidebar({ other }) {
  return (
    <div className="Sidebar">
      <ul className="Sidebar__menu">
        {other.menuItems.map((item, i) => {
          return (
            <li className="Sidebar__menu__list" key={i}>
              {i === 0 ? (
                <div className="Sidebar__menu__title">{item.name} </div>
              ) : (
                <a href={item.href}>
                  <strong>{item.name}</strong>
                </a>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

const mapStateToProps = state => ({
  other: state.other
});

export default connect(mapStateToProps, null)(Sidebar);
