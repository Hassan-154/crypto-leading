import React from 'react'
import HeroService from '../../components/HeroService'
import WhyChooseOurServices from '../../components/WhyChooseOurServices'
import ServiceProvide from '../../components/ServiceProvide'
import FAQ from '@/app/components/FAQ'

function page() {
  return (
    <>
      <HeroService />
      <ServiceProvide />
      <WhyChooseOurServices />
      <FAQ/>
    </>
  )
}

export default page