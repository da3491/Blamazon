import { useContext } from "react";
import { ProductFilterContext } from "../../ctx/ProductFilterProvider";

const CategoryFilter = () => {
  const { setSelectedCategory, selectedCategory, categories } =
    useContext(ProductFilterContext);

  const getOptionWidth = (option) => {
    if (!option) {
      return 70;
    }
    return `${option.length + 4}ch`; // Add extra padding for arrow icon
  };

  // Check for list to prevent breaking
  if (!categories) {
    return <option>loading</option>;
  }

  return (
    <select
      onChange={(e) => {
        getOptionWidth(selectedCategory);
        setSelectedCategory(e.target.value);
      }}
      className="bg-gray-200 text-black h-10 px-2 focus:outline-none"
      style={{ width: getOptionWidth(selectedCategory) }}
    >
      <option value="">All</option>
      {categories.map((category) => {
        return (
          <option key={category} value={category}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </option>
        );
      })}
    </select>
  );
};

export default CategoryFilter;
