import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTypedSelector } from "../hooks/useTypedSelector";
import "./important-news.scss";
import ImportantNewsItem from "./importantNewsItem";

const ImportantNews = () => {
  const { articles, page, per_page, total_hits, total_pages, loading } = useTypedSelector((state) => {
    console.log(state.news);
    return state.news;
  });
  console.log(articles);
  return (
    <section id='important'>
      {articles.map((article, index) => (
        <ImportantNewsItem key={article.published_date} index={index} article={article} />
      ))}
    </section>
  );
};

export default ImportantNews;
