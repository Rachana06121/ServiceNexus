import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <>
    <hr/>
    <footer className="py-12 bg-slate-300">
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
        <div className="flex flex-col items-center justify-center">
          <div className="flex space-x-4">
            <FaFacebookSquare size={24}/>
            <FaInstagram size={24}/>
            <FaLinkedin size={24}/>
            <FaTelegram size={24}/>
            <FaTwitter size={24}/>
            <FaYoutube size={24}/>
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
  )
}

export default Footer