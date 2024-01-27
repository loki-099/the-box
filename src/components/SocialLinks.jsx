import React from 'react'

const SocialLinks = () => {
  return (
    <div className='w-full'>
      <div className='w-full flex justify-between tablet:w-[378px] laptop:w-[714px] mx-auto'>
        <a href="https://www.facebook.com/luis.tolentino358" target='_blank'><img src="/assets/icon-facebook.svg" alt="" className='w-[32px]'/></a>
        <a href="https://www.instagram.com/lowkeeeey.09/" target='_blank'><img src="/assets/icon-instagram.svg" alt="" className='w-[32px]' /></a>
        <a href="https://github.com/loki-099" target='_blank'><img src="/assets/icon-github.svg" alt="" className='w-[32px]' /></a>
        <a href="https://www.linkedin.com/in/luis-lloyd-tolentino-b5262a240/" target='_blank'><img src="/assets/icon-linkedin.svg" alt="" className='w-[32px]' /></a>
        <a href="mailto:loidatolentino358@gmail.com" target='_blank'><img src="/assets/icon-email.svg" alt="" className='w-[32px]' /></a>
      </div>
    </div>
  )
}

export default SocialLinks