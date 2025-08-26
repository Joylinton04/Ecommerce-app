import { MenuIcon, ShoppingCart, User } from "lucide-react";
import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = [
    { path: "/", to: "Home" },
    { path: "/categories", to: "Categories" },
    { path: "/about", to: "About" },
    { path: "/contact", to: "Contact" },
  ];

  return (
    <>
      <div className="max-w-[1440px] mx-auto px-14 py-4 flex items-center justify-between font-body lgg:px-6 border-b ssm:hidden">
        <h1 className="font-heading text-3xl font-semibold italic cursor-pointer">
          <a href="/">ECOM</a>
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
        <div className="flex items-center gap-2 cursor-pointer">
          <span className="p-5 h-6 w-6 hover:bg-black transition-all duration-300 grid place-content-center rounded-full hover:text-white">
            <User className="hover:text-white" />
          </span>
          <span className="p-5 h-6 w-6 bg-black transition-all duration-300 grid place-content-center rounded-full hover:text-white">
            <ShoppingCart className="text-white" />
          </span>
        </div>
      </div>
      <div className="hidden ssm:block">
        <h2 className="bg-[#2D3D4E] text-center text-xs text-white px-6 py-2 font-heading">
          Welcome to our store
        </h2>
        <div className="flex items-center justify-between bg-[#1c2228] px-6 py-3">
          <div>
            <MenuIcon color="#ffff" />
          </div>
          <div className="font-heading text-white italic">
            <Link to="/">ECOM</Link>
          </div>
          <span className="p-5 h-6 w-6 transition-all duration-300 grid place-content-center rounded-full hover:text-white">
            <ShoppingCart className="text-white" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
