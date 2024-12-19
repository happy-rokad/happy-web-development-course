import React , {useContext} from 'react';
import { TheamContextData } from './TheamContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Header.css'; // Optional: for custom styling

const Header = () => {

    const { count } = useContext(TheamContextData);

  return (
      <>

        <header className="header">
            <div className="logo">
                <h1>My Store</h1>    
            </div>
            <div className="nav">
                <nav>
                    <a href="home"> Home </a>
                    <a href="about"> About </a>
                    <a href="service"> Service </a>
                    <a href="product"> Products </a>
                    <a href="gallary"> Gallary </a>
                    <a href="blog"> Blog </a>
                    <a href="contact"> Contact </a>
                </nav>  
            </div>
            <div className="cart">
                <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
                <span className="cart-count"> {count} </span>
            </div>
        </header>
          

      </>
  )
}

export default Header