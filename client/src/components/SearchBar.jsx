import React, { useState } from "react";
import { ImSearch } from "react-icons/im";
import SearchResultsList from "./SearchResultsList";

const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch(`http://localhost:3001/newapi`)
      .then((res) => res.json())
      .then((json) => {
        const results = json.filter((item) => {
          return (
            value &&
            item &&
            item.title &&
            item.title.toLowerCase().includes(value)
          );
        });
        setResults(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };
  return (
    <div className="flex items-center gap-8 flex-grow">
      <div className="relative">
        <input
          type="text"
          className="pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent"
          placeholder="Search"
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        />
        <span className="absolute top-3 left-3 text-gray-400">
          <ImSearch />
        </span>
      </div>
    </div>
  );
};

export default SearchBar;
