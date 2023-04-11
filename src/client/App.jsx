import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Auth0ProviderContext from "./ctx/auth0provider";
import CartContext from "./ctx/CartProvider";
import ProductFilterContext from "./ctx/ProductFilterProvider";

import Layout from "./components/layout/Layout";
// Pages
import Home from "./pages/Home";
import Account from "./pages/Account";
import Cart from "./pages/Cart";
import PaymentCanceled from "./components/cart/PaymentCanceled";
import PaymentSuccess from "./components/cart/PaymentSuccess";

import { productsLoader } from "./pages/Home";
import ProductPage, { productLoader } from "./components/products/ProductPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index loader={productsLoader} element={<Home />} />
      <Route path="account" element={<Account />} />
      <Route path="cart" element={<Cart />} />
      <Route path="payment_cancel" element={<PaymentCanceled />} />
      <Route path="payment_success" element={<PaymentSuccess />} />
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
        <ProductFilterContext>
          <RouterProvider router={router} basename="/" />
        </ProductFilterContext>
      </CartContext>
    </Auth0ProviderContext>
  );
};
export default App;
