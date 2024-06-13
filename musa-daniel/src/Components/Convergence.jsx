import React from 'react'
import FoodHeader from './FoodHeader'

export default function Convergence({data}) {
  return (
    <section className='flex flex-col space-y-20 md:items-start w-[90%] mx-5 md:mx-0 
    md:w-[80%] bg-[#17171717]'>
        <FoodHeader end={'Design process'} />
        <div className='flex flex-col-reverse space-y-reverse space-y-5 md:space-y-0 md:flex-row 
        md:justify-between w-full'>
            <div className='flex flex-col self-start space-y-5 w-full'>
                <h2 className='bg-gradient-to-l font-four text-3xl md:text-4xl font-extrabold 
                text-transparent bg-clip-text to-[#F9881F] from-[#ED474A] mb-5'>Convergence</h2>
                <div className='flex flex-col space-y-5 md:space-y-10 lg:flex-row lg:justify-between 
                xl:w-full md:items-center mx-5 md:mx-0'>
                    <div className='flex flex-col space-y-5'>
                        <div className='flex flex-col space-y-3'>
                            <p className='font-four font-bold text-white 
                            text-base mb-2'>User personas</p>
                            <figure className='flex flex-col space-y-5 md:space-y-0 md:flex-row 
                            md:space-x-8 items-center'>
                                <img src={data.img} alt={data.name} className='w-[149px] 
                                rounded-md' />
                                <div className='flex flex-col space-y-3'>
                                    <p className='font-four font-extralight text-white text-base flex flex-row'>
                                        <span className='font-bold w-[7rem] block'>Name:</span> 
                                        <span>{data.name}</span>
                                    </p>
                                    <p className='font-four font-extralight text-white text-base flex flex-row'>
                                        <span className='font-bold w-[7rem] block'>Age-range:</span> 
                                        <span>{data.age}</span>
                                    </p>
                                    <p className='font-four font-extralight text-white text-base flex flex-row'>
                                        <span className='font-bold w-[7rem] block'>Occupation:</span> 
                                        <span>{data.occupation}</span>
                                    </p>
                                </div>
                            </figure>
                            <p className='font-four font-bold text-white md:w-[23.4rem] tracking-[0.012rem]
                            text-base mb-2 leading-[1.7rem] italic'>{data.des}</p>
                        </div>
                        <div className='flex flex-col p-5 bg-[#03071E] rounded-md shadow-md'>
                            <p className='font-four font-bold text-white 
                            text-base mb-2'>Bio</p>
                            <p className='font-four font-extralight text-white text-base md:w-[20rem] 
                            lg:w-[22.5rem]'>{data.bio}</p>
                        </div>
                    </div>

                    <div className='flex flex-col self-start space-y-5'>
                        <div className='flex flex-col space-y-3'>
                            <p className='font-four font-bold text-[#32D583]
                            text-2xl mb-2'>User’s Goals</p>
                            <ul className='font-four font-normal text-lg text-white list-disc pl-10'>
                                {data.goals.map((list => <li key={list} className='md:w-[20rem]'>{list}</li>))}
                            </ul>
                        </div>
                        <div className='flex flex-col space-y-3'>
                            <p className='font-four font-bold text-[#ED474A]
                            text-2xl mb-2'>User’s Frustrations</p>
                            <ul className='font-four font-normal text-lg text-white list-disc pl-10'>
                                {data.frustration.map((list => <li key={list} className='md:w-[22.5rem]'>{list}</li>))}
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>   
  )
}
