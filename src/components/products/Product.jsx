import React from "react";

const Product = ({ data }) => {
  return (
    <div>
      <strong>{data.title}</strong>
      <div>{data.price}</div>
      <div>{data.rating.rate}</div>
    </div>
  );
};

export default Product;
