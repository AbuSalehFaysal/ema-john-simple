import React from 'react';

const ReviewItem = (props) => {
    // console.log(props);
    const {name, quantity, key, price} = props.product;
    const reviewItemStyle = {
        borderBottomStyle: '1px solid lightgray',
        marginBottom: '5px',
        paddingBottom: '5px',
        marginLeft: '200px'
    }
    return (
        <div>
            <h3 className="product-name">{name}</h3>
            <p>Quantity: {quantity}</p>
            <small>Price: ${price}</small>
            <br/>
            <button 
            className="main-button"
            onClick={()=> props.removeProduct(key)}
            >Remove</button>
        </div>
    );
};

export default ReviewItem;