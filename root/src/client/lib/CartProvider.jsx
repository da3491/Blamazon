import React, { useEffect, useState, createContext } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const cartLocalStorage = JSON.parse(localStorage.getItem("cart"));
  const [cartItems, setCartItems] = useState(cartLocalStorage || []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addItemToCart = (item) => {
    console.log("item to add, ", item);
    console.log("cartItems, ", cartItems);
    const index = cartItems.findIndex((cartItem) => cartItem.id === item.id);

    index !== -1
      ? setCartItems(
          cartItems.map((cartItem, i) =>
            i === index
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          )
        )
      : setCartItems([...cartItems, { ...item, quantity: 1 }]);
  };

  const removeItemFromCart = (itemToRemove) => {
    const index = cartItems.findIndex((item) => item.id === itemToRemove);
    if (index !== -1) {
      const updatedCart = [...cartItems];
      updatedCart[index].quantity > 1
        ? (updatedCart[index].quantity -= 1)
        : updatedCart.splice(index, 1);
      setCartItems(updatedCart);
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItemToCart,
        removeItemFromCart,
        clearCart,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
