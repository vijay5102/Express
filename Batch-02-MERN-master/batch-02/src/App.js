import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import AboutUs from "./pages/AboutUs/AboutUs";
import LoginSignup from "./pages/LoginSignup/LoginSignup";
import SignUpLogin from "./pages/SignupLogin/SignupLogin";
import ProfileDashboard from "./pages/ProfileDashboard/ProfileDashboard";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/loginsignup" element={<LoginSignup />} />
        <Route path="/signuplogin" element={<SignUpLogin />} />
        <Route path="/profile-page" element={<ProfileDashboard/>} />
        <Route path="/forgot-password" element={<ForgotPassword />}/>
      </Routes>
    </Router>
  );
}

export default App;

