import { render, screen } from "@testing-library/react";
import Orders from "../Orders";

describe("Orders component", () => {
  beforeEach(() => {
    render(
      <Orders
        date="23/12/2022"
        status="On transit"
        quantity="20"
        name="Doughnut"
        price="450"
      />
    );
  })

  test("should test if the order component renders correctly", () => {
    const isPresent = screen.getByTestId("orders");
    expect(isPresent).toBeInTheDocument();
  });

  test("should test if date is present", () => {
    const dateSpan = screen.getByText("23/12/2022");
    expect(dateSpan).toBeInTheDocument();
  });
  
  test("should test if status is present", () => {
    const status = screen.getByText("On transit");
    expect(status).toBeInTheDocument();
  });
  
  test("should test if quantity and name is present", () => {
    const quantityname = screen.getByText("20 Doughnut");
    expect(quantityname).toBeInTheDocument();
  });

  test("should test if price is present", () => {
    const price = screen.getByText("₦450");
    expect(price).toBeInTheDocument();
  });

  test("should render all", () => {
    const dateSpan = screen.getByText("23/12/2022");
    const status = screen.getByText("On transit");
    const quantityname = screen.getByText("20 Doughnut");
    const price = screen.getByText("₦450");

    expect(dateSpan).toBeInTheDocument();
    expect(status).toBeInTheDocument();
    expect(quantityname).toBeInTheDocument();
    expect(price).toBeInTheDocument();
  })
});
