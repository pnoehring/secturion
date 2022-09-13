import React, { useState } from 'react';
import ContactForm from './ContactForm';
import './ContactUsContent.css';
import email from './images/email-solid.png';
import emailSmall from './images/email_solid_small.png';
import phone from './images/phone-solid.png';
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
    <div>
      {desktop ? (
        <div className='contact-container'>
          <div className='contact-us-header'>
            <h className='contact-us' >Contact Us</h>
            <p className='contact-explanation' >{<span>
              <span>Contact us now to get help
                creating a safer digital network.</span><br /><span>Complete
                  the request form below and our Secturion team
                  will contact you shortly.</span> </span>}
            </p>
          </div>
          <div className='email-phone'>
            <img src={desktop ? email : emailSmall} />
            <p>&nbsp;&nbsp;contact@secturion.com</p>
            <img src={desktop ? phone : phoneSmall} />
            <p>&nbsp;&nbsp;1-801-898-5840</p>
          </div>
          <ContactForm />
        </div>
      ) : (
        <div className='contact-container'>
          <div className='contact-us-header'>
            <h className='contact-us' >Contact Us</h>
            <p className='contact-explanation' >{<span>
              <span>Contact us now to get help
                creating a safer digital network.</span><br /><span>Complete
                  the request form below and our Secturion team
                  will contact you shortly.</span> </span>}
            </p>
          </div>
          <div className='mobile-container'>
            <div className='email-phone'>
              <img src={desktop ? email : emailSmall} />
              <p>&nbsp;&nbsp;contact@secturion.com</p>
            </div>
            <div className='email-phone-mobile'>
              <img src={desktop ? phone : phoneSmall} />
              <p>&nbsp;&nbsp;1-801-898-5840</p>
            </div>
          </div>
          <ContactForm />
        </div>
      )}
    </div>
  );
}

export default ContactUsContent