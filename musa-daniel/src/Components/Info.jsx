import React from 'react'
import { info } from '../Data/demo'

export default function Info() {
  return (
    <section className='flex flex-row justify-center items-center space-x-10 mt-12'>
        {info.map((info) => <div key={info.title} className='flex flex-col space-y-8 
        items-center'>
            <div className='bg-[#212121] rounded-full w-[62px] h-[62px] flex 
            items-center justify-center'>
                <div className='bg-[#27AE60] rounded-full w-[12px] h-[12px] mx-auto'></div>
            </div>
            <div className='text-lg font-normal flex flex-col space-y-1 text-center'>
                <p className='font-bold'>{info.title}</p>
                <p>{info.answer}</p>
            </div>
        </div>)}
    </section>
  )
}
