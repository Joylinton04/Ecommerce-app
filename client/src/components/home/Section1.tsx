import assets from '@/assets/assets';
import React from 'react'
import { motion, spring } from "framer-motion";



const Section1 = () => {

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
  )
}

export default Section1;