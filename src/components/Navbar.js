import React, {useState, useEffect} from 'react';
import logo from './images/logo-white.png';
import mobileLogo from './images/logo-white-mobile.png';
import "./Navbar.css";
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Navbar() { 
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const [mobile, setMobile] = useState(false)

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 1110) {
            setButton(false)
        } else {
            setButton(true)
        }
    };

    const showMobileMenu = () => {
        if(window.innerWidth <= 900) {
            setMobile(true)
        } else {
            setMobile(false)
        }
    };

    useEffect(() => {
        showButton()
    }, []);

    const [isOpen, setIsOpen] = useState(false);
    const toggleProductDropdown = () => setIsOpen(!isOpen);

    window.addEventListener('resize', showButton);
    window.addEventListener('resize', showMobileMenu);

    window.addEventListener('load', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu} >
                        <img src={button ? logo : mobileLogo} />
                        {/* <img src={logo} /> */}

                    </Link>
                    {/* menu icon will toggle between lines and X */}
                    <div className='menu-icon' onClick={handleClick}>
                        MENU&nbsp;<i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    {!mobile && <li className='nav-item'>
                            <Link 
                                to='/' 
                                className='nav-links' 
                                onClick={closeMobileMenu}
                            >
                                HOME
                            </Link>
                        </li>}
                        <div>
                            <div onMouseEnter={toggleProductDropdown} onMouseLeave={toggleProductDropdown}>
                            <Link 
                                to='/products' 
                                //className={button ? 'nav-links' : 'nav-links-mobile-product' }
                                className={mobile ? 'nav-links-mobile-product' : 'nav-links'}
                                onClick={closeMobileMenu}
                            >
                                PRODUCTS&nbsp;&nbsp;
                                <i class={isOpen ? "fas fa-caret-up" : "fas fa-caret-down" } />
                            </Link>
                            {isOpen && (
                            <div className='nav-item-sub-menu'>
                                    <li>
                                        <Link 
                                            to='/data-in-transit' 
                                            className='nav-item-sub' 
                                            onClick={closeMobileMenu}
                                            >
                                                DATA IN TRANSIT
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to='/data-at-rest'
                                            className='nav-item-sub' 
                                            onClick={closeMobileMenu}
                                            >
                                                DATA AT REST
                                        </Link>
                                    </li>
                            </div>
                            )}
                            </div>
                        </div>
                        <li className='nav-item'>
                            <Link 
                                to='/resources' 
                                className='nav-links' 
                                onClick={closeMobileMenu}
                            >
                                RESOURCES
                            </Link>
                        </li>
                        {mobile && 
                        <li className='nav-item'>
                            <Link 
                                to='/contact' 
                                className='nav-links' 
                                onClick={closeMobileMenu}
                            >
                                CONTACT
                            </Link>
                        </li>}
                        {button && <li>
                             <Button 
                            buttonStyle='btn--outline'
                            link='/contact'
                            >
                                CONTACT
                                </Button>
                        </li> }
                    </ul>
                </div>  
            </nav>
        </> //fragments
    )
}

export default Navbar
