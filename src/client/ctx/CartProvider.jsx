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

  const increaseQuantity = (id) => {
    const updatedCart = cartItems
      .map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      })
      .filter((item) => item.quantity > 0);
    setCartItems(updatedCart);
  };

  const decreaseQuantity = (id) => {
    const updatedCart = cartItems
      .map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      })
      .filter((item) => item.quantity > 0);
    setCartItems(updatedCart);
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.clear();
  };

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const cartTotalItems = cartItems.reduce(
    (totalItems, currentItem) => totalItems + currentItem.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        addItemToCart,
        removeItemFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        cartItems,
        cartTotal,
        cartTotalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
