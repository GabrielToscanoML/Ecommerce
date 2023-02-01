import React, { useState } from "react";
import ProductsContext from "../context/ProductsContext";
import { getProductsFromCategoryAndQuery } from "../services/api";
import Categories from "./Categories";
import Header from "./Header";
import ProductsList from "./ProductsList";
import "../styles/homepage.css"

function Home() {
  const [productsData, setProductsData] = useState([]);

  async function requestProductsData (id, name) {
    console.log(id, name);
    const response = await getProductsFromCategoryAndQuery(id, name);
    setProductsData(response);
  }

  return (
    <ProductsContext.Provider value={{ products: productsData, requestProductsData }}>
      <Header />
      <main className="main-content">
        <Categories />
        <ProductsList />
      </main>
    </ProductsContext.Provider>
  );
}

export default Home;