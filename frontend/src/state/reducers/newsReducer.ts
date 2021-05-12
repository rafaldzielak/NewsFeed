import { NewsActionTypes } from "../constants";
import { NewsAction, NewsState } from "../actionInterfaces/newsActionInterfaces";

const initialState: NewsState = {
  page: 1,
  articles: [],
  per_page: 25,
  total_pages: 0,
  total_hits: 0,
  loading: false,
  _id: "",
};

const newsReducer = (state: NewsState = initialState, action: NewsAction) => {
  switch (action.type) {
    case NewsActionTypes.GET_NEWS:
      return { ...(state as NewsState), loading: true };
    case NewsActionTypes.GET_NEWS_SUCCESS:
      return { ...(action.payload as NewsState), loading: false };
    default:
      return state;
  }
};
export default newsReducer;
