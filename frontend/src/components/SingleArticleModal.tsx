import "./single-article.scss";
import React from "react";
import { Article } from "../state/actionInterfaces/newsActionInterfaces";

interface SingleArticleModalProps {
  article: Article;
  index: number;
}

const SingleArticleModal: React.FC<SingleArticleModalProps> = ({ article }) => {
  console.log(article);
  return (
    <div id='modal'>
      {article && (
        <article>
          <h1>{article.title}</h1>
          <img src={article.media} alt='' />
          <p>
            <span className='content'>{article.summary}</span>
          </p>

          <p>
            <span>
              View full content{" "}
              <a target='_blank' rel='noreferrer' href={article.link}>
                HERE
              </a>{" "}
              |
            </span>
            <span> Published on: {article.published_date}</span> | <span> Author: {article.author}</span>
          </p>
        </article>
      )}
    </div>
  );
};

export default SingleArticleModal;
