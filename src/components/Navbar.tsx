import { ShoppingCart, User } from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = [
    { path: "/", to: "Home" },
    { path: "/categories", to: "Categories" },
    { path: "/about", to: "About" },
    { path: "/contact", to: "Contact" },
  ];

  return (
    <div className="max-w-[1440px] mx-auto px-14 py-4 flex items-center justify-between font-body ssm:px-6">
      <h1 className="font-heading text-3xl font-semibold italic cursor-pointer">
        ECOM
      </h1>
      <div className="flex items-center gap-4 ssm:hidden">
        {navLinks.map((Link, index) => (
          <NavLink
            className={`transition-all duration-300 py-1 hover:px-2 hover:bg-black hover:text-white rounded-full`}
            to={Link.path}
            key={index}
          >
            {Link.to}
          </NavLink>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <span className="p-5 h-6 w-6 hover:bg-black transition-all duration-300 grid place-content-center rounded-full hover:text-white">
          <User className="hover:text-white" />
        </span>
        <span className="p-5 h-6 w-6 bg-black transition-all duration-300 grid place-content-center rounded-full hover:text-white">
          <ShoppingCart className="text-white" />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
