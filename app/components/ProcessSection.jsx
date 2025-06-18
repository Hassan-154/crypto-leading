import React from 'react'
import { Phone, Search, FileText, CheckCircle } from "lucide-react"

function ProcessSection() {
  return (
    <section id="process" className="py-14 bg-gray-50">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 xl:px-0">
          <div className="text-center mb-15">
            <h2 className="text-3xl lg:text-4xl font-bold text-periwinkle-blue">
              What to Expect When You Work With Us
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            <div className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow p-6 rounded-lg">
              <div className="p-0">
                <div className="flex items-center justify-center w-14 h-14 bg-[#EFF0FF] rounded-lg mb-6">
                  <Phone className="w-7 h-8 text-periwinkle-blue" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Initial Call and Onboarding</h3>
                <p className="text-gray-600 leading-relaxed">
                  We start with a call to understand your crypto needs. We'll discuss your transactions, goals, and any
                  specific concerns you have. Provide letter of engagement and get you onboard.
                </p>
              </div>
            </div>

            <div className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow p-6 rounded-lg">
              <div className="p-0">
                <div className="flex items-center justify-center w-14 h-14 bg-[#EFF0FF] rounded-lg mb-6">
                  <Search className="w-7 h-8 text-periwinkle-blue" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Information Gathering</h3>
                <p className="text-gray-600 leading-relaxed">
                  Next, we collect and organize your crypto transaction data, including purchases, sales, transfers, and
                  rewards. We need your public wallet addresses and exchange transaction histories.
                </p>
              </div>
            </div>

            <div className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow p-6 rounded-lg">
              <div className="p-0">
                <div className="flex items-center justify-center w-14 h-14 bg-[#EFF0FF] rounded-lg mb-6">
                  <FileText className="w-7 h-8 text-periwinkle-blue" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Preparation of Tax Report</h3>
                <p className="text-gray-600 leading-relaxed">
                  We review each transaction using blockchain data, crypto tracking software, and exchange records.
                  After mapping out all transactions, we send you our initial comments and questions.
                </p>
              </div>
            </div>

            <div className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow p-6 rounded-lg">
              <div className="p-0">
                <div className="flex items-center justify-center w-14 h-14 bg-[#EFF0FF] rounded-lg mb-6">
                  <CheckCircle className="w-7 h-8 text-periwinkle-blue" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Crypto Tax Documentation</h3>
                <p className="text-gray-600 leading-relaxed">
                  Prepare your reports for all years using the most advantageous accounting method and provide tax
                  documentation for your accountant to file your tax return.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default ProcessSection