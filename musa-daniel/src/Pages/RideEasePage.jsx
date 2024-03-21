import React from 'react'
import { NavBar, RideEaseBody } from '../Components'
import Footer from '../Components/Footer'

export default function RideEasePage() {
  return (
    <section className='flex flex-col space-y-5 pb-10'>
      <NavBar />
      <RideEaseBody />
      <Footer />
    </section>
  )
}
