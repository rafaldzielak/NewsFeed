import React, { JSXElementConstructor } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import "./important-news.scss";
import ImportantNewsItem from "./importantNewsItem";
import Loader from "./Loader";
import FadeIn from "react-fade-in";

const ImportantNews = () => {
  const { articles, page, per_page, total_hits, total_pages, loading, error } = useTypedSelector((state) => {
    console.log(state.news);
    return state.news;
  });
  console.log(articles);
  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <h1 className='error'>
          {error} <br /> Please try again.
        </h1>
      ) : (
        <FadeIn transitionDuration={800}>
          <section id='important'>
            {articles &&
              articles.map((article, index) => (
                <ImportantNewsItem key={article._id} index={index} article={article} />
              ))}
          </section>
        </FadeIn>
      )}
    </>
  );
};

export default ImportantNews;
