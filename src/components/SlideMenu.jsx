import React from 'react'

const SlideMenu = ( {isOpen, setOpen} ) => {
  let display
  let animation
  display = isOpen ? 'fixed' : 'hidden'
  animation = isOpen ? 'slide' : 'right-0'
  console.log(display);

  const hideMenu = () => {
    setOpen(!isOpen)
  }

  return (
    <div className={`${display} fadeIn top-0 right-0 bottom-0 left-0 bg-black/50`}>
      <div className={`bg-black fixed top-0 bottom-0 ${animation} w-[50%]`}>
      <button onClick={hideMenu}><img src="/assets/close.svg" alt="" className='w-[24px] absolute right-4 top-6 z-20'/></button>

      </div>

    </div>
  )
}

export default SlideMenu