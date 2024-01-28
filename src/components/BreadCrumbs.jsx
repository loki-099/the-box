import { Link } from 'react-router-dom'

const BreadCrumbs = () => {
  return (
    <div>
      <span className='body'>
        <Link to='/' className='font-bold'>
          Home
        </Link>{' '}
        / Blogs
      </span>
      <hr className='border-primaryBlack mt-2' />
    </div>
  )
}

export default BreadCrumbs
