import React from 'react';

const ReviewItem = (props) => {
    // console.log(props);
    const {name, quantity} = props.product;
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
            <br/>
            <button className="main-button">Remove</button>
        </div>
    );
};

export default ReviewItem;