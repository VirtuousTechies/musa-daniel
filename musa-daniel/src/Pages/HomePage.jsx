import React from 'react'
import { About, Hero, Info, NavBar, WhatIDo } from '../Components'

export default function HomePage() {
  return (
    <section className='flex flex-col space-y-24 pb-10'>
      <NavBar />
      <Hero />
      <About/>
      <Info />
      <WhatIDo />
    </section>
  )
}
