import React, { useState } from "react";
import ProductsContext from "../context/ProductsContext";
import { getProductsFromCategoryAndQuery } from "../services/api";
import Categories from "../components/Categories";
import Header from "../components/Header";
import ProductsList from "../components/ProductsList";
import "../styles/homepage.css"

function Home() {
  const [productsData, setProductsData] = useState([]);
  // const [cartItensCount, setCartItensCount] = useState(0);
  // como eu faço a parte de adicionar 1, remover 1 e remover todos do mesmo estado

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