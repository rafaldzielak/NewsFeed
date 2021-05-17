import { screen, render, wrapWithRouter } from "../utils/renderWithProvider";
import Navbar from "../../components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import { article } from "../mocks/article";
import ImportantNewsItem from "../../components/importantNewsItem";

test("shows logo with text", () => {
  const { getByText, getByRole } = render(wrapWithRouter(ImportantNewsItem, { article }));
  getByText(/Catchy title/i);
  const img = getByRole("img");
  screen.getByAltText(article.topic);
});
