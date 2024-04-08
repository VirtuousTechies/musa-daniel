import React from 'react'

export default function Empathy(props) {
  return (
    <section className='flex flex-col space-y-5 h-max'>
        <p className='font-three font-semibold text-xl'>{props.text}</p>
        <div className={`grid grid-cols-2 gap-5 w-[300px] xl:w-[400px] 
        ${props.text == 'Does' || props.text == 'Feels' ? 'h-[250px]' : 'h-auto'}`}>
            {props.others ? props.data.map((item) => <div key={item} className={`
            rounded-md bg-[#EBF3FE] text-[#2A5CAF] 
            font-three font-medium text-[13px] col-span-1`}>
                <p className='font-three mx-2 my-3'>{item}</p>
            </div>)
            : props.data.map((item) => <div key={item} className={`h-max 
            rounded-md bg-[#EBF3FE] text-[#2A5CAF] font-three font-medium text-base
            ${props.data.indexOf(item) == 2 ? 'col-span-2'
            : 'col-span-1'}`}>
                <p className='font-three text-[13px] mx-2 my-3'>"{item}"</p>
            </div>)}
        </div>
    </section>
  )
}
