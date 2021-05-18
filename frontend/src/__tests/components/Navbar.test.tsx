import Navbar from "../../components/Navbar";
import { wrapWithRouter, render, screen } from "../utils/renderWithProvider";

test("shows logo with text", () => {
  const { getByText, getByRole } = render(wrapWithRouter(Navbar));
  getByText(/megaphone/i);
  getByRole("img", { name: "logo" });
  screen.getByPlaceholderText(/search for news/i);
});
