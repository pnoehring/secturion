import React from 'react';
import '../App.css';
import './HomeOurProductSection.css';
import CardItem from './CardItem';
import darkstor from './darkstor.png';
import darklink from './darklink.png';
import './Cards.css';

function HomeOurProductSection() {
    return (
        <div className='sec-container'>
            <p className='section-head'>DATA ENCRYPTION</p>
            <p className='our-products'>Our Products</p>
            <p>Integrating network protocols to ease installation 
                and maintain performance and security</p>
                <p>Secturion offers two classes of high-performance,
                    high-grade network encryptors:</p>    

        {/* <div className='cards'> */}
      <ul className='cards__container'>
          {/* <div className='cards__wrapper'> */}
              {/* <li className='cards__item'> */}
                  <CardItem 
                  src={darkstor}
                  text='For secure network data storage supporting data rates
                  from 1Gbs to 100Gbs secure data storage into cloud
                  providers or data centers or local storage units'
                  label='DARKSTOR'
                  path='/data-in-transmit'
                  button='LEARN MORE'
                  />
                {/* </li> */}
                {/* <li className='cards__item'> */}
                <CardItem 
                  src={darklink}
                  text='For data rates from 1Gbs to 400Gbs secure site
                  to site interconnection to set up a safe, private network
                  between multiple sites (over an open commercial switching
                    service) using Secturion&apos;s MESH technology.'
                  label='DARKLINK'
                  path='/data-at-rest'
                  button='LEARN MORE'
                  />
                  {/* </li> */}
          {/* </div> */}
      </ul>
  {/* </div> */}
        </div>
    );
}

export default HomeOurProductSection;