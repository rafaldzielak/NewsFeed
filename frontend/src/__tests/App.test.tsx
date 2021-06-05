import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import App from "../App";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
Enzyme.configure({ adapter: new Adapter() });

test("shows both news on grid", async () => {
  render(<App />);
  await screen.findByText(/title 1/i);
  await screen.findByAltText(/Topic 1/i);
  await screen.findByText(/title 2/i);
  await screen.findByAltText(/Topic 2/i);
});

test("Modal shows on tile click", async () => {
  render(<App />);
  const title1 = await screen.findByText(/title 1/i);
  userEvent.click(title1);
  screen.getByText(/summary 1/i);
});

test("Modal closes on X click", async () => {
  render(<App />);
  await openAndCloseModalCheck("Title 1", "Short summary 1");
});

test("Second modal can be opened and closed after closing first one", async () => {
  render(<App />);
  await openAndCloseModalCheck("Title 1", "Short summary 1");
  await openAndCloseModalCheck("Title 2", "Short summary 2");
});

const openAndCloseModalCheck = async (title: string, summary: string) => {
  const titleHeader = await screen.findByText(title);
  userEvent.click(titleHeader);
  screen.getByText(summary);
  const closeBtn = screen.getByTitle("close-icon");
  userEvent.click(closeBtn);
  expect(screen.queryByText(summary)).toBeFalsy();
};
