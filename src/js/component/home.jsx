import React from "react";
import Header from "./Header.js";
import Body from "./Body.js";
import Footer from "./Footer.js";


//create your first component
const Home = () => {
  return (
    <div className="text-center">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default Home;
