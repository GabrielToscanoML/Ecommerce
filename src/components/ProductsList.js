import React, { useContext } from "react";
import ProductsContext from "../context/ProductsContext";
import ProductCard from "./ProductCard";

function ProductsList() {
  const { products } = useContext(ProductsContext);

  return (
    <main>
      <h1>Lista de produtos</h1>
      { products.length > 0 
        ? <ul>
        {
          products.map((element, index) => {
           if(index >= 0) {
            return (
              <div key={ element.id }>
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

/*
const frete = element.shipping.free_shipping;
            if (index >= 0) {
              return (
                <div key={ element.id }>
                  <li>
                    <p>{ element.title }</p>
                    <p>{ element.id }</p>
                    <img src={ element.thumbnail } alt={ element.title } />
                    <p>{ element.price }</p>
                   {frete && <p data-testid="free-shipping">Frete Grátis</p>}
                  </li>
                </div>
              );
            }
             */