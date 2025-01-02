import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import "./LoginSignup.css";

const LoginSignup = () => {
  const navigate = useNavigate();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // Handle Sign Up button click
  const handleSignUpClick = () => {
    navigate("/signuplogin"); // Redirect to the SignUpLogin page
  };

    // Handle Forgot Password link click
    const handleForgotPasswordClick = () => {
      navigate("/forgot-password"); // Redirect to the Forgot Password page
    };

  // Handle Login Form Submission
  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    const data = { email: loginEmail, password: loginPassword };

    try {
      const res = await fetch("/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();

      if (res.ok) {

        localStorage.setItem("token", result.token);
        console.log("Token saved:", result.token);
        
        alert("Login successful!");
        console.log(result);
        navigate("/profile-page"); // Redirect to dashboard after successful login
      } else {
        alert(result.message || "Login failed!");
      }
    } catch (err) {
      console.error("Error logging in:", err);
      alert("Error during login! Please try again later.");
    }
  };

  return (
    <div className="login-signup-container">
      <div className="login-section">
        <h1>
          <span className="log-text">Log</span> <span className="in-text">In</span>
        </h1>
        <form onSubmit={handleLoginSubmit}>
          <input
            type="email"
            placeholder="Email"
            className="input-field"
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="input-field"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
            required
          />
          <a 
            href="#forgot-password" 
            className="forgot-password-link"
            onClick={handleForgotPasswordClick}
          >
            Forgot your password?
          </a>
          <button type="submit" className="login-button">
            Log In
          </button>
        </form>
      </div>
      <div className="signup-section">
        <h1>Welcome to Learnable!</h1>
        <p>New here?</p>
        <button className="signup-button" onClick={handleSignUpClick}>
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default LoginSignup;
