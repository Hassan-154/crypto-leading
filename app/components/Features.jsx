import React from 'react'
import Image from 'next/image'
import FeaturesData from '../constant/Features.json'

function Features() {
    return (
        <div className='bg-[#E2E8F0] py-[40px] md:py-[80px] px-3 sm:px-4 xl:px-0'>
            <div className='max-w-6xl mx-auto'>
                <div className='pb-1'><span>Features</span></div>
                <h3 className='max-w-[500px] text-[28px] leading-[35px] sm:text-[43px] sm:leading-[49px] text-black font-semibold'>
                    Powerful<span className='text-periwinkle-blue font-roslindale italic'> Features</span>, Built for Finance Recruitment</h3>
                <div data-aos="fade-up" className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-10'>
                    {FeaturesData.map((feature, index) => (
                        <div key={index} className='bg-white p-6 rounded-lg shadow-md flex flex-col items-start text-left'>
                            <div className='mb-4'>
                                <div className='h-[45px] rounded-lg w-[45px] bg-[#DFF2FE] flex items-center justify-center'>
                                    <Image src={feature.icon} alt={feature.title} width={60} height={60} className='h-[27px] w-auto' />
                                </div>
                            </div>
                            <h4 className='text-lg sm:text-xl font-semibold mb-2 text-black mt-2'>{feature.title}</h4>
                            <p className='text-gray-600 text-sm'>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Features