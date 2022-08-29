import React, { useState } from 'react';
import ContactForm from './ContactForm';
import './ContactUsContent.css';
import email from './images/email-solid.png';
import phone from './images/phone.png';
import emailSmall from './images/email_solid_small.png';
import phoneSmall from './images/phone_solid_small.png';


function ContactUsContent() {

  const [desktop, setDisplay] = useState(true);

  const showDisplay = () => {
    if (window.innerWidth <= 700) {
      setDisplay(false)
    } else {
      setDisplay(true)
    }
  };

  window.addEventListener('resize', showDisplay);
  window.addEventListener('load', showDisplay);
  window.addEventListener('click', showDisplay);


  return (
    <div className='contact-container'>
      <div className='contact-us-header'>
        <h className='contact-us' >Contact Us</h>
        <p className='contact-explanation' >Contact us now to get help 
        creating a safer digital network. Complete the request form 
        below and our Secturion team will contact you shortly.
        </p>
      </div>
      {/* <div className='email-phone'>
        <img src={desktop ? email : emailSmall} /> <p>&nbsp;&nbsp;contact@secturion.com</p>
        <img src={desktop ? phone : phoneSmall} /> <p>&nbsp;&nbsp;(123)456-7890</p>
      </div> */}
      <div className='email-only'>
        <img src={desktop ? email : emailSmall} /> <p>&nbsp;&nbsp;contact@secturion.com</p>
      </div>

      <ContactForm />
    </div>
  );
}

export default ContactUsContent