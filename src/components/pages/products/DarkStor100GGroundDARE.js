import React from 'react';
import ContentPageHero from '../../ContentPageHero';
import OneProductPage from '../../OneProductPage';
import HundredGGroundDare from '../../images/DarkStor-100GGroundDare.png';
import graphic from '../../images/darkstor_graphic_thumbnail.png';
import graphicMoble from '../../images/darkstor_graphic_small.png';

function DarkStor100GGroundDARE() {
  return (
    <div>
      <ContentPageHero
        header=''
        subHeader='Secturion Data At Rest Encryptor'
      />

      <OneProductPage
        dir={true}
        src={HundredGGroundDare}
        srcMobile={HundredGGroundDare}
        graphic={graphic}
        graphicMobile={graphicMoble}
        // text={<span>
        //   <span className='italic'>DarkStor</span>&trade;
        //   secures network data storage for
        //   cloud data providers, data centers, and
        //   on-premise storage.&nbsp;
        //   <span className='italic'>DarkStor</span>&trade;
        //   -100G
        //   (KG-267) Ground DARE provides data rates
        //   up to 100 Gbps with ultra-low latency.
        // </span>}
        label={<span><span className='italic'>DarkStor</span>
          -100G (KG-267) Ground DARE
        </span>}
        features={<span>
          <li>Data rate: 100 Gbps, full-duplex</li>
          <li>Saves significant time and mission operation costs</li>
          <li>Low latency &#60; 100 microseconds</li>
          <li>Comprehensive built-in test</li>
          <li>Transparent to the network and end-user</li>
          <li>Secure firmware upgradable to future protocols and cryptographic standards</li>
          <li>Fail-safe and tamper features</li>
          <li>Hardware-based encryption</li>
          <li>Optical Interfaces</li>
          <li>Flexible key loading</li>
        </span>}
        applications={<span>
          Big data storage protection<br /><br />
          Supports 1,000&#39;s of users/hosts/connections simultaneously<br /><br />
          Large mobile data storage or high-performance computing systems<br /><br />
          Protects ISR, ASW, etc., data collection<br /><br />
          Protects backup and recovery data<br /><br />
          Server rooms<br /><br />
        </span>}
        linkText='Click Here to Request a DarkStor-100G (KG-267) 
        Ground DARE Brochure'
        cert='In NSA Certification Process'
        easeOfUse={<span>
          <li>Easy to install</li>
          <li>Works with legacy, current, and future Ethernet networks</li>
          <li>No maintenance required</li>
        </span>}
        networkInterfaces={<span>
          <h className='bolded-headers'>Data Interface I/O Connections</h>
          <p className='no-space-para'>Industry-standard 100G QSFP28, SR or LR (Red and Black)</p>
          <p className='no-space-para'>Industry-standard 40G QSFP+, SR or LR (Red and Black)</p>
          <p className='no-space-para'>Industry-standard 10x10G CXP to SFP+/LC</p>
          <p className='no-space-para'>Industry-standard 400+</p>
          <p>Industry-standard 10G SFP+</p>
          <h className='bolded-headers'>Remote Management Interface</h>
          <p >SNMP/HTTPS via SFP+ or Ethernet RJ-45</p>
          <h className='bolded-headers'>Front Panel Console Interface</h>
          <p>Ethernet RJ-45 10/100/1000 Mbps</p>
          <h className='bolded-headers'>Key Interface</h>
          <p>EKMS-308</p>
        </span>}
        security={<span>
          <li>AES-GCM-256, Moose, and other cryptographic algorithms</li>
          <li>Cryptographic Ignition Key (CIK) for secure operation</li>
          <li>Key Loading: EKMS-308</li>
          <li>Fail-safe and tamper features</li>
        </span>}
        physical={<span>
          <li><span className='bolded-headers'>Dimensions&nbsp;</span>
            <span>(W x H x D) 19 x 1.72 x 17.2 in.</span></li>
          <li><span className='bolded-headers'>Weight&nbsp;</span><span>17 lbs.</span></li>
          <li>
            <span className='bolded-headers'>Power&nbsp;</span>
            <span>160 Watts; 110 to 240V AC; 50-60Hz; dual hot-swappable AC-DC power supplies</span>
          </li>
        </span>}
        environment={<span>
          <li><span className='bolded-headers'>Operating Temperature&nbsp;</span>
            <span>-5&#xb0; to 55&#xb0; C</span>
          </li>
          <li><span className='bolded-headers'>Storage Temperature&nbsp;</span>
            <span>-40&#xb0; to 80&#xb0; C</span>
          </li>
          <li>
            <span className='bolded-headers'>Humidity&nbsp;</span>
            <span>5% to 95% non-condensing</span>
          </li>
        </span>}
        reliability={<span>
          <li><span className='bolded-headers'>Mean Time Between Failure (MTBF)&nbsp;</span>
            <span>Over 250,000 hours</span>
          </li>
          <li>Dual redundant hot-swappable AC power supplies</li>
          <li>Dual hot-swappable fans</li>
        </span>}
        warranty='3 years hardware and software'
      />
    </div>
  );
}

export default DarkStor100GGroundDARE