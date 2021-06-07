import "./search.scss";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getNews } from "../state/actions/newsActions";
import { GrSearch } from "react-icons/gr";

const SearchComponent = () => {
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  const searchHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(getNews(keyword));
  };
  return (
    <div className='search'>
      <form onSubmit={searchHandler}>
        <input
          type='text'
          placeholder='Search for news'
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          minLength={2}
        />
        <GrSearch
          className='search-icon'
          title='search-icon'
          onClick={() => {
            if (keyword.length >= 2) dispatch(getNews(keyword));
          }}
        />
      </form>
    </div>
  );
};

export default SearchComponent;
