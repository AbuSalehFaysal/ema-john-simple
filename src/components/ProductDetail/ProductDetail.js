import React from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetail = () => {
    const {productKey} = useParams();
    const product = fakeData.find(pd => pd.key === productKey);
    console.log(product);
    document.title  = 'Product Detail';
    return (
        <div>
            <h1>{productKey} Product Detail</h1>
            <Product showAddtoCart={false} product={product}></Product>
        </div>
    );
};

export default ProductDetail;