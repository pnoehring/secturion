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

    const [mobile, setMobile] = useState(true);
    const [isVisible, setIsVisible] = useState(true);
    // const transition = useTransition(isVisible, {
    //     from: {x:0, y:0, opacity: 0},
    //     enter: {x: 0, y: 0, opacity: 1},
    //     // leave: {x:0, y:0, opacity: 0}
    // });
    // const transition = useTransition(isVisible, {
    //     from: {x:200, opacity: 0},
    //     enter: {x: 0, y: 0, opacity: 1},
    //     leave: {x:-200, opacity: 0},
    // });
    // const transitionOpp = useTransition(!isVisible, {
    //     from: {x:200, opacity: 0},
    //     enter: {x: 0, y: 0, opacity: 1},
    //     leave: {x:-200, opacity: 0},

    // });

    // const [activeSlide, setActiveSlide] = useState(0);

    const isMobile = () => {
        if (window.innerWidth <= 765) {
            setMobile(true)
        } else {
            setMobile(false)
        }
    };

    window.addEventListener('resize', isMobile);
    window.addEventListener('readystatechange', isMobile);
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