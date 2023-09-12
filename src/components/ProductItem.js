import React, { useState } from 'react';

const ProductItem = ({ index, product, onDelete, onEdit }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedProduct, setEditedProduct] = useState(product);

    const handleDelete = () => {
        onDelete(index);
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        onEdit(index, editedProduct);
        setIsEditing(false);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setEditedProduct({
            ...editedProduct,
            [name]: value,
        });
    };

    return (
        <div>
            {isEditing ? (
                <div>
                    <input
                        type="text"
                        name="name"
                        value={editedProduct.name}
                        onChange={handleInputChange}
                    />
                    <input
                        type="number"
                        name="price"
                        value={editedProduct.price}
                        onChange={handleInputChange}
                    />
                    <button onClick={handleSave}>Save</button>
                </div>
            ) : (
                <div>
                    <span>Name: {product.name}</span>
                    <span>Price: {product.price}</span>
                    <button onClick={handleDelete}>Delete</button>
                    <button onClick={handleEdit}>Edit</button>
                </div>
            )}
        </div>
    );
};

export default ProductItem;
