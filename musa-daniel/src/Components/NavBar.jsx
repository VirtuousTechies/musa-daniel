import React from 'react'
import { navItems } from '../Data/demo'
import { close, open } from '../Data'
import { useNavigate } from 'react-router-dom';

export default function NavBar() {
  const [active, setActive] = React.useState(false);
  const navigate = useNavigate()

  return (
    <nav className='relative flex flex-row items-center justify-between px-8 py-5 
    w-full cursor-pointer'>
        <h1 className='font-bold text-2xl' onClick={() => navigate('/')}>Ehrunmusele</h1>
        <img src={active ? close : open } onClick={() => setActive(prev => !prev)} 
        className={`${active ? 'w-[25px]' : 'w-[35px]'} md:hidden`} />
        <ul className={`self-end absolute top-20 left-0 flex-col space-y-10 
        bg-[#212121] w-full py-10 md:py-0 bg-opacity-90 md:bg-transparent 
        md:w-max md:space-y-0 md:static md:flex md:flex-row md:space-x-10
        ${active ? 'flex' : 'hidden'}
        `}>
            {navItems.map((items) => <li className='font-normal text-sm text-center md:text-start
            hover:text-[#27AE60]' key={items} onClick={() => items == 'About me' ? navigate('/about')
            : items == 'Works' ? navigate('/works')
            :navigate('/contact')}>{items}</li>)}
        </ul>
    </nav>
  )
}
