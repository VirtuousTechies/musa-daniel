import React from 'react'

export default function Heading(props) {
  return (
    <div className='flex flex-col space-y-1 justify-center items-center md:justify-normal
    md:items-start'>
        <h2 className='font-three font-bold text-3xl text-center md:text-start'>{props.text}</h2>
        <div className={`bg-[#3676E0]  h-[3px]
        ${props.width ? 'w-[50px]' : 'w-[85px]'}`}></div>
     </div>
  )
}
