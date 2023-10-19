import React from "react";
import { ReactDOM } from "react";

export default function RandomNumber(props) {
  const { min, max } = props;

  const random = parseInt(Math.random() * (max - min)) + min;

  return (
    <div>
      <p>Valor minimo: {min}</p>
      <p>Valor maximo: {max}</p>
      <p>Valor aleatorio: {random}</p>
    </div>
  );
}
