import React from 'react';
import './ResourcesContent.css';
import ProductCards from './ProductCards';
import hardware from './resources/hardware-vs-software-security.pdf';
import shift from './resources/shifting-from-software-to-hardware-for-network-security.pdf'

function ResourcesContent() {
  return (
    <div className='resources-container'>
      <div className='prod-cards-container'>

          <ProductCards
            src=''
            text='The Role of Hardware in the Future of Cybersecurity'
            label='HARDWARE VS SOFTWARE SECURITY'
            href={hardware}
            button='READ MORE'
          />
            <ProductCards
            src=''
            text='Whitepaper featuring Richard Takahashi, CEO, Secturion Systems'
            label='SHIFTING FROM SOFTWARE TO HARDWARE FOR NETWORK SECURITY'
            href={shift}
            button='READ MORE'
          />
            <ProductCards
            src=''
            text='Please contact us for individual product brief brochures'
            label='PRODUCT BRIEF BROCHURES'
            path='/contact'
            button='CONTACT'
            href=''
          />
      </div>
    </div>
  );
}

export default ResourcesContent