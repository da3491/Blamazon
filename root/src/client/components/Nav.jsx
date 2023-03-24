import Login from "./Login";
import { Link } from "react-router-dom";
// import styled from "@emotion/styled";

const Nav = () => {
  return (
    <div>
      <Link to="/cart">
        <button>Cart</button>
      </Link>
      <Link to="/account">
        <button>Account</button>
      </Link>
      <Login />
    </div>
  );
};

export default Nav;
