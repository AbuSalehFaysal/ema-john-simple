import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import happyImage from '../../images/giphy.gif'
import { useHistory } from 'react-router';

const Review = () => {
    const [ cart, setCart ] = useState([]);

    const [orderPlaced, setOrderPlaced] = useState(false);

    const history = useHistory();

    const handleProceed = () => {
        // console.log('order place');
        history.push('/shipment')
    }

    const removeProduct = (productKey) => {
        // console.log("clicked", productKey);
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }
    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        });
        setCart(cartProducts);
    }, []);

    let thankyou;
    if (orderPlaced) {
        thankyou = <img src={happyImage} alt=""/>
    } 
    return (
        <div className="twin-container">
            <div className="product-container">
                {
                    cart.map(pd => <ReviewItem 
                        key={pd.key}
                        product={pd}
                        removeProduct={removeProduct}>   
                        </ReviewItem>)
                }
                {
                    thankyou 
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
                <button 
                className="main-button"
                onClick={handleProceed}
                >Proceed Checkout</button>
            </div>
            {/* <h1>Cart Items:{cart.length}</h1> */}
        </div>
    );
};

export default Review;