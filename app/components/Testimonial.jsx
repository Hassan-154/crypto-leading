'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import Image from 'next/image'
import RatingStarts from './RatingStars';
import TestimonialData from '../constant/Testimonial.json'

export default () => {
    // Split testimonials into two arrays
    const totalTestimonials = TestimonialData.length;
    const firstSliderTestimonials = TestimonialData.slice(0, Math.ceil(totalTestimonials / 2));
    const secondSliderTestimonials = TestimonialData.slice(Math.ceil(totalTestimonials / 2));

    return (
        <>
            <div className='text-center py-[35px] px-3 sm:px-4 xl:px-0'>
                <div className='pb-1'><span>Testimonials</span></div>
                <h3 className='max-w-[700px] mx-auto text-[26px] leading-[33px] sm:text-[43px] sm:leading-[49px] text-black font-semibold'>
                    Trusted by<span className='text-periwinkle-blue font-roslindale italic'> Finance </span>Professionals and Recruiters</h3>
            </div>
            <Swiper
                modules={[Autoplay]}
                spaceBetween={13}
                slidesPerView={3.5}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    // When screen width >= 640px (sm)
                    0: {
                        slidesPerView: 1.4, // 1 full + 0.5 peek
                        spaceBetween: 10,
                        slidesOffsetBefore: 15,
                    },
                    640: {
                        slidesPerView: 2.3, // 2 full + 0.3 peek
                        spaceBetween: 15,
                        slidesOffsetBefore: 20,
                    },
                    // When screen width >= 1024px (lg)
                    1024: {
                        slidesPerView: 3.5, // 3 full + 0.5 peek
                        spaceBetween: 20,
                        slidesOffsetBefore: 25,
                    },
                }}
                speed={800}
                loop={true}
            >
                {firstSliderTestimonials.map((testimonial, index) => (
                    <SwiperSlide key={index} className="border border-[#CAD5E2] rounded-[8px] sm:rounded-[12px] p-4 sm:p-6">
                        <div className='flex justify-between items-center'>
                            <div><RatingStarts rating={testimonial.stars} /></div>
                            <Image src="/images/fi_281764.svg" alt='image' height="100" width="100" className="h-5 w-auto" />
                        </div>
                        <p className='mt-4'>{testimonial.description}</p>
                        <div className='flex items-center gap-2.5 mt-5'>
                            <Image src={testimonial.profileImage} alt='image' height="100" width="100" className="w-auto min-h-[45px] max-h-[45px]" />
                            <div>
                                <h5 className='text-black text-md leading-none pt-1.5'>{testimonial.heading}</h5>
                                <span className='text-[14.5px] leading-none'>{testimonial.profession}</span>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <Swiper
                modules={[Autoplay]}
                spaceBetween={13}
                slidesPerView={3.5}
                slidesOffsetBefore={150}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    reverseDirection: true,
                }}
                breakpoints={{
                    // When screen width >= 640px (sm)
                    0: {
                        slidesPerView: 1.4, // 1 full + 0.5 peek
                        spaceBetween: 10,
                        slidesOffsetBefore: -250,
                    },
                    640: {
                        slidesPerView: 2.3, // 2 full + 0.3 peek
                        spaceBetween: 15,
                        slidesOffsetBefore: -315,
                    },
                    // When screen width >= 1024px (lg)
                    1024: {
                        slidesPerView: 3.5, // 3 full + 0.5 peek
                        spaceBetween: 20,
                        slidesOffsetBefore: -240,
                    },
                }}
                speed={800}
                loop={true}
            >
                {secondSliderTestimonials.map((testimonial, index) => (
                    <SwiperSlide key={index} className="mt-4 border border-[#CAD5E2] rounded-[8px] sm:rounded-[12px] p-4 sm:p-6">
                        <div className='flex justify-between items-center'>
                            <div><RatingStarts rating={testimonial.stars} /></div>
                            <Image src="/images/fi_281764.svg" alt='image' height="100" width="100" className="h-5 w-auto" />
                        </div>
                        <p className='mt-4'>{testimonial.description}</p>
                        <div className='flex items-center gap-2.5 mt-5'>
                            <Image src={testimonial.profileImage} alt='image' height="100" width="100" className="w-auto min-h-[45px] max-h-[45px]" />
                            <div>
                                <h5 className='text-black text-md leading-none pt-1.5'>{testimonial.heading}</h5>
                                <span className='text-[14.5px] leading-none'>{testimonial.profession}</span>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};