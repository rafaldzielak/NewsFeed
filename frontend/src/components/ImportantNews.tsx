import React from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import "./important-news.scss";
import ImportantNewsItem from "./importantNewsItem";
import Loader from "./Loader";
import FadeIn from "react-fade-in";
import SingleArticleModal from "./SingleArticleModal";
import { useDispatch } from "react-redux";
import { openModal, closeModal } from "../state/actions/newsActions";

const ImportantNews = () => {
  const { articles, loading, error, article } = useTypedSelector((state) => {
    console.log(state.news);
    return state.news;
  });
  const dispatch = useDispatch();
  console.log(articles);

  const closeModalOnSite = () => {
    dispatch(closeModal());
  };
  return (
    <>
      {articles && article && (
        <SingleArticleModal closeAction={closeModalOnSite} article={article} index={0} />
      )}
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
