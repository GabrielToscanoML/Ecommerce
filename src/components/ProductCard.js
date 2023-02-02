import React from "react";
import { Link } from "react-router-dom";

function ProductCard(props) {
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
            onClick={() => console.log('clicou')}
          >
            Adicionar ao carrinho
          </button>
        </div>
        {(props.frete.free_shipping) && <p>Frete Grátis</p>}
    </div>
  );
}

export default ProductCard;