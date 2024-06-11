import React from 'react'
import { BottomBar, Footer, NavBar, Works } from '../Components'

export default function WorkPage() {
  return (
    <section className='flex flex-col space-y-24 pb-10'>
      <NavBar />
      <Works />
      <Footer />
      <BottomBar />
    </section>
  )
}
