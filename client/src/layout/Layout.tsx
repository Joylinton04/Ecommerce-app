import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const Layout = () => {
  return (
    <div className="min-h-screen">
      <ToastContainer 
      autoClose={1200}
      />
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
