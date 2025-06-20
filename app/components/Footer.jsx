import React from 'react'
import footerData from '../constant/Footer.json'
import navData from '../constant/navbar.json';
import Image from 'next/image'

function Footer() {
  return (
    <div className='max-w-6xl mx-auto'>
      <div className=' flex flex-col lg:flex-row gap-[25px] lg:gap-[10px] pt-[30px] sm:pt-[50px] pb-[15px] sm:pb-[30px] justify-center px-3 sm:px-4 xl:px-0'>
        <div className='w-full lg:w-[45%]'>
          <div className='flex flex-col gap-2 sm:gap-3'>
            <h2 className="text-xl sm:text-2xl font-bold text-black "><a href='#'>LOGO</a></h2>
            <p className="max-w-[350px] text-gray-600 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
            <div>
              <div className="flex gap-3 mt-2 p-2 rounded-full bg-periwinkle-blue max-w-[160px]">
                {footerData.footer.company.socialMedia.map((item, index) => (
                  <a key={index} href={item.url} target="_blank" rel="noopener noreferrer">
                    <Image src={item.icon} height="200" width="200" alt="social" className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-col sm:flex-row gap-5 sm:gap-0 w-full lg:w-[55%]'>
          <div className='w-full sm:w-1/3'>
            <h5 className='text-space-blue text-md sm:text-md font-medium mb-2 sm:mb-3'>Quicklinks</h5>
            <ul className='flex flex-col gap-0 md:gap-2'>
              {navData.menuItems.map((item, index) => (
                <li key={index}> <a

                  href={`/pages${item.link}`}
                  className=" hover:text-gray-700 block lg:inline md:px-3 py-1 md:py-2 lg:p-0 text-base lg:text-[15px] lg:font-thin"
                >
                  {item.name}
                </a></li>
              ))}
            </ul>
          </div>

          <div className='w-full sm:w-1/3'>
            <h5 className='text-space-blue text-md sm:text-md font-medium mb-2 sm:mb-3'>More</h5>
            <ul className='flex flex-col gap-0 md:gap-2'>
              {footerData.footer.more.map((item, index) => (
                <li key={index}>
                  <a

                    href={item.url}
                    className=" hover:text-gray-700 block lg:inline md:px-3 py-1 md:py-2 lg:p-0 text-base lg:text-[15px] lg:font-thin"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className='w-full sm:w-1/3'>
            <h5 className='text-space-blue text-md sm:text-md font-medium mb-2 sm:mb-3'>Connect with us</h5>
            <div className='flex flex-col gap-0 md:gap-2'>
              {footerData.footer.contact.map((item, index) => (
                <div key={index} className="flex items-center gap-2 mb-2">
                  <img src={item.icon} alt="icon" className="w-5 h-5" />
                  <span className="text-[15px]">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>


      </div>
      <div className='border-b border-[#CAD5E2] mb-4'></div>
      <div className='flex justify-center'>
        <span className='text-center pb-4'>2025 All Copy Rights Reserved</span>
      </div>
    </div>
  )
}

export default Footer