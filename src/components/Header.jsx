import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../styles/navlink.css'
import SlideMenu from './SlideMenu';

const Header = () => {
  const [isOpen, setOpen] = useState(false)

  const showMenu = () => {
    setOpen(true)
    console.log('hell');
  } 

  return (
    <div className='flex items-center justify-between pt-4 absolute right-0 left-0'>
      <Link to="/"><img src="/assets/logo.svg" alt="" className=' w-[48px] md:w-[55px] lg:w-[62px]'/></Link>
      <nav className='hidden md:block'>
        <ul className='flex items-center gap-8'>
          <NavLink to="/" className='uppercase heading-3 px-2 transition-all ease-out duration-150 relative link'>Home</NavLink>
          <NavLink to="/blogs" className='uppercase heading-3 px-2 transition-all ease-out duration-150 relative link'>Blogs</NavLink>
          <NavLink to="/about" className='uppercase heading-3 px-2 transition-all ease-out duration-150 relative link'>About</NavLink>
          <NavLink to="/socials" className='uppercase heading-3 px-2 transition-all ease-out duration-150 relative link'>Socials</NavLink>
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