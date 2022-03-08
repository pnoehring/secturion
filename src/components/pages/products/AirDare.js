import React from 'react';
import ContentPageHero from '../../ContentPageHero';
import OneProductPage from '../../OneProductPage';
import air from '../../images/air_dare.png';

function AirDare() {
  return (
    <div>
      <ContentPageHero
      header=''
      subHeader='Secturion Data At Rest Encryptor'
    />
  <OneProductPage
    dir = {true}
    src = {air}
    // TODO fix spacing
    text={<span>Used in conjunction with DarkLink Model S, DarkLink Model E
    is a site-to-branch MACsec encryptor with data rates of 1Gbps or
    10Gbps Designed to Ethernet Security Specification
    (ESS) and IEEE Std 802.1AEbn MACsec Standard.
      Designed with several high assurance features such as FAIL-SAFE to
      ensure reliable and secure operation DarkLink is
        designed with Intels family of FPGAs, which offers high performance
        and protection from network and physical attacks.</span>}
    label = '100G AIR DARE'
  />
    </div>
  );
}

export default AirDare