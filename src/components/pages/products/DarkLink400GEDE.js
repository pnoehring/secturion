import React from 'react';
import ContentPageHero from '../../ContentPageHero';
import OneProductPage from '../../OneProductPage';
import DarkLinkHundredGEDE from '../../images/DarkStor-100GAirborneDARE.png';
import graphic from '../../images/darklink_graphic_thumbnail.png';
import graphicMoble from '../../images/darklink_graphic_small.png';

function DarkLink400GEDE() {
  return (
    <div>
      <ContentPageHero
        header=''
        subHeader='Secturion Ethernet Data Encryptor'
      />
      <OneProductPage
        dir={false}
        src={DarkLinkHundredGEDE}
        srcMobile={DarkLinkHundredGEDE}
        graphic={graphic}
        graphicMobile={graphicMoble}
        text={<span>The&nbsp;
          <span className='italic'>DarkLink</span>
          &trade;-400G EDE is an enterprise-level Encryptor 
          designed to meet DoD Ethernet Data Encryption (EDE) 
          specifications. <span className='italic'>DarkLink</span>
          &trade;-400G EDE utilizes 
          Secturion’s MESH technology to set up a safe, 
          private network between multiple sites.</span>}
        label={<span>
          <span className='italic'>DarkLink</span>
          -100G EDE</span>}
        features={<span>
          <li>Data rate: 400 Gbps full-duplex EDE</li>
          <li>Low latency &#60; 2 microseconds.</li>
          <li>Mesh network.</li>
          <li>Transparent to network and end-users.</li>
          <li>Simple setup, operation, and maintenance.</li>
          <li>Secure firmware upgradeable to future protocols and cryptographic standards</li>
          <li>Fail-safe and tamper features.</li>
          <li>Comprehensive built-in test.</li>
          <li>Hardware-based encryption.</li>
        </span>}
        applications={<span>
          Data center interconnect<br /><br />
          Government Facilities<br /><br />
          Mobile data centers<br /><br />
          Multi-site corporate/contractor networks<br /><br />
          Big data applications<br /><br />
        </span>}
        linkText='Click Here to Request a DarkLink-400G EDE Brochure'
        easeOfUse={<span>
          <li>Remote management using SNMP v2 or v3 or browser-based management</li>
          <li>Key manager support via KMIP (Key Management Interoperability Protocol),
            compatible with 3rd-party external key manager products</li>
          <li>Dual redundant hot-swappable AC power supplies</li>
          <li>Dual hot-swappable fans</li>
        </span>}
        networkInterfaces={<span>
          <h className='bolded-headers'>Data interface I/O Connections</h>
          <p >Industry-standard 400G QSFP-DD, SR or LR (Red and Black)</p>
          <h className='bolded-headers'>Remote Management Interface</h>
          <p >SNMP/HTTPS via SFP+ or Ethernet RJ-45</p>
          <h className='bolded-headers'>Front Panel Console Interface</h>
          <p>Ethernet RJ-45 10/100/1000 Mbps</p>
          <h className='bolded-headers'>KMI Interface</h>
          <p>Ethernet RJ-45 10/100/1000 Mbps</p>
        </span>}
        reliability={<span>
          <li><span className='bolded-headers'>Mean Time Before Failure (MTBF)&nbsp;</span>
            <span>Over 250,000 hours</span>
          </li>
          <li><span className='bolded-headers'>Mean Time to Repair (MTTR)&nbsp;</span>
            <span>10 minutes to remove and replace battery, fans, or power supplies</span>
          </li>
        </span>}
        security={<span>
          <li>AES-GCM 256-bit and other cryptographic algorithms</li>
          <li>Cryptographic Ignition Key (CIK) for secure operation</li>
          <li>Key Loading: SKL and KMI aware</li>
          <li>PDE enabled, variant 7</li>
          <li>Fail-safe and tamper features</li>
        </span>}
        physical={<span>
          <li><span className='bolded-headers'>Dimensions&nbsp;</span>
            <span>(W x H x D) 19 x 1.72 x 17.2 in.</span></li>
          <li>
            <span className='bolded-headers'>Mounting&nbsp;</span>
            <span> Industry standard 19 in. wide x 1U High x 24 to 36 in. deep slide rails</span>
          </li>
          <li><span className='bolded-headers'>Weight&nbsp;</span><span>17 lb.</span></li>
          <li>
            <span className='bolded-headers'>Power&nbsp;</span>
            <span>160 Watts; 110 to 240V AC; 50-60Hz; dual hot-swappable AC-DC power supplies</span>
          </li>
          <li>
            <span className='bolded-headers'>Battery&nbsp;</span>
            <span>AA Lithium, +3.6V DC – User-replaceable</span>
          </li>
          <li><span className='bolded-headers'>Fans&nbsp;</span><span>Hot-swappable fans (3) bank</span></li>
        </span>}
        environment={<span>
          <li><span className='bolded-headers'>Operating Temperature&nbsp;</span>
            <span>-40&#xb0; to 55&#xb0; C</span>
          </li>
          <li><span className='bolded-headers'>Storage Temperature&nbsp;</span>
            <span>-40&#xb0; to 85&#xb0; C</span>
          </li>
        </span>}
        warranty='5 years hardware and software'
      />
    </div>
  );
}

export default DarkLink400GEDE