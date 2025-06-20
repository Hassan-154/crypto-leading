import React from "react";

const HeroAbout = () => (
  <section
    className="py-20"
    style={{
      background:
        "linear-gradient(rgba(0, 0, 0, 0.800), rgba(0, 0, 0, 0.800)), url('/assets/jason-goodman-vbxyFxlgpjM-unsplash.jpg') no-repeat center / cover",
    }}
  >
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
        About <span className="text-white">Us</span>
      </h1>
      <div className="w-24 h-1 bg-periwinkle-blue mx-auto mb-8"></div>
      <p className="text-xl text-white leading-relaxed">
        Simplifying the complex world of crypto, DeFi, NFTs, and blockchain finance
      </p>
    </div>
  </section>
);

export default HeroAbout; 