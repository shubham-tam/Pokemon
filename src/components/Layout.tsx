import { Outlet } from "react-router-dom";

import { Header, Footer } from "./index";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
