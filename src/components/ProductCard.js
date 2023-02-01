import React from "react";

function ProductCard(props) {
  return (
    <div className="card">
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
          <div class="card-button">button</div>
        </div>
        {(props.frete.free_shipping) && <p>Frete Grátis</p>}
    </div>
  );
}

export default ProductCard;