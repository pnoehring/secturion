import React, { useRef } from 'react';
import { Button } from './Button';
import './ContactForm.css'; 
import emailjs, { send } from '@emailjs/browser';

function ContactForm() {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_ei7vths', 'template_78yvzsi',
       form.current, 'xf6bAX508-YyAqgck')
        // .then((result) => {
        //     console.log(result.text);
        // }, (error) => {
        //     console.log(error.text);
        // });

        window.location.reload(false);
    };

    const justRefresh =() => window.location.reload(false);

  return (
      <>
      {/* to send email, change onSumbit to sendEmail */}
    <form className='contact-form' ref={form} >
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