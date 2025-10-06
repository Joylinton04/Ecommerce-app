import assets from "@/assets/assets";
import ProductTitle from "@/components/ProductTitle";
import { Trash2 } from "lucide-react";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";

interface CartItem {
  id: string;
  name: string;
  price: number;
  size: string;
  image: string;
  quantity: number;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "1",
      name: "Men Round Neck Pure Cotton T-shirt",
      price: 149.99,
      size: "M",
      image: assets.puma,
      quantity: 1,
    },
    {
      id: "2",
      name: "Nike Air Force 1",
      price: 299.99,
      size: "L",
      image: assets.airForce,
      quantity: 1,
    },
  ]);

  // Increase item quantity
  const handleIncrease = (id: string) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrease item quantity
  const handleDecrease = (id: string) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Remove item
  const handleRemove = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Calculate subtotal
  const subTotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping_price = 5;
  const totalPrice = subTotal + shipping_price;

  return (
    <div className="max-w-[1440px] mx-auto p-6 md:p-14 font-body min-h-screen relative">
      <ProductTitle title="YOUR CART" />

      {/* Cart Items */}
      <div className="flex flex-col gap-6 mt-12 cursor-pointer">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row justify-between items-center border-b pb-6 gap-6"
          >
            {/* Product Info */}
            <div className="flex gap-4 w-full md:w-2/3">
              <img
                src={item.image}
                alt={item.name}
                className="w-[114px] h-[131px] ssm:w-[130px] rounded-md object-cover"
              />
              <div className="flex flex-col justify-between">
                <h2 className="text-lg md:text-xl font-medium ssm:text-base">
                  {item.name}
                </h2>
                <div className="flex gap-3 items-center text-gray-600 mt-2">
                  <p className="font-semibold text-gray-800 ssm:text-sm">
                    GH₵{item.price}
                  </p>
                  <span className="px-4 py-2 border rounded-lg text-sm font-medium">
                    {item.size}
                  </span>
                </div>
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => handleDecrease(item.id)}
                className="w-8 h-8 border rounded-md hover:bg-gray-100"
              >
                -
              </button>
              <input
                type="number"
                value={item.quantity}
                readOnly
                className="w-12 text-center border rounded-md py-1"
              />
              <button
                onClick={() => handleIncrease(item.id)}
                className="w-8 h-8 border rounded-md hover:bg-gray-100"
              >
                +
              </button>
            </div>

            {/* Remove Button */}
            <button
              onClick={() => handleRemove(item.id)}
              className="text-red-500 hover:text-red-700 transition-colors"
            >
              <Trash2 size={22} />
            </button>
          </div>
        ))}
      </div>

      {/* Cart Summary */}
      <div className="mt-12 flex flex-col gap-6 px-6">
        <div className="flex items-center gap-4">
          <h1>
            CART <span className="font-bold">TOTALS</span>
          </h1>
          <div className="bg-[#252525] w-[50.81px] h-[2px]"></div>
        </div>
        <div className="flex justify-between items-center pb-2 border-b">
          <h1>Subtotal</h1>
          <p>GH₵{subTotal.toFixed(2)}</p>
        </div>
        <div className="flex justify-between items-center pb-2 border-b">
          <h1>Shipping Fee</h1>
          <p>GH₵{shipping_price.toFixed(2)}</p>
        </div>
        <div className="flex justify-between items-center pb-2 border-b font-bold">
          <h1>Total</h1>
          <p>GH₵{totalPrice.toFixed(2)}</p>
        </div>
        <Button className="bg-black text-white rounded-full px-8 py-3 hover:bg-orange-600 transition-all w-[262px]">
          Proceed to Checkout
        </Button>
      </div>
    </div>
  );
};

export default Cart;
