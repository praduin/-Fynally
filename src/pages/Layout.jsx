import { Outlet } from "react-router-dom";
import Footers from "../components/Footers";
import Header from "../components/Header";

const Layout = () => {
  return (
    <div className="w-screen bg-gray-100 flex flex-col min-h-screen">
      <div className="w-screen mx-auto flex flex-col min-h-screen">
        <Header />
        <Outlet />
        <div className="mt-auto w-full">
          <Footers />
        </div>
      </div>
    </div>
  );
};

export default Layout;
