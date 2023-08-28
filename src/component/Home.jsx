import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Footer from "./Footer";
import Retangle from "./Retangle";
import Retangle2 from "./Retangle2";
import Rettangle3 from "./Rettangle3";
import Retangle4 from "./Retangle4";

function Home() {
  return (
    <div className="bg-white overflow-hidden">
      <Navbar />
      <Hero />
      <Retangle />
      <Retangle2 />
      <Rettangle3 />
      <Retangle4 />
      <Footer />
    </div>
  );
}

export default Home;
