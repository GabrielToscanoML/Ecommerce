import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import "../styles/productInfo.css";
import { useParams } from 'react-router-dom';
import { getProductById } from '../services/api';

function ProductInfo() {
  const [currentProduct, setCurrentProduct] = useState({});
  const { id } = useParams();

  const requestAPI = async () => {
    const response = await getProductById(id);
    setCurrentProduct(response);
  }

  useEffect(() => {
    requestAPI();
  }, []);

  return (
    <div>
      <Header />
      <main className='main-productInfo'>
        <p> { currentProduct.title } </p>
          <img
            src={ currentProduct.thumbnail }
            alt={ currentProduct.title }
            width="200px"
          />
          <p> { currentProduct.price } </p>
          {(currentProduct.free_shipping) && <p>Frete Grátis</p>}
          <p> descrição do produto </p>
      </main>
    </div>
  );
}

export default ProductInfo;