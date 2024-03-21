import React from 'react'
import { dotDesign, rideCursor, rideGoal, rideMainOne, rideMainTwo, rideOne, rideTarget, underline } from '../Data'
import DesignProcess from './DesignProcess'
import { Heading, TargetAudience } from '.'
import { rideEaseData, targetAudience } from '../Data/demo'

export default function RideEaseBody() {
  return (
    <section className='flex flex-col justify-center items-center w-full'>
        <section className='flex flex-col-reverse space-y-reverse space-y-10 md:space-y-0
        md:flex-row md:justify-between w-full px-5'>
            <div className='relative flex flex-col space-y-8 mx-auto md:mx-0 pt-20 lg:pt-44 
            md:pl-10'>
                <div className='flex flex-col space-y-2'>
                    <h2 className='font-five font-bold text-2xl md:text-xl lg:text-4xl'>
                    RideEase</h2>
                    <p className='font-three text-lg md:text-sm lg:text-2xl font-medium'>
                    A Ride-Sharing App</p>
                </div>
                <div className='flex flex-row lg:space-x-5 space-x-3'>
                    <div className='flex flex-col space-y-2'>
                        <p className='text-[#3676E0] font-three font-bold text-2xl md:text-xl 
                        lg:text-4xl'>Case Study</p>
                        <img src={underline} alt="underline" className='w-[12rem] lg:w-[13rem]'/>
                    </div>
                    <img src={rideCursor} alt="cursor" className='self-end w-[10.5rem] 
                    md:w-[9rem] lg:w-[12rem] xl:w-auto'/>
                </div>
            </div>
            <figure className='relative md:ml-5 lg:ml-0 xl:-ml-44'>
            <img src={rideMainOne} alt="main-one" className='w-[60%] md:w-[60%] xl:w-full'/>
            <img src={rideMainTwo} alt="main-two" className='absolute top-20 xl:top-32 
            left-[7.2rem] lg:left-[10.7rem] xl:left-[15.3rem] w-[60%] md:w-[60%] xl:w-full' />
            </figure>
            <img src={dotDesign} alt="dot-design" className='self-end md:self-start w-[60px] 
            lg:w-auto' />
    </section>
    <section className='flex flex-col-reverse space-y-reverse space-y-10 md:space-y-0 
      md:flex-row md:justify-between mx-5 md:mx-0 mt-28 lg:mt-52 xl:mt-60 md:w-[90%] xl:w-[80%]'>
        <div className='flex flex-col space-y-5'>
          <div className='flex flex-col space-y-2'>
            <Heading text={'Product Overview'}/>
            <p className='text-center md:text-start font-three font-normal tracking-tight 
            leading-6 text-base md:text-lg md:w-[90%]'>
            {rideEaseData.productOverview}</p>
          </div>
          <div className='flex flex-col'>
            <Heading text={'Product Objectives'}/>
            <p className='text-center md:text-start font-three font-normal tracking-tight 
            leading-6 text-base md:text-lg md:w-[92%]'>{rideEaseData.productObjective.text}</p>
            <ol className='list-disc mx-5 md:mx-0 md:ml-8 mt-8'>
                {rideEaseData.productObjective.list.map((info => <li key={info} className='
                font-three font-normal tracking-tight leading-6 text-base md:text-lg lg:w-[90%]'>
                {info}</li>))}
            </ol>
          </div>
        </div>
        <img src={rideOne} alt="phone-image" className='self-center w-[60%] 
        md:w-[12rem] lg:w-full' />
    </section>
    <section className='flex flex-col space-y-10 md:space-y-0 md:flex-row md:justify-between 
    mx-5 md:mx-0 mt-20 md:w-[90%] xl:w-[80%]'>
        <img src={rideGoal} alt="phone-image" className='self-center w-[60%] 
        md:w-[12rem] lg:w-[20rem]' />
        <div className='flex flex-col space-y-5 w-[50%]'>
          <div className='flex flex-col space-y-2'>
            <Heading text={'Product Statement'}/>
            <p className='text-center md:text-start font-three font-normal tracking-tight 
            leading-6 text-base md:text-lg md:w-[88%]'>
            {rideEaseData.productStatement}</p>
          </div>
          <div className='flex flex-col space-y-2'>
            <Heading text={'Goals'} width={true}/>
            <p className='text-center md:text-start font-three font-normal tracking-tight 
            leading-6 text-base md:text-lg md:w-[98%]'>
            {rideEaseData.goals}</p>
          </div>
        </div>
    </section>
    <DesignProcess />
    <TargetAudience ride={true} img={rideTarget} data={targetAudience.rideEase} />
    <section></section>
    <section></section>
  </section>
  )
}
