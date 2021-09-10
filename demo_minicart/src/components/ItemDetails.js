import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function ItemDetails({ image, product_name, product_options, removeProduct }) {
    return (
        <div className='item_details'>
            <img
                src={image}
                alt={product_name}
            />
            <div className='item_details_product'>
                <div>
                    <p>{product_name} </p>
                    {product_options.map((item, index) => {
                        return (
                            <p
                                key={index}
                            >{item.name}: <span>{item.value}</span></p>
                        )
                    })}
                </div>
                <FontAwesomeIcon
                    icon={faTimes}
                    onClick={removeProduct}
                    className='close_icon'
                />
            </div>
        </div>
    )
}

export default ItemDetails;
