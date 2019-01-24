import React from "react";
import PasswordStrengthMeter, {
  WEAK_PASSWORD_COLOR,
  FAIR_PASSWORD_COLOR,
  GOOD_PASSWORD_COLOR,
  STRONG_PASSWORD_COLOR,
  NO_PASSWORD_PERCENTAGE,
  WEAK_PASSWORD_PERCENTAGE,
  FAIR_PASSWORD_PERCENTAGE,
  GOOD_PASSWORD_PERCENTAGE,
  STRONG_PASSWORD_PERCENTAGE,
  WEAK_PASSWORD_TEXT,
  FAIR_PASSWORD_TEXT,
  GOOD_PASSWORD_TEXT,
  STRONG_PASSWORD_TEXT
} from "./PasswordStrengthMeter";

import { render } from "react-testing-library";
import { getNodeText } from "dom-testing-library";

test("it renders correctly when the password is empty", () => {
  const { container } = render(<PasswordStrengthMeter password="" />);
  const divForProgressBar = container.querySelector(".filler");

  expect(divForProgressBar).toHaveStyle(`
    background-color: ${WEAK_PASSWORD_COLOR};
    width: ${NO_PASSWORD_PERCENTAGE}%
  `);

  const passwordStrengthLabel = container.querySelector(
    ".password-strength-meter-label"
  );
  const passwordStrengthText = getNodeText(passwordStrengthLabel);
  expect(passwordStrengthText).toBe("");
});

test("it renders correctly when the password is weak", () => {
  const { container } = render(<PasswordStrengthMeter password="abc12" />);
  const divForProgressBar = container.querySelector(".filler");

  expect(divForProgressBar).toHaveStyle(`
    background-color: ${WEAK_PASSWORD_COLOR};
    width: ${WEAK_PASSWORD_PERCENTAGE}%
  `);

  const passwordStrengthLabel = container.querySelector(
    ".password-strength-meter-label"
  );
  expect(passwordStrengthLabel).toHaveTextContent(WEAK_PASSWORD_TEXT);
});

test("it renders correctly when the password is fair", () => {
  const { container } = render(
    <PasswordStrengthMeter password="todayisfr" />
  );
  const divForProgressBar = container.querySelector(".filler");

  expect(divForProgressBar).toHaveStyle(`
    background-color: ${FAIR_PASSWORD_COLOR};
    width: ${FAIR_PASSWORD_PERCENTAGE}%
  `);

  const passwordStrengthLabel = container.querySelector(
    ".password-strength-meter-label"
  );
  expect(passwordStrengthLabel).toHaveTextContent(FAIR_PASSWORD_TEXT);
});

test("it renders correctly when the password is good", () => {
  const { container} = render(
    <PasswordStrengthMeter password="youdonknow" />
  );
  const divForProgressBar = container.querySelector(".filler");

  expect(divForProgressBar).toHaveStyle(`
    background-color: ${GOOD_PASSWORD_COLOR};
    width: ${GOOD_PASSWORD_PERCENTAGE}%
  `);

  const passwordStrengthLabel = container.querySelector(
    ".password-strength-meter-label"
  );
  expect(passwordStrengthLabel).toHaveTextContent(GOOD_PASSWORD_TEXT);
});

test("it renders correctly when the password is strong", () => {
  const { container } = render(
    <PasswordStrengthMeter password="thebestpasswordinthisworld" />
  );
  const divForProgressBar = container.querySelector(".filler");

  expect(divForProgressBar).toHaveStyle(`
    background-color: ${STRONG_PASSWORD_COLOR};
    width: ${STRONG_PASSWORD_PERCENTAGE}%
  `);

  const passwordStrengthLabel = container.querySelector(
    ".password-strength-meter-label"
  );
  expect(passwordStrengthLabel).toHaveTextContent(STRONG_PASSWORD_TEXT);
});
