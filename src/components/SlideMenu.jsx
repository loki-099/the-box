import React from 'react'
import { NavLink } from 'react-router-dom'

const SlideMenu = ( {isOpen, setOpen} ) => {
  let before = isOpen ? 'before:bottom-0 before:opacity-75' : ''
  let sliding = isOpen ? 'right-0' : 'right-[-100%]'

  const hideMenu = () => {
    setOpen(!isOpen)
  }

  return (
    <div className={`bg-primaryBlack fixed transition-all duration-500 top-0 bottom-0 ${sliding} w-[50%] before:fixed before:transition-opacity before:duration-300 before:top-0 before:opacity-0 ${before} before:right-0 before:left-0 before:bg-primaryBlack before:-z-10 `}>
      <button onClick={hideMenu}><img src="/assets/close.svg" alt="" className='w-[24px] absolute right-4 top-6 z-20'/></button>
      <nav>
        <ul className='flex flex-col items-center gap-8 mt-16'>
          <NavLink to="/" className='uppercase font-bold text-xl text-primaryWhite transition-all ease-out duration-150' onClick={hideMenu}>Home</NavLink>
          <NavLink to="/about" className='uppercase font-bold text-xl text-primaryWhite transition-all ease-out duration-150' onClick={hideMenu}>About</NavLink>
          <NavLink to="/blogs" className='uppercase font-bold text-xl text-primaryWhite transition-all ease-out duration-150' onClick={hideMenu}>Blogs</NavLink>
          <NavLink to="/socials" className='uppercase font-bold text-xl text-primaryWhite transition-all ease-out duration-150' onClick={hideMenu}>Socials</NavLink>
        </ul>
      </nav>
    </div>
  )
}

export default SlideMenu