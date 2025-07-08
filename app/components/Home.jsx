import React from 'react'
import Button from './Button'
import Image from 'next/image'

function Home() {
    return (
        <div className='lg:h-[90vh] pt-[15px] sm:lg:pt-0 pb-[15px] lg:pb-0 max-w-6xl mx-auto flex flex-col lg:flex-row lg:gap-[10px] items-center justify-center px-3 sm:px-4 xl:px-0'>
            <div data-aos="fade-right" className='w-2/2 lg:w-[55%] flex flex-col gap-[20px]'>
                <h1 className='text-[37.8px] leading-[45px] sm:text-[59.4px] sm:leading-[66.33px] text-black font-bold'>Crypto's Leading <br></br> <span className='text-periwinkle-blue font-roslindale italic'>
                    Accounting</span> & <span className='text-periwinkle-blue font-roslindale italic'>Tax</span> Firm</h1>
                <p className='max-w-[440px]'>Our elite tax specialists are ready to help you confidently navigate the complexities of your crypto taxes with expert guidance.</p>
                <div className='flex gap-3'>
                    <Button title="Book Consultation" className="bg-periwinkle-blue hover:bg-periwinkle-blue-hover text-white rounded-md" />
                    <Button title="Contact Us" className="bg-slate-light hover:bg-slate-light-hover text-black rounded-md" />
                </div>
                <div className='border-b border-[#CAD5E2]'></div>
                <div className='flex gap-10'>
                    <div><span>Satisfied Clients</span><h5 className='text-[34px] font-semibold text-space-blue'>500+</h5></div>
                    <div><span>Retention Rate</span><h5 className='text-[34px] font-semibold text-space-blue'>95%</h5></div>
                </div>
            </div>
            <div data-aos="fade-left" className='w-2/2 lg:w-[45%] p-4'>
                <Image src="/assets/0_HQnsVZ29Z-OBkzNa.gif" alt='image' height="700" width="700" className="sm:min-w-[380px] md:min-w-[570px] h-auto" />
            </div>
        </div>
    )
}

export default Home