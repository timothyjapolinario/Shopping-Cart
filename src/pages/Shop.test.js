import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Shop from "./Shop";
import "@testing-library/jest-dom";
describe("Shop", () => {
  it("renders  coffee and breads", () => {
    render(<Shop />, { wrapper: BrowserRouter });

    expect(
      screen.getByRole("heading", { name: "Croissant" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "French Bread" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Garlic Bread" })
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Loaf" })).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: "Caramel Macchiato" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Iced Americano" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Iced Cappucino" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Iced Matcha Green Latte" })
    ).toBeInTheDocument();
  });
});
