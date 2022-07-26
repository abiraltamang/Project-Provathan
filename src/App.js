import React from "react";
import Navbar from "./components/Navbar";
import Login from "./components/user/Login";
import Register from "./components/user/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contactus from "./components/contactus/Contactus";
import Homepage from "./components/Homepage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contactus" element={<Contactus image="/images/bg1.jpg" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
