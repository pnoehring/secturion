import React from 'react';
import './Button.css';
import {Link} from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline', 'btn--primary-alt', 'btn--outline-alt',
'btn--square'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
    children, 
    type, 
    onClick, 
    buttonStyle, 
    buttonSize,
    link
}) => {
    // apply btn--primary style be default, if no style specified
        const checkButtonStyle = STYLES.includes(buttonStyle)
        ? buttonStyle
         : STYLES[0]

         const checkButtonSize = SIZES.includes(buttonSize)
         ? buttonSize
         : SIZES[0]

         return (
             <Link to={link} className='btn-mobile'>
                 <button
                 className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                 onClick={onClick}
                 type={type}
                 >
                     {children}
                 </button>
             </Link>
         )
    };