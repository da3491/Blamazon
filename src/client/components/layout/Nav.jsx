import { useState, useEffect, useContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { HiShoppingCart, HiOutlineLocationMarker } from "react-icons/hi";
import { MdOutlineLanguage } from "react-icons/Md";

import { getLocation } from "../../ctx/axios";

import { CartContext } from "../../ctx/CartProvider";

// Sub Components
import SearchBar from "../nav/SearchBar";

const Nav = () => {
  const { user, isAuthenticated } = useAuth0();
  const [userLocation, setUserLocation] = useState();
  const { cartTotalItems } = useContext(CartContext);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getLocation();
      setUserLocation(data.city);
    };

    fetchData();
  }, []);
  console.log(cartTotalItems);
  return (
    <div className="w-full bg-gray-900 text-white p-3 flex items-end justify-center gap-6 leading-none">
      {/* Logo */}
      <Link to="/">
        <div className="text-2xl font-bold text-amber-500">Blamazon</div>
      </Link>
      {/* Deliver to Your Location */}
      <div className="flex items-end">
        <HiOutlineLocationMarker className="inline text-xl" />
        <div className="pl-1">
          <div className="text-xs text-gray-200">
            {isAuthenticated ? "Deliver to " + user.name : "Hello"}
          </div>
          <strong>
            {isAuthenticated ? userLocation : "Select your address"}
          </strong>
        </div>
      </div>
      {/* SearchBar */}
      <SearchBar />
      {/* Language Selector */}
      <div className="flex">
        <MdOutlineLanguage />
        <div>EN</div>
      </div>
      {/* User Account Access */}
      <Link to="/account">
        <div className="text-xs text-gray-200">
          Hello, {isAuthenticated ? user.given_name : "sign in"}
        </div>
        <strong>{isAuthenticated ? "Account Settings" : "Login"}</strong>
      </Link>
      {/* <Login /> */}
      <div>
        <div className="text-xs text-gray-200">Returns</div>
        <strong>& Orders</strong>
      </div>
      {/* Cart */}
      <Link to="/cart">
        <button className="relative">
          <HiShoppingCart className="text-5xl" />
          <div className="absolute inset-y-2 right-4 text-slate-800 font-bold z-10">
            {cartTotalItems}
          </div>
        </button>
      </Link>
    </div>
  );
};

export default Nav;
