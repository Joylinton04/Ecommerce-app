import ProductTitle from "@/components/ProductTitle";
import assets from "@/assets/assets";
import ProductCard from "@/components/ProductCard";
import AccordianSec from "@/components/AccordianSec";
import { motion, spring } from "framer-motion";
import { useAppContext } from "@/store/ContextApi";

const Home = () => {
  // const {user} = useAppContext();





  const latestProduct = [
    {

      id: "1",
      img: assets.whiteTShirt,
      price: 29.99,
      text: "Men round neck pure cotten t-shirt",
    },
    {
      id: "1",
      img: assets.airForce,
      price: 49.99,
      text: "Men round neck pure cotten t-shirt",
    },
    {
      id: "1",
      img: assets.roundNeck,
      price: 29.99,
      text: "Men round neck pure cotten t-shirt",
    },
    {
      id: "1",
      img: assets.jeans1,
      price: 59.99,
      text: "Men round neck pure cotten t-shirt",
    },
    {
      id: "1",
      img: assets.jeans2,
      price: 29.99,
      text: "Men round neck pure cotten t-shirt",
    },
    {
      id: "1",
      img: assets.whiteTShirt,
      price: 29.99,
      text: "Men round neck pure cotten t-shirt",
    },
    {
      id: "1",
      img: assets.roundNeck,
      price: 19.99,
      text: "Men round neck pure cotten t-shirt",
    },
    {
      id: "1",
      img: assets.puma,
      price: 29.99,
      text: "Men round neck pure cotten t-shirt",
    },
  ];
  const Bestsellers = [
    {
      id: "1",
      img: assets.blackTop,
      price: 29.99,
      text: "Men round neck pure cotten t-shirt",
    },
    {
      id: "2",
      img: assets.hoodie,
      price: 49.99,
      text: "Men round neck pure cotten t-shirt",
    },
    {
      id: "3",
      img: assets.whiteT,
      price: 29.99,
      text: "Men round neck pure cotten t-shirt",
    },
    {
      id: "4",
      img: assets.topPavillion,
      price: 59.99,
      text: "Men round neck pure cotten t-shirt",
    },
    {
      id: "5",
      img: assets.sweater,
      price: 29.99,
      text: "Men round neck pure cotten t-shirt",
    },
    {
      id: "6",
      img: assets.greenTop,
      price: 29.99,
      text: "Men round neck pure cotten t-shirt",
    },
    {
      id: "7",
      img: assets.topPavillion,
      price: 19.99,
      text: "Men round neck pure cotten t-shirt",
    },
    {
      id: "8",
      img: assets.blackTop,
      price: 29.99,
      text: "Men round neck pure cotten t-shirt",
    },
  ];


  const containerVariants = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
      },
    },
  };

  const containerVariants2 = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <div className="w-full font-body">
      {/* section 1 */}
      <div className="h-[672px] bg-gradient-to-tl from-cyan-500/30">
        <div className="max-w-[1440px] mx-auto flex items-center justify-start h-full p-16 lgg:p-10 mdd:p-4">
          {/* main  */}
          <div className="px-10 flex flex-col justify-center items-start w-1/2 h-full ssm:w-full">
            <motion.div
              variants={containerVariants2}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="flex flex-col gap-6"
            >
              {/* Title Row */}
              <div className="flex items-center gap-6">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{
                    x: "0%",
                    opacity: 1,
                    transition: { duration: 1 },
                  }}
                  className="block h-[0.1rem] w-12 bg-black"
                ></motion.span>
                <motion.h1
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{
                    x: "0%",
                    opacity: 1,
                    transition: { duration: 1.7, type: spring, stiffness: 80 },
                  }}
                  className="font-heading text-2xl font-bold uppercase lgg:text-lg"
                >
                  Our Bestsellers
                </motion.h1>
              </div>

              {/* Heading & Paragraph */}
              <div className="flex flex-col gap-4">
                <motion.div
                  variants={itemVariants}
                  className="font-heading font-extrabold text-6xl leading-tight lgg:text-5xl mdd:text-4xl"
                >
                  LIMITED TIME OFFER! UP TO 50% OFF
                </motion.div>

                <motion.p
                  variants={itemVariants}
                  className="text-lg leading-relaxed lgg:text-base"
                >
                  Explore our best-selling products and discover why everyone is
                  talking about them. This is a limited-time opportunity to get
                  your favorites at an incredible price.
                </motion.p>
              </div>

              {/* Button */}
              <motion.button
                variants={itemVariants}
                className="flex items-center gap-6 px-6 py-3 bg-white text-black font-semibold rounded-full 
                   transition-colors hover:bg-gray-200 w-fit mt-4 shadow-lg"
              >
                <span className="text-lg ssm:text-sm">Shop Now</span>
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
              </motion.button>
            </motion.div>
          </div>

          <div className="w-1/2 h-full rounded-2xl overflow-hidden shadow-2xl lgg:h-[28rem] mdd:h-[25rem] ssm:hidden">
            <img
              src={assets.headerImg}
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>

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
      <div className="mt-20 bg-[#B6B09F]">
        <div className="px-14 py-6 max-w-[1440px] mx-auto ssm:px-4 flex gap-4 justify-between">
          <div className="flex flex-col gap-1">
            <h1 className="font-bold font-heading text-8xl mdd:text-5xl ssm:text-4xl">
              50+
            </h1>
            <p className="text-sm ssm:text-xs">Trusted Customers</p>
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="font-bold font-heading text-8xl mdd:text-5xl ssm:text-4xl">
              99%
            </h1>
            <p className="text-sm ssm:text-xs text-center">
              Assured of secured payments
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="font-bold font-heading text-8xl mdd:text-5xl ssm:text-4xl">
              2K
            </h1>
            <p className="text-sm ssm:text-xs">Customers Worldwide</p>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="mt-20 px-14 py-4 max-w-[1440px] mx-auto ssm:px-4">
        <ProductTitle
          title="FREQUENTLY ASKED QUESTIONS"
          text="Got questions? We've got the answers you need right here!"
        />
        <div className="mt-6 flex gap-6">
          <div className="h-[600px] mdd:h-full ssm:hidden">
            <img
              src={assets.fqaimg}
              className="h-full w-full object-cover object-center"
            />
          </div>

          <AccordianSec />
        </div>
      </div>

      {/* customer review */}
      <div className="mt-20 px-14 py-8 mb-12 max-w-[1440px] mx-auto ssm:px-4">
        <ProductTitle
          title="CUSTOMERS REVIEW"
          text="See what our valued customers are saying about their experiences!"
        />
        <div className="flex flex-col gap-20 mt-10">
          <div className="flex gap-4">
            <img
              src={assets.fqa1}
              className="w-[251px] ssm:w-full object-cover object-center"
            />
            <div className="flex flex-col gap-4 justify-between">
              <p className="text-xl mdd:text-base ssm:text-sm">
                Fast shipping and great packaging! My order arrived in perfect
                condition.
              </p>
              <div className="flex gap-3 mdd:gap-2">
                <img src={assets.star} className="w-10" />
                <img src={assets.star} className="w-10" />
                <img src={assets.star} className="w-10" />
                <img src={assets.star} className="w-10" />
              </div>
              <span className="block h-1 bg-black"></span>
              <h1 className="font-bold text-xl mdd:text-base ssm:text-sm">
                Mariana Van Zeeler
              </h1>
            </div>
          </div>
          <div className="flex gap-4">
            <img
              src={assets.fqa2}
              className="w-[251px] ssm:w-full object-cover object-center"
            />
            <div className="flex flex-col gap-4 justify-between">
              <p className="text-xl mdd:text-base ssm:text-sm">
                Fast shipping and great packaging! My order arrived in perfect
                condition.
              </p>
              <div className="flex gap-3 mdd:gap-2">
                <img src={assets.star} className="w-10" />
                <img src={assets.star} className="w-10" />
                <img src={assets.star} className="w-10" />
                <img src={assets.star} className="w-10" />
              </div>
              <span className="block h-1 bg-black"></span>
              <h1 className="font-bold text-xl mdd:text-base ssm:text-sm">
                Mariana Van Zeeler
              </h1>
            </div>
          </div>
          <div className="flex gap-4">
            <img
              src={assets.fqa3}
              className="w-[251px] ssm:w-full object-cover object-center"
            />
            <div className="flex flex-col gap-4 justify-between">
              <p className="text-xl mdd:text-base ssm:text-sm">
                Fast shipping and great packaging! My order arrived in perfect
                condition.
              </p>
              <div className="flex gap-3 mdd:gap-2">
                <img src={assets.star} className="w-10" />
                <img src={assets.star} className="w-10" />
                <img src={assets.star} className="w-10" />
                <img src={assets.star} className="w-10" />
              </div>
              <span className="block h-1 bg-black"></span>
              <h1 className="font-bold text-xl mdd:text-base ssm:text-sm">
                Mariana Van Zeeler
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
