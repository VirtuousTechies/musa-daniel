import React from 'react'
import { About, Hero, NavBar } from '../Components'

export default function AboutPage() {
  return (
    <section className='flex flex-col space-y-24 pb-10'>
      <NavBar />
      <Hero />
      <About/>
    </section>
  )
}
