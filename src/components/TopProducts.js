import React from "react";

const TopProducts = () => {
  return (
    <div id="offers" className="w-11/12 mx-auto">
      <div className="py-4 body-font">
        <div className="w-11/12 mx-auto">
          <div
            className="flex flex-col text-center w-full py-5"
            data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="500"
          >
            <h1 className="text-xl text-richblack-5 md:text-4xl font-bold h-one title-font mb-1">
              Our Top Selling Products
            </h1>
            <p className="lg:w-[60%] w-[80%] text-center text-richblack-25 mx-auto leading-relaxed text-xs md:text-base">
              "Unlock incredible savings with our special offers on premium
              products. Discover deals that will elevate your lifestyle at
              unbeatable prices."
            </p>
          </div>
          <div className="flex  flex-wrap">
            {[
              {
                imgSrc:
                  "https://images.unsplash.com/photo-1536659272167-0a78858abb46?q=80&w=600&auto=format&fit=crop",
                alt: "Smart Watch",
                title: "Smart Watch",
                subtitle: "Stay Connected on the Go",
                description:
                  "Explore the latest in wearable tech with our Smart Watch offers. Stay connected and track your fitness goals with a stylish device that fits your lifestyle.",
                textColor: "#0072B1",
              },
              {
                imgSrc:
                  "https://images.unsplash.com/photo-1612198273689-b437f53152ca?q=80&w=600&auto=format&fit=crop",
                alt: "Smart Phone",
                title: "Smart Phone",
                subtitle: "Your Gateway to the World",
                description:
                  "Discover the power of communication with our Smart Phone deals. Whether you're capturing memories or staying in touch, find the perfect device for you.",
                textColor: "#0072B1",
              },
              {
                imgSrc:
                  "https://plus.unsplash.com/premium_photo-1684445035187-c4bc7c96bc5d?q=80&w=600&auto=format&fit=crop",
                alt: "Sleeping Bed",
                title: "Sleeping Bed",
                subtitle: "Comfort Redefined",
                description:
                  "Experience the ultimate in comfort with our premium Sleeping Bed offers. Invest in your rest and wake up refreshed every day.",
                textColor: "#007BFF",
              },
              {
                imgSrc:
                  "https://images.unsplash.com/photo-1659500700592-824d027c9ba0?q=80&w=600&auto=format&fit=crop",
                alt: "Showpiece",
                title: "Showpiece",
                subtitle: "Elegance in Every Detail",
                description:
                  "Adorn your home with our exquisite Showpieces. Add a touch of elegance to any room and make a statement with your decor.",
                textColor: "#007BFF",
              },
              {
                imgSrc:
                  "https://images.unsplash.com/photo-1588344093894-84efcf2720f3?q=80&w=600&auto=format&fit=crop",
                alt: "Al-Quran",
                title: "Al-Quran",
                subtitle: "A Spiritual Journey",
                description:
                  "Embark on a spiritual journey with our beautifully crafted Al-Qurans. Perfect for personal study or as a thoughtful gift.",
                textColor: "#007BFF",
              },
              {
                imgSrc:
                  "https://images.unsplash.com/photo-1601937286283-1c4550e05f58?q=80&w=600&auto=format&fit=crop",
                alt: "Water Bottle",
                title: "Water Bottle",
                subtitle: "Hydration on the Go",
                description:
                  "Stay hydrated wherever you are with our durable and stylish Water Bottles. Ideal for active lifestyles and everyday use.",
                textColor: "#007BFF",
              },
            ].map((product, index) => (
              <div
                key={index}
                className="lg:w-1/3 sm:w-1/2 py-2 md:px-2 cursor-pointer group"
              >
                <div className="flex relative h-full">
                  <img
                    src={product.imgSrc}
                    alt={product.alt}
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                  <div className="px-8 py-10 relative z-10 w-full bg-[#1D0642] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                    <h2
                      className="tracking-widest text-sm title-font font-medium"
                      style={{ color: product.textColor }}
                    >
                      {product.title}
                    </h2>
                    <h1
                      className="title-font text-lg font-medium"
                      style={{ color: product.textColor }}
                    >
                      {product.subtitle}
                    </h1>
                    <p className="leading-relaxed text-[#E1AAFF]">
                      {product.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
