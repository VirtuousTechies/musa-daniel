import React from 'react'

export default function FoodHeader(props) {
  return (
    <div className='flex flex-row justify-between items-center md:w-[90%] w-[80%]'>
        <p className='font-four font-extrabold text-lg'>ChowXpress</p>
        <p className='bg-gradient-to-l font-four text-3xl md:text-4xl font-extrabold 
        text-transparent bg-clip-text to-[#F9881F] from-[#ED474A]'>{props.end}</p>
    </div>
  )
}
