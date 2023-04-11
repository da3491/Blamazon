import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithRedirect, logout, user, isLoading } = useAuth0();

  return (
    <>
      {!isLoading && !user && (
        <button onClick={() => loginWithRedirect()}>Login</button>
      )}
      {!isLoading && user && (
        <button
          onClick={() =>
            logout({ logoutParams: { returnTo: window.location.origin } })
          }
        >
          Logout
        </button>
      )}
    </>
  );
};

export default Login;
