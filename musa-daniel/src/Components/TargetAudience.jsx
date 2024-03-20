import React from 'react'
import { Heading } from './'

export default function TargetAudience(props) {
  return (
    <section className='flex flex-row justify-center items-center mt-20'>
        <div className='self-center flex flex-col space-y-2 w-[50%] mt-10'>
            <Heading text={'Target Audience'}/>
            <ol className='flex flex-col list-decimal'>
                {props.data.map((item) => <li key={props.ride ? item : item[0]} className='
                w-[70%]'>
                    {props.ride ? <span className='font-three font-normal tracking-tight 
                    leading-6 text-base md:text-lg'>{item}</span> 
                    : <div>
                        <span className='font-three font-normal tracking-tight 
                        leading-6 text-base md:text-lg'>{item[0]}</span>
                        <ol className='list-disc pl-10'>
                            <li className='w-[96%] font-three font-normal tracking-tight 
                            leading-6 text-base md:text-lg'>{item[1]}</li>
                        </ol>
                    </div>} </li> 
                ) }
            </ol>
        </div>
        <img src={props.img} alt="target-audience-img" className='self-start' />
    </section>
  )
}
