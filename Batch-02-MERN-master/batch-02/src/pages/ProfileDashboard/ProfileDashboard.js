import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import "./ProfileDashboard.css";
import Header from "../../components/HeaderTwo/HeaderTwo";

const ProfileDashboard = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    headline: "",
    description: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          throw new Error("No token found, please log in again.");
        }

        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        console.log("Fetching user profile...");

        const response = await axios.get(
          "http://localhost:5000/api/users/profile",
          config
        );
        console.log("User profile data:", response.data);

        setUser({
          firstName: response.data.firstName || "",
          lastName: response.data.lastName || "",
          headline: response.data.headline || "",
          description: response.data.description || "",
        });
        setLoading(false);
      } catch (err) {
        console.error("Error fetching user data:", err);
        setError(err.message || "Error fetching user data.");
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        throw new Error("No token found, please log in again.");
      }

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.put(
        "http://localhost:5000/api/users/profile",
        user,
        config
      );

      console.log("Profile updated successfully:", response.data);
      alert("Profile updated successfully!");
    } catch (err) {
      console.error("Error saving user data:", err);
      alert("Error saving user data.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!user) {
    return <div>No user data found</div>;
  }

  return (
    <div className="profile-dashboard">
      {/* Header Section */}
      <Header />

      {/* Dashboard Content Section */}
      <div className="dashboard-content">
        {/* Sidebar Section */}
        <aside className="sidebar">
          <div className="profile-pic">
            <span className="user-icon">👤</span>
          </div>
          <h3 className="username">{user.firstName} {user.lastName}</h3>
          <ul className="sidebar-menu">
            <li>
              <NavLink
                to="/view-public-profile"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                View public profile
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/profile-page"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/photo"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Photo
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/subscription"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Subscription
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/privacy"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Privacy
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/close-account"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Close account
              </NavLink>
            </li>
          </ul>
        </aside>

        {/* Main Content Section */}
        <main className="profile-content">
          <h1>Public profile</h1>
          <p>Add information about yourself.</p>
          <div className="form-section">
            <label>Basics:</label>
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              value={user.firstName}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Second name"
              value={user.lastName}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="headline"
              placeholder="Headline"
              value={user.headline}
              onChange={handleInputChange}
            />
            <textarea
              name="description"
              placeholder="Description"
              value={user.description}
              onChange={handleInputChange}
            ></textarea>
            <p className="note">
              Add a professional headline like "Instructor at LearnAble" or
              "Student." Links and coupon codes are not permitted in this section.
            </p>
            <button
              className="save-button"
              onClick={handleSave}
              disabled={saving}
            >
              {saving ? "Saving..." : "Save"}
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProfileDashboard;
