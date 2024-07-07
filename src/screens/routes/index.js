import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../home/index";
import About from "../about/index";
import Contact from "../contact";
import Process from "../process";
import Services from "../services";


const Root = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/Contact" element={<Contact />}/>
      <Route path="/services" element={<Services />}/>
      <Route path="/process" element={<Process />}/>

      
    </Routes>
  );
};

export default Root;