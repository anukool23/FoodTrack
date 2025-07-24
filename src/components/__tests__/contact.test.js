import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact us", () => {
  test("should load contact us components", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  test("should load button inside contact us components", () => {
    render(<Contact />);

    const button = screen.getByText("Submit");
    expect(button).toBeInTheDocument();
  });

  test("should load input inside contact us components", () => {
    render(<Contact />);

    const input = screen.getByPlaceholderText("name");
    expect(input).toBeInTheDocument();
  });

  test("should load two input inside contact us components", () => {
    render(<Contact />);

    const inputBoxes = screen.getAllByRole("textbox");
    expect(inputBoxes.length).toBe(3);
  });
});
