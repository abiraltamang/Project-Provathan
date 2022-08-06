import React from "react";
import Homeicon from "../reusable/Homeicon";
import { Link } from "react-router-dom";
import "./style.css";
import { useState } from "react";

const axios = require('axios');

const Login = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8000/login', {
      data: inputs
    }).then((response) => {
      console.log(response.data);
    });
  };

  return (
<<<<<<< HEAD
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
=======
      <div className="base-container">
        <div className="content">
          <form>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text"
               name="username"
               placeholder="username"
               value={inputs.username || ""} 
               onChange={handleChange}/>

              <label htmlFor="password">Password</label>
              <input type="password"
               name="password"
               placeholder="password"
               value={inputs.password || ""} 
               onChange={handleChange}/>
               
            </div>
            <div className="footer">
              <button type="submit" onClick={handleSubmit} className="send-btn top-btn">
                Login
              </button>
            <Link to="/register">
              <button type="button" className="send-btn">
                Register
              </button>
            </Link>
          </div>
          </form>
>>>>>>> e23f9f97166913edb5b81f75e9a841890907ff65
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
