import React from 'react'
import { BottomBar, Footer, GetInTouch, NavBar } from '../Components'

export default function ContactPage() {
  return (
    <section className='flex flex-col space-y-24 pb-10'>
      <NavBar />
      <GetInTouch />
      <Footer />
      <BottomBar />
    </section>
  )
}
