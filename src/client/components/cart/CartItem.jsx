import { useContext } from "react";
import { RxDividerVertical } from "react-icons/rx";
import { CartContext } from "../../ctx/CartProvider";

const CartItem = ({ data, removeItemFromCart }) => {
  const { increaseQuantity, decreaseQuantity } = useContext(CartContext);
  return (
    <>
      <div className="grid grid-cols-6 my-5 gap-3 h-24">
        <img src={data.images[0]} className="col-span-1 object-contain" />
        <div className="col-span-4">
          <div className="text-xl">
            {data.brand}
            {data.title}
          </div>
          <div>{data.description}</div>
          {/* Bottom Bar */}
          <div className="flex items-center gap-2 text-sm">
            <button
              className="bg-orange-300 rounded-full w-6 h-5"
              onClick={() => decreaseQuantity(data.id)}
            >
              -
            </button>
            <div>Qty: {data.quantity}</div>
            <button
              className="bg-orange-300 rounded-full w-6 h-5"
              onClick={() => increaseQuantity(data.id)}
            >
              +
            </button>
            <RxDividerVertical className="text-gray-300" />
            <button
              className="text-cyan-600"
              onClick={() => removeItemFromCart()}
            >
              Delete
            </button>
            <RxDividerVertical className="text-gray-300" />
            <div className="text-cyan-600">Save for later</div>
            <RxDividerVertical className="text-gray-300" />
            <div className="text-cyan-600">Compare with similar items</div>
            <RxDividerVertical className="text-gray-300" />
            <div className="text-cyan-600">Share</div>
          </div>
        </div>
        <div className="col-span-1 text-end font-bold text-lg">
          ${data.price}
        </div>
      </div>
      <hr />
    </>
  );
};

export default CartItem;
