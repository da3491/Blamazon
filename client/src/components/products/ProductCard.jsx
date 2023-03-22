import { useContext } from "react";
import { CartContext } from "../../lib/CartProvider";

import styled from "@emotion/styled";
// import { addToCart } from "../../lib/axios";
import { Link } from "react-router-dom";

const Card = styled.div`
  border: 1px solid black;
  text-align: center;
  height: 250px;

  span {
    font-weight: 500;
    color: #999;
  }

  button {
    width: 50%;

    margin-top: 1em;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 50%;
  object-fit: contain;

  margin: 1em 0;
`;

const ProductCard = ({ data }) => {
  const itemId = data.id;

  const { addItemToCart } = useContext(CartContext);

  return (
    <Card>
      <Image src={data.images[0]}></Image>

      <Link to={`/products/${itemId}`}>
        <strong>
          {data.brand} {data.title}{" "}
        </strong>
      </Link>
      <span>${data.price}</span>
      <div>rating: {data.rating}</div>
      <button onClick={() => addItemToCart(data)}>Add to cart</button>
    </Card>
  );
};

export default ProductCard;
