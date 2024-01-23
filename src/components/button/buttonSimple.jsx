import React from "react";
// Este componenete es un botón reutilizable
function Button(props) {
  const { label, onClick } = props;

  return <button onClick={onClick}>{label}</button>;
}

export default Button;
