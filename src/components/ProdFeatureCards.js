import React, {useState} from 'react';
import './ProdFeatureCards.css';

function ProdFeatureCards(props) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleProductDropdown = () => setIsOpen(!isOpen);

    if (!props.mobile) {
        return (
    <div className='feature__card__container'>
    <li className='feature__card__item'>
        <h2 className='feature__card__header'>{props.header}</h2>
        <p className='feature__card__subheader'>{props.subheader}</p>
        <p className='feature__card__description'>{props.description}</p>
    </li>
    </div>
    );
}

    return (
        <div className='feature__card__container-small'>
            <li className='feature__card__item-small'>
                <h2 className='feature__card__header-small'>{props.header}</h2>
                <p className='feature__card__subheader-small'>{props.subheader}</p>
                <p className='read-more' onClick={toggleProductDropdown}>
                    READ MORE&nbsp;&nbsp;
                    <i class={isOpen ? "fas fa-minus" : "fas fa-plus" } />
                </p>
                <div className={isOpen ? 'feature__card__description-small.active' : 
                'feature__card__description-small'}>{props.description}</div>
            </li>
        </div>
    );
}

export default ProdFeatureCards;