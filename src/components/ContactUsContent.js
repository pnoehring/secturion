import React from 'react';
import ContactForm from './ContactForm';
import './ContactUsContent.css';
import email from './images/email-solid.png';
import phone from './images/phone-solid.png';

function ContactUsContent() {
  return (
    <div className='contact-container'>
        <div className='contact-us-header'>
        <h className='contact-us' >Contact Us</h>
        <p className='contact-explanation' >Lorem ipsum dolor sit amet, consectetur
         adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
        </div>
        <ul className='email-phone'>
            <li><img src={email} /> &nbsp;&nbsp;secturion@secturion.com

            </li>
            <li><img src={phone} /> &nbsp;&nbsp;(123)456-7890

            </li>
        </ul>
 
        <ContactForm />
    </div>
  );
}

export default ContactUsContent