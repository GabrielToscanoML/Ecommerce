import React, { useState } from "react";
import ProductsContext from "../context/ProductsContext";
import { getProductsFromCategoryAndQuery } from "../services/api";
import Categories from "../components/Categories";
import Header from "../components/Header";
import ProductsList from "../components/ProductsList";
import "../styles/homepage.css"

function Home() {
  if (!JSON.parse(localStorage.getItem('CartItems'))) {
    console.log('chegou aqui');
    localStorage.setItem('CartItems', JSON.stringify([]));
  }
  const [productsData, setProductsData] = useState([]);
  
  async function requestProductsData (id, name) {
    const response = await getProductsFromCategoryAndQuery(id, name);
    setProductsData(response);
  }

  return (
    <ProductsContext.Provider
      value={{ products: productsData, requestProductsData }}
    >
      <Header />
      <main className="main-content">
        <Categories />
        <ProductsList />
      </main>
    </ProductsContext.Provider>
  );
}

export default Home;