import { NewsActionTypes } from "../constants";

export interface Article {
  author: string;
  link: string;
  media: string;
  summary: string;
  title: string;
  topic: string;
  published_date: string;

  [x: string]: string | number;
}

export interface NewsState {
  _id: string;
  page: number;
  articles: Article[];
  per_page: number;
  total_pages: number;
  total_hits: number;
  status: string;
  loading?: boolean;
  error?: string | null;
}

interface GetNews {
  type: NewsActionTypes.GET_NEWS;
}
interface GetNewsSuccess {
  type: NewsActionTypes.GET_NEWS_SUCCESS;
  payload: {};
}
interface GetNewsError {
  type: NewsActionTypes.GET_NEWS_ERROR;
  payload: string;
}

export type NewsAction = GetNews | GetNewsSuccess | GetNewsError;
