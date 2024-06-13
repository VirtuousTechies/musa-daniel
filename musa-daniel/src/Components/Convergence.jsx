import React from 'react'
import FoodHeader from './FoodHeader'

export default function Convergence() {
  return (
    <section className='flex flex-col space-y-20 md:items-start w-[90%] mx-5 md:mx-0 
    md:w-[80%] bg-[#17171717]'>
        <FoodHeader end={'Design process'} />
        <div className='flex flex-col-reverse space-y-reverse space-y-5 md:space-y-0 md:flex-row 
        md:justify-between w-full'>
            <div className='flex flex-col self-start'>
                <h2 className='bg-gradient-to-l font-four text-3xl md:text-4xl font-extrabold 
                text-transparent bg-clip-text to-[#F9881F] from-[#ED474A] mb-5'>Convergence</h2>
            </div>
        </div>
    </section>   
  )
}
