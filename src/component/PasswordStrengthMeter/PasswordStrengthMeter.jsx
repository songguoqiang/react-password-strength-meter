import React from "react";
import ProgressBar from "./ProgressBar";
import zxcvbn from "zxcvbn";

import "./PasswordStrengthMeter.css";

export const WEAK_PASSWORD_COLOR = "red";
export const FAIR_PASSWORD_COLOR = "yellow";
export const GOOD_PASSWORD_COLOR = "green";
export const STRONG_PASSWORD_COLOR = "blue";

export const WEAK_PASSWORD_TEXT = "Weak";
export const FAIR_PASSWORD_TEXT = "Fair";
export const GOOD_PASSWORD_TEXT = "Good";
export const STRONG_PASSWORD_TEXT = "Strong";

export const NO_PASSWORD_PERCENTAGE = "0";
export const WEAK_PASSWORD_PERCENTAGE = "25";
export const FAIR_PASSWORD_PERCENTAGE = "50";
export const GOOD_PASSWORD_PERCENTAGE = "75";
export const STRONG_PASSWORD_PERCENTAGE = "100";

function getPasswordStrength(result) {
  switch (result.score) {
    case 0:
      return {
        text: WEAK_PASSWORD_TEXT,
        color: WEAK_PASSWORD_COLOR,
        percentage: NO_PASSWORD_PERCENTAGE
      };
    case 1:
      return {
        text: WEAK_PASSWORD_TEXT,
        color: WEAK_PASSWORD_COLOR,
        percentage: WEAK_PASSWORD_PERCENTAGE
      };
    case 2:
      return {
        text: FAIR_PASSWORD_TEXT,
        color: FAIR_PASSWORD_COLOR,
        percentage: FAIR_PASSWORD_PERCENTAGE
      };
    case 3:
      return {
        text: GOOD_PASSWORD_TEXT,
        color: GOOD_PASSWORD_COLOR,
        percentage: GOOD_PASSWORD_PERCENTAGE
      };
    case 4:
      return {
        text: STRONG_PASSWORD_TEXT,
        color: STRONG_PASSWORD_COLOR,
        percentage: STRONG_PASSWORD_PERCENTAGE
      };
    default:
      return {
        text: WEAK_PASSWORD_TEXT,
        color: WEAK_PASSWORD_COLOR,
        percentage: NO_PASSWORD_PERCENTAGE
      };
  }
}

function PasswordStrengthMeter({ password }) {
  const passwordStrength = getPasswordStrength(zxcvbn(password));

  return (
    <div className="password-strength-meter">
      <ProgressBar
        percentage={passwordStrength.percentage}
        color={passwordStrength.color}
      />
      <br />
      <label className="password-strength-meter-label">
        {password && (
          <>
            <strong>Password strength:</strong> {passwordStrength.text}
          </>
        )}
      </label>
    </div>
  );
}

export default PasswordStrengthMeter;
