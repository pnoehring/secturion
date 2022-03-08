import React from 'react';
import { Expander } from './Expander';
import './ProductPageSectionFour.css';

function ProductPageSectionFour() {
  return (
    <div className='sec-four-container'>
      <Expander title="Certification">
        <p className='network-sec'>Planned FIPS-140-2, level 3</p>
      </Expander>
      <Expander title="Ease of Use Setup and Maintenance">
        <ul>
          <li>Remote management using SNMP v2 or v3 or browser-based management</li>
          <li>Key manager support via KMIP (Key Management Interoperability Protocol), compatible with 3rd-party external key manager products</li>
          <li>Dual redundant hot swappable AC power supplies</li>
          <li>Dual hot-swappable fans</li>
        </ul>
      </Expander>
      <Expander title="Network Interfaces">
        <div className='network-sec'>
        <h className='bolded-headers'>Data Interfaces</h>
        <p className='no-space-para'>Separate clear data and encrypted data ports</p>
        <p className='no-space-para'>10 Gbs (SFP+), 40 Gbs (QSFP), 100 Gbps (QSFP28) or 100 Gbps (CXP0</p>
        <h className='bolded-headers'>Remote Management Interface</h>
        <p className='no-space-para'>HTTPS/SNMP v2 or v3 Interface RJ-45 10/100/1000 Mbps</p>
        <h className='bolded-headers'>High Availability</h>
        <p className='no-space-para'>RJ-45 10/100/1000 Mbps sync interface</p>
        </div>
      </Expander>
      <Expander title="Security">
        <ul className='no-bullets'>
          <li><span className='bolded-headers'>Algorithms:&nbsp; </span><span>AES-GCM 256-bit, MACsec Key Agreement (MKA)</span></li>
          <li>Key Fill Interface DS-101 and rear panel RJ-45 keyport</li>
          <li>Crypto Ignition Key (CIK) for secure operation</li>
          <li>Replay protection based onthe PN windowing MKA with pre-placed keys 
            per MKA with Secturion key set-up:
            <ul>
            <li>
              Key storage, lookup, and expansion
            </li>
            <li>
              Configurable key lookup for TX is based on Ethernet frame header 
              (MAC addresses and VLAN)
            </li>
            <li>
              Optional self key manager (i.e. no external key manager requried)
            </li>
            </ul>
          </li>
        </ul>
      </Expander>
      <Expander title="Physical">
        <ul className='no-bullets'>
          <li><span className='bolded-headers'>Dimensions&nbsp;</span><span>(W x H x D) 19 x 1.72 x 16.4 in.</span></li>
          <li><span className='bolded-headers'>Mounting&nbsp;</span><span>Industry standard 19 in. wide x 
            1U High x 24 to 31 in. deep slide rails</span></li>
          <li><span className='bolded-headers'>Weight&nbsp;</span><span>11 lb</span></li>
          <li><span className='bolded-headers'>Power&nbsp;</span><span>100 Watts; 110 to 240 VAC; 
            50-60Hz</span></li>
          <li><span className='bolded-headers'>Battery&nbsp;</span><span>External user replaceable
            battery, one "1/2AA" lithium cell</span></li>
        </ul>
      </Expander>
      <Expander title="Environment">
      <ul className='no-bullets'>
          <li><span className='bolded-headers'>Operating Temperature&nbsp;</span>
          <span>-5&#xb0; to 50&#xb0; C</span>
          </li>
          <li><span className='bolded-headers'>Storage Temperature&nbsp;</span>
          <span>-40&#xb0; to 70&#xb0; C</span>
          </li>
          <li><span className='bolded-headers'>Humidity&nbsp;</span>
          <span>5% to 95% non-condensing</span>
          </li>
          <li><span className='bolded-headers'>EMI/EMC&nbsp;</span>
          <span>Telcordia GR-1089-CORE, ID 8, Radiated emission and
            FCC Class B, Consumer
          </span>
          </li>
        </ul>
      </Expander>
    </div>
  )
}

export default ProductPageSectionFour