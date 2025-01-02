import React from "react";
import { useNavigate } from "react-router-dom";
import "./InfoSection.css";

const InfoSection = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/about-us"); // Navigate to the About Us page
  };

  return (
    <div className="info-section">
      <h2>Empower Yourself with Knowledge, Anytime, Anywhere.</h2>
      <button className="explore-btn" onClick={handleButtonClick}>
        Explore more about us
      </button>
      <div className="stats">
        <div className="stat">
          <h3>200 +</h3>
          <p>online courses</p>
        </div>
        <div className="stat">
          <h3>80K +</h3>
          <p>active students</p>
        </div>
        <div className="stat">
          <h3>50 +</h3>
          <p>expert teachers</p>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
