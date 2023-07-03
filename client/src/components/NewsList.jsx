import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsItem from "./NewsItem";

const NewsList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const res = await axios.get(
        `https://newsapi.org/v2/everything?domains=pcmag.com&apiKey=${
          import.meta.env.VITE_API_NEWSAPI
        }`
      );
      setArticles(res.data.articles);
    };
    getArticles();
  }, []);
  return (
    <div>
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
