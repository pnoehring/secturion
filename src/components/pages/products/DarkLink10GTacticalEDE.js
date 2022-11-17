import React from 'react';
import ContentPageHero from '../../ContentPageHero';
import OneProductPage from '../../OneProductPage';
import DarkLinkTenGTacticalEDE from '../../images/DarkLink-10GTacticalEDE.png';
import graphic from '../../images/darklink_graphic_thumbnail.png';
import graphicMoble from '../../images/darklink_graphic_small.png';

function DarkLink10GTacticalEDE() {
  return (
    <div>
      <ContentPageHero
        header=''
        subHeader='Secturion Ethernet Data Encryptor'
      />
      <OneProductPage
        dir={false}
        src={DarkLinkTenGTacticalEDE}
        srcMobile={DarkLinkTenGTacticalEDE}        
        graphic={graphic}
        graphicMobile={graphicMoble}
        text={<span>The&nbsp;
          <span className='italic'>DarkLink</span>
          &trade;-10G Tactical
          EDE is designed to meet DoD Ethernet
          Data Encryption (EDE) environmental
          requirements and specifications.</span>}
        label={<span>
          <span className='italic'>DarkLink</span>
          -10G Tactical EDE</span>}
        features={<span>
          <li>Data rate: 10 Gbps full-duplex</li>
          <li>Low latency &#60; 2 microseconds</li>
          <li>Ruggedized small form factor</li>
          <li>Mesh network</li>
          <li>Transparent to network and end-users</li>
          <li>Simple setup, operation, and maintenance</li>
          <li>Fail-safe and tamper features</li>
          <li>Secure firmware upgradeable to future protocols and cryptographic standards</li>
          <li>Comprehensive built-in test</li>
          <li>Hardware-based encryption</li>
        </span>}
        applications={<span>
          Mobile data centers<br /><br />
          Between DoD contractors<br /><br />
          Forward operating bases<br /><br />
          Mobile platforms: vehicles, drones<br /><br />
        </span>}
        linkText='Click Here to Request a DarkLink-10G EDE Brochure'
        easeOfUse={<span>
          <li>Easy to install</li>
          <li>Works with legacy, current, and future Ethernet networks</li>
          <li>No maintenance required</li>
        </span>}
        networkInterfaces={<span>
          <h className='bolded-headers'>Data Interface I/O Connections</h>
          <p>
            Industry-standard 10G QSFP-DD, SR or LR (Red and Black)
          </p>
          <h className='bolded-headers'>Remote Management Interface</h>
          <p >SNMP/HTTPS via SFP+ or Ethernet RJ-45</p>
          <h className='bolded-headers'>Front Panel Console Interface</h>
          <p >Ethernet RJ-45 10/100/1000 Mbps</p>
          <h className='bolded-headers'>KMI Interface</h>
          <p >Ethernet RJ-45 10/100/1000 Mbps</p>
        </span>}
        reliability={<span>
          <li><span className='bolded-headers'>Mean Time Between Failure (MTBF)&nbsp;</span>
            <span>Over 250,000 hours</span>
          </li>
          <li><span className='bolded-headers'>Mean Time to Repair (MTTR)&nbsp;</span>
            <span>10 minutes to remove and replace battery, fans, or power supplies</span>
          </li>
        </span>}
        security={<span>
          <li>AES-GCM-256 and other cryptographic algorithms</li>
          <li>Cryptographic Ignition Key (CIK) for secure operation</li>
          <li>Key Loading: KMI OTNK</li>
          <li>PDE enabled, variant 7</li>
          <li>Fail-safe and tamper features</li>
        </span>}
        physical={<span>
          <li><span className='bolded-headers'>Dimensions&nbsp;</span><span>(W x H x D) 3.5 x 1.7 x 5.25 in.</span></li>
          <li><span className='bolded-headers'>Weight&nbsp;</span><span>1.5 lbs.</span></li>
        </span>}
        environment={<span>
          <li><span className='bolded-headers'>Operating Temperature&nbsp;</span>
            <span>-40&#xb0; to 55&#xb0; C</span>
          </li>
          <li><span className='bolded-headers'>Storage Temperature&nbsp;</span>
            <span>-40&#xb0; to 85&#xb0; C</span>
          </li>
          <li>
            <span className='bolded-headers'>MIL-STD-810 ruggedized</span>
          </li>
        </span>}
        warranty='3 years hardware and software'
      />
    </div>
  );
}

export default DarkLink10GTacticalEDE