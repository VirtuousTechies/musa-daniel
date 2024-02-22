import React from 'react'

export default function Heading(props) {
  return (
    <div className='flex flex-col space-y-1'>
        <h2 className='font-three font-bold text-3xl'>{props.text}</h2>
        <div className='bg-[#3676E0] w-[85px] h-[3px]'></div>
     </div>
  )
}
