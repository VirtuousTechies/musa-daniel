import React from 'react'
import { NavBar, Works } from '../Components'
import Footer from '../Components/Footer'

export default function WorkPage() {
  return (
    <section className='flex flex-col space-y-24 pb-10'>
      <NavBar />
      <Works />
      <Footer />
    </section>
  )
}
