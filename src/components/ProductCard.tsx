import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

interface prop {
  id: number;
  img: string;
  title: string;
  price: number;
}

const ProductCard = ({ img, title, price, id }: prop) => {
  return (
    <div className="flex flex-col cursor-pointer ssm:p-2 ssm:bg-white w-[250px] ssm:w-[160px] p-3 bg-white rounded hover:rotate-1 duration-700">
      <Link
        to={`/product/${id}`}
        className="flex flex-col gap-2"
      >
        <img
          loading="lazy"
          src={img}
          className="w-full ssm:h-[240px] h-[300px] object-cover object-center"
        />
      </Link>
      <p className="capitalize py-1 ssm:text-sm">{title}</p>
      <h3 className="font-bold ssm:text-sm">GH₵{price}</h3>
      <Button className="bg-transparent border rounded-none shadow-none text-black p-4 mt-4 text-center hover:text-white transition-all duration-300">
        Add to Cart
      </Button>
    </div>
  );
};

export default ProductCard;
