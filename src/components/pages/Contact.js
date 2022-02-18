import React from 'react';
import '../../App.css';
import ContentPageHero from '../ContentPageHero';

export default function Contact() {
    return( 
    <div>
    <ContentPageHero
        //header='OUR PRODUCTS'
        subHeader='Contact'
    />
    <h1 className='contact'>
        Contact
        </h1>
    </div>
    );
}