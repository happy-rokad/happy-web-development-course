import React, { useContext } from 'react';
import { TheamContextData } from './TheamContext';
import './Products.css'

import Product1 from './assets/img1.jpg';
import Product2 from './assets/img2.jpg';
import Product3 from './assets/img3.jpg';
import Product4 from './assets/img4.jpg';
import Product5 from './assets/img5.jpg';

const Products = () => {

    const { count, setCount } = useContext(TheamContextData);

    const AddItem = () => {
        setCount(count + 1);
        console.log('Item Added');
    }

  return (
      <>
          
        <div className="allItems">
            <div class="product-card">
                <img src={Product1} alt="Product Image" class="product-image" />
                <h2 class="product-title">Product Title</h2>
                <p class="product-description">This is a short description of the product. It highlights key features and benefits.</p>
                <span class="product-price">$19.99</span>
                <button class="add-to-cart-button" onClick={() => {AddItem()}}>Add to Cart</button>
            </div>
            <div class="product-card">
                <img src={Product2} alt="Product Image" class="product-image" />
                <h2 class="product-title">Product Title</h2>
                <p class="product-description">This is a short description of the product. It highlights key features and benefits.</p>
                <span class="product-price">$19.99</span>
                <button class="add-to-cart-button" onClick={() => {AddItem()}}>Add to Cart</button>
            </div>
            <div class="product-card">
                <img src={Product3} alt="Product Image" class="product-image" />
                <h2 class="product-title">Product Title</h2>
                <p class="product-description">This is a short description of the product. It highlights key features and benefits.</p>
                <span class="product-price">$19.99</span>
                <button class="add-to-cart-button" onClick={() => {AddItem()}}>Add to Cart</button>
            </div>
            <div class="product-card">
                <img src={Product4} alt="Product Image" class="product-image" />
                <h2 class="product-title">Product Title</h2>
                <p class="product-description">This is a short description of the product. It highlights key features and benefits.</p>
                <span class="product-price">$19.99</span>
                <button class="add-to-cart-button" onClick={() => {AddItem()}}>Add to Cart</button>
            </div>
            <div class="product-card">
                <img src={Product5} alt="Product Image" class="product-image" />
                <h2 class="product-title">Product Title</h2>
                <p class="product-description">This is a short description of the product. It highlights key features and benefits.</p>
                <span class="product-price">$19.99</span>
                <button class="add-to-cart-button" onClick={() => {AddItem()}}>Add to Cart</button>
            </div>      
        </div>


        

      
      </>
  )
}

export default Products