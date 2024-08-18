import React from "react";
import SiteHeader from "../../components/header/Header";
import Hero from "../../components/hero/Hero";
import ProductList from "../../components/product/ProductList";
import DressStyleGrid from "../../components/DressStyleGrid/DressStyleGrid";
import HappyCustomers from "../../components/HappyCustomers/HappyCustomers";

const Home = () => {
  return (
    <div>
      <SiteHeader />
      <Hero />
      <ProductList />
      {/* <hr style={{marginTop: '100px'}} /> */}
      {/* <ProductList/> */}
      <DressStyleGrid />
      <HappyCustomers />
    </div>
  );
};

export default Home;
