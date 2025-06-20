import React from "react";
import { TrendingUp, Users, Lock, Award } from "lucide-react";

const AboutKeyHighlights = () => (
  <section className="py-20 bg-gray-50">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="text-center">
          <div className="w-16 h-16 bg-periwinkle-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <TrendingUp className="w-8 h-8 text-periwinkle-blue" />
          </div>
          <h3 className="text-lg font-semibold text-periwinkle-blue mb-2">DeFi Expertise</h3>
          <p className="text-black">Advanced DeFi transaction analysis</p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-periwinkle-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Users className="w-8 h-8 text-periwinkle-blue" />
          </div>
          <h3 className="text-lg font-semibold text-periwinkle-blue mb-2">NFT Artists</h3>
          <p className="text-black">Specialized NFT tax reporting</p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-periwinkle-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Lock className="w-8 h-8 text-periwinkle-blue" />
          </div>
          <h3 className="text-lg font-semibold text-periwinkle-blue mb-2">Multi-Jurisdiction</h3>
          <p className="text-black">US, Canada & UK compliance</p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-periwinkle-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Award className="w-8 h-8 text-periwinkle-blue" />
          </div>
          <h3 className="text-lg font-semibold text-periwinkle-blue mb-2">Audit-Ready</h3>
          <p className="text-black">Complete compliance reports</p>
        </div>
      </div>
    </div>
  </section>
);

export default AboutKeyHighlights; 