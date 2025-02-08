import React, { useState } from "react";
import "../Styles/loginsignup.css"; // Import the CSS file
import { Link } from "react-router-dom";

const LoginSignup = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="auth-container">
      <div className={`form-box ${isSignUp ? "signup-mode" : "signin-mode"}`}>
        {/* Sign In Form */}
        {!isSignUp && (
          <div className="form">
            <h2 className="form-title">Sign In</h2>
            <div className="input-group">
              <input
                type="email"
                className="input-field"
                placeholder="Email"
                required
              />
            </div>
            <div className="input-group">
              <input
                type="password"
                className="input-field"
                placeholder="Password"
                required
              />
            </div>
            <a href="#" className="forgot-password">
              Forgot your password?
            </a>
            <Link to="/" className="btn">
              Sign In
            </Link>
            <p className="switch-text">
              Don't have an account?{" "}
              <span className="toggle-link" onClick={toggleForm}>
                Sign Up
              </span>
            </p>
          </div>
        )}

        {/* Sign Up Form */}
        {isSignUp && (
          <div className="form">
            <h2 className="form-title">Sign Up</h2>
            <div className="input-group">
              <input
                type="text"
                className="input-field"
                placeholder="Name"
                required
              />
            </div>
            <div className="input-group">
              <input
                type="email"
                className="input-field"
                placeholder="Email"
                required
              />
            </div>
            <div className="input-group">
              <input
                type="password"
                className="input-field"
                placeholder="Password"
                required
              />
            </div>
            <Link to="/" className="btn">
              Signup
            </Link>
            <p className="switch-text">
              Already have an account?{" "}
              <span className="toggle-link" onClick={toggleForm}>
                Sign In
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginSignup;
