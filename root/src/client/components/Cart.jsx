import { useContext } from "react";
import { CartContext } from "../lib/CartProvider";
import styled from "@emotion/styled";

const Container = styled.div`
  border: 1px solid black;
`;

const Cart = () => {
  const { cartItems, removeItemFromCart, clearCart, cartTotal } =
    useContext(CartContext);

  const postStripePayment = async () => {
    console.log(cartItems);
    fetch("http://localhost:3000/charge", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: cartItems,
      }),
    })
      .then((res) => {
        if (res.ok) return res.json();
        return res.json().then((json) => Promise.reject(json));
      })
      .then(({ url }) => {
        window.location = url;
        // console.log("url: ", url);
      })
      .catch((e) => {
        console.error(e);
      });
  };

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
      <button onClick={() => postStripePayment()}>Checkout</button>
    </Container>
  );
};

export default Cart;
