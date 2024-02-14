import React from 'react'
import { getInTouchInput } from '../Data/demo'

export default function GetInTouch() {
  return (
    <section className='flex flex-col space-y-14 justify-center items-center'>
        <h2 className='font-bold text-3xl'>Get in touch</h2>
        <form onSubmit={(e) => e.stopPropagation()} className='flex flex-col space-y-10 mx-5 md:mx-0'>
            <section className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                {getInTouchInput.map((item) => <input key={item.placeHolder} 
                type={item.type} placeholder={item.placeHolder} className='border-[1px] 
                border-solid border-transparent border-b-[#4F4F4F] pb-3 bg-transparent
                w-[330px] md:w-[358px] placeholder:text-[#4F4F4F] placeholder:font-bold 
                 focus:outline-none' />)}
            </section>
            <textarea name="message" rows='5' placeholder='Message'  className='border-[1px] 
            border-solid border-[#4F4F4F] pb-2 bg-transparent placeholder:text-[#4F4F4F] 
            placeholder:font-bold focus:outline-none px-5 py-2'></textarea>
            <button className='bg-[#27AE60] py-3 px-8 self-center font-medium 
            text-sm'>Submit now</button>
        </form>
    </section>
  )
}
