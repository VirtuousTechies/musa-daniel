import React from 'react'
import { AdBlockerBody, NavBar } from '../Components'
import Footer from '../Components/Footer'

export default function AdBlockerPage() {
  return (
    <section className='flex flex-col space-y-5 pb-10'>
      <NavBar />
      <AdBlockerBody />
      <Footer />
    </section>
  )
}
