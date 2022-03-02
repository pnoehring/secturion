import React from 'react';
import ContactForm from './ContactForm';
import './ContactUsContent.css';

function ContactUsContent() {
  return (
    <div className='contact-container'>
        <div className='contact-us-header'>
        <h className='contact-us' >Contact Us</h>
        <p className='contact-explanation' >Lorem ipsum dolor sit amet, consectetur
         adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
        <ul className='email-phone'>
            <li> EMAIL ADDRESS

            </li>
            <li> PHONE NUMBER

            </li>
        </ul>
    </div>
        <ContactForm />
    </div>
  );
}

export default ContactUsContent