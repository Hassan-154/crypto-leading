import React from 'react'
import Image from 'next/image'
import Button from './Button'
import WhatWeDoData from '../constant/WhatWeDo.json'


function WhatWeDo() {
    return (
        <div className='bg-gray-100 py-[40px] md:py-[80px] px-3 sm:px-4 xl:px-0'>
            <div className='max-w-6xl mx-auto'>
                <div className='pb-1'><span>What We Do</span></div>
                <div className='flex flex-col gap-5 sm:flex-row justify-between sm:items-end'>
                    <h3 className='max-w-[420px] text-[28px] leading-[35px] sm:text-[43px] sm:leading-[49px] text-black font-semibold'>
                        We're Here to Help You<span className='text-periwinkle-blue font-roslindale italic'> Connect</span></h3>
                    <div className='flex gap-3'>
                        <Button title="Join as a Candidate" className="bg-periwinkle-blue hover:bg-periwinkle-blue-hover text-white rounded-md" />
                        <Button title="I'm a Recruiter" className="bg-slate-light hover:bg-slate-light-hover text-black rounded-md" />
                    </div>
                </div>


                <div className='flex flex-col lg:flex-row gap-10 lg:gap-5 py-[30px] md:py-[60px]'>
                    <div data-aos="fade-right" className='w-full lg:w-[45%]'>
                        {WhatWeDoData.map((item, index) => (
                            <div key={index} className={`${index !== WhatWeDoData.length - 1 ? 'pb-5' : ''} ${index !== 0 ? 'opacity-50' : ''}`}>
                                <div className='pb-2'><span className='text-gray-dark text-[15px] leading-[22px] tracking-[.3px]'>{item.label}</span></div>
                                <h3 className='text-[18px] leading-[23px] sm:text-[29px] sm:leading-[33px] text-black font-semibold pb-1.5 sm:pb-3'>{item.title}</h3>
                                <p className='max-w-[480px] text-md sm:text-lg leading-[27px] text-gray-dark'>{item.description}</p>
                                {index !== WhatWeDoData.length - 1 && <div className='border-b border-[#CAD5E2] mt-5'></div>}
                            </div>
                        ))}
                    </div>

                    <div data-aos="fade-left" className="w-full lg:w-[55%] relative">
                        <div className="relative w-full h-full min-h-full">
                            <Image
                                src="/images/Rectangle 41961.png"
                                alt="image"
                                height={800}
                                width={800}
                                className="h-full w-full object-cover rounded-[19px]"
                            />
                            <div className="absolute inset-0 flex items-center p-1.5 sm:p-2 justify-center text-white">
                                <Image
                                    src="/images/Rectangle 41962.png"
                                    alt="image"
                                    height={700}
                                    width={700}
                                    className="w-full h-full"
                                />
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default WhatWeDo