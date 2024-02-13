import React from 'react'
import { skills } from '../Data/demo'

export default function MySkills() {
  return (
    <section className='flex flex-col space-y-14 justify-center items-center'>
        <h2 className='font-bold text-3xl'>My Skills</h2>
        <section className='flex flex-row space-x-10 justify-center items-center 
        border-[1px] border-solid border-[#333333] bg-[#212121] w-[1168px] h-[235px]'>
            {skills.map((item) => <div key={item.title} className='font-bold'>
                <p className='text-[#4F4F4F] text-[62px] text-center 
                leading-[68px]'>{item.percent}</p>
                <p className='text-xl text-[#27AE60] w-[200px] h-[31px] 
                text-center'>{item.title}</p>
            </div>)}
        </section>
    </section>
  )
}
