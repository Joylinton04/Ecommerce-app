import React from 'react'
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import ProductTitle from '@/components/ProductTitle';
import assets from '@/assets/assets';
import ProductCard from '@/components/ProductCard';
import Navbar from '@/components/Navbar';

const Home = () => {
  return (
    <div className='min-h-screen w-full font-body'>
      <Navbar/>
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
                  talking about them. This is a limited-time opportunity to get your
                  favorites at an incredible price.
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
      <div className='flex flex-col px-14 py-4 max-w-[1440px] mx-auto ssm:px-7'>
        <ProductTitle
          title="LATEST ARRIVAL"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis molestias ipsum esse nobis aliquam dolores eveniet eaque necessitatibus ex voluptates. Delectus quam enim, dolor" />
        <div className='flex flex-wrap gap-12 mt-10'>
          <ProductCard
            img={assets.roundNeck}
            price={49.99}
            text={"Men round neck pure cotten t-shirt"}
          />
          <ProductCard
            img={assets.whiteTShirt}
            price={29.99}
            text={"Men round neck pure cotten t-shirt"}
          />
          <ProductCard
            img={assets.jeans2}
            price={49.99}
            text={"Men round neck pure cotten t-shirt"}
          />
          <ProductCard
            img={assets.puma}
            price={59.99}
            text={"Men round neck pure cotten t-shirt"}
          />
          <ProductCard
            img={assets.whiteTShirt}
            price={59.99}
            text={"Men round neck pure cotten t-shirt"}
          />
          <ProductCard
            img={assets.jeans1}
            price={59.99}
            text={"Men round neck pure cotten t-shirt"}
          />
          <ProductCard
            img={assets.airForce}
            price={59.99}
            text={"Men round neck pure cotten t-shirt"}
          />
        </div>
      </div>

      {/*  */}
    </div>
  )
}

export default Home;