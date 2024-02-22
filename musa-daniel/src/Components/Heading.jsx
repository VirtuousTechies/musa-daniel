import React from 'react'

export default function Heading(props) {
  return (
    <div className='flex flex-col space-y-1 justify-center items-center md:justify-normal
     md:items-start'>
        <h2 className='font-three font-bold text-3xl'>{props.text}</h2>
        <div className='bg-[#3676E0] w-[85px] h-[3px]'></div>
     </div>
  )
}
