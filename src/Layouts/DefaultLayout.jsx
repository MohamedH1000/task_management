import { Outlet } from "react-router-dom";
import LeftSidebar from "../components/LeftSidebar";
import Navbar from "../components/DashboardLayout/Navbar";
const DefaultLayout = () => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <LeftSidebar />
        <Outlet /> {/* This renders the nested routes */}
      </div>
    </>
  );
};

export default DefaultLayout;
