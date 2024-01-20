import React from 'react'

const Card = ({item}) => {
  return (
    <div className='w-full sm:w-[50%] tablet:max-w-[338px] bg-primaryBlack p-5 text-primaryWhite flex flex-col justify-between gap-12'>
      <div>
        <div className='w-full h-[184px] border-[1px] border-primaryWhite mb-[14px]'>

        </div>
        <p className='font-bold tracking-[0.50px] leading-5'>{item.title}</p>
      </div>
      <div className='flex justify-between items-center '>
        <p className='leading-5 text-sm'>{item.date}</p>
        <p className='leading-5 text-sm'>{item.duration}</p>
      </div>
    </div>
  )
}

export default Card