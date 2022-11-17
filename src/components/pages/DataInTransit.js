import React from 'react';
import '../../App.css';
import ContentPageHero from '../ContentPageHero';
import DITProductContent from '../DITProductContent';
import ProductPageFooter from '../ProductPageFooter';

export default function DataInTransit() {
    return( <div>
    <ContentPageHero
        header='OUR PRODUCTS'
        subHeader='Ethernet Data Encryptors'
    />
    <DITProductContent/>
    <ProductPageFooter />
    </div>
    );
}