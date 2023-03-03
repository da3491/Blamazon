import React from "react";
import { getProductById } from "../../lib/axios";
import { useLoaderData, useParams } from "react-router-dom";
import styled from "@emotion/styled";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-content: center;
`;
const Image = styled.img`
  width: 500px;
  height: auto;
`;
const Content = styled.div`
  div {
    display: flex;
    gap: 1em;
  }
`;

export const productLoader = async ({ params }) => {
  const { id } = params;
  console.log("id is ", id);
  const response = await getProductById(id);
  console.log(response);
  return response;
};

const ProductPage = () => {
  const { id } = useParams();
  console.log("id in component", id);
  const product = useLoaderData();

  return (
    <Container>
      {/* <Image loading="lazy" src={product?.images[0]} /> */}
      <Content>
        <h2>
          {product.brand}
          {product.title}
        </h2>
        <div>
          <div>Rating: {product.rating}</div>
          <div>$ {product.price}</div>
        </div>
      </Content>
    </Container>
  );
};

export default ProductPage;
