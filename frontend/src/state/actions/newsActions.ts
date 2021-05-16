import { Dispatch } from "redux";
import { Article, NewsAction } from "../actionInterfaces/newsActionInterfaces";
import { NewsActionTypes } from "../constants";
import axios, { Method } from "axios";
import { NewsState } from "../actionInterfaces/newsActionInterfaces";

export const getNews =
  (query: string = "musk") =>
  async (dispatch: Dispatch<NewsAction>) => {
    dispatch({ type: NewsActionTypes.GET_NEWS });
    const options = {
      method: "GET" as Method,
      url: "https://free-news.p.rapidapi.com/v1/search",
      params: { q: query, lang: "en" },
      headers: {
        "x-rapidapi-key": "e407261593msh6269d5d021d1260p1b205fjsn2f1646c5eeed",
        "x-rapidapi-host": "free-news.p.rapidapi.com",
      },
    };
    try {
      const { data } = await axios.request<NewsState>(options);
      if (data.status === "ok") dispatch({ type: NewsActionTypes.GET_NEWS_SUCCESS, payload: data });
      else dispatch({ type: NewsActionTypes.GET_NEWS_ERROR, payload: data.status });
    } catch (error) {
      if (error.message === "Request failed with status code 429")
        dispatch({ type: NewsActionTypes.GET_NEWS_ERROR, payload: "Too many requests in 1 second." });
      else dispatch({ type: NewsActionTypes.GET_NEWS_ERROR, payload: error.message });
    }
  };

export const openModal = (article: Article) => async (dispatch: Dispatch<NewsAction>) => {
  dispatch({ type: NewsActionTypes.OPEN_MODAL, payload: article });
};
export const closeModal = () => async (dispatch: Dispatch<NewsAction>) => {
  dispatch({ type: NewsActionTypes.CLOSE_MODAL });
};
