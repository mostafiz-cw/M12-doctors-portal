import React from "react";
import AppoinmentSec from "./AppoinmentSec";
import CTA from "./CTA";
import HeroSection from "./HeroSection";
import { InfoCard } from "./InfoCard";
import { Services } from "./Services";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <>
      <HeroSection></HeroSection>
      <InfoCard></InfoCard>
      <Services></Services>
      <CTA></CTA>
      <AppoinmentSec></AppoinmentSec>
      <Testimonial></Testimonial>
    </>
  );
};

export default Home;
