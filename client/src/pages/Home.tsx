import ProductTitle from "@/components/ProductTitle";
import ProductCard from "@/components/ProductCard";
import { motion } from "framer-motion";
import Section1 from "@/components/home/Section1";
import { LoadingProducts } from "@/components/ProductSkeleton";
import useProduct from "@/query/useProduct";
import useSessionUser from "@/query/useSession";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  // const {user} = useAppContext();

  // fetching data with react query

  const { data, error, isLoading } = useProduct();
  const { data: user, isLoading: isLoadingSession } = useSessionUser();

  const navigate = useNavigate();


  useEffect(() => {
    if (isLoadingSession) return;
    if (!user) navigate("/auth");
  }, [isLoadingSession,user]);

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
      <Section1 />

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
          className="flex flex-wrap gap-4 ssm:gap-4 mt-10"
        >
          {data?.slice(0, 7).map((product) => (
            <ProductCard
              key={product._id}
              id={product._id}
              img={product.image[0]}
              price={product.price}
              title={product.name}
              sizes={product.sizes}
            />
          ))}

          {error && <p className="text-red-500">Could not load Products</p>}
          <LoadingProducts isLoading={isLoading} />
        </motion.div>
      </div>

      {/* Best seller */}
      <div className="flex flex-col px-14 py-4 max-w-[1440px] mx-auto ssm:px-4 mt-20 mb-8">
        <ProductTitle
          title="BEST SELLER"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis molestias ipsum esse nobis aliquam dolores eveniet eaque necessitatibus ex voluptates. Delectus quam enim, dolor"
        />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-wrap gap-4 ssm:gap-4 mt-10"
        >
          {data?.slice(7, 14).map((product) => (
            <ProductCard
              key={product._id}
              id={product._id}
              img={product.image[0]}
              price={product.price}
              title={product.name}
              sizes={product.sizes}
            />
          ))}
          <LoadingProducts isLoading={isLoading} />
          {error && <p className="text-red-500">Could not load Products</p>}
        </motion.div>
      </div>

      {/* section 3
      <Customers />

      FAQ
      <FAQ />

      customer review
      <CustomerReview /> */}
    </div>
  );
};

export default Home;
