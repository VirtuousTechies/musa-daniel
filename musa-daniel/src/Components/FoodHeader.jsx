import React from 'react'

export default function FoodHeader(props) {
  return (
    <div className='flex flex-row justify-between items-center w-full'>
        <p className='font-four font-extrabold text-lg'>ChowXpress</p>
        <p className='bg-gradient-to-l font-four text-2xl md:text-4xl font-extrabold 
        text-transparent bg-clip-text to-[#F9881F] from-[#ED474A]'>{props.end}</p>
    </div>
  )
}
