import React from 'react';
import './ContentPageHero.css';

function ContentPageHero(props) {
  return (
    <div className='content-hero-container'>
      <ul className='content-list'>
        <li>
          <h className='hero-header'>{props.header}</h>
        </li>
        <li>
          <p className='hero-content'>{props.subHeader}</p>
        </li>
      </ul>
    </div>
  )
}

export default ContentPageHero