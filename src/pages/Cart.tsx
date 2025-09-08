import assets from "@/assets/assets";
import ProductTitle from "@/components/ProductTitle";
import { Trash2 } from "lucide-react";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const Cart = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => setQuantity((q) => q + 1);
  const handleDecrease = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  return (
    <div className="max-w-[1440px] mx-auto p-6 md:p-14 font-body min-h-screen relative">
      <ProductTitle title="YOUR CART" />

      <div className="flex flex-col gap-6 mt-12 cursor-pointer">
        {/* Cart Item */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b pb-6 gap-6">
          {/* Product Info */}
          <div className="flex gap-4 w-full md:w-2/3">
            <img
              src={assets.puma}
              alt="cart-product"
              className="w-[114px] h-[131px] ssm:w-[130px] rounded-md object-cover"
            />
            <div className="flex flex-col justify-between">
              <h2 className="text-lg md:text-xl font-medium ssm:text-base">
                Men Round Neck Pure Cotton T-shirt
              </h2>
              <div className="flex gap-3 items-center text-gray-600 mt-2">
                <p className="font-semibold text-gray-800 ssm:text-sm">GH₵149.99</p>
                <span className="px-4 py-2 border rounded-lg text-sm font-medium">
                  M
                </span>
              </div>
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleDecrease}
              className="w-8 h-8 border rounded-md hover:bg-gray-100"
            >
              -
            </button>
            <input
              type="number"
              value={quantity}
              readOnly
              className="w-12 text-center border rounded-md py-1"
            />
            <button
              onClick={handleIncrease}
              className="w-8 h-8 border rounded-md hover:bg-gray-100"
            >
              +
            </button>
          </div>

          {/* Remove Button */}
          <button className="text-red-500 hover:text-red-700 transition-colors">
            <Trash2 size={22} />
          </button>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center border-b pb-6 gap-6">
          {/* Product Info */}
          <div className="flex gap-4 w-full md:w-2/3">
            <img
              src={assets.airForce}
              alt="cart-product"
              className="w-[114px] h-[131px] ssm:w-[130px] rounded-md object-cover"
            />
            <div className="flex flex-col justify-between">
              <h2 className="text-lg md:text-xl font-medium ssm:text-base">
                Men Round Neck Pure Cotton T-shirt
              </h2>
              <div className="flex gap-3 items-center text-gray-600 mt-2">
                <p className="font-semibold text-gray-800 ssm:text-sm">GH₵149.99</p>
                <span className="px-4 py-2 border rounded-lg text-sm font-medium">
                  L
                </span>
              </div>
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleDecrease}
              className="w-8 h-8 border rounded-md hover:bg-gray-100"
            >
              -
            </button>
            <input
              type="number"
              value={quantity}
              readOnly
              className="w-12 text-center border rounded-md py-1"
            />
            <button
              onClick={handleIncrease}
              className="w-8 h-8 border rounded-md hover:bg-gray-100"
            >
              +
            </button>
          </div>

          {/* Remove Button */}
          <button className="text-red-500 hover:text-red-700 transition-colors">
            <Trash2 size={22} />
          </button>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center border-b pb-6 gap-6">
          {/* Product Info */}
          <div className="flex gap-4 w-full md:w-2/3">
            <img
              src={assets.roundNeck}
              alt="cart-product"
              className="w-[114px] h-[131px] ssm:w-[130px] rounded-md object-cover"
            />
            <div className="flex flex-col justify-between">
              <h2 className="text-lg md:text-xl font-medium ssm:text-base">
                Men Round Neck Pure Cotton T-shirt
              </h2>
              <div className="flex gap-3 items-center text-gray-600 mt-2">
                <p className="font-semibold text-gray-800 ssm:text-sm">GH₵149.99</p>
                <span className="px-4 py-2 border rounded-lg text-sm font-medium">
                  L
                </span>
              </div>
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleDecrease}
              className="w-8 h-8 border rounded-md hover:bg-gray-100"
            >
              -
            </button>
            <input
              type="number"
              value={quantity}
              readOnly
              className="w-12 text-center border rounded-md py-1"
            />
            <button
              onClick={handleIncrease}
              className="w-8 h-8 border rounded-md hover:bg-gray-100"
            >
              +
            </button>
          </div>

          {/* Remove Button */}
          <button className="text-red-500 hover:text-red-700 transition-colors">
            <Trash2 size={22} />
          </button>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center border-b pb-6 gap-6">
          {/* Product Info */}
          <div className="flex gap-4 w-full md:w-2/3">
            <img
              src={assets.jeans2}
              alt="cart-product"
              className="w-[114px] h-[131px] ssm:w-[130px] rounded-md object-cover"
            />
            <div className="flex flex-col justify-between">
              <h2 className="text-lg md:text-xl font-medium ssm:text-base">
                Men Round Neck Pure Cotton T-shirt
              </h2>
              <div className="flex gap-3 items-center text-gray-600 mt-2">
                <p className="font-semibold text-gray-800 ssm:text-sm">GH₵149.99</p>
                <span className="px-4 py-2 border rounded-lg text-sm font-medium">
                  XL
                </span>
              </div>
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleDecrease}
              className="w-8 h-8 border rounded-md hover:bg-gray-100"
            >
              -
            </button>
            <input
              type="number"
              value={quantity}
              readOnly
              className="w-12 text-center border rounded-md py-1"
            />
            <button
              onClick={handleIncrease}
              className="w-8 h-8 border rounded-md hover:bg-gray-100"
            >
              +
            </button>
          </div>

          {/* Remove Button */}
          <button className="text-red-500 hover:text-red-700 transition-colors">
            <Trash2 size={22} />
          </button>
        </div>
      </div>

      {/* Cart Summary */}
      <div className="mt-12 flex flex-col gap-6 px-6">
        <div className="flex items-center gap-4">
          <h1>CART <span className="font-bold">TOTALS</span></h1>
          <div className="bg-[#252525] w-[50.81px] h-[2px]"></div>
        </div>
        <div className="flex justify-between items-center pb-2 border-b">
          <h1>Subtotal</h1>
          <p>$60.00</p>
        </div>
        <div className="flex justify-between items-center pb-2 border-b">
          <h1>Shipping Free</h1>
          <p>$10.00</p>
        </div>
        <Button className="bg-black text-white rounded-full px-8 py-3 hover:bg-orange-600 transition-all w-[262px]">
          Proceed to Checkout
        </Button>
      </div>
    </div>
  );
};

export default Cart;
