import React from 'react'
import Home from '../../components/Home'
import OurService from '../../components/OurService'
import TrustedCrypto from '../../components/TrustedCrypto'
import ProcessSection from '../../components/ProcessSection'
import CryptoTaxChallenges from '@/app/components/CryptoTaxChallenges'
import OurCore from '../../components/OurCore'

function page() {
  return (
    <>
      <Home />
      <CryptoTaxChallenges/>
      <OurService />
      <TrustedCrypto />
      <ProcessSection />
      <OurCore />
    </>
  )
}

export default page