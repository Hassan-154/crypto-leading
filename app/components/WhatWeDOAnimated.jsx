import "../style/howItwork.css";
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import WhatWeDoData from '../constant/WhatWeDo.json'
import Button from './Button'
import Image from 'next/image'

function HowItwork() {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const initScroll = () => {
      gsap.registerPlugin(ScrollTrigger);

      ScrollTrigger.create({
        trigger: ".section_tabs",
        start: "top top",
        end: "+=300%",
        pin: true,
        pinSpacing: true,
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          const totalSections = WhatWeDoData[0].content.length;
          const currentIndex = Math.min(Math.floor(progress * totalSections), totalSections - 1);
          setActiveIndex(currentIndex);
        }
      });
    };

    const timeoutId = setTimeout(initScroll, 100);

    return () => {
      clearTimeout(timeoutId);
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <section className="section_tabs bg-gray-100" style={{ zIndex: 2 }} ref={sectionRef}>
      <div className="tabs_height">
        <div className="tabs_sticky-wrapper h-[100vh]">
          <div className='bg-gray-100 pt-[70px] px-3 sm:px-4 xl:px-0'>
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

              <div className='flex flex-col md:flex-row gap-4 md:gap-10 lg:gap-5 py-[40px] md:py-[40px]'>
                <div className='w-full lg:w-[45%]'>
                  {WhatWeDoData[0].content.map((item, index) => (
                    <div
                      key={index}
                      className={`${index !== WhatWeDoData[0].content.length - 1 ? 'pb-3 lg:pb-5' : ''} transition-opacity duration-300 ${index !== activeIndex ? 'hidden md:block' : ''}`}
                      style={{ opacity: index === activeIndex ? 1 : 0.5 }}
                    >
                      <div className='pb-1 lg:pb-2'><span className='text-gray-dark text-[15px] leading-[22px] tracking-[.3px]'>{item.label}</span></div>
                      <h3 className='text-[18px] leading-[23px] md:text-[24px] md:leading-[28px] lg:text-[29px] lg:leading-[33px] text-black font-semibold pb-1.5 lg:pb-3'>{item.title}</h3>
                      <p className='max-w-[430px] lg:max-w-[480px] text-md lg:text-lg leading-[27px] text-gray-dark'>{item.description}</p>
                      {index !== WhatWeDoData[0].content.length - 1 && <div className='border-b border-[#CAD5E2] mt-3 lg:mt-5'></div>}
                    </div>
                  ))}
                </div>

                <div className="w-full lg:w-[55%] relative">
                  <div key={activeIndex} className="relative w-full h-full min-h-full">
                    <div data-aos="fade-up" className="w-full h-full">
                      <Image
                        src="/images/Rectangle 41961.png"
                        alt="image"
                        height={700}
                        width={700}
                        className="h-full min-h-[330px] max-h-[330px] sm:min-h-[350px] sm:max-h-[350px]  md:max-h-[410px] md:min-h-[410px] lg:min-h-[470px] rounded-[20px] w-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center p-1.5 sm:p-2 justify-center text-white">
                        {WhatWeDoData[0].images.map((image, index) => (
                          <div
                            key={index}
                            className="tabs_image w-full h-full min-h-full min-w-fill"
                            style={{
                              opacity: index === activeIndex ? 1 : 0,
                              position: 'absolute',
                              transition: 'opacity 0.3s ease'
                            }}
                          >
                            <Image
                              src={image.image}
                              alt={`Section ${index + 1}`}
                              height={700}
                              width={700}
                              className="h-full min-h-[330px] max-h-[330px] sm:min-h-[350px] sm:max-h-[350px] md:max-h-[410px] md:min-h-[410px] lg:min-h-[470px] rounded-[20px] w-full  p-2"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItwork;