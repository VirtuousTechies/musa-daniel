import React from 'react'
import { works } from '../Data/demo'
import { right } from '../Data'

export default function Works() {
  return (
    works.map((item) => <section key={item.name} className={`flex flex-col space-y-5 
    md:space-y-0 w-[90%] xl:w-[80%] mx-auto md:space-x-8
    ${item.name == 'FOOD APP' ? 'md:flex-row-reverse md:space-x-reverse' : 'md:flex-row'}`}>
        <img src={item.img} alt={item.name} className='md:w-[300px] lg:w-[450px] 
        xl:w-[549px]'/>
        <div className='flex flex-col space-y-5 md:justify-end'>
            <h2 className='font-two font-semibold text-sm tracking-wider'>{item.name}</h2>
            <p className={`w-[100%] ${item.name == 'FOOD APP' ? 'font-light font-four text-lg' 
            : 'font-medium font-three text-[#5E6B81] text-xl'}
            `}>{item.description}</p>
            <p className='font-two text-[#E3E4E6] text-base font-light'>{item.type}</p>
            {item.name == 'FOOD APP' ? <button className='self-start flex flex-row items-center 
            space-x-2 border-[1px] rounded-full border-solid border-[#E3E4E68C] px-3 py-2'>
                <p className='text-[#E3E4E6] font-two font-normal text-sm uppercase'>
                View work</p>
                <img src={right} alt="right-icon" className='w-[20px]' />
            </button> :null}
        </div>
    </section>)
  )
}
