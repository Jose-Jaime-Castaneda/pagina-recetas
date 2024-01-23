import React from "react";
import "./styles/main.css";
import { useNavigate } from "react-router-dom";

import { handleContinuar } from "../../utils/buttonHandlers/handlers";

import Button from "../button/buttonSimple";

function MainComponent() {
  const navegador = useNavigate();
  return (
    <header className="header">
      <h1>¡Descubre tu siguiente platillo favorito!</h1>
      <p>
        En este proyecto vamos a trabajar con clean code, y vamos a utilizar
        DummyJS para hacer uso de una API y obtener datos para después
        pintarlos.
      </p>
      <div className="buttonContainer">
        <Button label="Empezar a Cocinar" onClick={() => handleContinuar(navegador)} />
      </div>
    </header>
  );
}

export default MainComponent;
