import React from 'react'
import { navItems } from '../Data/demo'

export default function NavBar() {
  return (
    <nav className='flex flex-row items-center justify-between px-8 py-5 
    w-full cursor-pointer'>
        <h1 className='font-bold text-2xl'>Ehrunmusele</h1>
        <ul className='self-end flex flex-row space-x-10'>
            {navItems.map((items) => <li className='font-light text-sm 
            hover:text-[#27AE60]' key={items}>{items}</li>)}
        </ul>
    </nav>
  )
}
