import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Works from "./components/Works";
import Grid from "./components/Grid";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";

const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Works />
      <Grid />
      <Testimonials />
      <Pricing />
      <FAQ />
    </div>
  );
};

export default App;
