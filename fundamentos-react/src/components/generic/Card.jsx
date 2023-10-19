import React from "react";
import "./Card.css";

export default function Card(props) {
  const title = props.title ? props.title : "Sem titulo para card";
  const customStyle={
    backgroundColor: props.color || '#F00',
  }
  return (
    <div className="card" style={customStyle}>
      <h2>{title} </h2>
      <div className="card-content">{props.children}</div>
    </div>
  );
}
