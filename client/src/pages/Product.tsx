import assets from "@/assets/assets";
import { Button } from "@/components/ui/button";
import { useAppContext } from "@/store/ContextApi";
import { Star } from "lucide-react";
import React, { useState } from "react";

const Product = () => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const sizes = ["S", "M", "L", "XL", "XXL"];

  const {addToCart} = useAppContext()

  const cartItem = {
    productId: "1",
    quantity: 3,
    size: selectedSize
  }




  return (
    <div className="max-w-[1440px] p-6 md:p-14 min-h-screen mx-auto font-body">
      <div className="flex flex-col lg:flex-row gap-10 lgg:gap-6">
        {/* Left: Images */}
        <div className="flex flex-col-reverse lg:flex-row gap-6 lg:w-1/2 lgg:min-w-[60%]">
          <div className="flex flex-row lg:flex-col gap-4 justify-between">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="h-[120px] w-[90px] md:h-[162px] md:w-[120px] overflow-hidden bg-gray-100 hover:ring-2 hover:ring-orange-500 transition-all duration-200"
              >
                <img
                  src={assets.airForce}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            ))}
          </div>
          <div className="flex-1 overflow-hidden">
            <img
              src={assets.airForce}
              className="object-cover object-center h-full w-full lgg:h-[600px]"
            />
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="flex flex-col gap-4 lg:w-1/2 lgg:min-w-[40%] cursor-pointer">
          <h1 className="font-heading font-semibold text-2xl md:text-3xl">
            Men Round Neck Pure Cotton T-shirt
          </h1>

          {/* Rating */}
          <div className="flex gap-1 items-center">
            {[1, 2, 3, 4].map((i) => (
              <Star key={i} size={18} fill="orange" stroke="orange" />
            ))}
            <Star size={18} className="text-gray-400" />
            <span className="ml-2 text-sm text-gray-600">(120 reviews)</span>
          </div>

          {/* Price */}
          <h2 className="font-bold py-2 text-2xl text-orange-600">GH₵90.00</h2>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed">
            A lightweight, knitted cotton t-shirt with a classic round neckline
            and short sleeves. Perfect for everyday wear, whether styled
            casually or layered as an undershirt.
          </p>

          {/* Sizes */}
          <div className="flex flex-col gap-6 mt-6">
            <h3 className="text-gray-700 text-lg font-semibold">Select Size</h3>
            <div className="flex gap-3 flex-wrap">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-[61px] h-[61px] rounded-lg grid place-content-center text-sm font-medium 
                    transition-all duration-200 border ${
                      selectedSize === size
                        ? "border-orange-500 bg-orange-50 text-orange-600"
                        : "border-gray-200 bg-[#FBFBFB] hover:border-orange-400"
                    }`}
                >
                  {size}
                </button>
              ))}
            </div>
            <Button 
              onClick={() => addToCart({...cartItem})}
              className="font-medium bg-black w-[220px] h-[59px] rounded-full hover:bg-orange-600 transition-all">
              ADD TO CART
            </Button>
          </div>

          {/* Divider */}
          <div className="my-6 h-[1px] bg-gray-300"></div>

          {/* Extra Info */}
          <div className="space-y-2 text-gray-600 text-sm">
            <p>✅ 100% Original product</p>
            <p>💵 Cash on delivery available</p>
            <p>🔄 Easy return & exchange within 7 days</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-10">
        <h1 className="font-bold border-x border-t p-6 w-max">Description</h1>
        <p className="border py-12 px-6 text-[#555555]">
          An e-commerce website is an online platform that facilitates the
          buying and selling of products or services over the internet. It
          serves as a virtual marketplace where businesses and individuals can
          showcase their products, interact with customers, and conduct
          transactions without the need for a physical presence. E-commerce
          websites have gained immense popularity due to their convenience,
          accessibility, and the global reach they offer.
        </p>
      </div>
    </div>
  );
};

export default Product;
