import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // const total = cart.reduce( (total, prd) => total + prd.price, 0);
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
    }
    let shipping = 0;
    if (total >= 15 && total < 35) {
        shipping = 4.99;
    } else if (total > 0 && total < 15) {
        shipping = 12.99;
    } else if (total >= 35) {
        shipping = 0;
    }
    const tax = (total/10).toFixed(2);
    const grandTotal = (total+shipping+Number(tax)).toFixed(2);
    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items Ordered: {cart.length}</p>
            <p>Total Price: {total}</p>
            <p><small>Shipping Cost: {shipping}</small></p>
            <p><small>TAX/VAT: {tax}</small></p>
            <p><small>Total Price including all charges: {grandTotal}</small></p>
        </div>
    );
};

export default Cart;