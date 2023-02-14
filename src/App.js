import React, { useState, useEffect } from "react";
import { getAllproducts } from "./lib/axios";

import ProductList from "./components/products/ProductList";

const App = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await getAllproducts();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(products);

  return (
    <div>
      Hello
      <ProductList products={products} />
    </div>
  );
};
export default App;
