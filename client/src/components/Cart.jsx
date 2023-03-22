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
    console.log("variable access: ", import.meta.env.REACT_APP_SERVER_URL);
    // fetch("http://localhost:3000/charge", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     items: [
    //       { id: 1, quantity: 3 },
    //       { id: 2, quantity: 1 },
    //     ],
    //   }),
    // })
    //   .then((res) => {
    //     if (res.ok) return res.json();
    //     return res.json().then((json) => Promise.reject(json));
    //   })
    //   .then(({ url }) => {
    //     // window.location = url;
    //     console.log("url: ", url);
    //   })
    //   .catch((e) => {
    //     console.error(e);
    //   });
  };

  // const checkout = () => {
  //   fetch(`${process.env.REACT_APP_SERVER_URL}/charge`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       items: [
  //         { id: 1, quantity: 3 },
  //         { id: 2, quantity: 1 },
  //       ],
  //     }),
  //   })
  //     .then((res) => {
  //       if (res.ok) return res.json();
  //       return res.json().then((json) => Promise.reject(json));
  //     })
  //     .then(({ url }) => {
  //       // console.log(window.location);
  //       window.location = url;
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

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
      <button onClick={() => console.log(process.env.REACT_APP_CLIENT_URL)}>
        Checkout
      </button>
    </Container>
  );
};

export default Cart;
