import React from 'react';
import '../../App.css';
import ContentPageHero from '../ContentPageHero.js';
import DARProductContent from '../DARProductContent';
import ProductPageFooterDARE from '../ProductPageFooterDARE';

export default function DataAtRest() {
    return( 
    <div>
    <ContentPageHero
        header='OUR PRODUCTS'
        subHeader='High-Assurance Data-at-Rest Encryptors (DARE)'
    />
    <DARProductContent/>
    <ProductPageFooterDARE />
    </div>
    );
}