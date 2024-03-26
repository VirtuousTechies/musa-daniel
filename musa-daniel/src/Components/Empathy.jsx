import React from 'react'

export default function Empathy(props) {
  return (
    <section className='flex flex-col space-y-5'>
        <p className='font-three font-semibold text-xl'>{props.text}</p>
        <div className='grid grid-cols-2 gap-5'>
            {props.others ? props.data.map((item) => <div key={item} className={`
            w-[181.96px] rounded-md bg-[#EBF3FE] text-[#2A5CAF] 
            font-three font-medium text-[13px]
            ${props.text == 'Thinks' && props.data.indexOf(item) <= 1 ? 'h-[80.86px]'
            : ' h-[120.86px]'}  `}>
                <p className='font-three mx-2 my-3'>{item}</p>
            </div>)
            : props.data.map((item) => <div key={item} className={`h-max 
            rounded-md bg-[#EBF3FE] text-[#2A5CAF] font-three font-medium text-base
            ${props.data.indexOf(item) == 2 ? 'w-[384.81px]'
            : 'w-[181.96px] h-[150.86px]'}`}>
                <p className='font-three text-[13px] mx-2 my-3'>"{item}"</p>
            </div>)}
        </div>
    </section>
  )
}
