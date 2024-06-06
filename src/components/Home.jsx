import React from "react";
import { ReactTyped, Typed } from "react-typed";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import Business from '../img/business.jpg';
import { SiHtml5 } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa6";
import { FaBootstrap } from "react-icons/fa6";
import { FaPython } from "react-icons/fa6";

function Home() {
  return (
    <>
      <div name="Home" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="md:text-2xl text-lg">Welcome to Service Nexus</span>
            <div className="flex space-x-1 text-lg md:text-4xl">
              <h1>Hello, We are</h1>
              {/* <span className="text-red-700 font-bold text-2xl md:text-4xl ">
                Web Devloper
              </span> */}

              <ReactTyped className="text-red-700 font-bold text-lg md:text-4xl "
                
                strings={["Devloper","Programmer","Graphic Designer", "Digital Marketer","Video Editor","Content Writter",]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br></br>
            <p className="text-sm md:text-md text-justify">
              Drop servicing is a business model where you sell services to
              clients and outsource the actual work to freelancers or other
              companies. You act as the middleman, handling client communication
              and quality control while making a profit from the price
              difference between what the client pays and what you pay the
              service provider. This model has low startup costs and is
              scalable, but it requires careful management of service quality
              and provider relationships.
            </p>
            <br></br>
            {/*Social Media Icon */}
            <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 justify-between items-center">
              <div className="space-y-2">
                <h1 className="font-bold text-center">Available On</h1>
                <ul className="flex space-x-5">
                  <li>
                  <a href="" target="_blank">
                    <FaFacebookSquare className="text2xl cursor-pointer hover:scale-110 duration-200" />
                    </a>
                  </li>
                  <li>
                    <a href="" target="_blank">
                    <FaInstagram className="text2xl cursor-pointer hover:scale-110 duration-200" />
                    </a> 
                  </li>
                
                  <li>
                  <a href="" target="_blank">
                    <FaLinkedin className="text2xl cursor-pointer hover:scale-110 duration-200" />
                    </a>
                  </li>
                  <li>
                  <a href="" target="_blank">
                    <FaYoutube className="text2xl cursor-pointer hover:scale-110 duration-200" />
                    </a>
                  </li>
                  <li>
                  <a href="" target="_blank">
                    <FaTelegram className="text2xl cursor-pointer hover:scale-110 duration-200" />
                    </a>
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h1 className="font-bold text-center ">Curruntly Working On</h1>
                <div className="flex space-x-5">
                  <FaReact className="text-xl md:text-3xl cursor-pointer hover:scale-110 duration-200 rounded-full border-[2px]" />
                  <SiMongodb className="text-xl md:text-3xl cursor-pointer hover:scale-110 duration-200 rounded-full border-[2px]" />
                  <FaNodeJs className="text-xl md:text-3xl cursor-pointer hover:scale-110 duration-200 rounded-full border-[2px]" />
                  <SiExpress className="text-xl md:text-3xl cursor-pointer hover:scale-110 duration-200 rounded-full border-[2px]" />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2  md:mt-20 md:ml-48 mt-8 order-1">
            <img src={Business} className="rounded-full  md:w-[500px] md:h-[500px]  w-[300px] h-[300px]"  alt=""/>
          </div>
        </div>
      </div>
      <hr/>
    
    
     
    </>
  );
}

export default Home;
