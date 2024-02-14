import React from 'react'
import { GetInTouch, NavBar } from '../Components'

export default function ContactPage() {
  return (
    <section className='flex flex-col space-y-24 pb-10'>
      <NavBar />
      <GetInTouch />
    </section>
  )
}
