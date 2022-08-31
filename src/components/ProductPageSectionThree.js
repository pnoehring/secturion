import React, { useState } from 'react';
import './ProductPageSectionThree.css';

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
            <img src={desktop ? props.graphic : props.graphicMobile} className='prod_page_sec_img' />
          </figure>
        </li>
      </div>) :
        (
          <div className='sec-three-list'>
            <li className='sec-three-figure-section'>
              <figure className='prod_page_sec_img-wrap' >
                <img src={desktop ? props.graphic : props.graphicMobile} className='prod_page_sec_img' />
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