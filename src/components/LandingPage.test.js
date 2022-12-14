import React from "react";
import { render, screen } from "@testing-library/react";
import LandingPage from "./LandingPage";

describe("Landing Page Component", () => {
  it("renders landing page", () => {
    render(<LandingPage />);

    const quote = screen.getByTestId("bakery-quote");

    expect(screen.getAllByRole("img")).toHaveLength(2);
    expect(quote).toBeTruthy();
  });
});
