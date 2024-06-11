import React from 'react'
import { About, Hero, NavBar } from '../Components'
import Footer from '../Components/Footer'
import { useNavigate } from 'react-router-dom'

export default function AboutPage() {
  const navigate = useNavigate()
  React.useEffect(() => {
    window.scrollTo({top:700,left:0, behavior: "smooth"})
  })
  return (
    <section className='flex flex-col space-y-24 pb-10'>
      <NavBar />
      <Hero />
      <About/>
      <Footer />
    </section>
  )
}
