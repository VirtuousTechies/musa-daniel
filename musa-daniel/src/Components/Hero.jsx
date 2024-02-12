import React from 'react'
import { daniel } from '../Data'

export default function Hero() {
  return (
    <section className='flex flex-row md:space-x-8 lg:space-x-20 xl:space-x-52 justify-center items-center'>
        <div className='flex flex-col space-y-5'>
            <h2 className='font-bold text-2xl'>Hi, I am <br />Musa Ehrunmusele Daniel</h2>
            <p className='text-lg text-[#828282] font-medium'>UI/UX DESIGNER</p>
            <div className='flex flex-row space-x-2 text-sm font-medium'>
                <button className='bg-[#27AE60] py-2 px-3'>Download CV</button>
                <button className='border-[1px] border-solid 
                border-[#F2F2F2] py-2 px-3'>Contact me</button>
            </div>
        </div>
        <img src={daniel} alt="Musa Daniel" className='md:w-[350px] lg:w-[450px]'/>
    </section>
  )
}
