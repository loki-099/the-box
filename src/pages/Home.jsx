import React, { useEffect, useState } from 'react'
import '../styles/homepage.css'
import Box from '../components/Box';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import Data from '../entries.json'

const Home = () => {
  return (
    <div className="w-[95%] min-w-[335px] tablet:w-[95%] tablet:max-w-[696px] mx-auto">
      <div className='lg:pt-4 flex flex-col items-center justify-center gap-10 h-screen max-h-[1080px] mb-20' id='home'>
        <div className='w-full flex flex-col gap-48 justify-between'>
          <h1 className='uppercase heading-1 text-left tablet:text-center'>Let's see what's inside <br/>the box</h1>
        </div>
        <div className='w-full flex flex-col items-start gap-3 tablet:flex-row tablet:items-center tablet:justify-center tablet:gap-8'>
          <span className='flex items-center gap-2'>
            <img src="/assets/me1.jpg" alt="me" className='w-[49px]'/>
            <p className='leading-5'>Personal Blog <br/> by <span className='font-bold'>Luis Lloyd Tolentino</span></p>
          </span>
          <Link to="/blogs" className='main-button'>Read Blogs</Link>
        </div>
      </div>
      
      {/* BLOGS */}
      <div className='min-h-[768px] max-h-fit lg:max-h-[1080px] mb-20'>
        <h2 className='heading-2 text-primaryBlack uppercase mb-8'>Featured Posts</h2>
        <div className='w-full flex flex-col gap-5 tablet:flex-row tablet:flex-wrap'>
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
      <div className='min-h-fit mt-32'>
        <h2 className='text-primaryBlack uppercase heading-2 mb-8'>About Me</h2>
        <div className='w-full flex flex-col tablet:flex-row tablet:flex-wrap tablet:justify-between tablet:items-center'>
          <div className='w-full mb-7 tablet:w-[338px] tablet:mb-0'>
            <img src="/assets/me.jpg" alt="me" className='w-full grayscale'/>
          </div>
          <div className='w-full tablet:w-[338px]'>
            <h3 className='text-primaryBlack heading-3 uppercase mb-4'>I am Luis Lloyd Tolentino</h3>
            <p className='text-primaryBlack body mb-6'>A budding web enthusiast diving into the world of development. Passionate about crafting seamless digital experiences and exploring the limitless possibilities of the web.</p>
            <Link to="/about" className='main-button'>More About Me</Link>
          </div>
        </div>
      </div>

      {/* SOCIALS */}
      <div className='h-fit my-32'>
          <h2 className='heading-2 uppercase text-primaryBlack mb-8'>Socials</h2>
          <div className='w-full'>
            <div className='w-full flex justify-between tablet:w-[378px] mx-auto'>
              <img src="/assets/icon-facebook.svg" alt="" className='w-[32px]' />
              <img src="/assets/icon-instagram.svg" alt="" className='w-[32px]' />
              <img src="/assets/icon-github.svg" alt="" className='w-[32px]' />
              <img src="/assets/icon-linkedin.svg" alt="" className='w-[32px]' />
              <img src="/assets/icon-email.svg" alt="" className='w-[32px]' />
            </div>
          </div>
          <h3 className='heading-3 uppercase w-full text-center mt-8'>Feel Free to Contact Me</h3>
      </div>

      {/* FOOTER */}
      <footer className='h-fit max-h-fit bg-primaryBlack w-full absolute left-0 flex items-center'>
          <div className='w-full max-w-[95%] py-12 mx-auto flex flex-col justify-between items-start tablet:max-w-[696px]'>
            <div className='flex flex-col gap-12'>
              <div>
                <h2 className='text-2xl font-bold text-primaryWhite uppercase leading-8'>The Box</h2>
                <p className='text-sm text-primaryWhite'><span className='mr-1'>&copy;</span>2024, All rights reserved.</p>
              </div>
              <div className='flex gap-24 flex-wrap tablet:gap-32'>
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
            <Link to="/blogs" className='white-main-button mt-24'>Read Blogs</Link>
          </div>
      </footer> 
    </div>
  )
}

export default Home