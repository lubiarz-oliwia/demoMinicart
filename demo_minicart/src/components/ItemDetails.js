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
            <div>
                <div>
                    <h1>{product_name} </h1>
                    {product_options.map((item, index) => {
                        return (
                            <p 
                            key={index}
                            >{item.name}: {item.value}</p>
                        )
                    })}
                </div>
                <FontAwesomeIcon 
                icon={faTimes} 
                onClick={removeProduct} 
                />
            </div>
        </div>
    )
}

export default ItemDetails;
