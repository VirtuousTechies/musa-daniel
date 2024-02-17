import React from 'react'
import { FoodAppBody, NavBar } from '../Components'

export default function FoodAppPage() {
  return (
    <section className='flex flex-col space-y-0'>
      <NavBar />
      <FoodAppBody />
    </section>
  )
}
