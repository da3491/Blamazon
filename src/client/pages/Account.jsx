import { useAuth0 } from "@auth0/auth0-react";
import { MdEdit } from "react-icons/md";
import Login from "../components/account/LoginButton";

const Account = () => {
  const { user, isAuthenticated, isLoading, logout } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return (
      <div className="text-xl h-full flex items-center justify-center">
        <div>
          Please <Login className="inline" /> to access your account details
        </div>
      </div>
    );
  }

  return (
    isAuthenticated && (
      <div className="flex flex-col justify-center items-center gap-4 my-10">
        <h2 className="text-3xl">Manage your Profile</h2>
        <button
          className="bg-yellow-400 px-3 rounded"
          onClick={() =>
            logout({ logoutParams: { returnTo: window.location.origin } })
          }
        >
          Logout
        </button>
        {/* Section 1 */}
        <div className="rounded-md p-4 bg-white w-1/2 border border-gray-200">
          <div className="flex justify-between">
            <h3 className="text-2xl font-bold">Account Information</h3>
            <button>
              <MdEdit />
            </button>
          </div>
          <div>Name: {user.given_name}</div>
          <div>Email: {user.email}</div>
          <div>Location: {user.locale}</div>
          <div>Shipping Address: 4242 Amazon Ln, CA 55555</div>
        </div>
        {/* Section 2 */}
        <div className="rounded-md p-4 bg-white w-1/2 border border-gray-200">
          <div className="flex justify-between">
            <h3 className="text-2xl font-bold">Billing Information</h3>
            <button>
              <MdEdit />
            </button>
          </div>
          <div>Credit Card: 4242-4242-4242-4242</div>
          <div>Billing Address: 4242 Amazon Ln, CA 55555</div>
        </div>
      </div>
    )
  );
};

export default Account;
