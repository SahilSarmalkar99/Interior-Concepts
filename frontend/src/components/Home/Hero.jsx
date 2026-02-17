import React, { use } from "react";
import "./Hero.css";
import HeroImage from "./HeroImage";
import Card from "./Card";
import LeftText from "./LeftText";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Content1 from "./Content1";
import Image1 from "./Image1";
import ContentButton1 from "./ContentButton1";
import Clients from "./Clients";
import ExclusiveProjects from "./ExclusiveProjects";
import FeaturedProjects from "./FeaturedProjects";
import Services from "./Services";
import Testimonials from "./Testimonials";
import WhyUs from "./WhyUs";
import ContactSection from "./ContactSection";
import Offer from "./Offer";
import HeroSection from "./HeroSection";
import GalleryParallax from "./GalleryParallax";
import AboutSection from "./AboutSection";

gsap.registerPlugin(ScrollTrigger);
const Hero = () => {
  useGSAP(() => {
    gsap.to("#top", {
      scrollTrigger: {
        trigger: "#top",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
      scaleX: 0.9,
      transformOrigin: "center center",
      ease: "none",
    });
  }, []);

  return (
    <div>
      <div
        className="relative w-full h-[450px] md:h-[100dvh] overflow-hidden"
        id="top"
      >
        <HeroImage />
        <div
          className="absolute inset-0 z-10 
                flex items-center 
                px-6 md:px-20 
                bg-gradient-to-r from-white/12 via-white/20 to-transparent"
        >
          <div className="w-full max-w-7xl mx-auto">
            <LeftText />
          </div>
        </div>
        {/* <HeroSection /> */}
      </div>
      {/* <AboutSection /> */}
      {/* Middle part -1 */}
      <div className="w-full min-h-screen  md:px-24 px-5 pt-20 md:pt-40 font-[font1] text-black">
        {/* TOP CONTENT ROW */}
        <Content1 />

        {/* IMAGE SECTION */}
        <Image1 />

        {/* Bottom Content */}
        <ContentButton1 />

        {/* Clients Section */}
      </div>

      {/* <ExclusiveProjects />

<FeaturedProjects isdisplayed={[true ,true ,true]}/> */}
      <GalleryParallax />
      <Clients />

      <Services />

      <Testimonials />

      <Offer />

      <WhyUs />

      <ContactSection />
    </div>
  );
};

export default Hero;
