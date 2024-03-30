import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ProductComponent = ({ products }) => {
    if (!products.length) {
        return <div>No products available</div>;
    }

    const renderlist = products.map((product) => {
        const { id, title, image, price, category } = product;
        return (
            <div className="card my-4 col-sm-6 col-md-4 col-lg-3" key={id}>
                <Link to={`/product/${id}`}>
                    <img src={image} className="card-img-top" alt="Product" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{category}</p>
                        <p className="card-text">${price}</p>
                    </div>
                </Link>
            </div>
        );
    });

    return <div className="row">{renderlist}</div>;
};

export default ProductComponent;
