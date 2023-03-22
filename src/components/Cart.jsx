import React, { useContext } from "react";
import { CartContext } from "../lib/CartProvider";
import styled from "@emotion/styled";

const Container = styled.div`
  border: 1px solid black;
`;

const Cart = () => {
  const { cartItems, removeItemFromCart, clearCart, cartTotal } =
    useContext(CartContext);

  return (
    <Container>
      <button onClick={clearCart}>Empty Cart</button>
      {cartItems.map((item) => {
        return (
          <div key={item.id}>
            {item.title}
            <button onClick={() => removeItemFromCart(item.id)}>
              Remove Item
            </button>
          </div>
        );
      })}
      <div>
        <strong>${cartTotal}</strong>
      </div>
      <button>Checkout</button>
    </Container>
  );
};

export default Cart;
