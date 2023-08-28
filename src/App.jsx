import { useState } from "react";
import "./index.css";
import Home from "./component/Home";
import About from "./component/About";
import Services from "./component/Services";
import Blog from "./component/Blog";
import Contact from "./component/Contact";
import { Route, Router, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/SErvices" element={<Services />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
