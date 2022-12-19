import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import ProductInfo from "./ProductInfo";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    id: 1,
  }),
}));
describe("Product Info", () => {
  it("renders the right object passed onto it", () => {
    render(<ProductInfo product />, { wrapper: BrowserRouter });

    expect(
      screen.getByRole("heading", { name: "Croissant" })
    ).toBeInTheDocument();
  });
});
