import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { useAppContext } from "@/store/ContextApi";
import assets from "@/assets/assets";
import { ArrowRight, X } from "lucide-react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface prop {
  id: number;
  img: string;
  title: string;
  price: number;
}
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const ProductCard = ({ img, title, price, id }: prop) => {
  const { addToCartQuantity } = useAppContext();
  const [showOptions, setShowOptions] = useState(false);

  // Store variant quantities in an object keyed by size
  const [quantities, setQuantities] = useState<Record<string, number>>({
    M: 0,
    L: 0,
    XL: 0,
    XXL: 0,
  });

  // Handle quantity change dynamically
  const handleQuantityChange = (size: string, delta: number) => {
    setQuantities((prev) => {
      const newQty = Math.max(0, (prev[size] ?? 0) + delta); // no negative qty
      return { ...prev, [size]: newQty };
    });
  };

  const variants = [
    { size: "M", price: 99.99 },
    { size: "L", price: 99.99 },
    { size: "XL", price: 99.99 },
    { size: "XXL", price: 99.99 },
  ];

  return (
    <>
      {/* Card */}
      <motion.div
        variants={cardVariants}
        whileHover={{
          scale: 1.05,
          y: -1,
          boxShadow: "0px 8px 20px rgba(0,0,0,0.15)",
        }}
        className="flex flex-col cursor-pointer ssm:p-2 ssm:bg-white w-[250px] ssm:w-[160px] 
                 p-3 bg-white rounded-lg shadow-md"
      >
        <Link to={`/product/${id}`} className="flex flex-col gap-2">
          <img
            loading="lazy"
            src={img}
            className="w-full ssm:h-[240px] h-[300px] object-cover object-center rounded-md"
          />
        </Link>
        <p className="capitalize py-1 ssm:text-sm">{title}</p>
        <h3 className="font-bold ssm:text-sm">GH₵{price}</h3>
        <Button
          onClick={() => setShowOptions(!showOptions)}
          className="bg-transparent border rounded-none shadow-none text-black p-4 mt-4 text-center 
                        hover:bg-black hover:text-white transition-all duration-300"
        >
          Choose Options
        </Button>
      </motion.div>

      {/* Modal with variants */}
      {showOptions && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 font-body p-6">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[65rem] flex gap-6">
            <div className="flex flex-col gap-4">
              <img
                src={assets.hoodie}
                className="h-[200px] w-[170px] object-cover object-center rounded-sm"
              />
              <div className="inline-flex items-center cursor-pointer text-xs">
                <p className="underline">View full details</p>
                <ArrowRight className="inline-block ml-2" size={14} />
              </div>
            </div>
            <div className="flex flex-col gap-3 w-full">
              <div className="flex justify-between">
                <div className="space-y-2">
                  <h1 className="text-2xl">Plain T-shirt </h1>
                  <p>GH₵99.99</p>
                </div>
                <X
                  onClick={() => setShowOptions(false)}
                  strokeWidth={1}
                  size={30}
                  className="opacity-80 border hover:scale-110 duration-200 transition-all hover:bg-slate-100 rounded-full p-1 cursor-pointer"
                />
              </div>

              {/* Variant table */}
              <Table className="w-full">
                <TableHeader>
                  <TableRow className="uppercase text-xs">
                    <TableHead>Variant</TableHead>
                    <TableHead>Quantity</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead className="text-right">Variant Total</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {variants.map((variant) => (
                    <TableRow key={variant.size}>
                      <TableCell className="font-medium flex items-center gap-2 rounded-sm">
                        <img
                          src={assets.hoodie}
                          className="w-10 h-10 object-cover object-center rounded-sm"
                        />
                        <p>{variant.size}</p>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() =>
                              handleQuantityChange(variant.size, -1)
                            }
                            className="w-8 h-8 border rounded-md hover:bg-gray-100"
                          >
                            -
                          </button>
                          <input
                            type="number"
                            value={quantities[variant.size] || 0}
                            readOnly
                            className="w-12 text-center border rounded-md py-1"
                          />
                          <button
                            onClick={() =>
                              handleQuantityChange(variant.size, 1)
                            }
                            className="w-8 h-8 border rounded-md hover:bg-gray-100"
                          >
                            +
                          </button>
                        </div>
                      </TableCell>
                      <TableCell>GH₵{variant.price.toFixed(2)}</TableCell>
                      <TableCell className="text-right">
                        GH₵
                        {(
                          variant.price * (quantities[variant.size] || 0)
                        ).toFixed(2)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              <div className="border-t py-6">
                <Button className="bg-transparent text-black hover:text-white shadow-none rounded px-6 py-6 border w-max">
                  View cart
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;