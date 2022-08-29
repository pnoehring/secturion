import React, { useState } from 'react';
import './ProductPageSectionTwoFive.css';
import { Link } from 'react-router-dom';

function ProductPageSectionTwoFive(props) {
    return (
      <div className='prod-page-sec-two-five-container'>
        <Link to='/contact' className='request-brochure'>
          {props.linkText}
        </Link>
      </div>
    )
  }
  
  export default ProductPageSectionTwoFive