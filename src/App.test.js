import React from "react";
import { render, fireEvent } from "react-testing-library";
import App from "./App";

const mockPasswordStrengthMeter = jest.fn();
jest.mock("./component/PasswordStrengthMeter", () => {
  return ({ password }) => {
    mockPasswordStrengthMeter(password);
    return <div>The password is {password}</div>;
  };
});

afterEach(() => {
  mockPasswordStrengthMeter.mockClear();
});

test("the password input field is empty at start", () => {
  const { container } = render(<App />);
  const inputField = container.querySelector("input[type=password]");
  expect(inputField.value).toBe("");
});

test("the PasswordStrengthMeter component should receive empty password at start", () => {
  render(<App />);
  expect(mockPasswordStrengthMeter).toBeCalledWith("");
});

test("the PasswordStrengthMeter component should receive the password that user fills in", () => {
  const { container } = render(<App />);

  expect(mockPasswordStrengthMeter).toBeCalledWith("");
  mockPasswordStrengthMeter.mockClear();

  const inputField = container.querySelector("input[type=password]");
  const password = "new password";
  fireEvent.change(inputField, { target: { value: password } });

  expect(mockPasswordStrengthMeter).toBeCalledWith(password);
});
