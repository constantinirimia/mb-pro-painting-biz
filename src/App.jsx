import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import Gallery from "./components/Galery/Gallery";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <Gallery />
      <Testimonials />
      <Contact />
    </>
  );
}

export default App;
