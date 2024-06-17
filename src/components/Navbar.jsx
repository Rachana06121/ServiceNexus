import React,{useState} from 'react'
import { CgMenuRight } from "react-icons/cg";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { Link } from 'react-router-dom';
import logo01 from '../assets/logo01.png'

function Navbar() {

    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav)
    }
  return (
    <div className="flex fixed top-0 left-0 right-0 bg-[#001834] justify-between items-center h-24 w-full z-50 mx-auto px-4 text-white">
        <div className='flex gap-2 px-9 '>
        <img src={logo01} className='w-[50px] rounded-full'/>
        <h1 className="w-full text-3xl font-bold text-[#47ffff] pt-2">Jahu Nexus</h1>
    
        </div>

        <ul className="md:flex hidden px-9">
            <Link to={"/"} target="_top"><li className="p-4">Home</li></Link>
            <Link to={"/company"} target="_top"><li className="p-4">Company</li></Link>
            <Link to={"/Services"} target="_top"><li className="p-4">Services</li></Link>
            <Link to={"/aboutUs"} target="_top"><li className="p-4">AboutUs</li></Link>
            <Link to={"/projects"} target="_top"><li className="p-4">Projects</li></Link>
            <Link to={"/contact"} target="_top"><li className="p-4 bg-[#47ffff] w-[100px] rounded-full px-5 text-black">Contact</li></Link>
            
        </ul>
        <div onClick={handleNav} className="block md:hidden">
            {nav ? <IoMdCloseCircleOutline size={24}/> : <CgMenuRight size={24}/> }
            
        </div>

        <div className={nav ? "fixed left-0 top-0 w-[60%] border-r border-r-gray-900 h-full bg-[#001834] ease-in-out duration-500" : "fixed left-[-100%] "}>
        <div className='flex gap-1 '>
        <img src={logo01} className='w-[40px] h-[40px] mt-7 mx-2 rounded-full'/>
        <h1 className="w-full text-2xl font-bold text-[#47ffff] mt-7">Jahu Nexus</h1>
    
        </div>
            <ul className='pt-12 uppercase p-4 '>
            <Link to={"/"} target="_top"><li className="p-4 border-b border-gray-600">Home</li></Link>
            <Link to={"/company"} target="_top"><li className="p-4 border-b border-gray-600">Company</li></Link>
            <Link to={"/Services"} target="_top"><li className="p-4 border-b border-gray-600">Services</li></Link>
            <Link to={"/aboutUs"} target="_top"><li className="p-4 border-b border-gray-600">AboutUs</li></Link>
            <Link to={"/projects"} target="_top"><li className="p-4 border-b border-gray-600">Projects</li></Link>
            <Link to={"/contact"} target="_top"><li className="p-4 bg-[#47ffff] w-[100px] rounded-full px-3 py-5 m-2 text-black">Contact</li></Link>
            </ul>
        </div>
    </div>
  )
}

export default Navbar