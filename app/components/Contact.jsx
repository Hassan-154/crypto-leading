import React from 'react'
import Image from 'next/image'
import Form from './Form'

function Contact() {
    return (
        <div className='lg:h-[65vh] max-w-6xl mx-auto flex flex-col lg:flex-row pt-[30px] lg:pt-0 mt-[45px] sm:mt-[60px] gap-[25px] md:gap-5 bg-indigo-blue rounded-[10px] md:rounded-[15px]'>
            <div data-aos="fade-right" className="lg:w-[44%] text-white flex flex-col gap-2.5 px-4 md:p-13">
                <div><span className='text-sm'>FEATURES</span></div>
                <h3 className="lg:max-w-[400px] text-[28px] leading-[35px] sm:text-[50px] sm:leading-[55px] font-semibold">
                    Be the first to <span className='text-[#77D0FF] font-roslindale italic'>experience</span> R2C.
                </h3>
                <p className='lg:max-w-[360px]'>Get early access and insider updates as we gear up for launch.</p>
            </div>

            <div className='relative w-full lg:w-[56%] flex items-center justify-center'>
                <Image
                    src="/images/Ellipse 19.png"
                    alt="image"
                    height={700}
                    width={700}
                    className="min-w-full min-h-[58vh] sm:min-h-full lg:rounded-[15px]"
                />

                <Image
                    src="/images/Group 1321314397.png"
                    alt="image"
                    height={700}
                    width={700}
                    className="w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:ml-4"
                />

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-3 md:p-13">
                    <Form />
                </div>
            </div>
        </div>
    )
}

export default Contact