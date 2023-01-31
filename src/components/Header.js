import React from "react";
import { useHistory } from 'react-router-dom';
import ShoppingCartIcon from '../images/shoppingCart.svg';
import MLIcon from '../images/mercado-livre.svg';
import '../styles/header.css';

function Header() {
  const history = useHistory();
  return (
    <header className="header">
      <img
        src={ MLIcon }
        alt="Mercado Livre Icon"
        className="ML-Icon"
        width="150px"
        heigth="150px"
        onClick={ () => history.push('/') }
      />
      <section className="cart-button">
        <img
          src={ ShoppingCartIcon }
          alt="Shopping Cart Icon"
          className="cart-icon"
          width="35px"
          heigth="35px"
          onClick={ () => history.push('/shoppingCart') }
        />
        <span className="cart-itens-count">{ 0 }</span>
      </section>
    </header>
  );
}

export default Header;