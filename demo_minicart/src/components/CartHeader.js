import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


function CartHeader({ amount_of_items }) {
    return (
        <div className='header_container'>
            <p>Cart ({amount_of_items})</p>
            <FontAwesomeIcon
                icon={faTimes}
            />
        </div>
    )
}

export default CartHeader;
