import React from 'react';
import './ProductPageSectionTwo.css';

function ProductPageSectionTwo(props) {
  return (
    <div className='prod-page-sec-two-container'>
        <h className='features-header'>Key Features</h>
        <ul className='features-list'>{props.features}
        </ul>
    </div>
  )
}

export default ProductPageSectionTwo