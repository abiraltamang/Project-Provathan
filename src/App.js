import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages";
import Aboutus from "./pages/Aboutus";
import Upcomingevents from "./pages/Upcomingevents";
import OngoingEvents from "./pages/OngoingEvents";
import Layout from "./Layout/Layout";
import Categories from "./pages/Categories";
import Footer from "./components/Footer";
import Contactus from "./pages/Contactus";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import EventDetails from "./pages/EventDetails";
function App() {
  return (
    <BrowserRouter>
      <Layout />
      <Routes>
        ss
        <Route path="/" element={<Homepage />} />
        <Route path="/upcomingevents" element={<Upcomingevents />} />
        <Route path="/ongoingevents" element={<OngoingEvents />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/eventdetails" element={<EventDetails />} />
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
