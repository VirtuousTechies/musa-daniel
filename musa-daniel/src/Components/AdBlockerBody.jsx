import React from 'react'
import DesignProcess from './DesignProcess'
import { adBlockerGoals, adBlockerMainOne, adBlockerMainTwo, adBlockerOverview, adBlockerScreens, adHf, adTarget, dotDesign, figma } from '../Data'
import Heading from './Heading'
import { adBlockerData, targetAudience } from '../Data/demo'
import { TargetAudience } from '.'

export default function AdBlockerBody() {
  return (
    <section className='flex flex-col justify-center items-center w-full'>
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
      <section className='flex flex-col-reverse space-y-reverse space-y-10 md:space-y-0 
      md:flex-row md:justify-between mx-5 md:mx-0 mt-28 lg:mt-52 xl:mt-60 md:w-[90%] xl:w-[80%]'>
        <div className='flex flex-col space-y-5'>
          <div className='flex flex-col space-y-2'>
            <Heading text={'Product Overview'}/>
            <p className='text-center md:text-start font-three font-normal tracking-tight 
            leading-6 text-base md:text-lg md:w-[90%]'>
            {adBlockerData.productOverview}</p>
          </div>
          <div className='flex flex-col space-y-2'>
            <Heading text={'Product Statement'}/>
            <p className='text-center md:text-start font-three font-normal tracking-tight 
            leading-6 text-base md:text-lg md:w-[90%]'>
            {adBlockerData.productStatement}</p>
          </div>
        </div>
        <img src={adBlockerOverview} alt="phone-image" className='self-center w-[60%] 
        md:w-[12rem] lg:w-full' />
      </section>
      <section className='flex flex-col space-y-10 md:space-y-0 
      md:flex-row md:space-x-5 lg:space-x-20 mx-5 md:mx-0 mt-28 md:w-[90%] xl:w-[80%]'>
        <img src={adBlockerGoals} alt="phone-image" className='self-center w-auto md:w-[15rem] 
        lg:w-auto mx-10' />
       <div className='self-end flex flex-col space-y-2'>
        <Heading text={'Goals'} width={true}/>
        <ol className='list-disc mx-5 md:mx-0'>
          {adBlockerData.goals.map((item => <li key={item} className='font-three font-normal 
          tracking-tight leading-6 text-base md:text-lg lg:w-[90%]'>
          {item}</li>))}
        </ol>
       </div>
      </section>
      <DesignProcess />
      <TargetAudience ride={false} img={adTarget} data={targetAudience.adBlocker} />
      <section className='mt-20 flex flex-col space-y-10 mx-5 md:mx-0 md:w-[90%] xl:w-[80%]'>
        <Heading text={'User Research'} />
        <ol className='list-disc mx-5 md:mx-0 md:ml-5'>
          {adBlockerData.userResearch.map((item => <li key={item} className='font-three 
          font-normal tracking-tight leading-6 text-base md:text-lg lg:w-[90%]'>
          {item}</li>))}
        </ol>
      </section>
      <section className='mt-20 flex flex-col space-y-10 mx-5 md:mx-0 md:w-[90%] xl:w-[80%]'>
        <Heading text={'High Fidelity Screen'} />
        <img src={adHf} alt="cover" />
      </section>
      <section className='mt-20 flex flex-col space-y-10 mx-5 md:mx-0 md:w-[90%] xl:w-[80%]'>
        <Heading text={'Other Screens'} />
        <img src={adBlockerScreens} alt="screens" />
      </section>
    </section>
  )
}
