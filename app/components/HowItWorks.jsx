'use client'
import React,{useState} from 'react'
import Button from './Button'
import HowItWorksData from '../constant/howItWorks.json'
import Image from 'next/image'

function HowItWorks() {

    const [select, setSelect] = useState('forCandidates');

    return (
        <div className='bg-[#E2E8F0] py-[40px] md:py-[80px] px-3 sm:px-4 xl:px-0'>
            <div className='max-w-6xl mx-auto'>
                <div className='pb-1'><span>How It Works</span></div>
                <div className='flex flex-col gap-5 sm:flex-row justify-between sm:items-end'>
                    <h3 className='max-w-[450px] text-[28px] leading-[35px] sm:text-[43px] sm:leading-[49px] text-black font-semibold'>
                        What to <span className='text-periwinkle-blue font-roslindale italic'>Expect</span> When You Join R2C</h3>
                    <div className='flex gap-3'>
                        <Button 
                            onClick={() => setSelect('forCandidates')} 
                            title="For Candidates" 
                            className={`${select === 'forCandidates' ? 'bg-periwinkle-blue hover:bg-periwinkle-blue-hover text-white' : 'bg-white hover:bg-[#F5F5F5] text-black'} rounded-full`} 
                        />
                        <Button 
                            onClick={() => setSelect('forRecruiters')} 
                            title="For Recruiters" 
                            className={`${select === 'forRecruiters' ? 'bg-periwinkle-blue hover:bg-periwinkle-blue-hover text-white' : 'bg-white hover:bg-[#F5F5F5] text-black'} rounded-full`} 
                        />
                    </div>
                </div>
                <div>
                    <div key={select} className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10'>
                        {HowItWorksData?.[select]?.map((item, index) => (
                            <div data-aos="fade-up" key={index} className='bg-white p-5 rounded-lg shadow-md relative'>
                                <Image src={item.image} alt={item.heading} className='mb-4 w-full h-[170px] object-contain z-0 relative' width={300} height={300} />
                                <div className='mb-0.5 bg-gradient-to-t from-[#ffffff] -mt-[140px] pt-[140px] z-10 relative'>
                                    <h4 className='text-md sm:text-lg font-semibold text-black'>{item.heading}</h4>
                                    <p className='lg:max-w-[220px]'>{item.paragraph}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowItWorks