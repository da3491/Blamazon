import { Outlet } from "react-router-dom";
import React from "react";

import Nav from "../components/Nav";

const Layout = () => {
  return (
    <div>
      <header>
        <Nav />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
