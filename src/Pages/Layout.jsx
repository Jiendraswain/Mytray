import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";

const Layout = () => (
  <>
    <Navbar />
    <div className="container">
      <Outlet />
    </div>
  </>
);

export default Layout;
