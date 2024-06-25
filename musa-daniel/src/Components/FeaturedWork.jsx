import React from 'react'
import { featuredWorks } from '../Data'
import { useNavigate } from 'react-router-dom'

export default function FeaturedWork() {
    const navigate = useNavigate();

  return (
    <section className='flex flex-col space-y-14 justify-center items-center cursor-pointer'>
        <h2 className='font-bold text-3xl hover:text-[#27AE60]' 
        onClick={() => navigate('/works')}>Featured works</h2>
        <figure className='relative xl:w-max mx-5 xl:mx-0 flex items-center justify-center'>
          <img src={featuredWorks} alt="featured-works" className='self-center xl:w-[88%]' 
          onClick={() => navigate('/works')} />
          <div className='absolute top-0 left-0 w-full h-full bg-[#171717] opacity-50'></div>
        </figure>
    </section>
  )
}
