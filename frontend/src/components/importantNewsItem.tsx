import React from "react";
import "./important-news.scss";
import { Article } from "../state/actionInterfaces/newsActionInterfaces";
import { Link } from "react-router-dom";
import { openModal } from "../state/actions/newsActions";
import { useDispatch } from "react-redux";
interface ImportantNewsItemProps {
  article: Article;
  index: number;
}

const ImportantNewsItem: React.FC<ImportantNewsItemProps> = ({ article, index }) => {
  const dispatch = useDispatch();
  return (
    <Link
      onClick={() => dispatch(openModal(article))}
      to='/'
      className={"grid-area" + (index === 0 ? " large" : "") + (index === 1 ? " wide" : "")}>
      <img src={article.media} alt={article.topic} />
      <span className='title'>{article.title}</span>
    </Link>
  );
};

export default ImportantNewsItem;
