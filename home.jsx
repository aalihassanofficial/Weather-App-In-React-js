import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className='items-center mx-100 font-bold text-3xl' >
      <h1>Home</h1>
    <nav className='flex items-center gap-4'>
    <Link to={"/about"}>About</Link>
    <Link to={"/todo"}>Todo</Link>
    </nav>
    </div>
  )
}

export default Home
