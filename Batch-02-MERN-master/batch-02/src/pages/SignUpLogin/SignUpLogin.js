import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUpLogin.css";

const SignUpLogin = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle Sign-Up Form Submission
  const handleSignUpSubmit = async (e) => {
    e.preventDefault();

    const data = { name, email, password };

    try {
      const res = await fetch("https://learnable-vuty.onrender.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();

      if (res.ok) {
        alert("Signup successful!");
        console.log(result);
        navigate("/loginsignup"); // Redirect to LoginSignUp page after success
      } else {
        alert(result.message || "Signup failed!");
      }
    } catch (err) {
      console.error("Error signing up:", err);
      alert("Error during signup! Please try again later.");
    }
  };

  const handleLoginClick = () => {
    navigate("/loginsignup"); // Redirect to the LoginSignUp page
  };

  return (
    <div className="signup-login-container">
      <div className="signup-section">
        <h1>
          <span className="sign-text">Sign</span> <span className="up-text">Up</span>
        </h1>
        <form onSubmit={handleSignUpSubmit}>
          <input
            type="text"
            placeholder="Name"
            className="input-field"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="signup-button">
            Sign Up
          </button>
        </form>
      </div>
      <div className="login-section">
        <h1>Welcome back to Learnable!</h1>
        <p>Already have an account?</p>
        <button className="login-button" onClick={handleLoginClick}>
          Log In
        </button>
      </div>
    </div>
  );
};

export default SignUpLogin;
