import { Outlet } from "react-router-dom";
import AuthNav from "../components/HomePage/components/Nav/AuthNav";

const AuthLayout = () => {
  return (
    <div>
      <Outlet /> {/* This renders the nested routes */}
    </div>
  );
};

export default AuthLayout;
