import React from 'react'

const Card = () => {
  return (
    <div className='w-[270px] h-[358px] bg-primaryBlack p-6 text-primaryWhite flex flex-col justify-between'>
      <div>
        <div className='w-full h-[184px] border-[1px] border-primaryWhite mb-3'>

        </div>
        <p className='font-bold'>Card Title 1</p>
      </div>
      <div className='flex justify-between items-center '>
        <p className='leading-5'>Jun 01, 2024</p>
        <p className='leading-5'>3 min read</p>
      </div>
    </div>
  )
}

export default Card