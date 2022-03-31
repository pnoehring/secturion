import React from 'react';
import ContentPageHero from '../../ContentPageHero';
import OneProductPage from '../../OneProductPage';
import macsec from '../../images/1.6tb_macsec.png';
import macsecMobile from '../../images/1.6tb_macsec-mobile.png';

function OnePointSixTera() {
  return (
    <div>
      <ContentPageHero
        header=''
        subHeader='Secturion Data In Transit Encryptor'
      />
      <OneProductPage
        dir={false}
        src={macsec}
        srcMobile={macsecMobile}
        // TODO fix spacing
        text={<span>Used in conjunction with DarkLink Model S, DarkLink Model E
          is a site-to-branch MACsec encryptor with data rates of 1Gbps or
          10Gbps Designed to Ethernet Security Specification
          (ESS) and IEEE Std 802.1AEbn MACsec Standard.
          Designed with several high assurance features such as FAIL-SAFE to
          ensure reliable and secure operation DarkLink is
          designed with Intels family of FPGAs, which offers high performance
          and protection from network and physical attacks.</span>}
        label='1.6 TERA/BITS MACSEC ETHERNET ENCRYPTOR'
      />
    </div>
  );
}

export default OnePointSixTera