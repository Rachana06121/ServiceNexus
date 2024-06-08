import React, { useState } from "react";
import logo from "../img/jahunexus.png";
import { TfiMenuAlt } from "react-icons/tfi";
import { CgCloseR } from "react-icons/cg";
import { Link } from "react-scroll";

function Navbar() {
  const [menu, setMenu] = useState(false);

  const navItems=[
    {
        id:1,
        text:"Home"
        
    },
    {
        id:2,
        text:"About"
        
    },
    {
        id:3,
        text:"Services"
        
    },
    // {
    //     id:4,
    //     text:"Members"
        
    // },
    {
        id:5,
        text:"Contact"
        
    },
  ]

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 shadow-md fixed top-0 left-0 right-0 z-50 bg-white">
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-4">
            <img src={logo} className="h-16 w-16 rounded-full" alt="logoImg" />

            <h1 className="font-semibold text-xl cursor-pointer">
              <span className="text-red-500 text-2xl">J</span>AHU
              <span className="text-red-500 text-2xl">N</span>exus
              <p className="text-sm">Services</p>
            </h1>
          </div>
          <div>
            <ul className="hidden md:flex space-x-8 text-lg">
              {
                navItems.map(({id, text}) =>(
                    <li  className="hover:scale-105 duration-200 cursor-pointer  hover:font-semibold" key={id}>
                        <Link to={text}
                        smooth={true}
                        duration={500}
                        offset={-70}
                        activeClass="active"
                        >{text}</Link>
                        </li>
                ))
              }
            </ul>

            <div onClick={() => setMenu(!menu)} className="md:hidden">
              {menu ? <CgCloseR size={24} /> : <TfiMenuAlt size={24} />}
            </div>
          </div>
        </div>
        {/* moblie nevbar */}

        {menu && (
          <div>
            <ul className="md:hidden flex flex-col h-52 items-center justify-center space-y-2 text-lg cursor-pointer">
            {
                navItems.map(({id, text}) =>(
                    <li className="hover:scale-105 duration-200 cursor-pointer hover:font-semibold" key={id}>
                        <Link 
                        onClick={() => setMenu(!menu)}
                        to={text}
                        smooth={true}
                        duration={500}
                        offset={-70}
                        activeClass="active"
                        >{text}</Link>
                        </li>
                ))
              }
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
