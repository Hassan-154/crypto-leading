import React from 'react'

function HeroService() {
  return (
    <section
    className="py-20"
    style={{
      background:
        "linear-gradient(rgba(0, 0, 0, 0.800), rgba(0, 0, 0, 0.800)), url('/assets/jason-goodman-vbxyFxlgpjM-unsplash.jpg') no-repeat center / cover",
    }}
  >
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
      Services
      </h1>
      <div className="w-24 h-1 bg-periwinkle-blue mx-auto mb-8"></div>
      <p className="text-xl text-white leading-relaxed">
      Comprehensive crypto accounting solutions designed for the digital asset economy. From tax calculations to
      strategic advisory, we've got your crypto compliance covered.
      </p>
    </div>
  </section>
  )
}

export default HeroService 