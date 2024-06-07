import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import logo from "../img/s.png";
import { Link } from "react-scroll";



function Footer() {


  const footerItem=[
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
    {
        id:4,
        text:"Members"
        
    },
    {
        id:5,
        text:"Contact"
        
    },
  ]

  return (
    <>
      <hr />
      <footer className="py-12 bg-slate-300">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
          <div className="items-center justify-evenly">
              <ul className="grid grid-cols-1 justify-evenly sm:grid-cols-2 md:grid-cols-4 gap-6 sm:px-8 px:5 py:16">
                <li>
                  <img src={logo} alt="logo" className="w-[130px] h-[130] rounded-full shadow-lg" />
                  <span className="p-4">Service Nexus</span>
                </li>
                <li className="">
                  <h1 className="font-semibold text-2xl cursor-pointer">Address</h1>
                  <span>Mumbai Maharastra</span>
                
                  <h1 className="mt-4 font-semibold text-2xl cursor-pointer ">Contact On</h1>
                  <span>Email -</span><Link><span>rachana9137@gmail.com</span></Link>
                  <br></br>
                  <span>Mobile No - +91 9123385453</span>
                </li>
                <li>
                  <h1 className="font-semibold text-2xl cursor-pointer">Services</h1>
                  <a>Web Devlopment</a>
                  <br />
                  <a>Graphic Designer</a>
                  <br />
                  <a>Digital Marketing</a>
                  <br />
                  <a>Content Writing</a>
                  <br />
                  <a>Video Editing</a>
                </li>
                <li className="font-semibold cursor-pointer">
                {
                footerItem.map(({id, text}) =>(
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
                </li>
              </ul>
            

          </div>
          <div className="mt-8 border-t  border-gray-700 pt-8 flex flex-col items-center mb-5 font-bold text-2xl">
            Follow Us
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex space-x-4 ">
              <FaFacebookSquare className="text2xl cursor-pointer hover:scale-110 duration-200" size={24} />
              <FaInstagram className="text2xl cursor-pointer hover:scale-110 duration-200" size={24} />
              <FaLinkedin className="text2xl cursor-pointer hover:scale-110 duration-200" size={24} />
              <FaTelegram className="text2xl cursor-pointer hover:scale-110 duration-200" size={24} />
              <FaTwitter className="text2xl cursor-pointer hover:scale-110 duration-200" size={24} />
              <FaYoutube className="text2xl cursor-pointer hover:scale-110 duration-200" size={24} />
            </div>
            <div className="mt-8 border-t  border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-sm">
                &copy; 2024 Your Company, All right reserved.
              </p>
              <p className="text-sm">partners name</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
