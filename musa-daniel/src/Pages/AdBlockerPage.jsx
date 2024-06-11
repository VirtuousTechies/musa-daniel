import React from 'react'
import { AdBlockerBody, BottomBar, Footer, NavBar } from '../Components'

export default function AdBlockerPage() {
  return (
    <section className='flex flex-col space-y-5 pb-10'>
      <NavBar />
      <AdBlockerBody />
      <Footer />
      <BottomBar />
    </section>
  )
}
