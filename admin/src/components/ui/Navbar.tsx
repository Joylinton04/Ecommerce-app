import React from "react";
import { Button } from "./button";

const Navbar = () => {
  return (
    <div className="font-body border-b">
      <div className="max-w-[1440px] mx-auto px-14 py-2 flex justify-between items-center gap-2 ssm:px-7">
        <div className="flex flex-col">
          <h1 className="italic font-bold text-3xl">ECOM</h1>
          <span className="uppercase text-sm">admin panel</span>
        </div>
        <Button variant="destructive">Logout</Button>
      </div>
    </div>
  );
};

export default Navbar;
