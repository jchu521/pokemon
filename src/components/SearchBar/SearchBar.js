import React from "react";

//style
import "./SearchBar.scss";

export default function SearchBar({ placeholder, ariaLabel }) {
  return (
    <div className="SearchBar">
      <input
        className="SearchBar__input"
        aria-label={ariaLabel}
        placeholder={placeholder}
      />
    </div>
  );
}
