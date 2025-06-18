"use client";
import { useEffect } from "react";
import Home from "./components/Home";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
import Contact from "./components/Contact";
import Testimonial from "./components/Testimonial";
import AOS from "aos";
import "aos/dist/aos.css";
import WhatWeDOAnimated from "./components/WhatWeDOAnimated";
import TrustedCrypto from "./components/TrustedCrypto";
import OurService from "./components/OurService";
import ProcessSection from "./components/ProcessSection";
import OurCore from "./components/OurCore";

export default function page() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <main className="scroll-smooth">
      <section id="home">
        <Home />
      </section>
      <section id="">
        <OurService />
      </section>
      <section id="">
        <TrustedCrypto />
      </section>
      <section id="">
        <ProcessSection />
      </section>

      <section id="">
      <OurCore/>
      </section>
      {/* <section id="how-it-works">
        <HowItWorks />
      </section>
      <section id="resources">
        <WhatWeDOAnimated />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="">
        <Testimonial />
      </section>
      <section id="contact">
        <Contact />
      </section> */}
    </main>
  );
}
