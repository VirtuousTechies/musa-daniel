import React from 'react'
import { GetInTouch, NavBar } from '../Components'
import Footer from '../Components/Footer'

export default function ContactPage() {
  return (
    <section className='flex flex-col space-y-24 pb-10'>
      <NavBar />
      <GetInTouch />
      <Footer />
    </section>
  )
}
