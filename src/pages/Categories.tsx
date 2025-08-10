import assets from "@/assets/assets";
import ProductCard from "@/components/ProductCard";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Categories = () => {
  const allProducts = [
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
    <div className="min-h-screen font-body max-w-[1440px] mx-auto px-14 lgg:px-6 ssm:px-7 relative">
      <div className="flex gap-12 mt-10 lgg:gap-6">
        {/* FILTERS */}
        <div className="w-[280px] h-full sticky top-6 pb-6">
          <h1 className="text-2xl font-heading">FILTER</h1>
          <div className="border p-4 mt-2">
            <h4 className="uppercase bg-black text-white px-2 text-center">
              Categories
            </h4>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2 pt-2">
                <div className="flex items-center gap-3">
                  <Checkbox id="men" />
                  <label htmlFor="men">Menu</label>
                </div>
                <div className="flex items-center gap-3">
                  <Checkbox id="women" />
                  <label htmlFor="women">Women</label>
                </div>
                <div className="flex items-center gap-3">
                  <Checkbox id="kids" />
                  <label htmlFor="kids">Kids</label>
                </div>
              </div>
            </div>
          </div>
          <div className="border p-4 mt-6">
            <h4 className="uppercase bg-black text-white px-2 text-center">
              SUB CATEGORIES
            </h4>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2 pt-2">
                <div className="flex items-center gap-3">
                  <Checkbox id="topwear" />
                  <label htmlFor="topwear">Topwear</label>
                </div>
                <div className="flex items-center gap-3">
                  <Checkbox id="pants" />
                  <label htmlFor="pants">Pants</label>
                </div>
                <div className="flex items-center gap-3">
                  <Checkbox id="t-shirt" />
                  <label htmlFor="t-shirt">T-shirts</label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* product lists */}
        <div className="w-full">
          <div className="flex justify-between gap-4 items-center -mt-2">
            <div className="flex items-center gap-4">
              <h1 className="font-heading text-2xl ssm:text-lg ssm:pb-2 uppercase mdd:text-lg">
                All Collections
              </h1>
              <span className="block h-[0.2rem] w-20 mdd:w-8 bg-black"></span>
            </div>
            <Select>
              <SelectTrigger className="w-[200px] mdd:w-[160px]">
                <SelectValue placeholder="Sort by: " />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="price-asc">Price: Low to High</SelectItem>
                <SelectItem value="price-desc">Price: High to Low</SelectItem>
                <SelectItem value="date-asc">Date: Old to New</SelectItem>
                <SelectItem value="date-desc">Date: New to Old</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {/* products */}
          <div className="pb-10 pt-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
              {allProducts.map((product, index) => (
                <ProductCard
                  key={index}
                  img={product.img}
                  price={product.price}
                  text={product.text}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
