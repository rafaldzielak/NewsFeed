import Navbar from "../../components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import { wrapWithRouter, render } from "../utils/renderWithProvider";

test("shows logo with text", () => {
  const { getByText, getByRole } = render(wrapWithRouter(Navbar));
  getByText(/megaphone/i);
  getByRole("img", { name: "logo" });
});
