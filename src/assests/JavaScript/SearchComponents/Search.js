import { React} from "react";

const Search = (props) => {

  const inputChanged = (event) => {
    props.onSearched(event.target.value);
  };

  // const inputChangedBt = () => {
  //   props.onSearched(input);
  // };

  return (
    <div id="search">
      <input
        id="search-input"
        placeholder="Search Here"
        onChange={inputChanged}
      />
      <button onClick={inputChanged} id="search-button">
        SEARCH
      </button>
    </div>
  );
};

export default Search;
