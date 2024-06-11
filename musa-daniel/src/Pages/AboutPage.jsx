import React from 'react'
import { About, BottomBar, Footer, Hero, NavBar } from '../Components'

export default function AboutPage() {
  React.useEffect(() => {
    window.scrollTo({top:700,left:0, behavior: "smooth"})
  })
  return (
    <section className='flex flex-col space-y-24 pb-10'>
      <NavBar />
      <Hero />
      <About/>
      <Footer />
      <BottomBar />
    </section>
  )
}
