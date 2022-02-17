import React from 'react';
import './ContentPageHero.css';

function ContentPageHero(props) {
  return (
    <div className='content-hero-container'>
        <h className='hero-header'>{props.header}</h>
        <p className='hero-content'>{props.subHeader}</p>
    </div>
  )
}

export default ContentPageHero