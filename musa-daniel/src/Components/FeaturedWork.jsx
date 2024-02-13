import React from 'react'
import { featuredWorks } from '../Data'
import { useNavigate } from 'react-router-dom'

export default function FeaturedWork() {
    const navigate = useNavigate();

  return (
    <section className='flex flex-col space-y-14 justify-center items-center cursor-pointer'>
        <h2 className='font-bold text-3xl hover:text-[#27AE60]' 
        onClick={() => navigate('/works')}>Featured works</h2>
        <img src={featuredWorks} alt="featured-works" className='self-center w-[88%]' 
        onClick={() => navigate('/works')} />
    </section>
  )
}
