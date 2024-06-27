import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";

const MasterLayout = ({ child }) => {
  return (
    <>
      <Header />
      {child}
      <Footer />
    </>
  );
};

export default MasterLayout;
