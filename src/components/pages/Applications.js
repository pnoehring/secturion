import React from 'react';
import '../../App.css';
import ContentPageHero from '../ContentPageHero';

export default function Applications() {
    return( 
    <div>
    <ContentPageHero
        //header='OUR PRODUCTS'
        subHeader='Applications'
    />
    <h1 className='applications'>
        Applications
        </h1>
    </div>
    );
}