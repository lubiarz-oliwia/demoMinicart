import React from 'react';

function CartFooter({ shipping_price, total_sum, currency, checkout }) {
    return (
        <div className='footer_container'>
            <div>
                <p>Shipping:</p>
                <p>{currency}{shipping_price.toFixed(2)}</p>
            </div>
            <div>
                <p>Order Total:</p>
                <p>{currency}{total_sum}</p>
            </div>
            <button className='checkout_button' onClick={checkout}>Checkout</button>
        </div>
    )
}

export default CartFooter;
