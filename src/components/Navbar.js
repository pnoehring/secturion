import React, {useState} from 'react';
import logo from './logo-white.png';
import "./Navbar.css";
import { Button } from './Button'
import { Link } from 'react-router-dom';

function Navbar() { 
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 1135) {
            setButton(false)
        } else {
            setButton(true)
        }
    };

    const [isOpen, setIsOpen] = useState(false);
    const toggleProductDropdown = () => setIsOpen(!isOpen);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" >
                        <img src={logo}/>
                    </Link>
                    {/* menu icon will toggle between lines and X */}
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <div>
                            <div onMouseEnter={toggleProductDropdown} onMouseLeave={toggleProductDropdown}>
                            <Link 
                                // to='/products' 
                                className='nav-links' 
                                onClick={closeMobileMenu}
                            >
                                PRODUCTS&nbsp;
                                <i class="fas fa-caret-down" />
                            </Link>
                            {isOpen && (
                            <div>
                                    <li className='nav-item-sub'>
                                        <Link 
                                            to='/data-in-transmit' 
                                            className='nav-links' 
                                            onClick={closeMobileMenu}
                                            >
                                                DATA IN TRANSMIT
                                        </Link>
                                    </li>
                                    <li className='nav-item-sub'>
                                        <Link
                                            to='/data-at-rest'
                                            className='nav-links'
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
                                to='/about' 
                                className='nav-links' 
                                onClick={closeMobileMenu}
                            >
                                ABOUT
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link 
                                to='/resources' 
                                className='nav-links' 
                                onClick={closeMobileMenu}
                            >
                                RESOURCES
                            </Link>
                        </li>
                        <li>
                            {button && <Button buttonStyle='btn--outline'>CONTACT</Button>}
                        </li>
                    </ul>
                </div>  
            </nav>
        </> //fragments
    )
}

export default Navbar
