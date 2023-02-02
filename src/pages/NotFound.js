import React from "react";
import { useHistory } from 'react-router-dom';

function NotFound() {
  const history = useHistory();
  return (
    <main>
      <h1>Página não encontrada!</h1>
      <button
        type="button"
        onClick={ () => history.push("/") }
      >
        Voltar à página inicial
      </button>
    </main>
  );
}

export default NotFound;