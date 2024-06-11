import React from 'react'
import { BottomBar, FoodAppBody, Footer, NavBar } from '../Components'

export default function FoodAppPage() {
  return (
    <section className='flex flex-col space-y-0'>
      <NavBar />
      <FoodAppBody />
      <Footer />
      <BottomBar />
    </section>
  )
}
