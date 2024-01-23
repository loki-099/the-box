import React from 'react'
import BreadCrumbs from '../components/BreadCrumbs';
import blogs from '../entries.json'
import BlogCards from '../components/BlogCards';

const Blogs = () => {
  return (
    <div className='pt-32 w-[95%] min-w-[335px] tablet:w-[95%] tablet:max-w-[696px] laptop:max-w-[754px] mx-auto pb-36'>
      <BreadCrumbs/>
      <div className='flex flex-col gap-[18px] mt-6'>
        {blogs.map((blog) => {
          return(
            <BlogCards entry={blog}/>
          )
        })}
      </div>
    </div>
  )
}

export default Blogs