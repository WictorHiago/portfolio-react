import React from 'react';
import { BsFacebook, BsTwitter, BsWhatsapp } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { GiPositionMarker } from 'react-icons/gi';
/* CSS */
import stylesContact from '../assets/css/Contact.css';
const Contact = () => {
   return (
      <div className="contact-container" style={stylesContact}>
         <div className="email-addres">
            <div className="email-addres-content">
               <MdEmail className="social-media-icons" />
               <h3>wictor.hsc@gmail.com</h3>
            </div>
            <div className="email-addres-content">
               <GiPositionMarker className="social-media-icons" />
               <a href="https://goo.gl/maps/tCz91ESFvMK72PNf8" target="blank">
                  <h3>Manaus, Amazonas</h3>
               </a>
            </div>
         </div>
         <div className="social-media-box">
            <div>
               <span>
                  <BsFacebook className="social-media-icons" />
               </span>
            </div>
            <div>
               <span>
                  <BsTwitter className="social-media-icons" />
               </span>
            </div>
            <div>
               <span>
                  <a
                     href="https://www.linkedin.com/in/wictor-hiago-souza-861828103/"
                     target="blank"
                  >
                     <FaLinkedinIn className="social-media-icons" />
                  </a>
               </span>
            </div>
            <div>
               <span>
                  <BsWhatsapp className="social-media-icons" />
               </span>
            </div>
         </div>
      </div>
   );
};

export default Contact;
