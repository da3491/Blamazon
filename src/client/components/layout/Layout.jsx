import { Outlet } from "react-router-dom";

import Nav from "./Nav";
import SubNav from "../nav/SubNav";
import Footer from "../layout/Footer";

const Layout = () => {
  return (
    <div className="w-full h-full relative">
      <Nav />
      <SubNav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
