import { Outlet } from "react-router-dom";

import Nav from "./Nav";
import SubNav from "../nav/SubNav";
import Footer from "../layout/Footer";

const Layout = () => {
  return (
    <div className="w-full h-screen relative flex flex-col min-h-screen">
      <Nav />
      <SubNav />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
