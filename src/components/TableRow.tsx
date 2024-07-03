import React from "react";

function TableRow({ product, index }) {
  return (
    <tr className=" px-2 py-4">
      <td>{index + 1}</td>
      <td>
        <img src={product.image} alt={product.name} width="50" />
      </td>
      <td>{product.sku}</td>
      <td>{product.name}</td>
      <td>{product.title}</td>
      <td>{product.description}</td>
      <td>{product.brand}</td>
      <td>{product.costPrice}</td>
      <td>{product.quantity}</td>
      <td>{product.size}</td>
    </tr>
  );
}

export default TableRow;
