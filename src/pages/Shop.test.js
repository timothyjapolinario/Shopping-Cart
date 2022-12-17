import { getByRole, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Shop from "./Shop";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

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

  it("filters bread only when bread filter button is clicked", () => {
    render(<Shop />, { wrapper: BrowserRouter });

    userEvent.click(screen.getByTestId("bread-filter"));
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
      screen.queryByRole("heading", { name: "Caramel Macchiato" })
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("heading", { name: "Iced Americano" })
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("heading", { name: "Iced Cappucino" })
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("heading", { name: "Iced Matcha Green Latte" })
    ).not.toBeInTheDocument();
  });
});
