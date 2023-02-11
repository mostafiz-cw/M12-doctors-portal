import React from "react";
import HeroSection from "./HeroSection";
import { InfoCard } from "./InfoCard";
import { Services } from "./Services";

const Home = () => {
  return (
    <>
      <HeroSection></HeroSection>
      <InfoCard></InfoCard>
      <Services></Services>
    </>
  );
};

export default Home;
