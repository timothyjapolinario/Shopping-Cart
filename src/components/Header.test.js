import Header from "./Header";
import { render, screen } from "@testing-library/react";
describe("Landing Page Component", () => {
  it("renders landing page", () => {
    render(<Header />);
    expect(screen.getByRole("heading").textContent).toBeTruthy();
  });
});
