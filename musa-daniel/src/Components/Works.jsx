import React from 'react'
import { works } from '../Data/demo'
import { right } from '../Data'

export default function Works() {
  return (
    works.map((item) => <section key={item.name} className={`flex flex-col space-y-5 
    md:space-y-0 w-[90%] mx-auto md:space-x-5
    ${item.name == 'FOOD APP' ? 'md:flex-row-reverse md:space-x-reverse' : 'md:flex-row'}`}>
        <img src={item.img} alt={item.name} className='md:w-[300px] lg:w-[549px]'/>
        <div className='flex flex-col space-y-5 justify-end'>
            <h2 className='font-two'>{item.name}</h2>
            <p className='w-[100%]'>{item.description}</p>
            <p>{item.type}</p>
            {item.name == 'FOOD APP' ? <button className='self-start flex flex-row items-center 
            space-x-2 border-[1px] rounded-full border-solid border-[#E3E4E68C] px-3 py-2'>
                <p>View work</p>
                <img src={right} alt="right-icon" />
            </button> :null}
        </div>
    </section>)
  )
}
