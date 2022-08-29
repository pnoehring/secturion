import React, { useState } from 'react';
import './ProductPageFooter.css';
import hacker from './images/hacker.png';
import hackerMobile from './images/hacker_mobile.png';

function ProductPageFooterDARE() {

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
            <h className='need-for-header'>The Need for Data-at-Rest Protection</h>
            <p className='need-for-desc'>
                Commercial providers report nearly all their data in transmit is
                encrypted while only 9.4% of data at rest is encrypted
                <sup>&#91;1&#93;</sup>.
                This practice leaves data at rest vulnerable to costly, 
                malicious attacks. Today's warfighter requires a modern,
                versatile data-at-rest encryptor that overcomes the challenges
                and complexities of evolving protocol, storage controllers,
                and interface standards, operating system differences, 
                emerging storage technologies, varying data storage architecture,
                CONOPs, etc. <span className='italic'>DarkStor&nbsp;</span>
                addresses these urgent issues.<br/><br/>
                Secturion&apos;s DARE is an innovative network storage encryptor that
                 is inserted into a network to provide a seamless encryption
                  experience. This approach provides complete transparency to
                   the user and network while also being agnostic to service
                    providers, operating systems, storage controllers, media
                     device interfaces, storage media devices, and network
                      storage architectures. Storage technologies will continue
                       to evolve, but by operating as an in-line network
                        Ethernet encryptor, Secturion&apos;s data-at-rest encryptors
                         will excel in current and future DoD networks.
            </p>
            <p className='mcafee-source'>1 McAfee Cloud BU, Jul 16, 2015 review
            of Data-at-Rest encryption</p>
          </div>
        </div>) : (
        <div className='prod-footer-container'>
          <h className='need-for-header'>The Need for Data-at-Rest Protection</h>
          <section className='image-section'>
            <img src={hackerMobile} />
          </section>
          <p className='need-for-desc'>
                Commercial providers report nearly all their data in transmit is
                encrypted while only 9.4% of data at rest is encrypted
                <sup>&#91;1&#93;</sup>.
                This practice leaves data at rest vulnerable to costly, 
                malicious attacks. Today's warfighter requires a modern,
                versatile data-at-rest encryptor that overcomes the challenges
                and complexities of evolving protocol, storage controllers,
                and interface standards, operating system differences, 
                emerging storage technologies, varying data storage architecture,
                CONOPs, etc. <span className='italic'>DarkStor&nbsp;</span>
                addresses these urgent issues.<br/><br/>
                Secturion&apos;s DARE is an innovative network storage encryptor that
                 is inserted into a network to provide a seamless encryption
                  experience. This approach provides complete transparency to
                   the user and network while also being agnostic to service
                    providers, operating systems, storage controllers, media
                     device interfaces, storage media devices, and network
                      storage architectures. Storage technologies will continue
                       to evolve, but by operating as an in-line network
                        Ethernet encryptor, Secturion&apos;s data-at-rest encryptors
                         will excel in current and future DoD networks.
            </p>
            <p className='mcafee-source'>1 McAfee Cloud BU, Jul 16, 2015 review
            of Data-at-Rest encryption</p>
        </div>
      )}

    </div>
  );
}

export default ProductPageFooterDARE