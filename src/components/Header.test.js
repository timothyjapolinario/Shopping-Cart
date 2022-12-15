import Header from "./Header";
import { render, screen } from "@testing-library/react";

import { BrowserRouter } from "react-router-dom";
describe("Header Component", () => {
  it("renders header component", () => {
    render(<Header />, { wrapper: BrowserRouter });
    expect(screen.getByRole("heading").textContent).toEqual(".Bakery");
  });
});
