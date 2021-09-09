import React from 'react';

function CartFooter({ shipping_price, total_sum, currency }) {
    return (
        <div>
            <div>
                <p>Shipping:</p>
                <p>{currency}{shipping_price}</p>
            </div>
            <div>
                <p>Order Total:</p>
                <p>{currency}{total_sum}</p>
            </div>
        </div>
    )
}

export default CartFooter;
