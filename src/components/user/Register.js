import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { useState } from "react";

const axios = require('axios');

const Register = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8000/newUser', {
      data: inputs
    }).then((response) => {
      console.log(response.data);
    });
  };
    
  return (
    <div className="base-container">
      <div className="content">
        <form>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
             type="text"
             name="username"
             placeholder="username"
             value={inputs.username || ""} 
             onChange={handleChange}/>

            <label htmlFor="email">Email</label>
            <input
             type="email"
             name="email"
             placeholder="email"
             value={inputs.email || ""} 
             onChange={handleChange}/>

            <label htmlFor="password">Password</label>
            <input
             type="password"
             name="password" 
             placeholder="password"
             value={inputs.password || ""} 
             onChange={handleChange}/>
          </div>
          <div className="footer">
            <button type="submit" onClick={handleSubmit} className="send-btn top-btn">
              Register
            </button>
            <Link to="/login">
              <button type="button" className="send-btn">
                Login
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;