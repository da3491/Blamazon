import { useContext, useEffect } from "react";
import { getAllProducts } from "../ctx/axios";
import { useLoaderData } from "react-router-dom";

import PromoSlider from "../components/PromoSlider";
import ProductList from "../components/products/ProductList";
import SearchedProducts from "./SearchedProducts";
import { ProductFilterContext } from "../ctx/ProductFilterProvider";

export const productsLoader = async () => {
  const response = await getAllProducts();
  return response.data;
};

const Home = () => {
  // Access product data, and category context,
  const { products } = useLoaderData();
  const { setCategories } = useContext(ProductFilterContext);

  // On initial load, create a list of categories and store in context
  useEffect(() => {
    const categories = [
      ...new Set(products.map((product) => product.category)),
    ];
    setCategories(categories);
  }, []);

  return (
    <div className="bg-gray-200 relative max-w-screen-2xl mx-auto">
      <PromoSlider />
      <div className="w-full h-72 bg-gradient-to-b from-zinc-800 to-transparent"></div>
      <div className="relative z-10 -mt-96">
        <ProductList products={products} />
        {/* <div>
          <div className="grid grid-cols-4 grid-rows-2 gap-5 m-5">
          <div className="bg-white h-96"></div>
          <div className="bg-white h-96"></div>
          <div className="bg-white h-96"></div>
          <div className="h-96 grid grid-rows-3 gap-5">
          <div className="bg-white row-span-1"></div>
          <div className="bg-white row-span-2"></div>
          </div>
          <div className="bg-white h-96"></div>
          <div className="bg-white h-96"></div>
          <div className="bg-white h-96"></div>
          <div className="bg-white h-96"></div>
          </div>
          <div className="w-full h-96 bg-white m-5"></div>
        </div> */}
      </div>
      {/* <SearchedProducts /> */}
    </div>
  );
};

export default Home;
