import React from 'react';
import { Button } from './Button';
import './ProductPageSectionSix.css';

function ProductPageSectionSix() {
  return (
    <div className='sec-six-container'>
        <h>Contact Us To Learn More</h>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing
             elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis
               nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.</p>
                <Button
                buttonSize='btn--large'
                buttonStyle='btn--primary-alt'
                link='/contact' >
                    CONTACT US
                </Button>
    </div>
  )
}

export default ProductPageSectionSix