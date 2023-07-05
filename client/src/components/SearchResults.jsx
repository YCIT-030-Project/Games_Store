import React from "react";
import { useNavigate } from "react-router-dom";

const SearchResults = ({ result }) => {
  const navigate = useNavigate();

  const _id = result.title;
  const idString = (_id) => {
    return String(_id).toLowerCase().split(" ").join("+");
  };
  const rootId = idString(_id);

  const handleDetails = () => {
    navigate(`/product/${rootId}`, {
      state: {
        item: result,
      },
    });
  };

  return (
    <div
      onClick={handleDetails}
      className="p-2 hover:bg-gray-200 cursor-pointer"
    >
      {result.title}
    </div>
  );
};

export default SearchResults;
