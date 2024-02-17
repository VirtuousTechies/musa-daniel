import React from 'react'
import { AdBlockerBody, NavBar } from '../Components'

export default function AdBlockerPage() {
  return (
    <section className='flex flex-col space-y-5 pb-10'>
      <NavBar />
      <AdBlockerBody />
    </section>
  )
}
