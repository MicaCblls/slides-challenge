"use client";
import React from "react";
import Button from "../button";
import Arrow from "@/public/assets/leftArrow.svg";
import { useWindowSize } from "@uidotdev/usehooks";
import Image from "next/image";
import mainImage from "@/public/images/mainImage.jpg";
import mainImageMobile from "@/public/images/mainImageMobile.jpg";

const About = () => {
  const { width } = useWindowSize();
  return (
    <section className="w-full h-full flex items-center gap-6 sm:gap-8 px-3 py-0 flex-col max-h-[740px] lg:flex-row justify-center sm:py-4">
      <div className="flex flex-col w-full items-center gap-2 text-center max-w-[593px] lg:text-start lg:items-start ">
        <span className="text-xs lg:text-sm text-black">
          A B O U T — P E R S O N A L
        </span>
        <h1 className=" text-3xl lg:text-[48px] lg:leading-[48px]">
          ¡Hello! <span className="font-semibold">I’m Angela Smith</span>
        </h1>
        <p className="mt-4 font-light max-h-12 overflow-hidden text-base text-black lg:max-h-24 sm:text-[#150142] sm:max-w-[593px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        {width && width >= 1024 && (
          <Button
            className="font-lato flex justify-center items-center bg-black gap-4 mt-6 sm:gap-[10px] h-[54px] rounded-[10px] py-5 px-8 text-white transition-colors border-2 border-black hover:border-2 hover:border-lightGreen"
            svg={
              <Arrow className="w-[10px] h-[10px] transition-colors text-white group-hover:text-lightGreen" />
            }
            textStyles="group-hover:text-lightGreen font-bold"
            aria-label="go to Get Started"
          >
            Get started
          </Button>
        )}
      </div>

      <div className="flex justify-center items-center flex-col lg:flex-row gap-6 w-full lg:w-auto">
        {width && width > 395 ? (
          <div className="w-auto xs:w-[60%] md:w-[40%] lg:w-auto">
            <Image
              src={mainImage}
              alt="Angela Smith"
              width={671}
              priority
              quality={100}
            />
          </div>
        ) : (
          <div className="w-full md:w-2/4">
            <Image
              src={mainImageMobile}
              alt="Angela Smith"
              width={393}
              priority
              quality={100}
            />
          </div>
        )}
        {width && width < 1024 && (
          <Button
            className="max-w-sm w-full font-lato flex justify-center items-center bg-black gap-4 sm:gap-[10px] h-[54px] rounded-[10px] py-5 px-8 text-white transition-colors border-2 border-black hover:border-2 hover:border-lightGreen"
            svg={
              <Arrow className="w-[10px] h-[10px] transition-colors text-white group-hover:text-lightGreen font" />
            }
            textStyles="group-hover:text-lightGreen font-bold"
            aria-label="go to Get Started"
          >
            Get started
          </Button>
        )}
      </div>
    </section>
  );
};

export default About;
