import React from 'react'
import DesignProcess from './DesignProcess'
import { adBlockerMainOne, adBlockerMainTwo, adBlockerOverview, dotDesign, figma } from '../Data'

export default function AdBlockerBody() {
  return (
    <section className='flex flex-col space-y-10 justify-center items-center w-full'>
      <section className='flex flex-col-reverse space-y-reverse space-y-10 md:space-y-0
       md:flex-row md:justify-between w-full px-5'>
        <div className='flex flex-col space-y-10 justify-center items-center md:items-start 
        md:justify-normal pt-20 lg:pt-44 md:pl-10'>
          <div className='flex flex-row space-x-5 md:space-x-0 md:flex-col md:space-y-1 
          items-center md:items-start'>
            <h2 className='bg-gradient-to-r font-four text-3xl md:text-4xl font-extrabold 
            text-transparent bg-clip-text to-gray-300 from-[#deb887]'>Ad Blocker</h2>
            <p className='mt-1 md:mt-0 font-four text-2xl md:text-3xl font-extrabold 
            text-gray-300 '>App Design</p>
          </div>
          <div className='flex flex-row justify-between w-full md:justify-normal md:w-max 
          md:space-x-8'>
            <p className='flex flex-col space-y-1 font-four font-extrabold'>
              <span className='text-base text-gray-300'>Product Designer</span>
              <span className='text-xl text-[#deb887]'>Musa Daniel</span>
            </p>
            <p className='flex flex-col space-y-1 font-four font-extrabold'>
              <span className='text-base text-gray-300'>Screens</span>
              <span className='text-xl text-[#deb887]'>9</span>
            </p>
          </div>
          <div className='rounded-full p-2 bg-[#deb887] w-max'>
            <img src={figma} alt="figma" className='mx-auto w-[30px]'/>
          </div>
          <p className='text-center md:text-start font-four font-extrabold'>Tools: <br /> 
          Figma, Figjam, Miro, Adobe Illustrator, Adobe Photoshop</p>
        </div>
        <figure className='relative'>
          <img src={adBlockerMainOne} alt="main-one" className='w-[60%] md:w-[70%] xl:w-full'/>
          <img src={adBlockerMainTwo} alt="main-two" className='absolute top-20 xl:top-32 
          left-[7.2rem] lg:left-[10.7rem] xl:left-[15.3rem] w-[60%] md:w-[70%] xl:w-full' />
        </figure>
        <img src={dotDesign} alt="dot-design" className='self-end md:self-start w-[60px] 
        md:w-auto' />
      </section>
      <section>
        <section>

        </section>
        <section></section>
        <img src={adBlockerOverview} alt="phone-image" />
      </section>
      <section></section>
      <DesignProcess />
      <section></section>
      <section></section>
      <section></section>
    </section>
  )
}