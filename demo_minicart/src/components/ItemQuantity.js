import React from 'react';

function ItemQuantity({ quantity, old_price, current_price, currency, decrease_quantity, increase_quantity }) {
    return (
        <div className='item_quantity'>
            <div className='item_quantity_box'>
                <p>Qty: </p>
                <button
                    onClick={decrease_quantity}
                >
                    -
                </button>
                <p className='item_quantity_box_input'> {quantity} </p>
                <button
                    onClick={increase_quantity}
                >
                    +
                     </button>
            </div>
            <div className='item_price_box'>
                {old_price ? <p>{currency}{old_price.toFixed(2)}</p> : <p></p>}
                <p>{currency}{current_price.toFixed(2)}</p>
            </div>
        </div>
    )
}

export default ItemQuantity;


