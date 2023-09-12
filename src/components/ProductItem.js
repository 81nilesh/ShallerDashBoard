import React from 'react';
import classes from './ProductItem.module.css';

const ProductItem = ({ product }) => {
    return (
        <div className={classes.productItem}>
            <div>
                <strong>{product.name}</strong><br />
                Price: ${product.price}<br />
                Color: {product.color}<br />
                Size: {product.size}<br />
                {/* <img src={product.image} alt={product.name} /> */}
            </div>
            <button className={classes.deleteButton}>Delete</button>
            <button className={classes.editButton}>Edit</button>
        </div>
    );
};

export default ProductItem;