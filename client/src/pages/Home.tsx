import ProductTitle from "@/components/ProductTitle";
import ProductCard from "@/components/ProductCard";
import { motion } from "framer-motion";
import { Bestsellers, latestProduct } from "@/store/data";
import Section1 from "@/components/home/Section1";
import Customers from "@/components/home/Customers";
import FAQ from "@/components/home/FAQ";
import CustomerReview from "@/components/home/CustomerReview";

const Home = () => {
  // const {user} = useAppContext();


  const containerVariants = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
      },
    },
  };

  return (
    <div className="w-full font-body">
      {/* section 1 */}
      <Section1/>

      {/* Latest Arrivals */}
      <div className="flex flex-col px-14 py-4 max-w-[1440px] mx-auto ssm:px-4">
        <ProductTitle
          title="LATEST ARRIVAL"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis molestias ipsum esse nobis aliquam dolores eveniet eaque necessitatibus ex voluptates. Delectus quam enim, dolor"
        />
        {/* Cards container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-wrap gap-4 ssm:gap-8 mt-10"
        >
          {latestProduct.map((product, index) => (
            <ProductCard
              key={index}
              id={index}
              img={product.img}
              price={product.price}
              title={product.text}
            />
          ))}
        </motion.div>
      </div>

      {/* Best seller */}
      <div className="flex flex-col px-14 py-4 max-w-[1440px] mx-auto ssm:px-4 mt-20">
        <ProductTitle
          title="BEST SELLER"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis molestias ipsum esse nobis aliquam dolores eveniet eaque necessitatibus ex voluptates. Delectus quam enim, dolor"
        />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-wrap gap-4 ssm:gap-8 mt-10"
        >
          {Bestsellers.map((product, index) => (
            <ProductCard
              id={index}
              key={index}
              img={product.img}
              price={product.price}
              title={product.text}
            />
          ))}
        </motion.div>
      </div>

      {/* section 3 */}
      <Customers/>

      {/* FAQ */}
      <FAQ/>

      {/* customer review */}
      <CustomerReview/>
    </div>
  );
};

export default Home;
