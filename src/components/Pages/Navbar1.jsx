import React from 'react'
import { Link } from 'react-router-dom'

function Navbar1() {
  return (
    <div className='container md:px-20 shadow-md fixed top-0 left-0 right-0 z-50 justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
        <div>
            <h1>Navbar1</h1>
        </div>
        <div className='flex flex-row gap-8'>
            <Link to={"/"}>Home</Link>
            <Link to={"/analytics"}>Analytics</Link>
            <Link to={"/Newslatter"}>Newsletter</Link>
            <Link to={"/card"}>Card</Link>
        </div>
    </div>
  )
}

export default Navbar1