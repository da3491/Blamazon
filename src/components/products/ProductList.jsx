import React, { useState } from "react";
import styled from "@emotion/styled";
import { getAllProducts, getProductBySearch } from "../../lib/axios";
import { useParams, useLoaderData } from "react-router-dom";

import ProductCard from "./ProductCard";
import CategoryFilter from "../CategoryFilter";

const Grid = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2em;
`;

export const productsLoader = async ({ params }) => {
  const { q } = params;
  console.log("param value,", q);
  const response = await getAllProducts();
  console.log(response.data);
  return response.data;
};

const ProductList = () => {
  const { products } = useLoaderData();
  const [filter, setFilter] = useState();

  const categories = [...new Set(products.map((product) => product.category))];

  let filteredProducts = products;
  if (filter) {
    filteredProducts = products.filter((product) =>
      product.category.includes(filter)
    );
  }

  return (
    <>
      <CategoryFilter categories={categories} handleFilterChange={setFilter} />
      <Grid>
        {filteredProducts.map((product) => {
          return <ProductCard key={product.id} data={product} />;
        })}
      </Grid>
    </>
  );
};

export default ProductList;
