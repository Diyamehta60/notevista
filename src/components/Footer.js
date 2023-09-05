import React, { useEffect } from "react";
import facebook from "./img/facebooks.png";
import twitter from "./img/twitter.png";
import instagram from "./img/instagram.png";
import telegram from "./img/Telegram.jpg";
import linkedin from "./img/linkedin.png";
import { useNavigate } from "react-router-dom";

import logo from "./logo.png";

function Footer() {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);
  return (
    <div>
      <footer>
        <div className="footer-logo">
          <img src={logo} alt="NoteVista Logo" />
        </div>

        <div className="contact-info">
          <p>Contact Person: Diya Mehta</p>
          <p>
            Email:{" "}
            <a href="mailto:labdhimehta4@gmail.com">labdhimehta4@gmail.com</a>
          </p>
          <p>@diyamehta18</p>
        </div>
        <div className="address">
          <p>Address: Jaipur, Rajasthan</p>
        </div>
        <div className="social-icons">
          <a href="https://facebook.com/yourusername">
            <img src={facebook} alt="Facebook Icon" />
          </a>
          <a href="https://twitter.com/yourusername">
            <img src={twitter} alt="Twitter Icon" />
          </a>
          <a href="https://telegram.me/yourusername">
            <img src={telegram} alt="Telegram Icon" />
          </a>
          <a href="https://linkedin.com/in/yourusername">
            <img src={linkedin} alt="LinkedIn Icon" />
          </a>
          <a href="https://instagram.com/diyaamehta18?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D">
            <img src={instagram} alt="LinkedIn Icon" />
          </a>
        </div>
        <p>
          &copy; 2023 NoteVista.com. All rights reserved. | Privacy Policy |
          Terms of Service.
        </p>
      </footer>
    </div>
  );
}

export default Footer;
