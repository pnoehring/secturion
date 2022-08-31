import React from 'react';
import { Button } from './Button';
import './ProductPageSectionSix.css';

function ProductPageSectionSix() {
  return (
    <div className='sec-six-container'>
        <h>Contact Us To Learn More</h>
        <p>Contact us now to get help creating a safer digital network.</p>
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