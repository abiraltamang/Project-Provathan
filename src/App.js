import React from "react";
import Navbar from "./components/Navbar";
import Login from "./components/user/Login";
import Register from "./components/user/Register";
import { BrowserRouter, Route, Routes, Router } from "react-router-dom";
import Contactus from "./components/contactus/Contactus";
import Homepage from "./components/Homepage";
import Aboutus from "./components/aboutus/Aboutus";
import UpcomingEvents from "./components/UpcomingEvents";
import Layout from "./components/Layout/Layout";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
function App() {
  return (
    <BrowserRouter>
      <Layout />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/upcomingevents" element={<UpcomingEvents />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/contactus"
          element={<Contactus image="/images/bg1.jpg" />}
        />
        <Route path="/aboutus" element={<Aboutus />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
