import React from 'react'
import Header from '../components/Header';
import { Outlet } from 'react-router';

const Home = () => {
  return (
    <div className='pt-4'>
      <Header/>
    </div>
  )
}

export default Home