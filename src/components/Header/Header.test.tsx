import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Header } from "./Header";
test("renders user name and role", () => {
  // Render the Header component
  render(<Header links={[]} />);

  // Assert that the user name and role are rendered correctly
  expect(screen.getByText(/User Name : Jared Blouse/i)).toBeInTheDocument();
  expect(screen.getByText(/Role : Admin/i)).toBeInTheDocument();
});

test("clicking logout button calls handleLogout", () => {
  // Mock the handleLogout function
  const handleLogout = jest.fn();

  // Click the logout button
  fireEvent.click(screen.getByText(/Logout/i));

  // Assert that the handleLogout function is called
  expect(handleLogout).toHaveBeenCalled();
});

// Add more test cases as needed
