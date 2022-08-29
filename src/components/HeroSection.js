import React, {useState, useEffect} from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import helmet from './images/helmet-white-heropng.png';
// import {ReactComponent as Image} from './images/helmet-white.svg';


function HeroSection() {

  const [center, setDisplay] = useState(true);

  const showDisplay = () => {
    if(window.innerWidth <= 1110) {
        setDisplay(false)
    } else {
        setDisplay(true)
    }    
};

// useEffect(() => {
//   showDisplay()
// }, []);

  window.addEventListener('resize', showDisplay);
  window.addEventListener('load', showDisplay);
  window.addEventListener('click', showDisplay);

  return (
  <div className='hero-container'>
      {center ? (<section className='hero-sections'>
    <section className='section-1'>
    <div>
      <p className='protecting-header'>Network Security Encryptors</p>
      <p className='protecting-paragraph'> 
        As global threats continue to escalate and evolve, providing 
        seamless, reliable data protection at every point in the 
        digital operating environment is essential. Secturion encryptors
        provide uniform foundational technology that can be implemented
        across all agencies and platforms, resulting in a secure, resilient,
        and transparent infrastructure.
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
          {/* <Image/> */}
        <img src={helmet} />
        </div>
    </section>
</section> ) : (

<div className='small-container'>
  <p className='protecting-header'>Protecting Your Data</p>
  <section className='section-2'>
    <div>
    <img src={helmet} />
    </div>
</section>
<p className='protecting-paragraph'> 
        DESIGNED AND TESTED TO PROTECT YOUR DATA FROM THE
          EVER PRESENT THREAT OF NATION-STATE AND
          CYBERCRIMINAL HACKERS.
        </p>
        <div className='contact-button-div'>
            <Button
                buttonSize='btn--large'
                buttonStyel='btn--primary'
                link='/contact'
            >
                CONTACT US
            </Button>
            </div>
</div>

 )}

  </div>
  );
}

export default HeroSection;
