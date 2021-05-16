import "./single-article.scss";
import React, { useRef } from "react";
import { Article } from "../state/actionInterfaces/newsActionInterfaces";
import OutsideAlerter from "../hooks/OutsideAlerter";
import FadeIn from "react-fade-in";
import { VscChromeClose } from "react-icons/vsc";

interface SingleArticleModalProps {
  article: Article;
  index: number;
  closeAction?: any;
}

const SingleArticleModal: React.FC<SingleArticleModalProps> = ({ article, closeAction }) => {
  const articleRef = useRef<HTMLDivElement>(null);
  return (
    <FadeIn transitionDuration={500} className='modal'>
      {article && (
        <article ref={articleRef}>
          <p className='close-modal'>
            <VscChromeClose className='icon' />
          </p>

          <OutsideAlerter outSideElementClickAction={closeAction}>
            <div>
              <h1>{article.title}</h1>
              <img src={article.media} alt='' />
              <p>
                <span className='content'>{article.summary}</span>
              </p>

              <footer>
                <span>
                  View full content{" "}
                  <a target='_blank' rel='noreferrer' href={article.link}>
                    HERE
                  </a>{" "}
                </span>
                <span> Published on: {article.published_date}</span> <span> Author: {article.author}</span>
              </footer>
            </div>
          </OutsideAlerter>
        </article>
      )}
    </FadeIn>
  );
};

export default SingleArticleModal;
