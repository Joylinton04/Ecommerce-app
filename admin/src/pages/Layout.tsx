import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/ui/Navbar";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const Layout = () => {
  return (
    <div className="font-body">
      <Navbar />
      <ToastContainer/>
      <div className="flex gap-6 p-4 max-w-[1440px] mx-auto">
        {" "}
        {/* Added padding for better mobile view */}
        <Sidebar />
        <Outlet/>
      </div>
    </div>
  );
};

export default Layout;
