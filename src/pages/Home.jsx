import React, { useEffect, useState } from 'react'
import '../styles/homepage.css'
import Box from '../components/Box';
import { Link } from 'react-router-dom';
import Card from '../components/Card';

const Home = () => {
  return (
    <>
      <div className='lg:pt-4 flex flex-col items-center justify-center gap-10 h-screen max-h-[1080px] mb-20'>
        <div className='flex flex-col gap-48 justify-between'>
          <h1 className='uppercase heading-1 text-center leading-[72px]'>Let's see what's inside <br/>the box</h1>
        </div>
        <div className='flex items-center gap-12'>
          <span className='flex items-center gap-2'>
            <img src="/assets/me1.jpg" alt="me" className='w-[49px]'/>
            <p className='leading-5'>Personal Blog <br/> by <span className='font-bold'>Luis Lloyd Tolentino</span></p>
          </span>
          <Link to="/blogs" className='main-button'>Read Blogs</Link>
        </div>
      </div>
      {/* ABOUT */}
      <div className='min-h-[768px] max-h-[1080px] mb-20 '>
        <h2 className='text-primaryBlack uppercase heading-2 mb-12'>About Me</h2>
        <div className='w-full flex justify-between'>
          <div className='w-[560px] h-[560px] relative'>
            <img src="/assets/me.jpg" alt="me" className='w-full h-full grayscale image-fade'/>
            <div className='absolute w-full h-full top-0 left-0 image-fade'></div>
          </div>
          <Box width='w-[560px]' height='h-[560px]'>
            <h3 className='text-primaryWhite heading-3 uppercase mb-4'>I am Luis Lloyd Tolentino</h3>
            <p className='text-primaryWhite body mb-8'>A budding web enthusiast diving into the world of development. Passionate about crafting seamless digital experiences and exploring the limitless possibilities of the web.</p>
            <Link to="/about" className='white-main-button'>More About Me</Link>
          </Box>
        </div>
      </div>
      {/* BLOGS */}

      

      <div >
        <Card/>
      </div>
    </>
  )
}

export default Home