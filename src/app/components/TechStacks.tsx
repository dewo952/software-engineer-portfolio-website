"use client";

import { motion } from "framer-motion";
import techStacksData from "./techstack.json";
import FadeUp from "@/animations/FadeUp";
import { Poppins } from "next/font/google";
import Image from "next/image";

const font = Poppins({
  subsets: ["latin"],
  weight: ["300"],
});

const marqueeVariants = {
  animate: {
    x: ["100%", "-100%"],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 30,
        ease: "linear",
      },
    },
  },
};

export default function TechStacks() {
  return (
    <section className="mb-[108px]">
      <FadeUp tag="div" className="mb-16">
        <h2 className="mx-auto mb-10 max-w-[800px] text-center text-[36px] font-bold leading-[120%] tracking-[0.5px] lg:text-[54px]">
          Crafting solutions through code, one product at a time.
        </h2>
      </FadeUp>
      <div className="relative overflow-hidden">
        <motion.div
          className="flex space-x-8"
          variants={marqueeVariants}
          animate="animate"
        >
          {techStacksData.map((tech) => (
            <div key={tech.technology} className="flex-shrink-0 flex items-center">
              <Image
                src={tech.icon.url}
                alt={tech.icon.alt}
                width={60}
                height={60}
              />
            </div>
          ))}
          {techStacksData.map((tech) => (
            <div key={tech.technology} className="flex-shrink-0 flex items-center">
              <Image
                src={tech.icon.url}
                alt={tech.icon.alt}
                width={60}
                height={60}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
