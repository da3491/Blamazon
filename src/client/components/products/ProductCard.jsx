import { useContext } from "react";
import { CartContext } from "../../ctx/CartProvider";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { Link } from "react-router-dom";

const ProductCard = ({ data }) => {
  const itemId = data.id;

  const { addItemToCart } = useContext(CartContext);

  return (
    <div className="h-96 bg-white text-start flex flex-col justify-between">
      <img src={data.images[0]} className="w-full h-1/2 object-contain" />
      {/* Content Container */}
      <div className="flex flex-col gap-1 px-2 mb-3">
        {/* Item Description */}
        <Link to={`/products/${itemId}`} className="text-xl truncate">
          {data.brand} {data.title}
        </Link>
        {/* Ratings */}
        <div className="flex items-center gap-1">
          {data.rating}
          <div className="flex text-amber-400">
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarHalf />
          </div>
          <div className="text-xs">1,234</div>
        </div>
        {/* Price */}
        <span className="text-xl font-bold">${data.price}</span>
        {/* Shipping */}
        <div className="text-sm">
          FREE delivery <strong className="text-sky-500">Tomorrow</strong>
        </div>
        {/* Add to Cart */}
        <button
          className="bg-amber-500 w-4/6 h-10 mx-auto rounded block mt-3"
          onClick={() => addItemToCart(data)}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
