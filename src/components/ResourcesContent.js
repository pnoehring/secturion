import React from 'react';
import './ResourcesContent.css';
import ProductCards from './ProductCards';

function ResourcesContent() {
  return (
    <div className='resources-container'>
      <div className='prod-cards-container'>

          <ProductCards
            src=''
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit,
             sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.'
            label='EXTENDED PRODUCT REVIEW'
            path='/read-more'
            button='READ MORE'
          />
            <ProductCards
            src=''
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit,
             sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.'
            label='HARDWARE VS SOFTWARE SECURITY'
            path='/read-more'
            button='READ MORE'
          />
            <ProductCards
            src=''
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit,
             sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.'
            label='PRODUCT BRIEF BROCHURES'
            path='/read-more'
            button='READ MORE'
          />
      </div>
    </div>
  );
}

export default ResourcesContent