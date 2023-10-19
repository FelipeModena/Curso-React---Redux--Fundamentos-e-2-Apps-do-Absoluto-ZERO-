import React from "react";
import produts from "../../data/products";

import "./listProducts.css";
export default function ListProducts() {
  const productsJSX = produts.map((product, i) => {
    return (
      <tr key={product.id} className={i % 2 === 0 ? "pair-tr" : "odd-tr"}>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.price}</td>
      </tr>
    );
  });

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{productsJSX}</tbody>
      </table>
    </div>
  );
}
