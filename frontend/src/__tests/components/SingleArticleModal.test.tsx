import userEvent from "@testing-library/user-event";
import SingleArticleModal from "../../components/SingleArticleModal";
import { article } from "../mocks/article";
import { render, screen } from "../utils/renderWithProvider";

test("Article modal shows all the data correctly", async () => {
  render(<SingleArticleModal article={article} index={0} />);
  await screen.findByText(/Catchy title/i);
  await screen.findByText(/author: rafa/i);
  await screen.findByText(article.title);
  await screen.findByText(article.summary);
  await screen.findByText("Published on: " + article.published_date);
  expect(screen.getByText("HERE").closest("a")).toHaveAttribute("href", article.link);
});
