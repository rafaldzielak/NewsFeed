import userEvent from "@testing-library/user-event";
import SearchComponent from "../../components/SearchComponent";
import { render, screen } from "../utils/renderWithProvider";

test("placeholder shows on element entry and text enters properly", () => {
  render(<SearchComponent />);
  const input = screen.getByPlaceholderText(/search for news/i) as HTMLInputElement;
  userEvent.type(input, "a");
  expect(input.value).toEqual("a");
  userEvent.type(input, "b");
  expect(input.value).toEqual("ab");
  screen.getByTitle("search-icon");
});
