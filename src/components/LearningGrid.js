import React from "react";

import CTAButton from "./Button";
import HighlightText from "./HighlightText";

const LearningGridArray = [
  {
    order: -1,
    heading: "Comprehensive Product Solutions for",
    highliteText: "Every User, Every Need",
    description:
      "ProductPal partners with leading brands to offer flexible, user-friendly, and secure product management solutions for individuals and businesses globally.",
    BtnText: "Learn More",
    BtnLink: "/",
  },
  {
    order: 1,
    heading: "Tailored Product Management Services",
    description:
      "Save time and simplify your experience! ProductPal’s services are designed to be intuitive and meet the diverse needs of our users.",
  },
  {
    order: 2,
    heading: "Our Approach",
    description:
      "ProductPal leverages innovative technology to provide a seamless and efficient product management experience.",
  },
  {
    order: 3,
    heading: "Secure Transactions",
    description:
      "ProductPal ensures the highest level of security for all transactions, collaborating with top security providers.",
  },
  {
    order: 4,
    heading: "Real-Time Monitoring",
    description:
      "ProductPal offers real-time tracking and analytics to help users stay on top of their product management.",
  },
  {
    order: 5,
    heading: "Customer Support",
    description:
      "ProductPal is committed to delivering exceptional customer support, with dedicated teams available 24/7 to assist you.",
  },
];

const LearningGrid = () => {
  return (
    <div className="grid mx-auto   w-[350px] xl:w-fit grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 mb-12">
      {LearningGridArray.map((card, i) => {
        return (
          <div
            key={i}
            className={`${i === 0 && "xl:col-span-2 xl:h-[294px]"}  ${
              card.order % 2 === 1
                ? "bg-richblack-700 h-[294px]"
                : card.order % 2 === 0
                ? "bg-richblack-800 h-[294px]"
                : "bg-transparent"
            } ${card.order === 3 && "xl:col-start-2"}  `}
          >
            {card.order < 0 ? (
              <div className="xl:w-[90%] flex flex-col gap-3 pb-10 xl:pb-0">
                <div className="text-4xl font-semibold ">
                  {card.heading}
                  <HighlightText text={card.highliteText} />
                </div>
                <p className="text-richblack-300 font-medium">
                  {card.description}
                </p>

                <div className="w-fit mt-2">
                  <CTAButton active={true} linkto={card.BtnLink}>
                    {card.BtnText}
                  </CTAButton>
                </div>
              </div>
            ) : (
              <div className="p-8 flex flex-col gap-8">
                <h1 className="text-richblack-5 text-lg">{card.heading}</h1>

                <p className="text-richblack-300 font-medium">
                  {card.description}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default LearningGrid;
