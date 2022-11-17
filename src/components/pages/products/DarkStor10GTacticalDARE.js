import React from 'react';
import ContentPageHero from '../../ContentPageHero';
import OneProductPage from '../../OneProductPage';
import TenGTacticalDARE from '../../images/DarkStor-10GTacticalDARE.png';
import graphic from '../../images/darkstor_graphic_thumbnail.png';
import graphicMobile from '../../images/darkstor_graphic_small.png';


function DarkStor10GTacticalDARE() {
  return (
    <div>
      <ContentPageHero
        header=''
        subHeader='Secturion Data At Rest Encryptor'
      />
      <OneProductPage
        dir={true}
        src={TenGTacticalDARE}
        srcMobile={TenGTacticalDARE}
        graphic={graphic}
        graphicMobile={graphicMobile}
        text=""
        label={<span>
          <span className='italic'>DarkStor</span>
          -10G Tactical DARE</span>}
        features={<span>
          <li>Data rate: 10 Gbps full-duplex</li>
          <li>Small form factor chassis design</li>
          <li>Saves significant time and mission operation costs</li>
          <li>Low latency &#60; 100 microseconds</li>
          <li>Transparent to the network and end-user</li>
          <li>Secure firmware upgradable to future protocols and cryptographic standards</li>
          <li>Fail-safe and tamper features</li>
          <li>Hardware-based encryption</li>
          <li>Optical Interfaces</li>
          <li>Flexible key loading</li>
        </span>}
        applications={<span>
          Mobile data centers<br /><br />
          Mobile platforms: vehicles, drones<br /><br />
          Camps, posts, stations, installations<br /><br />
          Tactical operations centers<br /><br />
        </span>}
        linkText='Click Here to Request a DarkStor-10G DARE Brochure'
        easeOfUse={<span>
          <li>Easy to install</li>
          <li>Works with legacy, current, and future Ethernet networks</li>
          <li>No maintenance required</li>
        </span>}
        networkInterfaces={<span>
          <h className='bolded-headers'>Data Interfaces</h>
          <p className='no-space-para'>Separate Red and Black encrypted data ports</p>
          <p>10 Gbs (SFP+)</p>
          <h className='bolded-headers'>Remote Management Interface</h>
          <p >RJ-45 10/100/1000 Mbps sync interface</p>
          <p>HTTPS/SNMP v2 or v3 Interface RJ-45 10G of SFP+</p>
        </span>}
        security={<span>
          <li>AES-GCM-256, and other cryptographic algorithms</li>
          <li>Cryptographic Ignition Key (CIK) for secure operation</li>
          <li>Key Loading: EKMS-308</li>
          <li>Fail-safe and tamper features</li>
        </span>}
        physical={<span>
          <li><span className='bolded-headers'>Dimensions&nbsp;</span><span>(W x H x D) 3.5 x 1.7 x 5.25</span></li>
          <li><span className='bolded-headers'>Weight&nbsp;</span><span>1.5 lb</span></li>
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

export default DarkStor10GTacticalDARE