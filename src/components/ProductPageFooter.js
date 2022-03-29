import React, { useState } from 'react';
import './ProductPageFooter.css';
import hacker from './images/hacker.png';
import hackerMobile from './images/hacker_mobile.png';


function ProductPageFooter() {

  const [desktop, setDisplay] = useState(true);

  const showDisplay = () => {
    if (window.innerWidth <= 900) {
      setDisplay(false)
    } else {
      setDisplay(true)
    }
  };

  window.addEventListener('resize', showDisplay);
  window.addEventListener('load', showDisplay);

  return (
    <div>
      {desktop ? (
        <div className='prod-footer-container'>
          <section className='image-section'>
            <img src={hacker} height={400} width={431} />
          </section>
          <div className='need-for-data-protection'>
            <h className='need-for-header'>The Need for Data Protection</h>
            <p className='need-for-desc'>U.S. organizations such as the U.S. Department of Justice,
              Internal Revenue Service, University of Central Florida,
              Snapchat, Premier Healthcare, Verizon Enterprise Solutions,
              Sony, Yahoo, and Cisco have all been part of large data
              breaches. They are not alone. According to a 2015 Duke
              University/CFO Global Business Outlook Survey, over 80%
              of U.S. companies have been successfully hacked. These
              successful hacking attacks involved stealing, changing,
              or making public important data. No one appears to be safe.
            </p>
          </div>
        </div>) : (
        <div className='prod-footer-container'>
          <h className='need-for-header'>The Need for Data Protection</h>
          <section className='image-section'>
            <img src={hackerMobile} />
          </section>
          <p className='need-for-desc'>U.S. organizations such as the U.S. Department of Justice,
            Internal Revenue Service, University of Central Florida,
            Snapchat, Premier Healthcare, Verizon Enterprise Solutions,
            Sony, Yahoo, and Cisco have all been part of large data
            breaches. They are not alone. According to a 2015 Duke
            University/CFO Global Business Outlook Survey, over 80%
            of U.S. companies have been successfully hacked. These
            successful hacking attacks involved stealing, changing,
            or making public important data. No one appears to be safe.
          </p>
        </div>
      )}

    </div>
  );
}

export default ProductPageFooter