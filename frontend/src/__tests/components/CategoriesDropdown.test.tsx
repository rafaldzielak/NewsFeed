import userEvent from "@testing-library/user-event";
import CategoriesDropdown from "../../components/CategoriesDropdown";
import { categories } from "../../mocks/categories";
import { render, screen } from "../utils/renderWithProvider";

test("Article modal shows all the data correctly", async () => {
  render(<CategoriesDropdown categories={categories} />);
  const categoriesDropdown = screen.getByText("Categories");
  expect(screen.queryByText("WORLD")).toBeFalsy();
  userEvent.click(categoriesDropdown);
  screen.getByText("WORLD");
});
