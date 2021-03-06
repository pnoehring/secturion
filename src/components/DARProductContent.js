import React from 'react';
import './ProductContent.css';
import ProductCards from './ProductCards';
import gnd from './images/gnd_dare.png';
import air from './images/air_dare.png';
import tenGTactical from './images/10g_tactical_dare.png';
import oneGTactical from './images/1g_tactical_dare.png';


function DARProductContent() {
  return (
    <div className='product-content'>
        <div className='desc-container'>
            <h className='prod-header'>DarkStor: Secure Site-to-Site</h>
            {/* TODO: what should this actually say? */}
            <p className='prod-description'>DarkLink will secure corporations
             or governments that have multiple sites, securely meshing
              together over an open commercial switching network at data
               rates from 1 Giga-bits/sec, 10G, 100G, and 400 Giga-bits/sec.
                DarkLink is designed based on the IEEE MACSec standards
                 with Secturion's MESH-ing technology. DarkLink provides
                  you with interconnection network protection from hacking,
                   snooping, and Denial of Service attacks. A DarkLink
                    meshed network will secure all sites connected with
                     the benefit of a centralized network where the primary
                      Mesh node will control all associated mesh nodes.
                       For example, the primary node or headquarter can
                        provide all the associated mesh node's internet and
                         email services. </p>
        </div>
        <div className='cards-container'>
          <ProductCards
            src={gnd}
            text='Encrypts data in transit from a corporate site or data center
            to other associated sites over a 10/40/100G network using MACsec
            per IEEE 802.1AE.'
            label='100G GND DARE'
            path='/gnd-dare'
            button='VIEW PRODUCT'
          />
          <ProductCards
            src={air}
            text='Encrypts data in transit from a corporate site or data center
            to other associated sites over a 10/40/100G network using MACsec
            per IEEE 802.1AE.'
            label='100G AIR DARE'
            path='/air-dare'
            button='VIEW PRODUCT'
          />
          <ProductCards
            src={tenGTactical}
            text='Encrypts data in transit from a corporate site or data center
            to other associated sites over a 10/40/100G network using MACsec
            per IEEE 802.1AE.'
            label='10G TACTICAL DARE'
            path='/10g-tactical-dare'
            button='VIEW PRODUCT'
          />
          <ProductCards
            src={oneGTactical}
            text='Encrypts data in transit from a corporate site or data center
            to other associated sites over a 10/40/100G network using MACsec
            per IEEE 802.1AE.'
            label='1G TACTICAL DARE'
            path='/1g-tactical-dare'
            button='VIEW PRODUCT'
          />
        </div>
    </div>
  );
}

export default DARProductContent