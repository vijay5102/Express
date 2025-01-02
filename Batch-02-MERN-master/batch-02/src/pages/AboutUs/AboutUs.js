// AboutUs.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-us">
      <header className="about-header">
        <h1>ABOUT US</h1>
        <p>
          <Link to="/about-us" className="breadcrumb">About Us</Link> | <Link to="/" className="breadcrumb">Home</Link>
        </p>
      </header>
      <main className="about-content">
        <section className="intro">
          <p>
            Welcome to Learnable, an innovative platform designed to make
            education accessible for all. Created with care and determination
            by a group of college students, Learnable is dedicated to empowering special children
            with the tools and resources they need to excel in their educational journey.
          </p>
        </section>
        <section className="mission">
          <h2>Our Mission</h2>
          <p>
            Our mission is to provide personalized learning materials,
            interactive resources, and a supportive environment tailored to meet diverse
            learning needs. At Learnable, we believe that every child is capable of remarkable
            growth when given the right opportunities and guidance.
          </p>
        </section>
        <section className="achievements">
          <h2>Our Achievements</h2>
          <ul>
            <li>
              200+ online courses carefully curated for diverse learning styles
              and abilities, covering a wide range of topics, from academics to life skills.
            </li>
            <li>
              8000+ Active Students: A vibrant and growing community of learners who inspire us
              every day with their dedication and progress.
            </li>
            <li>
              50+ Expert Teachers: Dedicated professionals with expertise in special education,
              ensuring each course is meaningful, engaging, and impactful.
            </li>
          </ul>
        </section>
        <section className="what-we-offer">
          <h2>What We Offer</h2>
          <ul>
            <li>
              Personalized learning paths tailored to individual learning needs,
              offering flexible pacing, interactive modules, and tailored recommendations for each student.
            </li>
            <li>
              Assistive features like text-to-speech, closed captions, and multilingual support
              to ensure every learner has a positive experience.
            </li>
            <li>
              Beyond academics, we emphasize life skills, emotional intelligence,
              and vocational training to prepare students for independence and success in the real world.
            </li>
          </ul>
        </section>
        <section className="future-plans">
          <h2>Our Future Plans</h2>
          <ul>
            <li>Introduce AI-driven insights to personalize learning even further.</li>
            <li>
              Collaborate with international organizations to integrate cultural
              courses and content.
            </li>
            <li>
              Launch interactive tools for parents and teachers to support and
              enrich students’/children’s efforts more effectively.
            </li>
          </ul>
        </section>
        <div className="cta">
          <button className="cta-button">GET STARTED</button>
        </div>
      </main>
      <footer className="about-footer">
        <div className="contact-info">
          <p><strong>Learnable</strong></p>
          <p>No.3, Fifth Floor, High Road, Old Officers Colony, Chennai.</p>
          <p>Email: help@learnabletech.org.in | Phone: +91-824-1234-765</p>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;
