import React from 'react';
import './ProductContent.css';
import './ProductCards.css';
import ProductCards from './ProductCards';
import tenG from './images/10g_tactical_dite.png';
import oneG from './images/1g_tactical_dite.png';
import secureTactical from './images/secure_tactical.png';
import oneSix from './images/1.6tb_macsec.png';
import secureEnterprise from './images/secure_enterprise.png';

function DITProductContent() {
  return (
    <div className='product-content'>
        <div className='desc-container'>
            <h className='prod-header'>DarkLink: Lorem ipsum dolor</h>
            {/* TODO: what should this actually say? */}
            <p className='prod-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna 
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
              ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit 
              esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
        <div className='cards-container'>
          <ProductCards
            src={tenG}
            text='Encrypts data in transit from a corporate site or data center
            to other associated sites over a 10/40/100G network using MACsec
            per IEEE 802.1AE.'
            label='10G TACTICAL DITE'
            path='/10g-tactical-dite'
            button='VIEW PRODUCT'
          />
          <ProductCards
            src={oneG}
            text='Encrypts data in transit from a corporate site or data center
            to other associated sites over a 10/40/100G network using MACsec
            per IEEE 802.1AE.'
            label='1G TACTICAL DITE'
            path='/1g-tactical-dite'
            button='VIEW PRODUCT'
          />
          <ProductCards
            src={secureTactical}
            text='Encrypts data in transit from a corporate site or data center
            to other associated sites over a 10/40/100G network using MACsec
            per IEEE 802.1AE.'
            label='SECURE TACTICAL 5G-ETHERNET NETWORK'
            path='/secure-tactical'
            button='VIEW PRODUCT'
          />
          <ProductCards
            src={oneSix}
            text='Encrypts data in transit from a corporate site or data center
            to other associated sites over a 10/40/100G network using MACsec
            per IEEE 802.1AE.'
            label='1.6 TERA/BITS MACSEC ETHERNET ENCRYPTOR'
            path='/1.6-macsec'
            button='VIEW PRODUCT'
          />
          <ProductCards
            src={secureEnterprise}
            text='Encrypts data in transit from a corporate site or data center
            to other associated sites over a 10/40/100G network using MACsec
            per IEEE 802.1AE.'
            label='SECURE ENTERPRISE 100G-400G ETHERNET NETWORK'
            path='/secure-enterprise'
            button='VIEW PRODUCT'
          />
        </div>

    </div>
  );
}

export default DITProductContent