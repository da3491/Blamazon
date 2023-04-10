import { useContext } from "react";
import ProductCard from "./ProductCard";
import { ProductFilterContext } from "../../ctx/ProductFilterProvider";

const ProductList = ({ products }) => {
  const { selectedCategory } = useContext(ProductFilterContext);

  // Take the provided product list and filter by selectedCategory from context
  let filteredProducts = products;
  if (selectedCategory) {
    filteredProducts = products.filter((product) =>
      product.category.includes(selectedCategory)
    );
  }
  return (
    <>
      <div className="grid grid-cols-4 gap-5 p-5">
        {filteredProducts.map((product) => {
          return <ProductCard key={product.id} data={product} />;
        })}
      </div>
    </>
  );
};

export default ProductList;
