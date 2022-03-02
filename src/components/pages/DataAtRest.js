import React from 'react';
import '../../App.css';
import ContentPageHero from '../ContentPageHero.js';
import DARProductContent from '../DARProductContent';
import ProductPageFooter from '../ProductPageFooter';

export default function DataAtRest() {
    return( 
    <div>
    <ContentPageHero
        header='OUR PRODUCTS'
        subHeader='Secturion Tactical Data at Rest Encryptors'
    />
    <DARProductContent/>
    <ProductPageFooter />
    </div>
    );
}