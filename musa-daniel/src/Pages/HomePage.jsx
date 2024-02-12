import React from 'react'
import { About, Hero, Info, NavBar } from '../Components'

export default function HomePage() {
  return (
    <section className='flex flex-col space-y-24'>
      <NavBar />
      <Hero />
      <About/>
      <Info />
    </section>
  )
}
