import React from "react";
import "./important-news.scss";
import { Article } from "../state/actionInterfaces/newsActionInterfaces";
import { Link } from "react-router-dom";

interface ImportantNewsItemProps {
  article: Article;
  index: number;
}

const ImportantNewsItem: React.FC<ImportantNewsItemProps> = ({ article, index }) => {
  return (
    <Link to='/' className={"grid-area" + (index === 0 ? " large" : "") + (index === 1 ? " wide" : "")}>
      <img src={article.media} alt='' />
      <span className='title'>{article.title}</span>
    </Link>
  );
};

export default ImportantNewsItem;
