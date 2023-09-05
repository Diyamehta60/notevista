import React, { useState, useEffect } from "react";
import logo from "./logo.png";
import { Link , useLocation } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [auth, setAuth] = useState("");
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAuth("Logout");
    } else {
      setAuth("Login");
    }
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
  };

  return (
    <div>
      <div className="header">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className={`header-options ${isMenuOpen ? "active" : ""}`}>
          <Link to="/">Home</Link>
          <Link to="/courses">Course</Link>
          <Link to="/upload">Upload</Link>
          <Link to="/details">Details</Link>
          {auth === "Login" ? (
            <Link to="/login">Login</Link>
          ) : (
            <Link to="/login" onClick={handleLogout}>
              {auth}
            </Link>
          )}
        </div>
        <div
          className={`hamburger ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
