import React from 'react';
import { Button } from './Button';
import './ContactForm.css'; 

function ContactForm() {
  return (
      <>
    {/* onSubmit={clearfrom} */}

    <form className='contact-form'>
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
        <input className='contact-message-textbox' type='text' placeholder='Message' name='message' />    
    </div>
    <div className='contact-button'>
    <Button
        buttonSize='btn--large'
        buttonStyle='btn--primary-alt'>
        CONTACT US
    </Button>
    </div>
</form>
</>
  );
}

export default ContactForm