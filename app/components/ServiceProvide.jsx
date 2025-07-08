import React from 'react'
import { Calculator, BookOpen, TrendingUp, Check, CheckCircle } from "lucide-react"

function ServiceProvide() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8 sm:space-y-12">
          {/* Crypto Tax Calculation */}
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-12 items-start">
            <div className="space-y-2">
              <div className="flex items-center space-x-4 mb-3">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Crypto Tax Calculation</h2>
              </div>
              <p className="text-gray-700 text-md sm:text-[16px] leading-relaxed">
                At Crypto Tax Ease, we simplify the complexities of digital asset taxation by reconciling all your crypto transactions and applying local tax laws (US, UK & beyond) to determine your capital gains, losses, income, and allowable deductions. We Accurately calculate your crypto taxes across wallets, exchanges, DeFi platforms, and NFTs.
              </p>
              <p className="text-gray-700 text-md sm:text-[16px] leading-relaxed">
                Whether you’re an investor, trader, or Web3 founder, we generate clean, audit-ready tax reports that help you stay compliant while optimizing your tax outcomes. We handle everything from wallet imports and transaction matching to staking income and DeFi activity.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">What's Included:</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 sm:w-6 sm:h-5 text-periwinkle-blue" />
                  </div>
                  <span>Multi-wallet and exchange support</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 sm:w-6 sm:h-5 text-periwinkle-blue" />
                  </div>
                  <span>DeFi, NFT, staking, and airdrop coverage</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 sm:w-6 sm:h-5 text-periwinkle-blue" />
                  </div>
                  <span>Local jurisdiction tax treatment (HMRC, IRS, etc.)</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 sm:w-6 sm:h-5 text-periwinkle-blue" />
                  </div>
                  <span>Ready-to-file tax reports and summaries</span>
                </div>
              </div>
            </div>
          </div>

          {/* Crypto Bookkeeping */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="order-2 lg:order-1 bg-gray-50 rounded-2xl p-8 mt-3">
              <h3 className="text-xl font-bold text-gray-900 mb-6">What's Included:</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className=" flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-5 h-4 sm:w-6 sm:h-5 text-periwinkle-blue" />
                  </div>
                  <span>Accurate classification of crypto transactions</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className=" flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-5 h-4 sm:w-6 sm:h-5 text-periwinkle-blue" />
                  </div>
                  <span>Wallet and exchange reconciliation</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className=" flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-5 h-4 sm:w-6 sm:h-5 text-periwinkle-blue" />
                  </div>
                  <span>Ongoing DeFi/NFT activity tracking</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className=" flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-5 h-4 sm:w-6 sm:h-5 text-periwinkle-blue" />
                  </div>
                  <span>Integration with accounting tools and tax reports</span>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <div className="flex items-center  space-x-4 mb-3">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Crypto Bookkeeping</h2>
              </div>
              <p className="text-md sm:text-[16px] leading-relaxed">
                We provide specialized bookkeeping services tailored for digital assets. From everyday crypto transactions to complex DeFi activity, we ensure your financial records are clear, categorized, and audit-ready.
              </p>
              <p className="text-md sm:text-[16px] leading-relaxed">
                Our crypto bookkeeping service includes transaction tracking, wallet reconciliation, income classification (staking, mining, airdrops), and cost basis calculations all aligned with local accounting standards and tax regulations.
              </p>
              <p className="text-md sm:text-[16px] leading-relaxed">
                Whether you’re a trader, investor, NFT creator, or Web3 business, we maintain accurate crypto ledgers that integrate with your financial reporting and tax obligations.
              </p>
            </div>
          </div>

          {/* Tax Advisory */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-2">
              <div className="flex items-center space-x-4 mb-3">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Tax Advisory</h2>
              </div>
              <p className="text-md sm:text-[16px] leading-relaxed">
                Stay ahead of crypto tax obligations with strategic planning tailored to your goals. Our qualified partners of CPA’s and ACCA’s help investors, traders, and Web3 businesses minimize tax exposure and make informed decisions through expert crypto-focused tax advisory.
              </p>
              <p className="text-md sm:text-[16px] leading-relaxed">
                Our team provides personalized guidance on tax-efficient investment strategies, entity structuring, and timing of asset disposals. Whether you're involved in DeFi, NFTs, staking, or holding crypto as a long-term investment, we ensure your activity aligns with the latest regulations in the US, UK, and beyond.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Advisory Services:</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className=" flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-5 h-4 sm:w-6 sm:h-5 text-periwinkle-blue" />
                  </div>
                  <span>Tax optimization strategies (including tax-loss harvesting)</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className=" flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-5 h-4 sm:w-6 sm:h-5 text-periwinkle-blue" />
                  </div>
                  <span>Jurisdiction-specific compliance (IRS, HMRC etc.)</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className=" flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-5 h-4 sm:w-6 sm:h-5 text-periwinkle-blue" />
                  </div>
                  <span>Business entity structuring for Web3 startups</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className=" flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-5 h-4 sm:w-6 sm:h-5 text-periwinkle-blue" />
                  </div>
                  <span>Year-round advisory to reduce risk and maximize savings</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceProvide 