import React from 'react'
import { dotDesign, rideCursor, rideMainOne, rideMainTwo, underline } from '../Data'
import DesignProcess from './DesignProcess'

export default function RideEaseBody() {
  return (
    <section className='flex flex-col space-y-10 justify-center items-center w-full'>
        <section className='flex flex-col-reverse space-y-reverse space-y-10 md:space-y-0
        md:flex-row md:justify-between w-full px-5'>
            <div className='relative flex flex-col space-y-8 pt-20 lg:pt-44 md:pl-10 h-max'>
                <div className='flex flex-col space-y-2'>
                    <h2 className='font-five font-bold text-3xl md:text-2xl lg:text-4xl'>
                    RideEase</h2>
                    <p className='font-three text-xl md:text-sm lg:text-2xl font-medium'>
                    A Ride-Sharing App</p>
                </div>
                <div className='flex flex-col sapce-y-2'>
                    <p className='text-[#3676E0] font-three font-bold text-3xl md:text-2xl 
                    lg:text-4xl'>Case Study</p>
                    <img src={underline} alt="underline" className='w-[12rem] lg:w-[13rem]'/>
                </div>
                <img src={rideCursor} alt="cursor" className='absolute left-44 md:left-[11.5rem]
                 w-[10.5rem] -bottom-5 lg:w-[12rem] lg:left-[16rem] xl::left-[20rem]'/>
            </div>
            <figure className='relative md:ml-40 xl:ml-0'>
            <img src={rideMainOne} alt="main-one" className='w-[60%] md:w-[60%] xl:w-full'/>
            <img src={rideMainTwo} alt="main-two" className='absolute top-20 xl:top-32 
            left-[7.2rem] lg:left-[10.7rem] xl:left-[15.3rem] w-[60%] md:w-[60%] xl:w-full' />
            </figure>
            <img src={dotDesign} alt="dot-design" className='self-end md:self-start w-[60px] 
            lg:w-auto' />
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
