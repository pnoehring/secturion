import React from 'react';
import ContentPageHero from '../../ContentPageHero';
import OneProductPage from '../../OneProductPage';
import tactical from '../../images/10g_tactical_dite.png';

function TenGTacticalDite() {
  return (
    <div>
      <ContentPageHero
        header=''
        subHeader='Secturion Data In Transit Encryptor'
      />
      <OneProductPage
        dir={false}
        src={tactical}
        // TODO fix spacing
        text={<span>Used in conjunction with DarkLink Model S, DarkLink Model E
          is a site-to-branch MACsec encryptor with data rates of 1Gbps or
          10Gbps Designed to Ethernet Security Specification
          (ESS) and IEEE Std 802.1AEbn MACsec Standard.
          Designed with several high assurance features such as FAIL-SAFE to
          ensure reliable and secure operation DarkLink is
          designed with Intels family of FPGAs, which offers high performance
          and protection from network and physical attacks.</span>}
        label='10G TACTICAL DITE'
      />
    </div>
  );
}

export default TenGTacticalDite