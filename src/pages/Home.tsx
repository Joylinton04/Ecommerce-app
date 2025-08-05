import React from "react";
import ProductTitle from "@/components/ProductTitle";
import assets from "@/assets/assets";
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import AccordianSec from "@/components/AccordianSec";

const Home = () => {
  const latestProduct = [
    {
      img: assets.whiteTShirt,
      price: 29.99,
      text: "Men round neck pure cotten t-shirt",
    },
    {
      img: assets.airForce,
      price: 49.99,
      text: "Men round neck pure cotten t-shirt",
    },
    {
      img: assets.roundNeck,
      price: 29.99,
      text: "Men round neck pure cotten t-shirt",
    },
    {
      img: assets.jeans1,
      price: 59.99,
      text: "Men round neck pure cotten t-shirt",
    },
    {
      img: assets.jeans2,
      price: 29.99,
      text: "Men round neck pure cotten t-shirt",
    },
    {
      img: assets.whiteTShirt,
      price: 29.99,
      text: "Men round neck pure cotten t-shirt",
    },
    {
      img: assets.roundNeck,
      price: 19.99,
      text: "Men round neck pure cotten t-shirt",
    },
    {
      img: assets.puma,
      price: 29.99,
      text: "Men round neck pure cotten t-shirt",
    },
  ];
  const Bestsellers = [
    {
      img: assets.blackTop,
      price: 29.99,
      text: "Men round neck pure cotten t-shirt",
    },
    {
      img: assets.hoodie,
      price: 49.99,
      text: "Men round neck pure cotten t-shirt",
    },
    {
      img: assets.whiteT,
      price: 29.99,
      text: "Men round neck pure cotten t-shirt",
    },
    {
      img: assets.topPavillion,
      price: 59.99,
      text: "Men round neck pure cotten t-shirt",
    },
    {
      img: assets.sweater,
      price: 29.99,
      text: "Men round neck pure cotten t-shirt",
    },
    {
      img: assets.greenTop,
      price: 29.99,
      text: "Men round neck pure cotten t-shirt",
    },
    {
      img: assets.topPavillion,
      price: 19.99,
      text: "Men round neck pure cotten t-shirt",
    },
    {
      img: assets.blackTop,
      price: 29.99,
      text: "Men round neck pure cotten t-shirt",
    },
  ];

  return (
    <div className="h-[500vh] w-full font-body">
      <Navbar />
      {/* section 1 */}
      <div className="h-[672px] bg-gradient-to-tl from-cyan-500/30">
        <div className="max-w-[1440px] mx-auto flex items-center justify-start h-full p-16 lgg:p-10">
          <div className="px-10 flex flex-col justify-center items-start w-1/2 h-full">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-6">
                <span className="block h-[0.1rem] w-12 bg-black"></span>
                <h1 className="font-heading text-2xl font-bold uppercase lgg:text-lg">
                  Our Bestsellers
                </h1>
              </div>
              <div className="flex flex-col gap-4">
                <div className="font-heading font-extrabold text-6xl leading-tight lgg:text-5xl">
                  LIMITED TIME OFFER! UP TO 50% OFF
                </div>
                <p className="text-lg leading-relaxed lgg:text-base">
                  Explore our best-selling products and discover why everyone is
                  talking about them. This is a limited-time opportunity to get
                  your favorites at an incredible price.
                </p>
              </div>
              <button className="flex items-center gap-6 px-6 py-3 bg-white text-black font-semibold rounded-full transition-colors hover:bg-gray-200 w-fit mt-4">
                <span className="text-lg">Shop Now</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="w-1/2 h-full rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={assets.headerImg}
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>

      {/* Latest Arrivals */}
      <div className="flex flex-col px-14 py-4 max-w-[1440px] mx-auto ssm:px-7">
        <ProductTitle
          title="LATEST ARRIVAL"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis molestias ipsum esse nobis aliquam dolores eveniet eaque necessitatibus ex voluptates. Delectus quam enim, dolor"
        />
        <div className="flex flex-wrap gap-12 mt-10">
          {latestProduct.map((product, index) => (
            <ProductCard
              key={index}
              img={product.img}
              price={product.price}
              text={product.text}
            />
          ))}
        </div>
      </div>

      {/* Best seller */}
      <div className="flex flex-col px-14 py-4 max-w-[1440px] mx-auto ssm:px-7 mt-20">
        <ProductTitle
          title="BEST SELLER"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis molestias ipsum esse nobis aliquam dolores eveniet eaque necessitatibus ex voluptates. Delectus quam enim, dolor"
        />
        <div className="flex flex-wrap gap-12 mt-10">
          {Bestsellers.map((product, index) => (
            <ProductCard
              key={index}
              img={product.img}
              price={product.price}
              text={product.text}
            />
          ))}
        </div>
      </div>

      {/* section 3 */}
      <div className="mt-20 bg-[#B6B09F]">
        <div className="px-14 py-6 max-w-[1440px] mx-auto ssm:px-7 flex gap-4 justify-between">
          <div className="flex flex-col gap-1">
            <h1 className="font-bold font-heading text-8xl">50+</h1>
            <p className="text-sm">Trusted Customers</p>
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="font-bold font-heading text-8xl">99%</h1>
            <p className="text-sm text-center">Assured of secured payments</p>
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="font-bold font-heading text-8xl">2K</h1>
            <p className="text-sm">Customers Worldwide</p>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="mt-20 px-14 py-4 max-w-[1440px] mx-auto ssm:px-7">
        <ProductTitle
          title="FREQUENTLY ASKED QUESTIONS"
          text="Got questions? We've got the answers you need right here!"
        />
        <div className="mt-6 flex gap-6">
          <div className="h-[600px]">
            <img
              src={assets.fqaimg}
              className="h-full w-full object-cover object-center"
            />
          </div>

          <AccordianSec />
        </div>
      </div>
    </div>
  );
};

export default Home;
