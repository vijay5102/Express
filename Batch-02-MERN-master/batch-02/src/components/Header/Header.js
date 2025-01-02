import React from "react";
import { useNavigate } from "react-router-dom"; // Add this line
import "./Header.css";
import logo from '../../assets/images/logo.png';

const Header = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/loginsignup");
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="LearnAble Logo" />
        <span>
          L<span className="highlight">EARN</span>A
          <span className="highlight2">BLE</span>
        </span>
      </div>
      <nav className="navbar">
        <a href="#courses">Courses</a>
        <a href="#tutorials">Tutorials</a>
        <a href="#practice">Practice</a>
      </nav>
      <div className="auth-buttons">
        <button className="login" onClick={handleButtonClick}>
          Log In / Sign Up
        </button>
      </div>
    </header>
  );
};

export default Header;
