import React from "react";
import SearchResults from "./SearchResults";

const SearchResultsList = ({ results }) => {
  return (
    <div>
      {results.map((result, i) => {
        return <SearchResults key={i} result={result} />;
      })}
    </div>
  );
};

export default SearchResultsList;
