"use client";
import React from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";

const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

const HeroParallax = ({ products = [] }) => {
  const firstRow = products.slice(0, Math.ceil(products.length / 2));
  const secondRow = products.slice(Math.ceil(products.length / 2));
  const topItems = products.slice(0, 3);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="relative flex flex-col overflow-hidden antialiased"
    >
      <Header />
      <div className="h-[200vh] [perspective:1000px] [transform-style:preserve-3d] mt-5">
        <motion.div
          style={{ rotateX, rotateZ, translateY, opacity }}
          className="sticky top-0"
        >
          <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
            {firstRow.map((product: any, index) => (
              <ProductCard
                product={product}
                translate={translateX}
                key={`${product.title}-${index}`}
              />
            ))}
          </motion.div>
          <motion.div className="flex flex-row mb-20 space-x-20">
            {secondRow.map((product: any, index) => (
              <ProductCard
                product={product}
                translate={translateXReverse}
                key={`${product.title}-${index}`}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroParallax;

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
      <h1 className="text-2xl md:text-7xl font-bold dark:text-white leading-tight mt-10 left-5">
        Find Your Perfect Stay <br /> Wherever You Go
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200 leading-relaxed">
        Discover and book top-rated hotels, cozy homestays, and luxury resorts
        across the world — all in one seamless platform. Easy booking, great
        deals, and trusted reviews await.
      </p>
    </div>
  );
};

export const ProductCard = ({ product, translate }) => {
  return (
    <motion.div
      style={{ x: translate }}
      whileHover={{ y: -20 }}
      className="group/product h-96 w-[30rem] relative shrink-0"
    >
      <a href={product.link} className="block group-hover/product:shadow-2xl">
        <img
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0"
        />
      </a>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
    </motion.div>
  );
};
