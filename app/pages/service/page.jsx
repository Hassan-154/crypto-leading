import React from 'react'
import HeroService from '../../components/HeroService'
import WhyChooseOurServices from '../../components/WhyChooseOurServices'
import ServiceProvide from '../../components/ServiceProvide'

function page() {
  return (
    <>
      <HeroService />
      <ServiceProvide />
      <WhyChooseOurServices />
    </>
  )
}

export default page