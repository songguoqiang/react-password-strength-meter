import React from "react";
import "./PasswordStrengthMeter.css";
import zxcvbn from "zxcvbn";

function createPasswordLabel(result) {
  switch (result.score) {
    case 0:
      return "Weak";
    case 1:
      return "Weak";
    case 2:
      return "Fair";
    case 3:
      return "Good";
    case 4:
      return "Strong";
    default:
      return "Weak";
  }
}

function PasswordStrengthMeter({ password }) {
  const testedResult = zxcvbn(password);
  const passwordStrength = createPasswordLabel(testedResult);

  return (
    <div className="password-strength-meter">
      <progress
        className={`password-strength-meter-progress strength-${passwordStrength}`}
        value={testedResult.score}
        max="4"
      />
      <br />
      <label className="password-strength-meter-label">
        {password && (
          <>
            <strong>Password strength:</strong> {passwordStrength}
          </>
        )}
      </label>
    </div>
  );
}

export default PasswordStrengthMeter;
