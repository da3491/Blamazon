import { useState, useContext } from "react";
import { getProductById } from "../../ctx/axios";
import { useLoaderData, useParams } from "react-router-dom";

import { CartContext } from "../../ctx/CartProvider";

export const productLoader = async ({ params }) => {
  const { id } = params;
  const response = await getProductById(id);
  return response;
};

const ProductPage = () => {
  const { id } = useParams();
  const [slideIndex, setSlideIndex] = useState(0);
  const product = useLoaderData();
  const { addItemToCart } = useContext(CartContext);

  const nextSlide = () => {
    console.log(slideIndex);
    setSlideIndex(
      slideIndex === product.images.length - 1 ? 0 : slideIndex + 1
    );
  };

  const prevSlide = () => {
    setSlideIndex(
      slideIndex === 0 ? product.images.length - 1 : slideIndex - 1
    );
  };

  return (
    <>
      <div className="bg-white">
        <div>
          {/* Banner 1 */}
          {/* <div className="h-12 text-center">Banner</div> */}
          {/* Banner 2 */}
          {/* <div className="bg-gray-200 border border-gray-400 h-12 text-center">
          Banner
        </div> */}
        </div>
        {/* Main Content 3 column grid */}
        <div className="grid grid-cols-3 gap-8 text-center mx-10 my-10">
          {/* Column 1 */}
          <div className="col-span-2 text-start">
            <div className="relative mb-5">
              <img src={product.images[slideIndex]} className="w-full" />
              <button
                className="absolute top-1/2 left-5 text-white text-xl font-bold rounded-full bg-gray-300 w-10 h-10"
                onClick={() => prevSlide()}
              >
                {"<"}
              </button>
              <button
                className="absolute top-1/2 right-5 inset-y-0 text-white text-xl font-bold rounded-full bg-gray-300 w-10 h-10"
                onClick={() => nextSlide()}
              >
                {">"}
              </button>
            </div>
            {/* Product Details */}
            <div className="grid gap-2 ml-5">
              <div className="text-4xl">
                {product.brand} {product.title}
              </div>
              <div>Seller</div>
              <div className="flex">
                <div>Stars</div>
                <div># Ratings</div>
              </div>
              <div className="inline bg-slate-800 text-white px-1 w-fit">
                Blamazon's Choice
              </div>
              <hr className="my-2" />
              <div className="flex text-3xl">
                <div className="text-red-500">-36%</div>
                <div className="pl-2 font-bold">${product.price}</div>
              </div>
            </div>
            {/* Product Description */}
            <div className="max-w-[75%] ml-5">
              <div className="my-3">{product.description}</div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos, magnam? Repellat vel cupiditate, veritatis vero
                eligendi quas assumenda tenetur! Qui iusto, architecto libero
                possimus, iste accusantium tempora magni cum, facilis veniam
                porro sunt. Dolore deleniti placeat mollitia soluta quae. Facere
                provident in at veniam soluta.
              </div>
            </div>
          </div>
          {/* Column 2 */}
          <div className="col-span-1">
            <div className="text-start p-3 border border-gray-300 rounded mb-2">
              <div className="text-2xl text-cyan-500">Prime</div>
              <strong>
                Enjoy fast, FREE delivery, exclusive deals and award-winning
                movies & TV shows with Prime
              </strong>{" "}
              Try Prime and start saving today with Fast, FREE Delivery
            </div>
            <div className="text-start p-3 border border-gray-300 rounded grid gap-3">
              <div className="text-2xl font-bold">${product.price}</div>
              <div>FREE Returns</div>
              <div>
                FREE Delivery <strong>Saturday, April 15</strong>
              </div>
              <div>
                Or fastest delivery Wednesday, April 12. Order within 8hrs 52
                minutes.
              </div>
              <div>Select delivery location</div>
              <div className="font-bold">In Stock</div>
              <select>
                Qty: <option>1</option>
              </select>
              <button
                className="w-full rounded rounded-full bg-yellow-400 py-1"
                onClick={() => addItemToCart(product.id)}
              >
                Add to Cart
              </button>
              <button className="w-full rounded rounded-full bg-orange-400 py-1">
                Buy Now
              </button>
              <div>Secure transaction</div>
              <div className="flex gap-1">
                <input type="checkbox" />
                <div>Add a gift receipt for easy returns</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
