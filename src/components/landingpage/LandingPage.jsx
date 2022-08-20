import React from "react";
import BottomLanding from "./BottomLanding";
import Hero from "./Hero";

const LandingPage = () => {
  return (
    <div className="mt-5 pt-3">
      <Hero />
      <BottomLanding />
    </div>
  );
};

export default LandingPage;
