import React from 'react'
import { FiPhoneCall, FiClock } from "react-icons/fi";
import { SiGmail } from "react-icons/si";
import { GoLocation } from "react-icons/go";
import { NavLink } from "react-router-dom";

const ContactPage = () => {
  return (
    <div>
          <div>
      <div className="heading-address">
        <NavLink href="">Home |&nbsp;</NavLink>
        <NavLink href="">
          <b>Contact</b>
        </NavLink>
        <h2 className="heading-name">Contact US</h2>

        <div className="contact-left-section">
          <div className="leftnav">
            <a href="">Let's Talk</a>
            <h2 className="contact-get">Get In Touch With Us!</h2>

            <div className="contact-link">
              <div className="navlinks">
                <FiPhoneCall className="mylogos" />
                <div className="linkitems">
                  <a href="">Talk with us!</a>
                  <h1 className="contacth1">+91 0123456789</h1>
                </div>
              </div>
              <br />
              <hr />

              <div className="navlinks">
                <SiGmail className="mylogos" />
                <div className="linkitems">
                  <a href="">Quick Email</a>
                  <h1 className="contacth1">info@edemand.com</h1>
                </div>
              </div>
              <br />
              <hr />

              <div className="navlinks">
                <GoLocation className="mylogos" />
                <div className="linkitems">
                  <a href="">Office Address</a>
                  <h1 className="contacth1">
                    Time Square Empire Time <br />
                    Square Empire, Bhuj, Gujarat <br />
                    370001
                  </h1>
                </div>
              </div>
              <br />
              <hr />

              <div className="navlinks">
                <FiClock className="mylogos"/>
                <div className="linkitems">
                  <a href="">Opening Time</a>
                  <h1 className="contacth1">9.00 AM to 7.00 PM</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="rightform">
            <form action="">
              <div className="form-flex flex">
                <div className="form-name">
                  <label htmlFor="">Name</label>
                  <br />
                  <input type="text" placeholder="Enter Name" />
                </div>

                <div className="form-email">
                  <label htmlFor="">Email</label>
                  <br />
                  <input type="text" placeholder="Enter Name" />
                </div>
              </div>

              <div className="form-subject">
                <label htmlFor="">Subject:</label>
                <br />
                <input type="text" placeholder="Enter Subject" />
              </div>

              <div className="form-message">
                <label htmlFor="">Message:</label>
                <br />
                <textarea name="" id="" cols="80" rows="10" placeholder="Enter Message..."></textarea>
              </div>
              <button type="submit" className="form-submit">Submit Message</button>
            </form>
          </div>
        </div>

        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d916.5739699087786!2d69.64347052923516!3d23.232317799052936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39511f68d5ef0e3b%3A0xfee02ff84c109171!2sTime%20square%20Empire%20parking!5e0!3m2!1sen!2sin!4v1679560460717!5m2!1sen!2sin"
            width="100%"
            height="800"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <br />
        </div>
      </div>
    </div>
    </div>
  )
}

export default ContactPage