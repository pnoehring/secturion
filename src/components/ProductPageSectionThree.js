import React from 'react';
import daregraphic from './images/100G-dare-graphic-thumbnail.png';
import './ProductPageSectionThree.css';

export default function ProductPageSectionThree() {
  return (
    <div className='prod-page-section-three-container'>
<ul className='sec-three-list'>
  <li className='sec-three-figure-section'>
    <figure className='prod_page_sec_img-wrap' >
        <img src={daregraphic} className='prod_page_sec_img' />
    </figure>
</li>
<li className='sec-three-info'>
        <p className='sec-three-header'>Applications</p>
        <p className='sec-three-text'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
         sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation
           ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit
             esse cillum dolore eu fugiat nulla pariatur. Excepteur
              sint occaecat cupidatat non proident, sunt in culpa qui
               officia deserunt mollit anim id est laborum.
            </p>
</li>

</ul>
</div>
  );
}