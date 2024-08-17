import React from "react";
import FeaturedCategories from "../components/Featured";
import Testimonials from "../components/Testimonials";
import OurTeam from "../components/OurTeam";
import Award from "./Award";
import TopProducts from "../components/TopProducts";
import Banner from "../components/Banner";
import ProductList from "../components/ProductList";

const Home = () => {
  return (
    <div>
      <Banner />
      <FeaturedCategories />
      <ProductList />
      <TopProducts />
      <Award />
      <Testimonials />
      <OurTeam />
    </div>
  );
};

export default Home;
