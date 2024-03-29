import { useState } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

const PromoSlider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const slides = [
    "https://m.media-amazon.com/images/I/61-dHhKgW8L._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/611Hit0i2SL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61i0wxZouCL._SX3000_.jpg",
  ];

  const nextSlide = () => {
    setSlideIndex(slideIndex === slides.length - 1 ? 0 : slideIndex + 1);
  };

  const prevSlide = () => {
    setSlideIndex(slideIndex === 0 ? slides.length - 1 : slideIndex - 1);
  };

  return (
    <div>
      <div className="w-full h-1/2 relative">
        <img
          src={slides[slideIndex]}
          alt="Promo Slide"
          className="w-full h-full"
        />
        <div className="absolute mt-auto h-2/5 inset-0 bg-gradient-to-b from-transparent to-gray-200"></div>
      </div>
      <div className="focus:border-2 focus:border-orange-400 focus:rounded">
        <button
          onClick={() => prevSlide()}
          className="px-5 bg-transparent text-white absolute left-0 h-56 top-0 focus:border-2 focus:border-orange-400 focus:rounded"
        >
          <FiChevronLeft className="text-5xl" />
        </button>
        <button
          onClick={() => nextSlide()}
          className="px-5 bg-transparent text-white absolute right-0 h-56 top-0 focus:border-2 focus:border-orange-400 focus:rounded"
        >
          <FiChevronRight className="text-5xl" />
        </button>
      </div>
    </div>
  );
};

export default PromoSlider;
