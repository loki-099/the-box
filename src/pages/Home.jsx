import React, { useEffect, useState } from 'react'
import '../styles/homepage.css'
import Box from '../components/Box';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import Data from '../entries.json'

const Home = () => {
  return (
    <div className="w-[95%] max-w-[1140px] mx-auto">
      <div className='lg:pt-4 flex flex-col items-center justify-center gap-10 h-screen max-h-[1080px] mb-20' id='home'>
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
      
      {/* BLOGS */}
      <div className='min-h-[768px] max-h-[1080px]'>
        <h2 className='heading-2 text-primaryBlack uppercase mb-12'>Featured Posts</h2>
        <div className='flex justify-between'>
          {
            Data.map(record => {
              return(
                <Card key={record.id} item={record}/>
              )
            })
          }
        </div>
        <div className='w-full text-center mt-12'>
          <Link to='/blogs' className='main-button'>Read More</Link>
        </div>
      </div>

      {/* ABOUT */}
      <div className='min-h-[768px] max-h-[1080px] mb-20 '>
        <h2 className='text-primaryBlack uppercase heading-2 mb-12'>About Me</h2>
        <div className='w-full flex justify-between'>
          <div className='w-[560px] h-[560px] relative'>
            <img src="/assets/me.jpg" alt="me" className='w-full h-full grayscale'/>
          </div>
          <Box width='w-[560px]' height='h-[560px]'>
            <h3 className='text-primaryWhite heading-3 uppercase mb-4'>I am Luis Lloyd Tolentino</h3>
            <p className='text-primaryWhite body mb-8'>A budding web enthusiast diving into the world of development. Passionate about crafting seamless digital experiences and exploring the limitless possibilities of the web.</p>
            <Link to="/about" className='white-main-button'>More About Me</Link>
          </Box>
        </div>
      </div>

      {/* SOCIALS */}
      <div className='min-h-[620px] max-h-[768px]'>
          <h2 className='heading-2 uppercase text-primaryBlack mb-12'>Socials</h2>
          <div className='grid grid-cols-6 grid-rows-1'>
            <div className='w-[173px] h-[173px] border-[3px] border-primaryBlack flex justify-center items-center'>
              <img src="/assets/icon-facebook.svg" alt=""/>
            </div>
            <div className='w-[173px] h-[173px] border-[3px] border-primaryBlack flex justify-center items-center'>
              <img src="/assets/icon-instagram.svg" alt="" />
            </div>
            <div className='w-[173px] h-[173px] border-[3px] border-primaryBlack flex justify-center items-center'>
              <img src="/assets/icon-github.svg" alt="" />
            </div>
            <div className='w-[173px] h-[173px] border-[3px] border-primaryBlack flex justify-center items-center'>
              <img src="/assets/icon-linkedin.svg" alt="" />
            </div>
            <div className='w-[173px] h-[173px] border-[3px] border-primaryBlack flex justify-center items-center'>
              <img src="/assets/icon-email.svg" alt="" />
            </div>
            <div className='w-[173px] h-[173px] border-[3px] border-primaryBlack flex justify-center items-center'>

            </div>
          </div>
          <h3 className='heading-3 uppercase w-full text-center mt-8'>Feel Free to Contact Me</h3>
      </div>
      <footer className='h-[360px] max-h-[360px] bg-primaryBlack w-full absolute left-0 flex items-center'>
          <div className='w-full max-w-[1140px] h-[70%] mx-auto flex justify-between items-start'>
            <div className='flex gap-32'>
              <div>
                <h2 className='heading-2 text-primaryWhite uppercase leading-8'>The Box</h2>
                <p className='text-sm text-primaryWhite'><span className='mr-1'>&copy;</span>2024, All rights reserved.</p>
              </div>
              <div className='flex gap-28'>
                <div className='text-primaryWhite flex flex-col gap-3'>
                  <p className='font-bold mb-2'>Links</p>
                  <a href="/">Home</a>
                  <Link to="/about">About</Link>
                  <Link to="/blogs">Blogs</Link>
                  <Link to="/socials">Socials</Link>
                </div>
                <div className='text-primaryWhite flex flex-col gap-3'>
                  <p className='font-bold mb-2'>Socials</p>
                  <a href='https://www.facebook.com/luis.tolentino358' target='_blank'>Facebook</a>
                  <a href='https://www.instagram.com/lowkeeeey.09/' target='_blank'>Instagram</a>
                  <a href='https://github.com/loki-099' target='_blank'>GitHub</a>
                  <a href='https://www.linkedin.com/in/luis-lloyd-tolentino-b5262a240/' target='_blank'>LinkedIn</a>
                  <a href='mailto:loidatolentino358@gmail.com'>Email</a>
                </div>
                <div className='text-primaryWhite flex flex-col gap-3'>
                  <p className='font-bold mb-2'>Resources</p>
                  <a href='https://github.com/loki-099/the-box' target='_blank'>Open Source</a>
                  <a href='https://github.com/loki-099/the-box' target='_blank'>Contribute</a>
                </div>

              </div>
            </div>
            <Link to="/blogs" className='white-main-button'>Read Blogs</Link>
          </div>
      </footer> 
    </div>
  )
}

export default Home