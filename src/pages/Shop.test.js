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

  it("filters bread only when bread filter button is clicked", async () => {
    render(<Shop />, { wrapper: BrowserRouter });

    await userEvent.click(screen.getByTestId("bread-filter"));
    expect(
      screen.queryByRole("heading", { name: "Croissant" })
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("heading", { name: "French Bread" })
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("heading", { name: "Garlic Bread" })
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("heading", { name: "Loaf" })
    ).not.toBeInTheDocument();

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
