import { BrowserRouter, MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import BreadList from "./BreadList";

describe("Bread UI", () => {
  const breads = [
    {
      breadName: "Pandesal",
      price: 3,
      imageURL: "./pandesal.png",
    },
    {
      breadName: "Ensaymada",
      price: 6,
      imageURL: "./ensaymada.png",
    },
  ];
  render(<BreadList breads={breads} />);

  it("renders all of the fetched breads", () => {
    expect(
      screen.getByRole("heading", { name: /Pandesal/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /Ensaymada/i })
    ).toBeInTheDocument();
  });
});
