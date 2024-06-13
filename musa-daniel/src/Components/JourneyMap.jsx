import React from 'react'
import FoodHeader from './FoodHeader'

export default function JourneyMap({data}) {
  return (
    <section className='flex flex-col space-y-20 md:items-start w-[90%] mx-5 md:mx-0 
    md:w-[80%] bg-[rgba(23,23,23,0.09)]'>
        <FoodHeader  />
        <div className='flex flex-col-reverse space-y-reverse space-y-5 md:space-y-0 md:flex-row 
        md:justify-between w-full'>
            <div className='flex flex-col self-start w-full'>
                <h2 className='bg-gradient-to-l font-four text-3xl md:text-4xl font-extrabold 
                text-transparent bg-clip-text to-[#F9881F] from-[#ED474A] mb-8'>User’s journeymap</h2>
                <div className='flex flex-col space-y-1'>
                    <p className='font-four font-normal text-white text-base flex flex-row'>
                        <span className='font-bold w-[7rem] block'>Name:</span> 
                        <span>{data.name}</span>
                    </p>
                    <p className='font-four font-normal text-white text-base flex flex-row'>
                        <span className='font-bold w-[7rem] block'>Goal:</span> 
                        <span>{data.goal}</span>
                    </p>
                </div>
                <div className='flex flex-col space-y-5 w-full px-5 md:px-0 mt-20'>
                    <div className='grid grid-cols-5 gap-5'>
                        <h2 className='bg-[#03071E] text-base py-3 font-medium text-white rounded-md 
                        text-center font-four'>Action</h2>
                        {data.action.map((item => <p key={item} className='text-xs text-[#ED474A] 
                        border-solid border-[1px] border-[#ED474A] text-center font-medium 
                        rounded-md font-four py-3 leading-6'>
                        {item}</p>))}
                    </div>
                    <div className='grid grid-cols-5 gap-5' >
                        <h2 className='bg-[#03071E] text-base py-3 font-medium text-white rounded-md 
                        text-center font-four'>Task</h2>
                        {data.task.map((item => <ul key={item.id} className='flex flex-col space-y-2 
                        list-disc text-white border-solid border-[1px] border-white py-3 
                        rounded-md pl-8 pr-5'>
                        {item.text.map((list =>  <li key={list} className='text-xs font-medium
                        font-four leading-6'>{list}</li>))}
                        </ul>))}
                    </div>
                    <div className='grid grid-cols-5 gap-5'>
                        <h2 className='bg-[#03071E] text-base py-3 font-medium text-white rounded-md 
                        text-center font-four'>Opportunities</h2>
                        {data.opportunities.map((item => <ul key={item.id} className='flex flex-col 
                        space-y-2 list-disc text-white border-solid border-[1px] border-white py-3 
                        rounded-md pl-8 pr-5'>
                        {item.text.map((list =>  <li key={list} className='text-xs font-medium
                        font-four leading-6'>{list}</li>))}
                        </ul>))}
                    </div>
                </div>
            </div>
        </div>
    </section> 
  )
}
