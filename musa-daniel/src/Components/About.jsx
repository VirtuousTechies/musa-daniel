import React from 'react'
import { aboutParagraphs } from '../Data/demo'

export default function About() {
  return (
    <section className='flex flex-col space-y-8 justify-center items-center'>
        <h2 className='font-bold text-3xl'>About</h2>
        <div className='flex flex-col space-y-3 items-center md:items-start'>
            {aboutParagraphs.map((info) => <p key={info} 
            className='text-center text-lg font-extralight w-[90%] md:w-[665px] 
            lg:w-[885px] xl:w-[995px]'>{info}</p>)}
        </div>
    </section>
  )
}
