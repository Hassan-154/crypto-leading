import React from "react";
import { Award, Eye, Shield, CheckCircle } from "lucide-react";

const AboutOurValues = () => (
  <section className="py-12 sm:py-20 bg-periwinkle-blue/10">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Our Values</h2>
        <div className="w-24 h-1 bg-periwinkle-blue mx-auto"></div>
      </div>
      <div className="grid lg:grid-cols-4 gap-4">
        {/* Crypto-Native Expertise */}
        <div className="bg-white rounded-lg shadow-md p-3 sm:p-4 hover:shadow-lg transition-shadow">
          <div className="w-14 h-14 bg-[#EFF0FF] rounded-2xl flex items-center justify-center mb-6">
            <Award className="w-7 h-8 text-periwinkle-blue" />
          </div>
          <h3 className="text-lg sm:text-xl text-black font-bold mb-4">Crypto-Native Expertise</h3>
          <p className="text-black leading-relaxed">
            Built by crypto natives, for crypto investors. From DeFi to NFTs to staking, we understand your world.
          </p>
        </div>
        {/* Transparency */}
        <div className="bg-white rounded-lg shadow-md p-3 sm:p-4 hover:shadow-lg transition-shadow">
          <div className="w-14 h-14 bg-[#EFF0FF] rounded-2xl flex items-center justify-center mb-6">
            <Eye className="w-7 h-8 text-periwinkle-blue" />
          </div>
          <h3 className="text-lg sm:text-xl text-black font-bold mb-4">Transparency</h3>
          <p className="text-black leading-relaxed">
            We deliver honest, transparent, and fully compliant services built on trust and aligned with IRS and HMRC tax regulations.
          </p>
        </div>
        {/* Security & Confidentiality */}
        <div className="bg-white rounded-lg shadow-md p-3 sm:p-4 hover:shadow-lg transition-shadow">
          <div className="w-14 h-14 bg-[#EFF0FF] rounded-2xl flex items-center justify-center mb-6">
            <Shield className="w-7 h-8 text-periwinkle-blue" />
          </div>
          <h3 className="text-lg sm:text-xl text-black font-bold mb-4">Security & Confidentiality</h3>
          <p className="text-black leading-relaxed">
            Your data is encrypted, confidential, and handled with the utmost care always.
          </p>
        </div>
        {/* Accuracy */}
        <div className="bg-white rounded-lg shadow-md p-3 sm:p-4 hover:shadow-lg transition-shadow">
          <div className="w-14 h-14 bg-[#EFF0FF] rounded-2xl flex items-center justify-center mb-6">
            <CheckCircle className="w-7 h-8 text-periwinkle-blue" />
          </div>
          <h3 className="text-lg sm:text-xl text-black font-bold mb-4">Accuracy</h3>
          <p className="text-black leading-relaxed">
            We ensure every calculation and report meets IRS and HMRC standards. Precision in numbers and peace of mind in reporting.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default AboutOurValues; 