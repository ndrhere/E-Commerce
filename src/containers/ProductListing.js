import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setProducts } from '../redux/actions/productActions';
import ProductComponent from './ProductComponent';

const ProductListing = ({ selectedCategory }) => {
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                dispatch(setProducts(response.data));
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, [dispatch]);

    const filteredProducts = selectedCategory ? products.filter(product => product.category === selectedCategory) : products;

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <ProductComponent products={filteredProducts} />
                </div>
            </div>
        </div>
    );
};

export default ProductListing;
