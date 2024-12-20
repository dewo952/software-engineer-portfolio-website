"use client";

// Images
import Image from "next/image";
import firstImage from "../../../../../../public/firstImage.avif";
import centerImage from "../../../../../../public/centerImage.avif";
import thirdImage from "../../../../../../public/img3.jpg";
import fourthImage from "../../../../../../public/fourthImage.webp";

// Other Components
import GradientTxt from "../../../Reusables/GradientTxt";
import FadeUp from "@/animations/FadeUp";
import { motion } from "framer-motion";

export default function ProfileInfo() {
  return (
    <section id="about">
      <FadeUp
        tag="div"
        className="mb-20 flex flex-col items-start justify-between gap-4 lg:flex-row"
      >
        <div>
          <GradientTxt
            txt="SOFTWARE ENGINEER"
            className="text-[22px] font-bold tracking-[4px]"
            tagName="h5"
          />
          <h2 className="mb-4 mt-2 text-[40px] font-bold leading-[120%] tracking-[0.5px] md:text-[54px]">
            That's me!
          </h2>
        </div>
        <p className="text-[19px] leading-[40px] text-[#666] md:text-[22px] lg:max-w-[50%]">
          Over the past 4 years, I've collaborated with a diverse range of
          clients, from startups to established businesses. I bring a passion
          for creating seamless digital experiences and solving complex problems
          through code.
        </p>
      </FadeUp>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid gap-4"
      >
        {/* Center Image */}
        <Image
          src={centerImage}
          alt="image"
          className="col-span-2 w-full xl:col-start-2 xl:col-end-4 xl:row-start-1 xl:row-end-3 xl:h-full xl:w-auto"
        />

        {/* 3rd row, first image */}
        <Image
          src={thirdImage}
          alt="image"
          className="col-span-1 w-full xl:col-span-1 xl:col-start-4 xl:row-start-1 xl:row-end-2 xl:h-full xl:w-auto"
        />

        {/* 3rd row, second image */}
        <Image
          src={fourthImage}
          alt="image"
          className="col-span-1 w-full xl:col-span-1 xl:col-start-4 xl:row-start-2 xl:row-end-3 xl:h-full xl:w-auto xl:object-cover"
        />

        {/* 1st row, first image */}
        <Image
          src={firstImage}
          alt="image"
          className="col-span-2 w-full xl:col-span-1 xl:col-start-1 xl:row-span-2 xl:row-start-1 xl:row-end-3 xl:aspect-9/16 xl:h-full xl:w-auto xl:object-cover"
        />
      </motion.div>
    </section>
  );
}
