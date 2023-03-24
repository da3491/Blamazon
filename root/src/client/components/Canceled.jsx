import React from "react";
import { Link } from "react-router-dom";

const Canceled = () => {
  return (
    <>
      <div>Canceled</div>
      <button>
        <Link to="/">Back to Home</Link>
      </button>
    </>
  );
};

export default Canceled;
