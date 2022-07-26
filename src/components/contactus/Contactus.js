import React from "react";
import './style.css'
const Contactus =({image})=>{
    return (
    <>
    <div className="contact-section h-screen" style={{backgroundImage:`url(${image})`, backgroundRepeat: "no-repeat", backgroundSize:"cover"}}>
      <div className="contact-info">
        <div><i className="fas fa-map-marker-alt"></i>Balkumari, Lalitpur, Nepal</div>
        <div><i className="fas fa-envelope"></i>arbin47.koirala@gmail.com</div>
        <div><i className="fas fa-phone"></i>+977 9849645262</div>
        <div><i className="fas fa-clock"></i>Sun - Fri 8:00 AM to 5:00 PM</div>
      </div>
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form className="contact" action="" method="post">
          <input type="text" name="name" className="text-box" placeholder="Your Name" required/>
          <input type="email" name="email" className="text-box" placeholder="Your Email" required/>
          <textarea name="message" rows="5" placeholder="Your Message" required/> 
          <input type="submit" name="submit" className="send-btn" value="Send"/>
        </form>
      </div>
    </div>
    </>
    )
}
export default Contactus;