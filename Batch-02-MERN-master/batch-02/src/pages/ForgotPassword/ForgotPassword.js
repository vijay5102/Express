import React, { useState } from "react";
import "./ForgotPassword.css";

const ForgotPassword = () => {
  const [step, setStep] = useState(1); // Step 1: Email, Step 2: OTP & New Password
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Handle Email Submission
  const handleEmailSubmit = (e) => {
    e.preventDefault();
    // Mock OTP sent alert
    alert(`OTP sent to ${email}.`);
    setStep(2); // Move to Step 2
  };

  // Handle Password Reset Submission
  const handlePasswordReset = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    if (otp !== "123456") { // Mock OTP validation
      alert("Invalid OTP!");
      return;
    }
    alert("Password changed successfully!");
    // Reset the form
    setEmail("");
    setOtp("");
    setNewPassword("");
    setConfirmPassword("");
    setStep(1); // Reset to Step 1
  };

  return (
    <div className="forgot-password-container">
      {step === 1 ? (
        <>
          <h1>Forgot Password?</h1>
          <p>Enter your email to receive an OTP.</p>
          <form onSubmit={handleEmailSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              className="forgot-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="forgot-submit-button">
              Send OTP
            </button>
          </form>
        </>
      ) : (
        <>
          <h1>Reset Password</h1>
          <p>Enter the OTP and your new password.</p>
          <form onSubmit={handlePasswordReset}>
            <input
              type="text"
              placeholder="Enter OTP"
              className="forgot-input"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="New Password"
              className="forgot-input"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="forgot-input"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <button type="submit" className="forgot-submit-button">
              Reset Password
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default ForgotPassword;
