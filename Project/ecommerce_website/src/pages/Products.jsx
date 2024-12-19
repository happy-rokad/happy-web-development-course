import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../features/cartSlice';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState([]);
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.isLoggedIn) {
      navigate('/');
    } else {
      axios.get('http://localhost:5000/products').then(response => setProducts(response.data));
    }
  }, [user, navigate]);

  const handleAddToCart = (product) => {
    dispatch(addToCart({ ...product, quantity: 1 }));
  };

  return (
    <div className="container mt-5">
      <h1>Products</h1>
      <div className="row">
        {products.map(product => (
          <div className="col-md-4" key={product.id}>
            <div className="card">
              <img src={product.image} alt={product.name} className="card-img-top" style={{ width: 'auto', height:'200px', objectFit:'cover'}}/>
              <div className="card-body">
                <h5>{product.name}</h5>
                <p>{product.description}</p>
                <p>Price: ${product.price}</p>
                <button onClick={() => handleAddToCart(product)} className="btn btn-primary">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
