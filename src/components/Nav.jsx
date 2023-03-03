import React, { useState } from "react";
import Login from "./Login";

import { Link } from "react-router-dom";
import { getAllCarts } from "../lib/axios";
import styled from "@emotion/styled";

// const Form = styled.form`
//   margin-right: 1em;
// `;

const Nav = () => {
  // const [query, setQuery] = useState();

  // const handleQueryChange = (e) => {
  //   setQuery(e.target.value);
  // };
  return (
    <div>
      {/* <Form>
        <input
          type="text"
          placeholder="What are you looking for?"
          onChange={(e) => handleQueryChange(e)}
        ></input>
        <Link to={`/products/search?q=${query}`}>
          <button>Search</button>
        </Link>
      </Form> */}
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
