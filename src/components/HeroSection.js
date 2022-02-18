import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import helmet from './helmet_mid.png';


function HeroSection() {
  return (
  <div className='hero-container'>
      <section className='hero-sections'>
    <section className='section-1'>
    <div>
      <p className='protecting-header'>Protecting Your Data</p>
      <p className='protecting-paragraph'> 
        DESIGNED AND TESTED TO PROTECT YOUR DATA FROM THE
          EVER PRESENT THREAT OF NATION-STATE AND
          CYBERCRIMINAL HACKERS.
        </p>
          <div>
            <Button
                buttonSize='btn--large'
                buttonStyel='btn--primary'
                link='/contact'
            >
                CONTACT US
            </Button>
            </div>
          </div>
    </section>

    <section className='section-2'>
        <div>
        <img src={helmet} />
        </div>
    </section>
</section>

  </div>
  );
}

export default HeroSection;
