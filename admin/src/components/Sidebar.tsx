import React from "react";
import { Link, useLocation } from "react-router-dom";
import { PlusIcon, ListIcon, ShoppingBagIcon } from "lucide-react";

const Sidebar = () => {
  const location = useLocation();

  const nav = [
    {
      path: "Add Items",
      to: "/",
      icon: <PlusIcon className="w-5 h-5" />,
    },
    {
      path: "List Items",
      to: "/list-items",
      icon: <ListIcon className="w-5 h-5" />,
    },
    {
      path: "Orders",
      to: "/orders",
      icon: <ShoppingBagIcon className="w-5 h-5" />,
    },
  ];

  return (
    <div className="pl-8 pr-4 border-r py-6 flex flex-col gap-4 min-h-screen bg-white shadow-sm">
      {nav.map((item, i) => {
        const isActive = location.pathname === item.to;

        return (
          <Link
            key={i}
            to={item.to}
            className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-200 cursor-pointer
                ${isActive 
                ? "border-l-4 border-orange-500 bg-orange-50 text-orange-600 font-semibold" 
                : "text-gray-700 hover:bg-gray-50 hover:text-orange-500"}`}
          >
            <div className={`p-2 rounded-full ${isActive ? "bg-white text-orange-500" : "bg-gray-50 text-gray-600"}`}>
              {item.icon}
            </div>
            <span className="font-medium">{item.path}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default Sidebar;
