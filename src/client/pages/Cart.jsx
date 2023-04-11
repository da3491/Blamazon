import { useContext } from "react";
import { CartContext } from "../ctx/CartProvider";
import CartItem from "../components/cart/CartItem";

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

  console.log(cartItems);
  return (
    <div className="grid grid-cols-4 gap-5 m-5">
      {/* Cart*/}
      <div className="col-span-3 bg-white border p-5">
        {/* Header */}
        <div>
          <h2 className="text-3xl">Shopping Cart</h2>
          <button onClick={clearCart} className="text-cyan-700">
            Delete all items
          </button>
          <div className="float-right text-sm text-gray-600">Price</div>
          <hr />
        </div>
        {/* Items */}
        {cartItems.map((item) => {
          return (
            <CartItem
              key={item.id}
              data={item}
              removeItemFromCart={removeItemFromCart}
            />
          );
        })}
        <div className="text-lg float-right">
          Subtotal (# items): <strong>${cartTotal}</strong>
        </div>
      </div>
      {/* Checkout */}
      <div className="col-span-1 bg-white border p-5">
        <div className="text-lg">
          Subtotal (# items): <strong>${cartTotal}</strong>
        </div>
        <input type="checkbox" /> This order contains a gift
        <button
          onClick={() => postStripePayment()}
          className="block rounded-lg bg-yellow-400 w-full py-1 my-3"
        >
          Proceed to checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
