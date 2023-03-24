import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const Form = styled.form`
  margin-right: 1em;
`;

const SearchBar = () => {
  const [query, setQuery] = useState();

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };
  return (
    <Form>
      <input
        type="text"
        placeholder="What are you looking for?"
        onChange={(e) => handleQueryChange(e)}
      ></input>
      <Link to={`/products/search?q=${query}`}>
        <button>Search</button>
      </Link>
    </Form>
  );
};

export default SearchBar;
