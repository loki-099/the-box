import React, { useEffect, useState } from 'react'
import '../styles/homepage.css'
import Box from '../components/Box'
import { Link } from 'react-router-dom'
import Card from '../components/Card'
import Data from '../entries.json'
import Footer from '../components/Footer'
import SocialLinks from '../components/SocialLinks'

const Home = () => {
  return (
    <div className='w-[95%] min-w-[335px] tablet:w-[95%] tablet:max-w-[696px] laptop:max-w-[960px] desktop:max-w-[1140px] mx-auto'>
      <div
        className='flex flex-col items-center justify-center gap-10 laptop:gap-8 h-screen max-h-[1080px] mb-20'
        id='home'
      >
        <div className='w-full'>
          <h1 className='uppercase heading-1 text-left tablet:text-center'>
            Let's see what's inside <br />
            the box
          </h1>
        </div>
        <div className='w-full flex flex-col items-start gap-3 tablet:flex-row tablet:items-center tablet:justify-center tablet:gap-8 laptop:gap-12'>
          <span className='flex items-center gap-2'>
            <img src='/assets/me1.jpg' alt='me' className='w-[49px]' />
            <p className='leading-5'>
              Personal Blog <br /> by{' '}
              <span className='font-bold'>Luis Lloyd Tolentino</span>
            </p>
          </span>
          <Link to='/blogs' className='main-button'>
            Read Blogs
          </Link>
        </div>
      </div>

      {/* BLOGS */}
      <div className='min-h-fit py-32'>
        <h2 className='heading-2 text-primaryBlack uppercase mb-8 tablet:w-full tablet:text-center'>
          Featured Posts
        </h2>
        <div className='w-full flex flex-col gap-5 tablet:flex-row tablet:flex-wrap'>
          {Data.map((record) => {
            return <Card key={record.id} item={record} />
          })}
        </div>
        <div className='w-full text-center mt-12'>
          <Link to='/blogs' className='main-button'>
            Read More
          </Link>
        </div>
      </div>

      {/* ABOUT */}
      <div className='min-h-fit py-32'>
        <h2 className='text-primaryBlack uppercase heading-2 mb-8 laptop:mb-12 tablet:w-full tablet:text-center'>
          About Me
        </h2>
        <div className='w-full flex flex-col tablet:flex-row tablet:flex-wrap tablet:justify-between tablet:items-center'>
          <div className='w-full mb-7 tablet:w-[338px] tablet:mb-0 laptop:w-[467px] desktop:w-[560px]'>
            <img src='/assets/me.jpg' alt='me' className='w-full grayscale' />
          </div>
          <div className='w-full tablet:w-[338px] laptop:w-[463px]'>
            <h3 className='text-primaryBlack heading-3 uppercase mb-4'>
              I am Luis Lloyd Tolentino
            </h3>
            <p className='text-primaryBlack body mb-6'>
              A budding web enthusiast diving into the world of development.
              Passionate about crafting seamless digital experiences and
              exploring the limitless possibilities of the web.
            </p>
            <Link to='/about' className='main-button'>
              More About Me
            </Link>
          </div>
        </div>
      </div>

      {/* SOCIALS */}
      <div className='h-fit py-32'>
        <h2 className='heading-2 uppercase text-primaryBlack mb-8 laptop:mb-12 tablet:w-full tablet:text-center'>
          Socials
        </h2>
        <SocialLinks />
        <h3 className='heading-3 uppercase w-full text-center mt-8'>
          Feel Free to Contact Me
        </h3>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  )
}

export default Home
