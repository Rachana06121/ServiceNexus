import React from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaDribbbleSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import logo01 from '../assets/logo01.png';
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="max-w-[1240] mx-auto py-16 px-9 grid lg:grid-cols-3 gap-9 text-gray-200">

      <div className="">
      <div className='flex gap-2 '>
        <img src={logo01} className='w-[100px] rounded-full'/>
        <h1 className="w-full text-5xl font-bold text-[#47ffff] pt-9">Jahu Nexus</h1>
    
        </div>

        <div className="grid lg:grid-cols-2">
        <p className="py-2">
          <h1 className="font-semibold text-xl">Address</h1>
          <h3>Mumbai Maharastra</h3>
        </p>

        <p className="py-2">
          <h1 className="font-semibold text-xl">Contact On</h1>
          <h3>Email - jahunexus@gmail.com</h3>
          <h3>Mobile No- +91 | 9137126163</h3>
        </p>
        </div>

        <p className="mt-8 border-t  border-gray-700 pt-8 flex flex-col items-center mb-4 font-bold text-2xl">
          Follow us
        </p>


        <div className="flex mx-12 justify-between md:w-[75%] my-1">
        <a href="https://www.facebook.com/share/i1yYGg1nuhpySE6m/?mibextid=qi2Omg" target="_blank"><FaSquareFacebook size={24} /></a>
        <a href="https://www.instagram.com/accounts/onetap/?next=%2F&hl=en" target="_blank"><IoLogoInstagram size={24} /></a>
        <a href="https://www.linkedin.com/feed/" target="_blank"><FaLinkedin size={24} /></a>
        <a href="https://t.me/jahunexus" target="_blank"><FaTelegram size={24} /></a>
        <a href="https://youtube.com/@jahunexus?si=YgNTHqRwsDnvBptz" target="_blank"><FaYoutube size={24} /></a>
        <a href="https://github.com/Rachana06121" target="_blank"><FaGithub size={24} /></a>
         
        <a href="https://x.com/JahuNexus?t=CocqxaWw_1RbuQEp9E_9XQ&s=08 " target="_blank"><FaSquareXTwitter size={24} /></a>
        </div>
      </div>

      <div className="lg:col-span-2 grid md:grid-cols-3 px-7 mx-7 justify-between mt-2 p-1 ">
        

  

        <div className="m-9">
          <h6 className="font-medium text-xl border-b border-gray-100 pb-2 text-gray-200">Company</h6>
          <ul>
          <Link to="/AboutUs" target="_parent"><li className="py-2 text-sm">About Us</li></Link>
            <Link to="/Blogs" target="_parent"><li className="py-2 text-sm">Blog</li></Link>
            <Link to="/Jobs" target="_parent"><li className="py-2 text-sm">jobs</li></Link>
            <Link to="/Jobs" target="_parent"><li className="py-2 text-sm">Careers</li></Link>
          </ul>
        </div>

        <div className="m-9">
          <h6 className="font-medium text-xl border-b border-gray-100 pb-2 text-gray-200">Services</h6>
          <ul>
            <Link to="/Services" target="_parent"><li className="py-2 text-sm">Web Development</li></Link>
            <Link  to="/Services" target="_parent"><li className="py-2 text-sm">Graphic Designer</li></Link>
            <Link  to="/Services" target="_parent"><li className="py-2 text-sm">Digital Marketing</li></Link>
            <Link to="/Services" target="_parent"><li className="py-2 text-sm">Video Editing</li></Link>
            <Link  to="/Services" target="_parent"><li className="py-2 text-sm">Content writing</li></Link>
          </ul>
        </div>

        <div className="m-9">
          <h6 className="font-medium text-xl border-b border-gray-100 pb-2 text-gray-200">Legal</h6>
          <ul>
            <li className="py-2 text-sm">Claim</li>
            <li className="py-2 text-sm">Policy</li>
            <li className="py-2 text-sm">Terms</li>
          </ul>
        </div>
        
      </div>
      
    </div>
  );
}

export default Footer;
