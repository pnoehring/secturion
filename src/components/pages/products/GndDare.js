import React from 'react';
import ContentPageHero from '../../ContentPageHero';
import gnd from '../../images/gnd_dare.png';
import OneProductPage from '../../OneProductPage';

function GndDare() {
  return (
    <div>
    <ContentPageHero
    header=''
    subHeader='Secturion Data At Rest Encryptor'
  />
<OneProductPage
  dir = {true}
  src = {gnd}
  // TODO fix spacing
  text={<span>Used in conjunction with DarkLink Model S, DarkLink Model E
  is a site-to-branch MACsec encryptor with data rates of 1Gbps or
  10Gbps Designed to Ethernet Security Specification
  (ESS) and IEEE Std 802.1AEbn MACsec Standard.
    Designed with several high assurance features such as FAIL-SAFE to
    ensure reliable and secure operation DarkLink is
      designed with Intels family of FPGAs, which offers high performance
      and protection from network and physical attacks.</span>}
  label = '100G GND DARE'
/>
  </div>
  );
}

export default GndDare