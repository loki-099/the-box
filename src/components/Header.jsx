import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/navlink.css'
import SlideMenu from './SlideMenu';

const Header = () => {
  const [isOpen, setOpen] = useState(false)

  const showMenu = () => {
    setOpen(true)
    console.log('hell');
  }

  const hideMenu = () => {
    setOpen(false)
  }

  return (
    <div className='flex items-center justify-between'>
      <a href=""><img src="/assets/logo.svg" alt="" className='md:ml-2 w-[48px] md:w-[55px] lg:w-[70px]'/></a>
      <nav className='hidden md:block'>
        <ul className='flex items-center gap-4'>
          <NavLink to="/" className='uppercase font-bold text-2xl py-2 px-4 hover:bg-black hover:text-white transition-all ease-out duration-150'>Home</NavLink>
          <NavLink to="/about" className='uppercase font-bold text-2xl py-2 px-4 hover:bg-black hover:text-white transition-all ease-out duration-150'>About</NavLink>
          <NavLink to="/blogs" className='uppercase font-bold text-2xl py-2 px-4 hover:bg-black hover:text-white transition-all ease-out duration-150'>Blogs</NavLink>
          <NavLink to="/socials" className='uppercase font-bold text-2xl py-2 px-4 hover:bg-black hover:text-white transition-all ease-out duration-150'>Socials</NavLink>
        </ul>
      </nav>
      <nav className='block md:hidden relative'>
        <button onClick={showMenu}><img src="/assets/menu.svg" alt="" /></button>
        <SlideMenu isOpen={isOpen} setOpen={setOpen}/>
      </nav>
    </div>
  )
}

export default Header