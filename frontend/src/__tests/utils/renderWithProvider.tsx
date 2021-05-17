import { render } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "../../state/store";

export const wrapWithRouter = (Component: React.FC<any>, props?: {}): JSX.Element => {
  return (
    <Router>
      <Component {...props} />
    </Router>
  );
};

const renderWithProvider = (component: JSX.Element, options?: {}) =>
  render(<Provider store={store}>{component}</Provider>, { ...options });

export * from "@testing-library/react";
export { renderWithProvider as render };
