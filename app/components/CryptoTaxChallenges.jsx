import React from 'react'
import Image from 'next/image'

function CryptoTaxChallenges() {
  return (
    <section className="py-12 sm:py-14 bg-white">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 xl:px-0">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-[30px] items-center">
          {/* Left: Content */}
          <div className="w-full lg:w-1/2 space-y-3" data-aos="fade-right">
            <h2 className="text-2xl md:text-3xl text-black font-semibold mb-4">
              Are You Struggling With Crypto Taxes?
            </h2>
            <p className="text-base sm:text-md leading-relaxed">
              Have you made hundreds or even thousands of trades across multiple wallets and exchanges, and now feel overwhelmed trying to track your gains and losses? Are you confused about how to report staking rewards, airdrops, NFT sales, or income from DeFi protocols?
            </p>
            <p className="text-base sm:text-md leading-relaxed">
              Worried about getting penalized by the IRS for missing something or filing incorrectly? You’re not alone. Many crypto users don’t realize that even swapping tokens, using crypto to make a purchase, or receiving rewards in your wallet could be taxable events.
            </p>
            <p className="text-base sm:text-md leading-relaxed">
              Do you feel like tax software doesn't fully understand your crypto activity, or that your accountant isn't familiar with blockchain transactions? Maybe you’ve earned income from mining or Web3 freelancing and have no idea where to report it or worse, you're stuck with thousands of rows of CSV data and no idea where to start.
            </p>
            <p className="text-base sm:text-md leading-relaxed">
              <span className="font-bold">If any of this sounds familiar, you’re exactly who we help.</span><br/>
              Crypto taxes are confusing and complex, but we can eliminate all of that. We give you clarity, accuracy, and peace of mind.
            </p>
          </div>
          {/* Right: Image */}
          <div className="w-full lg:w-1/2 flex justify-start" data-aos="fade-left">
            <div className="relative w-full h-auto">
              <Image
                src="/images/WhatsApp Image 2025-07-06 at 6.01.16 AM.jpeg"
                alt="Crypto Tax Challenges"
                width={500}
                height={600}
                className="w-full h-auto object-cover rounded-[19px] shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CryptoTaxChallenges