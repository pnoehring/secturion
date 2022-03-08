import React from 'react';
import './ProductPageSectionTwo.css';

function ProductPageSectionTwo() {
  return (
    <div className='prod-page-sec-two-container'>
        <h className='features-header'>Features:</h>
        <ul className='features-list'>
            <li>
              Multiple Data rates: 10Gbps (20 Gbps full duplex), 40 Gbps
               (80 Gbps full duplex), 100 Gbps (200 Gbps full duplex)
            </li>
            <li>
              Back-to-back packet processing
            </li>
            <li>
                Ethernet for Extended Packet Numbering per IEEE 802.1AEbn
                 (GCM-AES-XPN-256)
            </li>
            <li>
              Latency: Less than 2 microseconds
            </li>
            <li>
              Secure firmware upgradeable to future protocols and 
              cryptographic standards
            </li>
        </ul>
    </div>
  )
}

export default ProductPageSectionTwo