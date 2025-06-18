import React from 'react'
import Button from './Button'
import Image from 'next/image'

function Home() {
    return (
        <div className='lg:h-[90vh] pb-[15px] lg:pb-0 max-w-6xl mx-auto flex flex-col lg:flex-row lg:gap-[10px] items-center justify-center px-3 sm:px-4 xl:px-0'>
            <div data-aos="fade-right" className='w-2/2 lg:w-1/2 flex flex-col gap-[20px]'>
                <h1 className='text-[37.8px] leading-[45px] sm:text-[54px] sm:leading-[60.3px] text-black font-medium'>Crypto's Leading <br></br> <span className='text-periwinkle-blue font-roslindale italic'>
                Accounting</span> & Tax Firm</h1>
                <p className='max-w-[440px]'>Our elite tax specialists are ready to help you confidently navigate the complexities of your crypto taxes with expert guidance.</p>
                <div className='flex gap-3'>
                    <Button title="Book Consultation" className="bg-periwinkle-blue hover:bg-periwinkle-blue-hover text-white rounded-md" />
                    <Button title="Contact Us" className="bg-slate-light hover:bg-slate-light-hover text-black rounded-md" />
                </div>
                <div className='border-b border-[#CAD5E2]'></div>
                <div className='flex gap-10'>
                    <div><span>Successful Reviews</span><h5 className='text-[34px] font-semibold text-space-blue'>510+</h5></div>
                    <div><span>Clients Satisfaction</span><h5 className='text-[34px] font-semibold text-space-blue'>97%</h5></div>
                </div>
            </div>
            <div data-aos="fade-left" className='w-2/2 lg:w-1/2 p-4'>
                <div className="relative h-[380px] sm:h-[600px] w-auto overflow-hidden">
                    <Image src="/images/home-back.svg" alt='image' height="300" width="300" className="absolute top-0 left-1/2 transform -translate-x-1/2 w-auto sm:h-[560px] object-cover" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Image src="/assets/0_HQnsVZ29Z-OBkzNa.gif" alt='image' height="700" width="700" className="min-w-[350px] sm:min-w-[570px] h-auto" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home