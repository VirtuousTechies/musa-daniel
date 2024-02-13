import React from 'react'
import { skills } from '../Data/demo'

export default function MySkills() {
  return (
    <section className='flex flex-col space-y-14 justify-center items-center'>
        <h2 className='font-bold text-3xl'>My Skills</h2>
        <section className='grid gap-16 md:gap-10 lg:gap-56 grid-cols-1 md:grid-cols-2 
        xl:gap-0 xl:flex xl:flex-row xl:space-x-10 justify-center items-center 
        border-[1px] border-solid border-[#333333] bg-[#212121] px-16 py-20 md:px-[8rem] 
        md:py-28 xl:w-[1168px] xl:h-[235px]'>
            {skills.map((item) => <div key={item.title} className='flex flex-col font-bold'>
                <p className='text-[#4F4F4F] text-[62px] text-center 
                leading-[68px]'>{item.percent}</p>
                <p className='text-xl text-[#27AE60] w-[200px] h-[31px] 
                text-center'>{item.title}</p>
            </div>)}
        </section>
    </section>
  )
}
