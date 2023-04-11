import React from "react";
import { Link } from "react-router-dom";

const PaymentCanceled = () => {
  return (
    <>
      <div>PaymentCanceled</div>
      <button>
        <Link to="/">Back to Home</Link>
      </button>
    </>
  );
};

export default PaymentCanceled;
