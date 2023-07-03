import React from "react";

const NewsItem = ({ title, description, url, urlToImage }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={urlToImage} alt="" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          <a href={url} className="text-blue-500 hover:underline">
            {title}
          </a>
        </div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
};

export default NewsItem;
