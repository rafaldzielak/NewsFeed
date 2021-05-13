import { NewsActionTypes } from "../constants";
import { NewsAction, NewsState } from "../actionInterfaces/newsActionInterfaces";

const initialState: NewsState = {
  page: 1,
  articles: [],
  per_page: 25,
  total_pages: 0,
  total_hits: 0,
  loading: false,
  error: null,
  _id: "",
  status: "",
};

const newsReducer = (state: NewsState = initialState, action: NewsAction) => {
  switch (action.type) {
    case NewsActionTypes.GET_NEWS:
      return { ...(state as NewsState), loading: true, articles: [] };
    case NewsActionTypes.GET_NEWS_SUCCESS:
      return { ...(action.payload as NewsState), loading: false };
    case NewsActionTypes.GET_NEWS_ERROR:
      return { ...(state as NewsState), error: action.payload, loading: false };
    default:
      return state;
  }
};
export default newsReducer;
