import React from 'react'
import { Shield, Eye, Award, TrendingUp, Users, Lock } from "lucide-react"
import HeroAbout from "../../components/HeroAbout"
import AboutContent from "../../components/AboutContent"
import AboutKeyHighlights from "../../components/AboutKeyHighlights"
import AboutOurValues from "../../components/AboutOurValues"

function page() {
  return (
    <>
      <HeroAbout />
      <AboutContent />
      <AboutOurValues />
      <AboutKeyHighlights />
    </>
  )
}

export default page