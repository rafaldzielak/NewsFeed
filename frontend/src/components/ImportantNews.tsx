import React from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import "./important-news.scss";
import ImportantNewsItem from "./importantNewsItem";
import Loader from "./Loader";
import FadeIn from "react-fade-in";
import SingleArticleModal from "./SingleArticleModal";

const ImportantNews = () => {
  const { articles, loading, error } = useTypedSelector((state) => {
    console.log(state.news);
    return state.news;
  });
  console.log(articles);
  return (
    <>
      {articles && <SingleArticleModal article={articles[0]} index={0} />}
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
