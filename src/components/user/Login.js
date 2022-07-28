import React from "react";
import Homeicon from "../reusable/Homeicon";
import { Link } from "react-router-dom";
import "./style.css";

const Login = () => {
  return (
    <div className="base-container">
      <div className="content">
        <div className="form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" placeholder="username" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="password" />
          </div>
        </div>
      </div>
      <div className="footer">
        <button type="button" className="send-btn top-btn">
          Login
        </button>
        <Link to="/register">
          <button type="button" className="send-btn">
            Register
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
