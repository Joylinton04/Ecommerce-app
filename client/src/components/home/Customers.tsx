import React from "react";

const Customers = () => {
  return (
    <div className="mt-20 bg-[#B6B09F]">
      <div className="px-14 py-6 max-w-[1440px] mx-auto ssm:px-4 flex gap-4 justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="font-bold font-heading text-8xl mdd:text-5xl ssm:text-4xl">
            50+
          </h1>
          <p className="text-sm ssm:text-xs">Trusted Customers</p>
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="font-bold font-heading text-8xl mdd:text-5xl ssm:text-4xl">
            99%
          </h1>
          <p className="text-sm ssm:text-xs text-center">
            Assured of secured payments
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="font-bold font-heading text-8xl mdd:text-5xl ssm:text-4xl">
            2K
          </h1>
          <p className="text-sm ssm:text-xs">Customers Worldwide</p>
        </div>
      </div>
    </div>
  );
};

export default Customers;
