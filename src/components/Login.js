import React, { useState } from "react";
import loginimage from "./img/login image.jpg";
import { Link, useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const loginUser = async () => {
    setIsLoading(true);
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    const response = await fetch(
      "https://notevista.onrender.com/api/v1/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
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
    <div>
      <div className="login-body">
        <div className="login-container">
          {isLoading === true ? (
            <div>
              <ClipLoader color="#ffff" loading={isLoading} size={100} />
            </div>
          ) : (
            <form className="login-form">
              <img src={loginimage} alt="Logo" className="login-logo" />
              <div className="login-form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="login-form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" required />
              </div>
              <div className="buttons">
                <button
                  type="button"
                  onClick={loginUser}
                  className="login-button"
                >
                  Login
                </button>
                <Link to="/signup">Not a member?</Link>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
