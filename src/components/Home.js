import React from "react";
import ProductsContext from "../context/ProductsContext";
import Categories from "./Categories";
import Header from "./Header";

function Home() {
  return (
    <ProductsContext.Provider>
      <Header />
      <Categories />
    </ProductsContext.Provider>
  );
}

export default Home;