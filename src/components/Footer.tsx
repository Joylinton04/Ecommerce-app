import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="py-20 max-w-[1440px] mx-auto px-14 flex mdd:flex-col flex-row justify-between gap-12 ssm:px-6">
        <div className="flex flex-col gap-6 w-full md:w-1/3">
          <h3 className="font-heading font-extrabold text-3xl">ECOM</h3>
          <p className="text-gray-400 max-w-sm">
            Discover curated collections and timeless pieces. Your style, our
            passion.
          </p>
          <div className="flex gap-4 mt-2">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              ></svg>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              ></svg>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
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
            <a
              href="#"
              className="hover:underline text-gray-400 hover:text-white transition-colors"
            >
              Collections
            </a>
            <a
              href="#"
              className="hover:underline text-gray-400 hover:text-white transition-colors"
            >
              New Arrivals
            </a>
            <a
              href="#"
              className="hover:underline text-gray-400 hover:text-white transition-colors"
            >
              Best Sellers
            </a>
            <a
              href="#"
              className="hover:underline text-gray-400 hover:text-white transition-colors"
            >
              Sale
            </a>
          </div>

          <div className="flex flex-col gap-4 text-sm">
            <h3 className="font-semibold text-lg uppercase tracking-wide">
              Company
            </h3>
            <a
              href="#"
              className="hover:underline text-gray-400 hover:text-white transition-colors"
            >
              About Us
            </a>
            <a
              href="#"
              className="hover:underline text-gray-400 hover:text-white transition-colors"
            >
              Our Journal
            </a>
            <a
              href="#"
              className="hover:underline text-gray-400 hover:text-white transition-colors"
            >
              Contact
            </a>
            <a
              href="#"
              className="hover:underline text-gray-400 hover:text-white transition-colors"
            >
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
  );
};

export default Footer;
