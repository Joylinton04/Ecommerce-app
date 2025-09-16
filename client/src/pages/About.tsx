import assets from "@/assets/assets";
import React from "react";

const About = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-6 md:px-14 py-12 font-body min-h-screen relative">
      {/* Header */}
      <div className="flex flex-col items-center text-center">
        <div className="text-3xl md:text-4xl w-max border-y-2 uppercase px-1 py-[0.1rem]">
          About Us
        </div>
        {/* <span className="mt-2 block h-[3px] w-24 bg-black rounded-full"></span> */}
      </div>

      {/* Intro Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-10 mt-12">
        <div className="w-full md:w-1/2 overflow-hidden rounded-2xl shadow-md">
          <img
            src={assets.whiteTShirt}
            alt="Ecom showcase"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="w-full md:w-1/2 text-[#2a2a2a] leading-relaxed">
          <p className="text-lg">
            Welcome to <span className="font-semibold">Ecom</span>, your
            one-stop destination for effortless online shopping. We believe
            shopping should be simple, enjoyable, and trustworthy. That’s why
            we’ve built a platform that connects you with high-quality products,
            competitive prices, and a seamless shopping experience from start to
            finish.
          </p>
          <div className="mt-6">
            <h2 className="font-bold text-xl mb-2">🌟 Our Mission</h2>
            <p>
              Our mission is to make online shopping{" "}
              <span className="font-semibold">
                accessible, reliable, and enjoyable
              </span>
              for everyone. Whether you’re upgrading your wardrobe, finding the
              latest tech gadgets, or picking essentials for your home, Ecom
              ensures you get the best without compromise.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="mt-20">
        <div className="flex flex-col items-center text-center">
          <div className="text-3xl md:text-4xl w-max border-y-2 uppercase px-1 py-[0.1rem]">
            Why Choose us
          </div>
          {/* <span className="mt-2 block h-[3px] w-24 bg-black rounded-full"></span> */}
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="p-8 border rounded-2xl shadow-sm hover:shadow-lg transition-shadow bg-white">
            <h3 className="text-xl font-semibold mb-4">✅ Quality Assurance</h3>
            <p className="text-gray-600">
              We meticulously select and vet each product to ensure it meets our
              stringent quality standards.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-8 border rounded-2xl shadow-sm hover:shadow-lg transition-shadow bg-white">
            <h3 className="text-xl font-semibold mb-4">⚡ Convenience</h3>
            <p className="text-gray-600">
              With our user-friendly interface and hassle-free ordering process,
              shopping has never been easier.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-8 border rounded-2xl shadow-sm hover:shadow-lg transition-shadow bg-white">
            <h3 className="text-xl font-semibold mb-4">
              💬 Exceptional Service
            </h3>
            <p className="text-gray-600">
              Our team of dedicated professionals is here to assist you every
              step of the way, ensuring your satisfaction is our top priority.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
