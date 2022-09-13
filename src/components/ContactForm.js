import React, { useRef, useState } from 'react';
import { Button } from './Button';
import './ContactForm.css';
import emailjs, { send } from '@emailjs/browser';

function ContactForm() {

  const [desktop, setDisplay] = useState(true);
  const form = useRef();

  const showDisplay = () => {
    if (window.innerWidth <= 700) {
      setDisplay(false)
    } else {
      setDisplay(true)
    }
  };

  const waitToRefresh = () => {
    window.location.reload(false);
  }

  const sendEmail = (e) => {
    e.preventDefault();

    // emailjs.sendForm('service_ewmm9pw', 'template_g3e8596',
    // form.current, 'I7RBM3wsXYScz8hRH')

    //paige's emailjs
    emailjs.sendForm('service_ei7vths', 'template_78yvzsi',
      form.current, 'xf6bAX508-YyAqgck')

    window.setInterval(waitToRefresh, 1000);
  };

  const justRefresh = () => window.location.reload(false);

  window.addEventListener('resize', showDisplay);
  window.addEventListener('load', showDisplay);
  window.addEventListener('click', showDisplay);

  return (
    <>
      {/* to send email, change onSumbit to sendEmail */}
      <form className='contact-form' ref={form} onSubmit={sendEmail} >
        <div className='name-email-div'>
          <div className='contact-info-textbox'>
            <input className='contact-textbox' type='text' placeholder='First Name' name='first_name' />
          </div>
          <div className='contact-info-textbox'>
            <input className='contact-textbox' type='text' placeholder='Last Name' name='last_name' />
          </div>
          <div className='contact-info-textbox'>
            <input className='contact-textbox' type='email' placeholder='Email' name='email' />
          </div>
        </div>
        <div className='message-textbox' >
          <textarea className='contact-message-textbox' type='text' placeholder='Message' name='message' />
        </div>
        <div className='contact-button'>
          <input className='submit-button' type="submit" value="CONTACT US" />
        </div>
      </form>
    </>
  );
}

export default ContactForm