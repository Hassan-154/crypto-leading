'use client'
import React, { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';

const faqData = [
  {
    question: "Do I need to pay taxes on my crypto transactions?",
    answer:
      "Yes. In most countries like the U.S. and U.K., cryptocurrency is treated as property, not currency. That means trading, selling, mining, staking, or even spending crypto can trigger taxable events.",
  },
  {
    question: "What happens if I don't report my crypto transactions?",
    answer:
      "Failing to report your crypto activity can result in penalties, interest, and even IRS or HMRC audits. Tax authorities are increasing enforcement and using data from exchanges to match unreported activity. It's always safer and cheaper to report correctly, even if you've made losses.",
  },
  {
    question: "Can I get in trouble for reporting crypto incorrectly?",
    answer:
      "Yes. Incorrect reporting — whether intentional or accidental — may lead to:\n• Underpayment penalties\n• Interest on unpaid tax\n• In serious cases, tax fraud investigations\nThat's why we carefully reconcile every transaction and apply the correct cost basis and reporting method to ensure compliance.",
  },
  {
    question: "I didn't report my crypto in past years. Can you help me fix it?",
    answer:
      "Absolutely. We offer back-tax reporting and amended filings. If you missed reporting in previous years, we'll help you:\n• Gather historical transaction data\n• Reconstruct your trading and income history\n• File accurate tax returns or amendments to avoid future penalties",
  },
  {
    question: "Which crypto activities are taxable?",
    answer:
      "Taxable crypto events may include:\n• Selling crypto for fiat (USD, GBP, etc.)\n• Trading one crypto for another\n• Using crypto to buy goods or services\n• Receiving crypto as income (staking, mining, airdrops)",
  },
  {
    question: "What if I only made losses this year?",
    answer:
      "Even if you made a loss, you must report it. The good news? We help you claim capital losses to offset gains and reduce future tax bills through our loss harvesting strategies.",
  },
  {
    question: "Can I recover overpaid taxes from previous years?",
    answer:
      "Yes! If you incorrectly reported crypto or missed deductions, we can review and amend past filings to help you reclaim any overpaid taxes.",
  },
  {
    question: "How do you calculate my crypto taxes?",
    answer:
      "We import and reconcile your transactions from all major wallets and exchanges, then apply IRS/HMRC-compliant methods to generate accurate reports like Form 8949, Schedule D, and capital gains summaries.",
  },
  {
    question: "Do you offer crypto tax services for businesses or DAOs?",
    answer:
      "Though the majority of our clients are individuals, but yes, we support Web3 startups, crypto businesses, and DAOs with:\n• Tax compliance\n• Token bookkeeping\n• Team compensation tracking\n• Treasury reporting",
  },
  {
    question: "Is your service secure and confidential?",
    answer:
      "Yes. Your data is handled with strict confidentiality, and we use bank-grade encryption and non-custodial data access (read-only API/CSV imports) to ensure maximum security.",
  },
  {
    question: "Will I get audited for trading crypto?",
    answer:
      "Crypto is becoming a high-risk audit area. IRS and HMRC now ask about crypto on the first page of tax returns, and flagged discrepancies (like large deposits or missing income) can trigger reviews. Our service reduces audit risk with fully reconciled and traceable tax reports.",
  },
  {
    question: "What is the tax rate on cryptocurrency gains?",
    answer: (
      <div>
        <div className="font-semibold mb-2">The tax rate on crypto depends on two key factors:</div>
        <ul className="list-disc pl-6 mb-2">
          <li className="mb-2">
            <span className="font-semibold">Holding Period</span>
            <ul className="list-disc pl-6 mt-1">
              <li className="mb-1">
                <span className="font-semibold">Short-term (held less than 12 months):</span><br/>
                Gains are taxed as ordinary income — the same rates as your salary or business income. In the U.S., this ranges from 10% to 37%, depending on your income bracket.
              </li>
              <li className="mb-1">
                <span className="font-semibold">Long-term (held more than 12 months):</span><br/>
                Gains are taxed at preferential capital gains rates — typically 0%, 15%, or 20% in the U.S., depending on your total income.
              </li>
              <li className="mb-1">
                In the UK, crypto is taxed under Capital Gains Tax (CGT):<br/>
                <ul className="list-disc pl-6 mt-1">
                  <li>You get a £3,000 annual CGT allowance (as of 2025–26).</li>
                  <li>After that, gains are taxed at 10% (basic rate) or 20% (higher rate) depending on your income level.</li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="mb-2">
            <span className="font-semibold">Type of Income</span>
            <ul className="list-disc pl-6 mt-1">
              <li>Trading or selling: Capital gains</li>
              <li>Mining, staking, airdrops: Taxed as income, then potentially capital gains when sold later</li>
              <li>DeFi income or NFT flips: Treated based on the nature of the transaction (we analyze each case)</li>
            </ul>
          </li>
        </ul>
        <div className="mt-2">We help calculate your correct tax rate and apply the most favorable treatment based on your activity and jurisdiction.</div>
      </div>
    ),
  },
  {
    question: "I have already had my crypto taxes done in previous years by another accountant. Can you just help me with this year's report?",
    answer:
      "Potentially. We have seen many, many inaccurate crypto reports prepared over the years, so we would need to look over the previous years to confirm that they were done correctly. If you have a Cointracking or Koinly account with your transactions in it already, we can start from there! Sometimes starting from scratch can be the most cost-effective approach though.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className='bg-gray-100 py-[40px] md:py-[80px] px-3 sm:px-4 xl:px-0'>
      <div className='max-w-6xl mx-auto'>
        <div className="text-center mb-4">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4">Your questions answered</h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
        </div>
        <p className='text-gray-600 text-lg text-center max-w-[600px] mx-auto mb-10'>
          Frequently Asked Questions
        </p>
        <div className='mt-10'>
          {faqData.map((item, idx) => (
            <div key={idx} className='rounded-none'>
              <button
                className='w-full flex justify-between items-center py-5 px-0 focus:outline-none border-t border-gray-300'
                onClick={() => handleToggle(idx)}
                aria-expanded={openIndex === idx}
                aria-controls={`faq-content-${idx}`}
              >
                <span className='text-lg sm:text-xl font-semibold text-gray-900 text-left tracking-wide' style={{fontFamily: 'inherit', letterSpacing: '0.5px'}}>
                  {item.question}
                </span>
                <span className='ml-4 transition-transform duration-300' style={{transform: openIndex === idx ? 'rotate(180deg)' : 'rotate(0deg)'}}>
                  {openIndex === idx ? (
                    <FiMinus className='text-2xl text-gray-900' />
                  ) : (
                    <FiPlus className='text-2xl text-gray-900' />
                  )}
                </span>
              </button>
              <div
                id={`faq-content-${idx}`}
                className={`overflow-hidden transition-all duration-300 ease-in-out px-0 ${openIndex === idx ? 'max-h-none py-2' : 'max-h-0 py-0'}`}
                aria-hidden={openIndex !== idx}
              >
                {item.answer && (
                  typeof item.answer === 'string' ? (
                    <p className='text-gray-600 text-base sm:text-lg px-0 pb-5 pt-0' style={{whiteSpace: 'pre-line'}}>{item.answer}</p>
                  ) : (
                    <div className='text-gray-600 text-base sm:text-lg px-0 pb-5 pt-0'>{item.answer}</div>
                  )
                )}
              </div>
            </div>
          ))}
          <div className='border-t border-gray-300'></div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;