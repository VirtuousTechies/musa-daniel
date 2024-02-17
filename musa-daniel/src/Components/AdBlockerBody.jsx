import React from 'react'
import DesignProcess from './DesignProcess'
import { adBlockerMainOne, adBlockerMainTwo, dotDesign, figma } from '../Data'

export default function AdBlockerBody() {
  return (
    <section className='flex flex-col space-y-10 justify-center items-center w-full'>
      <section className='flex flex-row justify-between w-full px-5'>
        <div className='flex flex-col space-y-10 pt-44 pl-10'>
          <div className='flex flex-col space-y-1'>
            <h2 className='bg-gradient-to-r font-four text-4xl font-extrabold text-transparent 
            bg-clip-text to-gray-300 from-[#deb887]'>Ad Blocker</h2>
            <p className='font-four text-3xl font-extrabold text-gray-300 '>App Design</p>
          </div>
          <div className='flex flex-row space-x-8'>
            <p className='flex flex-col space-y-2 font-four font-extrabold'>
              <span className='text-base text-gray-300'>Product Designer</span>
              <span className='text-xl text-[#deb887]'>Musa Daniel</span>
            </p>
            <p className='flex flex-col space-y-2 font-four font-extrabold'>
              <span className='text-base text-gray-300'>Screens</span>
              <span className='text-xl text-[#deb887]'>9</span>
            </p>
          </div>
          <div className='rounded-full p-2 bg-[#deb887] w-max'>
            <img src={figma} alt="figma" className='mx-auto w-[30px]'/>
          </div>
          <p className='font-four font-extrabold'>Tools: <br /> Figma, Figjam, Miro, Adobe Illustrator, Adobe Photoshop</p>
        </div>
        <figure className='relative'>
          <img src={adBlockerMainOne} alt="main-one" className='md:w-[60%] lg:w-full'/>
          <img src={adBlockerMainTwo} alt="main-two" className='absolute top-32 
          left-[15.3rem] md:w-[60%] lg:w-full' />
        </figure>
        <img src={dotDesign} alt="dot-design" className='self-start' />
      </section>
      <section></section>
      <section></section>
      <DesignProcess />
      <section></section>
      <section></section>
      <section></section>
    </section>
  )
}
