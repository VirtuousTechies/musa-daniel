import React from 'react'
import { whatIDo } from '../Data/demo'

export default function WhatIDo() {
  return (
    <section className='flex flex-col space-y-14 justify-center items-center'>
        <h2 className='font-bold text-3xl'>What i do</h2>
        <section className='grid gap-10 grid-cols-1 md:grid-cols-2 
        xl:flex xl:flex-row xl:space-x-14'>
            {whatIDo.map((item) => <div key={item.title} 
            className={`flex flex-col space-y-10 justify-center items-center
             bg-[#212121] w-[330px] h-[241px] text-[#535353] font-medium text-3xl
             border-[1px] border-solid
             ${item.title == 'Prototyping' ? 'border-black border-b-[#27AE60] border-b-[4px]'
             : 'border-transparent'}
             `}>
                <img src={item.img} alt={item.title} />
                <p className='text-center'>{item.title} <br />{item.rest}</p>
            </div>)}
        </section>
    </section>
  )
}
