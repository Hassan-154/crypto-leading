import React from 'react'
import { Calculator, BookOpen, TrendingUp } from 'lucide-react'

function OurService() {
  return (
    <section id="services" className="py-16 bg-[#E2E8F0]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h3 className="text-3xl sm:text-4xl font-bold text-periwinkle-blue mb-4">Our Services</h3>
        <p className="text-lg text-gray-600">Comprehensive crypto accounting and tax solutions</p>
      </div>
      
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1 bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-center w-14 h-14 bg-[#EFF0FF] rounded-lg mb-6">
            <Calculator className="w-7 h-8 text-periwinkle-blue" />
          </div>
          <h4 className="text-2xl font-semibold text-gray-900 mb-4">Crypto Tax Calculation</h4>
          <p className="text-gray-700 leading-relaxed">
            We take the complexity out of cryptocurrency tax reporting by preparing accurate cryptocurrency tax documentation for your accountant to file your tax return.
          </p>
        </div>
        
        <div className="flex-1 bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-center w-14 h-14 bg-[#EFF0FF] rounded-lg mb-6">
            <BookOpen className="w-7 h-8 text-periwinkle-blue" />
          </div>
          <h4 className="text-2xl font-semibold text-gray-900 mb-4">Crypto Bookkeeping</h4>
          <p className="text-gray-700 leading-relaxed">
            We can reconcile your crypto accounts with your non-crypto accounts and produce accurate and up-to-date financial records for your business.
          </p>
        </div>
        
        <div className="flex-1 bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-center w-14 h-14 bg-[#EFF0FF] rounded-lg mb-6">
            <TrendingUp className="w-7 h-8 text-periwinkle-blue" />
          </div>
          <h4 className="text-2xl font-semibold text-gray-900 mb-4">Tax Planning and Advisory</h4>
          <p className="text-gray-700 leading-relaxed">
            We craft personalized tax strategies designed to legally minimize your tax liabilities and to help you keep more of your crypto gains while staying compliant.
          </p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default OurService