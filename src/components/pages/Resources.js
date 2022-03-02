import React from 'react';
import '../../App.css';
import ContentPageHero from '../ContentPageHero';
import ResourcesContent from '../ResourcesContent';

export default function Resources() {
    return( 
    <div>
    <ContentPageHero
        header=''
        subHeader='Resources'
    />
    <ResourcesContent/>
    </div>
    );
}