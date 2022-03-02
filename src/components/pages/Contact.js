import React from 'react';
import '../../App.css';
import ContactUsContent from '../ContactUsContent';
import ContentPageHero from '../ContentPageHero';

export default function Contact() {
    return( 
    <div>
    <ContentPageHero
        header=''
        subHeader='Contact Us'
    />
    <ContactUsContent />
    </div>
    );
}