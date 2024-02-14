import React from 'react'
import { works } from '../Data/demo'

export default function Works() {
  return (
    works.map((item) => <section key={item.name} className='flex flex-col space-y-5 
    md:space-y-0 md:flex-row space-x-5 
    w-[90%] mx-auto'>
        <img src={item.img} alt={item.name} className='md:w-[300px] lg:w-[549px]'/>
        <div className='flex flex-col space-y-5 justify-end'>
            <h2>{item.name}</h2>
            <p className='w-[100%]'>{item.description}</p>
            <p>{item.type}</p>
        </div>
    </section>)
  )
}
