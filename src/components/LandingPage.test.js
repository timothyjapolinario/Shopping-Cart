import React from "react";
import { render, screen } from "@testing-library/react";
import LandingPage from "./LandingPage";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
describe("Landing Page Component", () => {
  it("renders landing page", () => {
    render(<LandingPage />, { wrapper: BrowserRouter });

    const quote = screen.getByTestId("bakery-quote").textContent;

    expect(screen.getAllByRole("img")).toHaveLength(2);
    expect(quote).toMatch("Some catchy and tasty quote.");
  });

  it("has correct links to other pages", async () => {
    render(<LandingPage />, { wrapper: BrowserRouter });
    expect(screen.getByTestId("bread-navigation").href).toMatch("/shop/breads");
    expect(screen.getByTestId("coffee-navigation").href).toMatch(
      "/shop/coffee"
    );
  });
});
