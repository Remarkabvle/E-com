import React from "react";
// import SiteHeader from "../../components/header/Header";
import Hero from "../../components/hero/Hero";
import ProductList from "../../components/product/ProductList";
import DressStyleGrid from "../../components/DressStyleGrid/DressStyleGrid";
import HappyCustomers from "../../components/HappyCustomers/HappyCustomers";
// import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      {/* <SiteHeader /> */}
      <Hero />
      <ProductList />
      {/* <hr style={{marginTop: '100px'}} /> */}
      {/* <ProductList/> */}
      <DressStyleGrid />
      <HappyCustomers />
      {/* <Footer/> */}
    </div>
  );
};

export default Home;
