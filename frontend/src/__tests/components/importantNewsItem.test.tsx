import { screen, render, wrapWithRouter } from "../utils/renderWithProvider";
import { article } from "../mocks/article";
import ImportantNewsItem from "../../components/importantNewsItem";

test("Checks for article title and img in single element", () => {
  const { getByText } = render(wrapWithRouter(ImportantNewsItem, { article }));
  getByText(/Catchy title/i);
  screen.getByAltText(article.topic);
});
