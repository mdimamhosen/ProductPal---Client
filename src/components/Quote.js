import React from "react";
import HighlightText from "./HighlightText";

const Quote = () => {
  return (
    <div className="text-xl md:text-4xl font-semibold mx-auto py-5 pb-20 text-center text-white">
      We are dedicated to transforming the way you discover and purchase
      products. Our innovative platform{" "}
      <HighlightText text={"merges technology"} />,{" "}
      <span className="bg-gradient-to-b from-[#FF512F] to-[#F09819] text-transparent bg-clip-text font-bold">
        {" "}
        creativity
      </span>
      , and community to deliver an
      <span className="bg-gradient-to-b from-[#E65C00] to-[#F9D423] text-transparent bg-clip-text font-bold">
        {" "}
        exceptional shopping experience.
      </span>
    </div>
  );
};

export default Quote;
