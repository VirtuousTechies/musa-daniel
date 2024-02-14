import React from 'react'
import { About, FeaturedWork, GetInTouch, Hero, Info, MySkills, NavBar, WhatIDo } from '../Components'
import Footer from '../Components/Footer'

export default function HomePage() {
  return (
    <section className='flex flex-col space-y-24 pb-10'>
      <NavBar />
      <Hero />
      <About/>
      <Info />
      <WhatIDo />
      <FeaturedWork />
      <MySkills />
      <GetInTouch />
      <Footer />
    </section>
  )
}
