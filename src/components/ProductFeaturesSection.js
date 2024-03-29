import React, { useState } from 'react';
import '../App.css';
import { Button } from './Button';
import ProdFeatureCards from './ProdFeatureCards';
import './ProductFeaturesSection.css';
import { useTransition, animated } from 'react-spring';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import WhyYouNeedMobile from './WhyYouNeedMobile';
import WhyYouNeedDesktop from './WhyYouNeedDesktop';

function ProductFeaturesSection() {

    const [mobile, setMobile] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    const isMobile = () => {
        if (window.innerWidth <= 765) {
            setMobile(true)
        } else {
            setMobile(false)
        }
    };

    window.addEventListener('resize', isMobile);
    window.addEventListener('load', isMobile);
    window.addEventListener('click', isMobile);

    if (mobile) {

        return (
            <div className='sec-container-features'>
                <WhyYouNeedMobile />
            </div>
        );
    }

    else {
        return (
            <div className='sec-container-features'>
                <WhyYouNeedDesktop />
            </div>
        );
    }
}

export default ProductFeaturesSection;