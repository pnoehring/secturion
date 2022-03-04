import React from 'react';
import '../../App.css';
import ContentPageHero from '../ContentPageHero';
import HomeOurProductSection from '../HomeOurProductSection';


export default function Products() {
    return( 
    <div>
    <ContentPageHero
        header='OFFERED PROTECTION'
        subHeader='Products'
    />
    <HomeOurProductSection/>
    </div>
    );
}