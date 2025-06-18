import React from 'react'
import { CheckCircle } from 'lucide-react'

function OurCore() {
  return (
    <div className=' bg-gray-100 px-3 sm:px-4 xl:px-0'>
        <div className="rounded-2xl py-[35] sm:py-[50px] max-w-6xl mx-auto">
    <h3 className="text-3xl sm:text-4xl font-bold text-periwinkle-blue mb-7 sm:mb-9 text-center">Our Core Services Include</h3>
    <div className="grid md:grid-cols-2 gap-5 sm:gap-6 text-md sm:text-lg">
      <div className="flex items-start space-x-3">
        <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-periwinkle-blue mt-1 sm:mt-0.5 flex-shrink-0" />
        <span>Crypto and NFT taxation for the UK, US & global markets</span>
      </div>
      <div className="flex items-start space-x-3">
        <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-periwinkle-blue mt-1 sm:mt-0.5 flex-shrink-0" />
        <span>Blockchain-based bookkeeping and reconciliation</span>
      </div>
      <div className="flex items-start space-x-3">
        <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-periwinkle-blue mt-1 sm:mt-0.5 flex-shrink-0" />
        <span>Tax planning, loss harvesting, and entity structuring</span>
      </div>
      <div className="flex items-start space-x-3">
        <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-periwinkle-blue mt-1 sm:mt-0.5 flex-shrink-0" />
        <span>Financial forecasting for Web3 and e-commerce startups</span>
      </div>
      <div className="flex items-start space-x-3">
        <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-periwinkle-blue mt-1 sm:mt-0.5 flex-shrink-0" />
        <span>DeFi protocol transaction tracking and reconciliation</span>
      </div>
    </div>
  </div>
    </div>
  )
}

export default OurCore