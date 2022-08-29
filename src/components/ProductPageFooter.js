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
  window.addEventListener('click', showDisplay);

  return (
    <div>
      {desktop ? (
        <div className='prod-footer-container'>
          <section className='image-section'>
            <img src={hacker} height={400} width={431} />
          </section>
          <div className='need-for-data-protection'>
            <h className='need-for-header'>The Need for Data-in-Transit Protection</h>
            <p className='need-for-desc'>
            Data transmitted over a wide or local area network is susceptible
             to snooping while in flight. Even if the files and data being
              transmitted are encrypted, an adversary simply observing data
               transfers can derive vital and damaging information from
                the network stream such as unencrypted file names, email
                 header information, and file destination. A single network
                  attack can have devastating results and threaten the assets
                   of an entire organization.<br/><br/>
                   The&nbsp;
                   <span className='italic'>DarkLink&nbsp;</span>
                   Ethernet Data Encryptor secures a network by 
                   encrypting all network transport data, including routing and 
                   file metadata at the Ethernet layer using 256-bit key size 
                   AES-GCM mode encryption with integrity authentication.&nbsp;
                   <span className='italic'>DarkLink&nbsp;</span>
                    negotiates transmission keys and secures the 
                   network connections between sites.  Since EDE can also 
                   negotiate unencrypted Ethernet connections,&nbsp;
                   <span className='italic'>DarkLink&nbsp;</span> 
                   can operate with existing EDE data connections as needed.
            </p>
          </div>
        </div>) : (
        <div className='prod-footer-container'>
          <h className='need-for-header'>The Need for Data Protection</h>
          <section className='image-section'>
            <img src={hackerMobile} />
          </section>
          <p className='need-for-desc'>
            Data transmitted over a wide or local area network is susceptible
             to snooping while in flight. Even if the files and data being
              transmitted are encrypted, an adversary simply observing data
               transfers can derive vital and damaging information from
                the network stream such as unencrypted file names, email
                 header information, and file destination. A single network
                  attack can have devastating results and threaten the assets
                   of an entire organization.<br/><br/>
                   The&nbsp;
                   <span className='italic'>DarkLink&nbsp;</span>
                   Ethernet Data Encryptor secures a network by 
                   encrypting all network transport data, including routing and 
                   file metadata at the Ethernet layer using 256-bit key size 
                   AES-GCM mode encryption with integrity authentication.&nbsp;
                   <span className='italic'>DarkLink&nbsp;</span>
                    negotiates transmission keys and secures the 
                   network connections between sites.  Since EDE can also 
                   negotiate unencrypted Ethernet connections,&nbsp;
                   <span className='italic'>DarkLink&nbsp;</span> 
                   can operate with existing EDE data connections as needed.
            </p>
        </div>
      )}

    </div>
  );
}

export default ProductPageFooter