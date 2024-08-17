import React from "react";

import HighlightText from "../components/HighlightText";
import StatsComponenet from "../components/StartsComponent";
import Quote from "../components/Quote";
import LearningGrid from "../components/LearningGrid";

const About = () => {
  return (
    <div>
      <section className="bg-richblack-700">
        <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-center text-white">
          <header className="mx-auto py-20 text-4xl font-semibold lg:w-[70%]">
            Revolutionizing E-Commerce with
            <HighlightText text={"ProductPal"} />
            <p className="mx-auto mt-3 text-center text-base font-medium text-richblack-300 lg:w-[95%]">
              ProductPal is leading the charge in transforming the e-commerce
              experience. Our mission is to empower businesses and consumers
              alike with innovative solutions, cutting-edge technology, and a
              seamless shopping experience.
            </p>
          </header>
          <div className="sm:h-[70px] lg:h-[150px]"></div>
          <div className="absolute bottom-0 left-[50%] grid w-[100%] translate-x-[-50%] translate-y-[30%] grid-cols-3 gap-3 lg:gap-5">
            <img
              src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="ProductPal Platform"
            />
            <img
              src="https://images.unsplash.com/photo-1559526324-593bc073d938?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Innovative Technology"
            />
            <img
              src="https://images.unsplash.com/photo-1601597111158-2fceff292cdc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Seamless Shopping Experience"
            />
          </div>
        </div>
      </section>

      <section className="border-b border-richblack-700">
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
          <div className="h-[100px] "></div>
          <Quote />
        </div>
      </section>

      <section>
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
          <div className="flex flex-col items-center lg:gap-10 lg:flex-row justify-between">
            <div className="my-24 flex lg:w-[50%] flex-col gap-10">
              <h1 className="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                Our Founding Story
              </h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                ProductPal was created from a unified vision to revolutionize
                product management. Our journey began with a team of industry
                experts, technologists, and entrepreneurs who saw the need for a
                more accessible, flexible, and high-quality solution for
                managing products in today's fast-paced digital landscape.
              </p>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                Having experienced the limitations and challenges of traditional
                product management systems, we were driven by the belief that
                such systems should evolve. Our goal was to develop a platform
                that transcends these limitations and empowers users across
                various sectors to effectively manage their products.
              </p>
            </div>

            <div className="lg:w-[50%] ">
              <img
                src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?q=80&w=2047&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Product Management"
                className="shadow-[0_0_20px_0] shadow-[#FC6767]"
              />
            </div>
          </div>
          <div className="flex flex-col items-center gap-6 my-6 lg:my-0 lg:gap-10 lg:flex-row justify-between">
            <div className="lg:my-24 flex lg:w-[40%] flex-col gap-10">
              <h1 className="bg-gradient-to-b from-[#FF512F] to-[#F09819] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                Our Vision
              </h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                At ProductPal, our vision is to revolutionize product management
                through a state-of-the-art platform. We have meticulously
                crafted a solution that merges innovative technology with
                user-centric design, creating a seamless and powerful tool for
                managing products efficiently and effectively.
              </p>
            </div>
            <div className="lg:my-24 flex lg:w-[40%] flex-col gap-10">
              <h1 className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text text-4xl font-semibold lg:w-[70%] ">
                Our Mission
              </h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                Our mission is to foster a thriving community around ProductPal
                where users can engage, share insights, and grow together. We
                are committed to supporting our users through dynamic forums,
                interactive sessions, and networking events, all aimed at
                enhancing product management knowledge and collaboration.
              </p>
            </div>
          </div>
        </div>
      </section>

      <StatsComponenet />
      <section className="mx-auto mt-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white">
        <LearningGrid />
      </section>
    </div>
  );
};

export default About;
