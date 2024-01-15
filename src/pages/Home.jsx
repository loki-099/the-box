import React from 'react'
import '../styles/homepage.css'

const Home = () => {
  return (
    <>
      <div className='lg:pt-4 flex flex-col items-center justify-center gap-8 h-screen max-h-[1080px]'>
        <div className='flex flex-col gap-48 justify-between'>
          <h1 className='uppercase font-bold text-5xl text-center leading-[72px]'>Let's see what's inside <br/>the box</h1>
        </div>
        <div className='flex items-center gap-12'>
          <span className='flex items-center gap-2'>
            <img src="/assets/me1.jpg" alt="me" className='w-[49px]'/>
            <p className='leading-5'>Personal Blog <br/> by <span className='font-bold'>Luis Lloyd Tolentino</span></p>
          </span>
          <a href="" className='text-xl font-bold bg-primaryBlack text-primaryWhite py-2 px-3'>Read Blogs</a>
        </div>
      </div>
      <div className='h-screen max-h-[1080px] py-4'>
        <h2 className='text-primaryBlack uppercase font-bold text-[32px] mb-12'>About Me</h2>
        <div className='w-full'>
          <div className='w-[560px] h-[560px] relative'>
            <img src="/assets/me.jpg" alt="me" className='w-full h-full grayscale image-fade'/>
            <div className='absolute w-full h-full top-0 left-0 image-fade'></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home