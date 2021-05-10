import { render } from "@testing-library/react";
import Navbar from "../../components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";

test("shows logo with text", () => {
  const { getByText, getByRole } = render(
    <Router>
      <Navbar />
    </Router>
  );
  getByText(/megaphone/i);
  getByRole("img", { name: "logo" });
});
