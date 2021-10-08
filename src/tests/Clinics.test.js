import React from "react";
import { render as rtlRender, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../store/index";
import Clinics from "../pages/Clinics";
import { BrowserRouter } from "react-router-dom";

const render = (component, { route = "/" } = {}) => {
  window.history.pushState({}, "Clinic page test", route);
  return rtlRender(<Provider store={store}>{component}</Provider>, {
    wrapper: BrowserRouter,
  });
};

describe("Clinics components", () => {
  test("renders a clinics page", () => {
    render(<Clinics />);

  });
});
