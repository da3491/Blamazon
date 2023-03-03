import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Account = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  console.log(user);
  return (
    isAuthenticated && (
      <div>
        <div>Welcome, {user.given_name}</div>
        <div>Email: {user.email}</div>
      </div>
    )
  );
};

export default Account;
