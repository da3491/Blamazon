import React from "react";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Auth0ProviderContext from "./lib/auth0provider";
import CartContext from "./lib/CartProvider";

import Layout from "./components/Layout";
import Home from "./components/Home";
import Account from "./components/Account";
import Cart from "./components/Cart";
import Canceled from "./components/Canceled";
import ProductList, { productsLoader } from "./components/products/ProductList";
import ProductPage, { productLoader } from "./components/products/ProductPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="account" element={<Account />} />
      <Route path="cart" element={<Cart />} />
      <Route path="cancel" element={<Canceled />} />
      <Route
        path="products"
        loader={productsLoader}
        element={<ProductList />}
      />
      {/* <Route
        path="/products/search"
        loader={productsLoader}
        element={<ProductList />}
      /> */}
      <Route
        path="/products/:id"
        loader={productLoader}
        element={<ProductPage />}
      />
    </Route>
  )
);

const App = () => {
  return (
    <Auth0ProviderContext>
      <CartContext>
        <RouterProvider router={router} />
      </CartContext>
    </Auth0ProviderContext>
  );
};
export default App;
