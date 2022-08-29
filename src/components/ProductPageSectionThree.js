import React, { useState } from 'react';
import daregraphic from './images/100G-dare-graphic-thumbnail.png';
import daregraphicMobile from './images/100G-dare-graphic-small.png';
import './ProductPageSectionThree.css';
import { Link } from 'react-router-dom';

export default function ProductPageSectionThree(props) {

  const [desktop, setDisplay] = useState(true);
  const [block, setBlock] = useState(false);

  const showDisplay = () => {
    if (window.innerWidth <= 1020) {
      setDisplay(false)
    } else {
      setDisplay(true)
    }
  };

  const showBlock = () => {
    if (window.innerWidth <= 820) {
      setBlock(true)
    } else {
      setBlock(false)
    }
  };

  window.addEventListener('resize', showDisplay);
  window.addEventListener('load', showDisplay);
  window.addEventListener('click', showDisplay);

  window.addEventListener('resize', showBlock);
  window.addEventListener('load', showBlock);
  window.addEventListener('click', showBlock);

  return (
    <div className='prod-page-section-three-container'>
      {!block ? (<div className='sec-three-list'>
        <li className='sec-three-info'>
          <p className='sec-three-header'>Applications</p>
          <p className='sec-three-text'>{props.applications}
          </p>
        </li>
        <li className='sec-three-figure-section'>
          <figure className='prod_page_sec_img-wrap' >
            <img src={desktop ? daregraphic : daregraphicMobile} className='prod_page_sec_img' />
          </figure>
        </li>
      </div>) :
        (
          <div className='sec-three-list'>
            <li className='sec-three-figure-section'>
              <figure className='prod_page_sec_img-wrap' >
                <img src={desktop ? daregraphic : daregraphicMobile} className='prod_page_sec_img' />
              </figure>
            </li>
            <li className='sec-three-info'>
              <p className='sec-three-header'>Applications</p>
              <p className='sec-three-text'>{props.applications}</p>
            </li>
          </div>
        )}
    </div>
  );
}