import { Dispatch } from "redux";
import { NewsAction } from "../actionInterfaces/newsActionInterfaces";
import { NewsActionTypes } from "../constants";
import axios, { Method } from "axios";
import { NewsState } from "../actionInterfaces/newsActionInterfaces";

export const getNews = () => async (dispatch: Dispatch<NewsAction>) => {
  dispatch({ type: NewsActionTypes.GET_NEWS });
  const options = {
    method: "GET" as Method,
    url: "https://free-news.p.rapidapi.com/v1/search",
    params: { q: "finance", lang: "en" },
    headers: {
      "x-rapidapi-key": "e407261593msh6269d5d021d1260p1b205fjsn2f1646c5eeed",
      "x-rapidapi-host": "free-news.p.rapidapi.com",
    },
  };
  try {
    const { data } = await axios.request<NewsState>(options);
    dispatch({ type: NewsActionTypes.GET_NEWS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: NewsActionTypes.GET_NEWS_ERROR });
  }
};
