import React from "react";
import Footer from "./Footer";
import { render, screen } from "@testing-library/react";


test("Footer should be visible", () => {
  render(<Footer />)
  const tag = screen.getByTestId(/footer/i);
  expect(tag).toBeVisible();
})

test("Should test if columns are present", () => {
  render(<Footer />);

  expect(screen.getByText(/neche catering/i)).toBeInTheDocument();
  expect(screen.getByText("Opening hours")).toBeInTheDocument();
  expect(screen.getByText(/Location/i)).toBeInTheDocument();
  expect(screen.getByText(/Email/i)).toBeInTheDocument();
  expect(
    screen.getByText(/About the Chef/i)
  ).toBeInTheDocument();
  expect(
    screen.getByText(/Contact/i)
  ).toBeInTheDocument();
});
