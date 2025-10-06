import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import ProductVariants from "./ProductVariants";

interface prop {
  id: string;
  img: string;
  title: string;
  price: number;
  sizes: string[]
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const ProductCard = ({ img, title, price, id, sizes }: prop) => {
  const [showOptions, setShowOptions] = useState(false);

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
        <ProductVariants 
          setShowOptions={setShowOptions} 
          id={id} 
          img={img} 
          price={price}
          title={title}
          sizes={sizes}
        />
      )}
    </>
  );
};

export default ProductCard;
