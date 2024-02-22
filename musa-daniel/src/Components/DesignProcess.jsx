import React from 'react'
import { designProcess } from '../Data/demo'
import Heading from './Heading'

export default function DesignProcess() {
  return (
    <section className='flex flex-col space-y-20 mt-20'>
        <Heading text={'Design Process'}/>
        <section className='grid gap-10 grid-cols-2 md:grid-cols-4 lg:flex lg:flex-row lg:space-x-12 xl:space-x-20'>
            {designProcess.map((list) => <div key={list.title} className='flex flex-col 
            space-y-5 items-center'>
                <figure className='flex flex-col space-y-3'>
                    <img src={list.img} alt={list.title} className='w-[104px]'/>
                    <figcaption className='text-center font-three font-semibold text-lg'>
                    {list.title}</figcaption>
                </figure>
                <ul className='flex flex-col items-center space-y-1 pl-0'>
                    {list.description.map((item) => <li key={item} className='font-font-three 
                    text-xs font-semibold'>{item}</li>)}
                </ul>
            </div>)}
        </section>
    </section>
  )
}
