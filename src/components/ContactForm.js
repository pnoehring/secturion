import React from 'react';
import { Button } from './Button';
import './ContactForm.css'; 

function ContactForm() {
  return (
      <>
    {/* onSubmit={clearfrom} */}

    <form className='contact-form'>
    <div className='contact-info-textbox'>
        <input type='text' placeholder='First Name' name='first_name' />      
    </div>
    <div className='contact-info-textbox'>
        <input type='text' placeholder='Last Name' name='last_name' />      
    </div>
    <div className='contact-info-textbox'>
        <input type='email' placeholder='Email' name='email' />    
    </div>
    <div className='message-textbox' >
        <input type='text' placeholder='Message' name='message' />    
    </div>
    <Button>Contact Us</Button>
</form>
</>
  );
}

export default ContactForm