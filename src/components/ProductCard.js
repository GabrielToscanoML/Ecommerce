import React from "react";

function ProductCard(props) {
  return (
    <div>
        <p> { props.title } </p>
        <img
            src={ props.thumbnail }
            alt={ props.title }
            width="200px"
        />
        <p> { props.price } </p>
        {(props.frete.free_shipping) && <p>Frete Grátis</p>}
        <p> descrição do produto </p>
    </div>
  );
}

export default ProductCard;