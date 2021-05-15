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
  article: null,
};

const newsReducer = (state: NewsState = initialState, action: NewsAction) => {
  switch (action.type) {
    case NewsActionTypes.GET_NEWS:
      return { ...(state as NewsState), loading: true, articles: [], error: null };
    case NewsActionTypes.GET_NEWS_SUCCESS:
      return { ...(action.payload as NewsState), loading: false, error: null };
    case NewsActionTypes.GET_NEWS_ERROR:
      return { ...(state as NewsState), error: action.payload, loading: false };
    case NewsActionTypes.OPEN_MODAL:
      return { ...(state as NewsState), article: action.payload };
    case NewsActionTypes.CLOSE_MODAL:
      return { ...(state as NewsState), article: null };
    default:
      return state;
  }
};
export default newsReducer;
