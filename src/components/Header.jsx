import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/navlink.css'

const Header = () => {
  return (
    <div className='flex items-center justify-between'>
      <a href=""><img src="/assets/logo.svg" alt="" className='w-[70px]'/></a>
      <nav>
        <ul className='flex items-center gap-4'>
          <NavLink to="/" className='uppercase font-bold text-2xl py-2 px-4 hover:bg-black hover:text-white transition-all ease-out duration-150'>Home</NavLink>
          <NavLink to="/about" className='uppercase font-bold text-2xl py-2 px-4 hover:bg-black hover:text-white transition-all ease-out duration-150'>About</NavLink>
          <NavLink to="/blogs" className='uppercase font-bold text-2xl py-2 px-4 hover:bg-black hover:text-white transition-all ease-out duration-150'>Blogs</NavLink>
          <NavLink to="/socials" className='uppercase font-bold text-2xl py-2 px-4 hover:bg-black hover:text-white transition-all ease-out duration-150'>Socials</NavLink>
        </ul>
      </nav>
    </div>
  )
}

export default Header