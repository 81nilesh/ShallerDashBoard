import React, { useState } from 'react';
import classes from './ProductForm.module.css';
// import ProductItem from './ProductItem';

const ProductForm = (props) => {
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productColor, setProductColor] = useState('');
    const [productSize, setProductSize] = useState('');
    const [productImage, setProductImage] = useState(null);

    const submitHandler = (event) => {
        event.preventDefault();
        const newProduct = {
            name: productName,
            price: productPrice,
            color: productColor,
            size: productSize,
            image: productImage,
        };
        props.onAddProduct(newProduct);
        // Clear form fields
        setProductName('');
        setProductPrice('');
        setProductColor('');
        setProductSize('');
        setProductImage(null);
    };

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <input
                type="text"
                placeholder="Product Name"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Price"
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Color"
                value={productColor}
                onChange={(e) => setProductColor(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Size"
                value={productSize}
                onChange={(e) => setProductSize(e.target.value)}
                required
            />
            {/* <input
        type="file"
        id="productImageInput"
        accept="image/*"
        required
        onChange={(e) => setProductImage(e.target.files[0])}
      /> */}
            <button type="submit">Add Product</button>
        </form>
    );
};

export default ProductForm;