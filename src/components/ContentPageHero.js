import React from 'react';
import './ContentPageHero.css';

function ContentPageHero(props) {
  if (props.header === '')
  {
  return (
    <div className='content-hero-container'>
      <ul className='content'>
        <li>
          <h className='hero-header'>{props.header}</h>
        </li>
        <li>
          <p className='hero-content-only'>{props.subHeader}</p>
        </li>
      </ul>
    </div>
  );
  }
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
  );
}

export default ContentPageHero