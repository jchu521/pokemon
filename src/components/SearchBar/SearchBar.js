import React, { useState, useCallback, memo, useEffect } from "react";

//actions
import actions from "../../redux/actions/index";
//utils
import { connect } from "../../utils/connect";
import useDebounce from "../../utils/useDebounce";
//style
import "./SearchBar.scss";

const SearchBar = memo(({ placeholder, ariaLabel, handleSearch }) => {
  const [searchText, setSearchText] = useState("");
  const debouncedValue = useDebounce(searchText, 500);

  useEffect(() => {
    handleSearch(debouncedValue);
  }, [debouncedValue]);

  return (
    <div className="SearchBar">
      <input
        className="SearchBar__input"
        aria-label={ariaLabel}
        placeholder={placeholder}
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
      />
    </div>
  );
});

const mapDispatchToProps = dispatch => {
  const { handleSearch } = actions;

  return {
    handleSearch: useCallback(text => dispatch(handleSearch(text)))
  };
};

export default connect(null, mapDispatchToProps)(SearchBar);
