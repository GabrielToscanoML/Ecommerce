import React from "react";
import { Link } from "react-router-dom";

function ProductCard(props) {

  
  const verifyExistence = (itemsSaved, id) => {
    console.log(itemsSaved.find((elemento) => elemento.id === id));
  }

  const addToLocalStorage = (title, thumbnail, price, id) => {
    const itemsSaved = JSON.parse(localStorage.getItem('CartItems'));
    console.log(verifyExistence(itemsSaved, id));
    if (verifyExistence(itemsSaved, id)) {
      itemsSaved.forEach((item) => {
        if(item.id === id) item.count += 1;
      });
    } else {
        const newProduct = {
          title,
          thumbnail,
          price,
          id,
          value: id,
          count: 1,
        };
        if (!JSON.parse(localStorage.getItem('CartItems'))) {
          localStorage.setItem('CartItems', JSON.stringify([]));
        }
        const newCartItens = [...itemsSaved, newProduct];
        localStorage.setItem('CartItems', JSON.stringify(newCartItens));
      }
    }

  return (
    <div className="card">
      <Link
        to={ `/ProductInfo/${props.id}` }
        frete={ props.frete }
      >
        Detalhes do produto
      </Link>
       <img
            src={ props.thumbnail }
            alt={ props.title }
            className="card-img"
        />
        <div className="card-info">
          <p className="text-title"> { props.title } </p>
          <p className="text-body"> descrição do produto </p>
        </div>
        <div class="card-footer">
          <span class="text-title">${ props.price }</span>
          <button
            class="card-button"
            onClick={() => addToLocalStorage(
              props.title,
              props.thumbnail,
              props.price,
              props.id)}
          >
            Adicionar ao carrinho
          </button>
        </div>
        {(props.frete.free_shipping) && <p>Frete Grátis</p>}
    </div>
  );
}

export default ProductCard;