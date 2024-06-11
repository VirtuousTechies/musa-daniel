import React from 'react'
import { About, BottomBar, FeaturedWork, Footer, GetInTouch, Hero, Info, MySkills, NavBar, WhatIDo } from '../Components'

export default function HomePage() {
  return (
    <section className='flex flex-col space-y-24 pb-10 relative'>
      <NavBar />
      <Hero />
      <About/>
      <Info />
      <WhatIDo />
      <FeaturedWork />
      <MySkills />
      <GetInTouch />
      <Footer />
      <BottomBar />
    </section>
  )
}
