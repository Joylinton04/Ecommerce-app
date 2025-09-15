import { cn } from "@/lib/utils";
import { useAppContext } from "@/store/ContextApi";
import { MenuIcon, ShoppingCart, User } from "lucide-react";
import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = [
    { path: "/", to: "Home" },
    { path: "/categories", to: "Categories" },
    { path: "/about-us", to: "About" },
    { path: "/contact", to: "Contact" },
  ];

  const { cartQuantity } = useAppContext();

  return (
    <>
      <div className="bg-white sticky top-0 z-20">
        <div className="max-w-[1440px] mx-auto px-14 py-4 flex items-center justify-between font-body lgg:px-6 ssm:hidden">
        <h1 className="font-heading text-3xl font-semibold italic cursor-pointer">
          <a href="/">ECOM</a>
        </h1>
        <div className="flex items-center gap-4 ssm:hidden relative">
          {navLinks.map((Link, index) => (
            <NavLink
              key={index}
              to={Link.path}
              className={({ isActive }) =>
                cn(
                  "relative inline-block px-2 py-1",
                  "before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-[2px] before:w-0 before:bg-black before:transition-all before:duration-300 hover:before:w-full",
                  isActive
                    ? "text-black font-semibold before:w-full"
                    : "text-gray-600 hover:text-black before:w-0 hover:before:w-full"
                )
              }
            >
              {Link.to}
            </NavLink>
          ))}
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <span className="p-5 h-6 w-6 hover:bg-black transition-all duration-300 grid place-content-center rounded-full hover:text-white">
            <User className="hover:text-white" />
          </span>
          <span className="p-5 h-6 w-6 bg-black transition-all duration-300 grid place-content-center rounded-full relative">
            <Link to="cart">
              <ShoppingCart className="text-white" />
              {cartQuantity > 0 && (
                <span className="grid place-content-center absolute -top-2 right-0 w-6 h-6 bg-black text-white rounded-full text-sm">
                  {cartQuantity}
                </span>
              )}
            </Link>
          </span>
        </div>
      </div>
      </div>
      <div className="hidden ssm:block">
        <h2 className="bg-[#2D3D4E] text-center text-xs text-white px-6 py-2 font-heading sticky top-0">
          Welcome to our store
        </h2>
        <div className="flex items-center justify-between bg-[#1c2228] px-6 py-3">
          <div>
            <MenuIcon color="#ffff" />
          </div>
          <div className="font-heading font-bold text-white italic">
            <Link to="/">ECOM</Link>
          </div>
          <span className="p-5 h-6 w-6 transition-all duration-300 grid place-content-center rounded-full hover:text-white relative">
            <ShoppingCart className="text-white" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
