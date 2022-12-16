import { render, screen } from "@testing-library/react";
import Shop from "./Shop";

describe("Shop", () => {
  it("renders  coffee and breads", () => {
    render(<Shop />);

    expect(
      screen.getByRole("heading", { name: "Croissant" })
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "French" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Garlic" })).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Muffins" })
    ).toBeInTheDocument();

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
      screen.getByRole("heading", { name: "Iced Match Green Latte" })
    ).toBeInTheDocument();
  });
});
