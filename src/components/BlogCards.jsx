import React from 'react'

const BlogCards = ({ entry }) => {
  return (
    <div className='bg-primaryBlack w-full p-5 tablet:px-6 tablet:py-8'>
      <div className='flex flex-col gap-3'>
        <img
          src='/assets/r.jpeg'
          className='w-full max-h-[240px] tablet:max-h-[320px] border-[1px] border-primaryWhite object-cover'
        >
          {/* IMAGE */}
        </img>
        <p className='date-card'>{entry.date}</p>
        <h1 className='heading-2 text-primaryWhite'>{entry.title}</h1>
      </div>
    </div>
  )
}

export default BlogCards
