import React from 'react';
import '../../App.css';
import ContentPageHero from '../ContentPageHero';
import DITProductContent from '../DITProductContent';

export default function DataInTransmit() {
    return( <div>
    <ContentPageHero
        header='OUR PRODUCTS'
        subHeader='Secturion Enterprise Data in Transit Encryptors'
    />
    <DITProductContent/>
    </div>
    );
}