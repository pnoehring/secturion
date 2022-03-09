import React from 'react';
import './OneProductPage.css';
import ProductPageSectionOne from './ProductPageSectionOne';
import gnd from './images/gnd_dare.png';
import air from './images/air_dare.png';
import tenGTactical from './images/10g_tactical_dare.png';
import oneGTactical from './images/1g_tactical_dare.png';
import ProductPageSectionTwo from './ProductPageSectionTwo';
import ProductPageSectionThree from './ProductPageSectionThree';
import ProductPageSectionFour from './ProductPageSectionFour';
import ProductPageSectionFive from './ProductPageSectionFive';
import ProductPageSectionSix from './ProductPageSectionSix';
import { Link } from 'react-router-dom';

function OneProductPage(props) {
  return (
    <div className='for-background'>
      <div className='one-prod-page-container'>
        <Link className='back-to-products-page' to={props.dir ? '/data-at-rest' : '/data-in-transit'}>&#x3c;&nbsp;Back to Products Page</Link>
        {/* TODO: insert left carrot  */}
        <ProductPageSectionOne
         src = {props.src}
         label = {props.label}
         text = {props.text}
         />
        <ProductPageSectionTwo />
        <ProductPageSectionThree />
        <ProductPageSectionFour />
        <ProductPageSectionFive />
        <ProductPageSectionSix />
    </div>
    </div>
  );
}

export default OneProductPage