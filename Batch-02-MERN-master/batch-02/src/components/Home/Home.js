import React from "react";
import "./Home.css";
import studentImage from "../../assets/images/student.jpg"; // Update with your image path

const Home = () => {
  return (
    <div className="hero">
      <div className="hero-image">
        <img src={studentImage} alt="Student Learning" />
      </div>
      <div className="hero-text">
        <h1>
          Increase your <span className="highlight">knowledge</span> &{" "}
          <span className="highlight2">employability</span> with globally
          recognized
          <span className="highlight"> Special Educational Needs Courses</span>
        </h1>
        <p>
          Discover a wide range of tailored learning resources designed to meet
          diverse special education needs. Explore engaging courses and tools
          that empower learners to grow at their own pace. Together, let's
          create an inclusive learning experience for everyone!
        </p>
        <button className="signup-btn">Sign Up For Free</button>
      </div>
    </div>
  );
};

export default Home;
