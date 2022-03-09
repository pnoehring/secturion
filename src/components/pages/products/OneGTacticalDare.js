import React from 'react';
import ContentPageHero from '../../ContentPageHero';
import OneProductPage from '../../OneProductPage';
import tactical from '../../images/1g_tactical_dare.png';

function OneGTacticalDare() {
  return (
    <div>
    <ContentPageHero
    header=''
    subHeader='Secturion Data At Rest Encryptor'
  />
<OneProductPage
  dir = {true}
  src = {tactical}
  // TODO fix spacing
  text={<span>Used in conjunction with DarkLink Model S, DarkLink Model E
  is a site-to-branch MACsec encryptor with data rates of 1Gbps or
  10Gbps Designed to Ethernet Security Specification
  (ESS) and IEEE Std 802.1AEbn MACsec Standard.
    Designed with several high assurance features such as FAIL-SAFE to
    ensure reliable and secure operation DarkLink is
      designed with Intels family of FPGAs, which offers high performance
      and protection from network and physical attacks.</span>}
  label = '1G TACTICAL DARE'
/>
  </div>
  );
}

export default OneGTacticalDare