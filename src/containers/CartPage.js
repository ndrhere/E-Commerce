import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const response = await axios.get('http://localhost:3000/cartitems');
      setCartItems(response.data);
    } catch (error) {
      console.error('Error fetching cart items:', error);
    }
  };

  const handleRemoveItem = async (productId) => {
    try {
      await axios.delete(`http://localhost:3000/deletecartitems/${productId}`);
      fetchCartItems();
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };

  // Random discount between 5% to 20%
  const generateRandomDiscount = () => {
    return Math.floor(Math.random() * (20 - 5 + 1)) + 5;
  };

  return (
    <div className="container">
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <div>No items in cart</div>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.productId} className="mb-4">
              <div className="card">
                <div className="row g-0">
                  <div className="col-md-6">
                    <img src={item.image} className="img-fluid rounded-start" alt={item.title} />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text">{item.description}</p>
                      <p className="card-text">Price: ${item.price}</p>
                      <button className="btn btn-danger" onClick={() => handleRemoveItem(item._id)}>Remove</button>
                    </div>
                    <div className="card-footer">
                      <table className="table table-bordered table-brown">
                        <tbody>
                          <tr>
                            <td>Price</td>
                            <td>${item.price}</td>
                          </tr>
                          <tr>
                            <td>Discount</td>
                            <td>{generateRandomDiscount()}%</td>
                          </tr>
                          <tr>
                            <td>Total Price</td>
                            <td>${(item.price * (100 - generateRandomDiscount()) / 100).toFixed(2)}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;
