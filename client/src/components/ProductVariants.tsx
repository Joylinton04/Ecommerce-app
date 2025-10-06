import assets from "@/assets/assets";
import { ArrowRight, X } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useAppContext } from "@/store/ContextApi";
import { useState, type Dispatch, type SetStateAction } from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

interface cartItem {
  productId: string;
  quantity: number;
  size: string;
}

interface Prop {
  setShowOptions: Dispatch<SetStateAction<boolean>>;
  id: string;
  img: string;
  title: string;
  price: number;
  sizes: string[];
}

const ProductVariants = ({
  setShowOptions,
  id,
  img,
  title,
  price,
  sizes,
}: Prop) => {
  const { cartQuantity, addToCart, removeFromCart } = useAppContext();

  const [quantities, setQuantities] = useState<Record<string, number>>({
    M: 0,
    L: 0,
    XL: 0,
    XXL: 0,
  });

  const handleQuantityChange = (size: string, delta: number) => {
    setQuantities((prev) => {
      const newQty = Math.max(0, (prev[size] ?? 0) + delta);
      return { ...prev, [size]: newQty };
    });
    switch (delta) {
      case 1:
        //
        const cartItem: cartItem = {
          productId: id,
          quantity: delta,
          size: size,
        };
        addToCart({ ...cartItem });
        break;
      case -1:
        if (quantities[size] === 0) return;
        removeFromCart(id);
        break;
      default:
        break;
    }
  };


  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 font-body p-6">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[65rem] flex gap-6 ssm:flex-col ssm:max-w-[25rem]">
        <div className="flex flex-col gap-4 ssm:flex-row">
          <img
            src={img}
            className="h-[200px] w-[170px] object-cover object-center rounded-sm ssm:h-[100px] ssm:w-[70px]"
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
              <p>GH₵{price}</p>
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
              {/* {variants.map((variant) => (
                <TableRow key={variant.size}>
                  <TableCell className="font-medium flex items-center gap-2 rounded-sm">
                    <img
                      src={img}
                      className="w-10 h-10 object-cover object-center rounded-sm"
                    />
                    <p>{variant.size}</p>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => handleQuantityChange(variant.size, -1)}
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
                        onClick={() => handleQuantityChange(variant.size, 1)}
                        className="w-8 h-8 border rounded-md hover:bg-gray-100"
                      >
                        +
                      </button>
                    </div>
                  </TableCell>
                  <TableCell>GH₵{price.toFixed(2)}</TableCell>
                  <TableCell className="text-right">
                    GH₵
                    {(price * (quantities[variant.size] || 0)).toFixed(
                      2
                    )}
                  </TableCell>
                </TableRow>
              ))} */}
              {sizes.map((variant, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium flex items-center gap-2 rounded-sm">
                    <img
                      src={img}
                      className="w-10 h-10 object-cover object-center rounded-sm"
                    />
                    <p>{variant}</p>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => handleQuantityChange(variant, -1)}
                        className="w-8 h-8 border rounded-md hover:bg-gray-100"
                      >
                        -
                      </button>
                      <input
                        type="number"
                        value={quantities[variant] || 0}
                        readOnly
                        className="w-12 text-center border rounded-md py-1"
                      />
                      <button
                        onClick={() => handleQuantityChange(variant, 1)}
                        className="w-8 h-8 border rounded-md hover:bg-gray-100"
                      >
                        +
                      </button>
                    </div>
                  </TableCell>
                  <TableCell>GH₵{price.toFixed(2)}</TableCell>
                  <TableCell className="text-right">
                    GH₵
                    {(price * (quantities[variant] || 0)).toFixed(2)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <div className="border-t py-6">
            <Button className="bg-transparent text-black hover:text-white shadow-none rounded px-6 py-6 border w-max">
              <Link to="/cart">View cart</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductVariants;
