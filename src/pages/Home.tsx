import React from "react";
import ProductTitle from "@/components/ProductTitle";
import assets from "@/assets/assets";
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import AccordianSec from "@/components/AccordianSec";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

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
    <div className="min-h-screen w-full font-body">
      <Navbar />
      {/* section 1 */}
      <div className="h-[672px] bg-gradient-to-tl from-cyan-500/30">
        <div className="max-w-[1440px] mx-auto flex items-center justify-start h-full p-16 lgg:p-10 mdd:p-4">
          <div className="px-10 flex flex-col justify-center items-start w-1/2 h-full ssm:w-full">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-6">
                <span className="block h-[0.1rem] w-12 bg-black"></span>
                <h1 className="font-heading text-2xl font-bold uppercase lgg:text-lg">
                  Our Bestsellers
                </h1>
              </div>
              <div className="flex flex-col gap-4">
                <div className="font-heading font-extrabold text-6xl leading-tight lgg:text-5xl mdd:text-4xl">
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
          <div className="w-1/2 h-full rounded-2xl overflow-hidden shadow-2xl lgg:h-[28rem] mdd:h-[25rem] ssm:hidden">
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
        <div className="flex flex-wrap gap-12 mt-10 ssm:justify-center">
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
        <div className="flex flex-wrap gap-12 mt-10 ssm:justify-center">
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
            <h1 className="font-bold font-heading text-8xl mdd:text-5xl ssm:text-4xl">50+</h1>
            <p className="text-sm ssm:text-xs">Trusted Customers</p>
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="font-bold font-heading text-8xl mdd:text-5xl ssm:text-4xl">99%</h1>
            <p className="text-sm ssm:text-xs text-center">Assured of secured payments</p>
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="font-bold font-heading text-8xl mdd:text-5xl ssm:text-4xl">2K</h1>
            <p className="text-sm ssm:text-xs">Customers Worldwide</p>
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
          <div className="h-[600px] mdd:h-full ssm:hidden">
            <img
              src={assets.fqaimg}
              className="h-full w-full object-cover object-center"
            />
          </div>

          <AccordianSec />
        </div>
      </div>

      {/* customer review */}
      <div className="mt-20 px-14 py-4 max-w-[1440px] mx-auto ssm:px-7">
        <ProductTitle
          title="CUSTOMERS REVIEW"
          text="See what our valued customers are saying about their experiences!"
        />
        <div className="flex flex-col gap-20 mt-10">
          <div className="flex gap-4">
            <img src={assets.fqa1} className="w-[251px] ssm:w-full object-cover object-center" />
            <div className="flex flex-col gap-4 justify-between">
              <p className="text-xl mdd:text-base ssm:text-sm">
                Fast shipping and great packaging! My order arrived in perfect
                condition.
              </p>
              <div className="flex gap-3 mdd:gap-2">
                <img src={assets.star} className="w-10" />
                <img src={assets.star} className="w-10" />
                <img src={assets.star} className="w-10" />
                <img src={assets.star} className="w-10" />
              </div>
              <span className="block h-1 bg-black"></span>
              <h1 className="font-bold text-xl mdd:text-base ssm:text-sm">Mariana Van Zeeler</h1>
            </div>
          </div>
          <div className="flex gap-4">
            <img src={assets.fqa2} className="w-[251px] ssm:w-full object-cover object-center" />
            <div className="flex flex-col gap-4 justify-between">
              <p className="text-xl mdd:text-base ssm:text-sm">
                Fast shipping and great packaging! My order arrived in perfect
                condition.
              </p>
              <div className="flex gap-3 mdd:gap-2">
                <img src={assets.star} className="w-10" />
                <img src={assets.star} className="w-10" />
                <img src={assets.star} className="w-10" />
                <img src={assets.star} className="w-10" />
              </div>
              <span className="block h-1 bg-black"></span>
              <h1 className="font-bold text-xl mdd:text-base ssm:text-sm">Mariana Van Zeeler</h1>
            </div>
          </div>
          <div className="flex gap-4">
            <img src={assets.fqa3} className="w-[251px] ssm:w-full object-cover object-center" />
            <div className="flex flex-col gap-4 justify-between">
              <p className="text-xl mdd:text-base ssm:text-sm">
                Fast shipping and great packaging! My order arrived in perfect
                condition.
              </p>
              <div className="flex gap-3 mdd:gap-2">
                <img src={assets.star} className="w-10" />
                <img src={assets.star} className="w-10" />
                <img src={assets.star} className="w-10" />
                <img src={assets.star} className="w-10" />
              </div>
              <span className="block h-1 bg-black"></span>
              <h1 className="font-bold text-xl mdd:text-base ssm:text-sm">Mariana Van Zeeler</h1>
            </div>
          </div>
        </div>
      </div>
      {/* newsletter subscribe section */}
      <div className="mt-20 bg-[#B6B09F] flex items-center justify-center">
        <div className="px-14 py-20 max-w-[1440px] mx-auto ssm:px-7 flex flex-col gap-4">
          <h1 className="font-heading3 text-6xl text-center ssm:text-5xl">
            Stay in the loop!
          </h1>
          <p className="text-center text-2xl w-[550px] mdd:w-full ssm:text-lg">
            Join our newsletter for exclusive deals , and product updates. Be
            the first to hear about our latest arrivals and promotions!
          </p>
          <div className="flex w-full border rounded-full overflow-hidden">
            <input
              type="text"
              className="flex-1 outline-none px-4 py-4"
              placeholder="Type your email address"
            />
            <button className="px-6 py-4 bg-black text-white text-sm font-semibold hover:scale-105 transition-all duration-150">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
      {/* footer */}
      <footer className="bg-black text-white">
        <div className="py-20 max-w-[1440px] mx-auto px-14 flex mdd:flex-col flex-row justify-between gap-12">
          <div className="flex flex-col gap-6 w-full md:w-1/3">
            <h3 className="font-heading font-extrabold text-3xl">ECOM</h3>
            <p className="text-gray-400 max-w-sm">
              Discover curated collections and timeless pieces. Your style, our
              passion.
            </p>
            <div className="flex gap-4 mt-2">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                ></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                ></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                ></svg>
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between w-full md:w-2/3 gap-12">
            <div className="flex flex-col gap-4 text-sm">
              <h3 className="font-semibold text-lg uppercase tracking-wide">
                Shop
              </h3>
              <a href="#" className="hover:underline text-gray-400 hover:text-white transition-colors">
                Collections
              </a>
              <a href="#" className="hover:underline text-gray-400 hover:text-white transition-colors">
                New Arrivals
              </a>
              <a href="#" className="hover:underline text-gray-400 hover:text-white transition-colors">
                Best Sellers
              </a>
              <a href="#" className="hover:underline text-gray-400 hover:text-white transition-colors">
                Sale
              </a>
            </div>

            <div className="flex flex-col gap-4 text-sm">
              <h3 className="font-semibold text-lg uppercase tracking-wide">
                Company
              </h3>
              <a href="#" className="hover:underline text-gray-400 hover:text-white transition-colors">
                About Us
              </a>
              <a href="#" className="hover:underline text-gray-400 hover:text-white transition-colors">
                Our Journal
              </a>
              <a href="#" className="hover:underline text-gray-400 hover:text-white transition-colors">
                Contact
              </a>
              <a href="#" className="hover:underline text-gray-400 hover:text-white transition-colors">
                FAQ
              </a>
            </div>

            <div className="flex flex-col gap-4 text-sm w-full sm:w-auto">
              <h3 className="font-semibold text-lg uppercase tracking-wide">
                Newsletter
              </h3>
              <p className="text-gray-400 max-w-xs">
                Stay up to date with our latest news and exclusive offers.
              </p>
              <form className="flex mt-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow p-3 rounded-l-md bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-white text-black font-semibold rounded-r-md hover:bg-gray-200 transition-colors"
                >
                  Join
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="max-w-[1440px] mx-auto px-14 border-t border-gray-800">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-4 py-4 text-xs text-gray-400">
            <p>&copy; 2025 ECOM. All Rights Reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
              <a href="#" className="hover:underline">
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
