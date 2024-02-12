import React from 'react'
import { Hero, NavBar } from '../Components'

export default function HomePage() {
  return (
    <section className='flex flex-col space-y-10'>
      <NavBar />
      <Hero />
    </section>
  )
}
