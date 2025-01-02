import React from "react";
import { useNavigate } from "react-router-dom";
import "./HeaderTwo.css";
import logo from "../../assets/images/logo.png";

const HeaderTwo = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/profile-page");
  };

  const handleLogoClick = () => {
    navigate("/"); // Navigate to the welcome page
  };

  return (
    <header className="header">
      <div className="logo" onClick={handleLogoClick} style={{ cursor: "pointer" }}>
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
        👤
        </button>
      </div>
    </header>
  );
};

export default HeaderTwo;
