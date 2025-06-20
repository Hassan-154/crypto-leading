import React from "react";
import { Award, Eye, Shield } from "lucide-react";

const AboutOurValues = () => (
  <section className="py-12 sm:py-20 bg-periwinkle-blue/10">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Our Values</h2>
        <div className="w-24 h-1 bg-periwinkle-blue mx-auto"></div>
      </div>
      <div className="grid lg:grid-cols-3 gap-4">
        {/* Crypto-Native Expertise */}
        <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
          <div className="w-14 h-14 bg-[#EFF0FF] rounded-2xl flex items-center justify-center mb-6">
            <Award className="w-7 h-8 text-periwinkle-blue" />
          </div>
          <h3 className="text-2xl text-black font-bold mb-4">Crypto-Native Expertise</h3>
          <p className="text-black leading-relaxed">
            With over six years of experience in crypto taxes, our team has the expertise to make sure every account
            we take on gets done with complete accuracy. We take pride in making sure every one of our clients gets
            the service they pay for. This shows through our client retention rate which is over 95%.
          </p>
          <div className="mt-6 flex items-center space-x-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-periwinkle-blue">6+</div>
              <div className="text-sm text-black">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-periwinkle-blue">95%</div>
              <div className="text-sm text-black">Retention Rate</div>
            </div>
          </div>
        </div>
        {/* Transparency */}
        <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
          <div className="w-14 h-14 bg-[#EFF0FF] rounded-2xl flex items-center justify-center mb-6">
            <Eye className="w-7 h-8 text-periwinkle-blue" />
          </div>
          <h3 className="text-2xl text-black font-bold mb-4">Transparency</h3>
          <p className="text-black leading-relaxed">
            We deliver honest, transparent, and fully compliant services—built on trust and aligned with global tax
            regulations.
          </p>
        </div>
        {/* Security & Confidentiality */}
        <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
          <div className="w-14 h-14 bg-[#EFF0FF] rounded-2xl flex items-center justify-center mb-6">
            <Shield className="w-7 h-8 text-periwinkle-blue" />
          </div>
          <h3 className="text-2xl text-black font-bold mb-4">Security & Confidentiality</h3>
          <p className="text-black leading-relaxed">
            We prioritize the security of your financial data and digital assets. Our processes follow strict data
            protection protocols, using encrypted systems and secure tools to ensure your wallet information,
            transactions, and reports remain private and protected at all times.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default AboutOurValues; 