import React from 'react'
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='flex flex-col gap-6 justify-center items-center absolute top-[47%] left-[50%] translate-x-[-50%] translate-y-[-50%] '>
      <h1 className='text-8xl font-bold'>404 Error</h1>
      <img src="/assets/icon.svg" alt="error" className='animate-spin-slow w-10'/>
      <Link to="/" className='flex items-center gap-2 py-2 px-4 mt-4 border-2 border-transparent hover:border-primaryBlack transition-all ease-out duration-150'>
        <img src="/assets/back.svg" alt="back" className='w-6'/>
        <p className='uppercase font-semibold text-lg '>Home</p>
      </Link>
    </div>
  )
}

export default NotFound