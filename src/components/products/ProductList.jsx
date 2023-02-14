import React from "react";
import Product from "./Product";

const ProductList = ({ products }) => {
  return (
    <ul>
      {products.map((product) => {
        return <Product key={product.id} data={product} />;
      })}
    </ul>
  );
};

export default ProductList;
