import React from 'react';
import ContentPageHero from '../../ContentPageHero';
import OneProductPage from '../../OneProductPage';
import secure from '../../images/secure_tactical.png';

function SecureTactical() {
  return (
    <div>
    <ContentPageHero
    header=''
    subHeader='Secturion Data In Transmit Encryptor'
  />
<OneProductPage
    dir = {false}
  src = {secure}
  // TODO fix spacing
  text={<span>Used in conjunction with DarkLink Model S, DarkLink Model E
  is a site-to-branch MACsec encryptor with data rates of 1Gbps or
  10Gbps Designed to Ethernet Security Specification
  (ESS) and IEEE Std 802.1AEbn MACsec Standard.
    Designed with several high assurance features such as FAIL-SAFE to
    ensure reliable and secure operation DarkLink is
      designed with Intels family of FPGAs, which offers high performance
      and protection from network and physical attacks.</span>}
  label = 'SECURE TACTICAL 5G-ETHERNET NETWORK'
/>
  </div>
  );
}

export default SecureTactical