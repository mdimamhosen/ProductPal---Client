import React from "react";
import ContactUsForm from "./ContactUsForm ";

const ContactForm = () => {
  return (
    <div className="border border-richblack-600 text-richblack-300 rounded-xl p-7 lg:p-14 flex gap-3 flex-col">
      <h1 className="text-4xl leading-10 font-semibold text-richblack-5">
        Have a Product Idea? Let&apos;s Bring It to Life Together
      </h1>
      <p className="">
        Share your vision and how ProductPal can help make it a reality.
      </p>

      <div className="mt-7">
        <ContactUsForm />
      </div>
    </div>
  );
};

export default ContactForm;
