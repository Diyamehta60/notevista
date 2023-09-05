import React, { useState } from "react";
import signupimage from "./img/signup top image.jpg";
import { useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

function Signup() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const registerUser = async () => {
    setIsLoading(true);
    let email = document.getElementById("email").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    const response = await fetch(
      "https://notevista.onrender.com/api/v1/auth/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          username,
          password,
        }),
      }
    );

    const result = await response.json();
    setIsLoading(false);
    let token = result.token;

    localStorage.setItem("token", token);
    navigate("/");
  };
  return (
    <div className="signup-body">
      <div className="signup-container">
        {isLoading === true ? (
          <div>
            <ClipLoader color="#ffff" loading={isLoading} size={100} />
          </div>
        ) : (
          <form className="signup-form">
            <img src={signupimage} alt="Logo" className="signup-logo" />
            <div className="signup-form-group">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" name="username" required />
            </div>
            <div className="signup-form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="signup-form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" required />
            </div>
            <button
              type="button"
              className="signup-button"
              onClick={registerUser}
            >
              Sign Up
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Signup;
