import React from 'react'
import { Wallet, FileText, Target, Calendar } from "lucide-react"

function WhyChooseOurServices() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4">Why Choose Our Services</h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className=" w-14 h-14 bg-[#EFF0FF] rounded-full flex items-center justify-center mx-auto mb-4">
              <Wallet className="w-7 h-8 text-periwinkle-blue" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">All Crypto Assets</h3>
            <p className="text-gray-600">DeFi, NFTs, staking, trading - we handle it all</p>
          </div>
          <div className="text-center">
            <div className=" w-14 h-14 bg-[#EFF0FF] rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="w-7 h-8 text-periwinkle-blue" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Audit-Ready Reports</h3>
            <p className="text-gray-600">Professional documentation for compliance</p>
          </div>
          <div className="text-center">
            <div className=" w-14 h-14 bg-[#EFF0FF] rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-7 h-8 text-periwinkle-blue" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Tax Optimization</h3>
            <p className="text-gray-600">Minimize exposure, maximize savings</p>
          </div>
          <div className="text-center">
            <div className=" w-14 h-14 bg-[#EFF0FF] rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-7 h-8 text-periwinkle-blue" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Year-Round Support</h3>
            <p className="text-gray-600">Ongoing advisory and compliance guidance</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseOurServices 