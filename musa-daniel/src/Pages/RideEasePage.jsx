import React from 'react'
import { BottomBar, Footer, NavBar, RideEaseBody } from '../Components'

export default function RideEasePage() {
  return (
    <section className='flex flex-col space-y-5 pb-10'>
      <NavBar />
      <RideEaseBody />
      <Footer />
      <BottomBar />
    </section>
  )
}
