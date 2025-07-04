import React from 'react'
import Home from '../../components/Home'
import OurService from '../../components/OurService'
import TrustedCrypto from '../../components/TrustedCrypto'
import ProcessSection from '../../components/ProcessSection'
import OurCore from '../../components/OurCore'
import FAQ from '@/app/components/FAQ'

function page() {
  return (
    <>
      <Home />
      <OurService />
      <TrustedCrypto />
      <ProcessSection />
      <OurCore />
    </>
  )
}

export default page