import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsItem from "./NewsItem";

const NewsList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    //using axios to fetch data from newsapi.org
    const getArticles = async () => {
      const res = await axios.get(
        `https://newsapi.org/v2/everything?domains=pcmag.com&pageSize=10&apiKey=${
          import.meta.env.VITE_API_NEWSAPI
        }`
      );
      //update the state of the articles
      setArticles(res.data.articles);
    };
    getArticles();
  }, []);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center mt-5">
      {articles.map((article) => {
        return (
          <NewsItem
            title={article.title}
            description={article.description}
            url={article.url}
            urlToImage={article.urlToImage}
          />
        );
      })}
    </div>
  );
};

export default NewsList;
