import React from "react";
import ProgressBar from "./ProgressBar";
import zxcvbn from "zxcvbn";

import "./PasswordStrengthMeter.css";

function getPasswordStrength(result) {
  switch (result.score) {
    case 0:
      return { text: "Weak", color: "red", percentage: "0" };
    case 1:
      return { text: "Weak", color: "red", percentage: "25" };
    case 2:
      return { text: "Fair", color: "yellow", percentage: "50" };
    case 3:
      return { text: "Good", color: "green", percentage: "75" };
    case 4:
      return { text: "Strong", color: "blue", percentage: "100" };
    default:
      return { text: "Weak", color: "red", percentage: "0" };
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
