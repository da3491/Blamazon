import { useState, createContext } from "react";

export const ProductFilterContext = createContext({
  selectedCategory: "",
  setSelectedCategory: () => {},
  categories: [],
  setCategories: () => {},
});

const ProductFilterProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categories, setCategories] = useState("");
  return (
    <ProductFilterContext.Provider
      value={{
        selectedCategory,
        setSelectedCategory,
        categories,
        setCategories,
      }}
    >
      {children}
    </ProductFilterContext.Provider>
  );
};

export default ProductFilterProvider;
