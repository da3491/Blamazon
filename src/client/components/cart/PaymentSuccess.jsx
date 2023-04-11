import { Link } from "react-router-dom";

const PaymentSuccess = () => {
  return (
    <>
      <div className="h-screen grid place-content-center">
        <div className="text-4xl">Payment Recieved!</div>
        <div className="flex gap-3 mx-auto my-5">
          <div>Confirmation:</div>
          <div>439jdsksl2934k32lj59</div>
        </div>
        <button className="px-3 py-2 bg-yellow-400 rounded w-36 mx-auto">
          <Link to="/">Back to Home</Link>
        </button>
      </div>
    </>
  );
};

export default PaymentSuccess;
