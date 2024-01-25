import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className='h-fit max-h-fit bg-primaryBlack w-full absolute left-0 flex items-center'>
          <div className='w-full max-w-[95%] py-12 mx-auto flex flex-col justify-between items-start tablet:max-w-[696px] laptop:max-w-[960px] laptop:items-end desktop:max-w-[1140px] desktop:flex-row desktop:items-start desktop:justify-between'>
            <div className='flex flex-col gap-12 laptop:flex-row laptop:justify-between laptop:w-full desktop:w-fit desktop:gap-24 desktop:justify-normal'>
              <div>
                <h2 className='text-2xl font-bold text-primaryWhite uppercase leading-8'>The Box</h2>
                <p className='text-sm text-primaryWhite'><span className='mr-1'>&copy;</span>2024, All rights reserved.</p>
              </div>
              <div className='flex gap-24 flex-wrap tablet:gap-32 laptop:flex-row laptop:flex-nowrap'>
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
            <div className='white-main-button mt-24 desktop:mt-0'>
              <Link to="/blogs" className='w-fit'>Read Blogs</Link>
            </div>
          </div>
      </footer> 
  )
}

export default Footer