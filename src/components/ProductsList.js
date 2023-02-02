import React, { useContext } from "react";
import ProductsContext from "../context/ProductsContext";
import ProductCard from "./ProductCard";
import "../styles/productcard.css";

function ProductsList() {
  const { products } = useContext(ProductsContext);

  return (
    <main>
      <h1>Lista de produtos</h1>
      { products.length > 0 
        ? <ul className="products-list">
        {
          products.map((element, index) => {
           if(index >= 0) {
            return (
              <div key={ element.id } className="card-item">
                <ProductCard 
                  title={ element.title }
                  thumbnail={ element.thumbnail }
                  price={ element.price }
                  id={ element.id }
                  frete={ element.shipping.free_shipping }
                />
              </div>
            );
           }
           return null
          })
        }
      </ul>
      : <h1>Escolha uma categoria!</h1>
    }
    </main>
  );
}

export default ProductsList;
