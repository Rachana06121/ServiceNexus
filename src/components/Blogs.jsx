import React from 'react';
import content from "../assets/content01.jpeg";
import designer from "../assets/design01.jpg";
import market from "../assets/market01.jpg";
import web from "../assets/web01.png";
import web01 from "../assets/web.jpg";
import video from "../assets/video01.jpeg";


function Blogs() {
  return (
    <div className="bg-white pt-24">
      <div className="w-full bg-[#e4e4e1]">
        <h1 className="pt-10 md:text-7xl sm:text-6xl text-4xl underline font-semibold items-center justify-center text-center">
          Blogs
        </h1>
      </div>

      <div className="w-full py-[2rem] px-4 bg-[#e4e4e1]">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
          <div className="w-full shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <img
              className="mx-auto mt-[2rem]  bg-white w-[350px] h-[250px]"
              src={web}
              alt="/"
            />
            <h2 className="text-2xl font-bold text-center py-3">
              Web Development
            </h2>

            <a className="mx-auto" href='https://youtu.be/kc3dSXtdY1I?si=jbkKZKZcw0N0hwnf' target='block' >
              <button className="bg-[#47ffff] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
                Watch Video
              </button>
            </a>
          </div>

          <div className="w-full shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <img
              className="mx-auto mt-[2rem]  bg-white w-[350px] h-[250px]"
              src={designer}
              alt="/"
            />
            <h2 className="text-2xl font-bold text-center py-3">
              Graphic Designer
            </h2>

            <a className="mx-auto" href='https://youtu.be/FHqvHJ4bkYo?si=GJq6iXBQJlfFDjHi' target='block'>
              <button className="bg-[#47ffff] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
                Watch Video
              </button>
            </a>
          </div>

          <div className="w-full shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <img
              className="mx-auto mt-[2rem]  bg-white w-[350px] h-[250px]"
              src={market}
              alt="/"
            />
            <h2 className="text-2xl font-bold text-center py-3">
              Digital Marketing
            </h2>

            <a className="mx-auto" href='https://youtu.be/dAwn_kwYVYg?si=9nC5WPKJ8m-Dyq7G' target='block'>
              <button className="bg-[#47ffff] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
                Watch Video
              </button>
            </a>
          </div>

          <div className="w-full shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <img
              className="mx-auto mt-[2rem]  bg-white w-[350px] h-[250px]"
              src={video}
              alt="/"
            />
            <h2 className="text-2xl font-bold text-center py-3">
              Video Editing
            </h2>

            <a className="mx-auto" href='https://youtu.be/gAh_qQrPz1g?si=rrE2yB8TwqBosE2s' target='block'>
              <button className="bg-[#47ffff] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
                Watch Video
              </button>
            </a>
          </div>

          <div className="w-full shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <img
              className="mx-auto mt-[2rem]  bg-white w-[350px] h-[250px]"
              src={content}
              alt="/"
            />
            <h2 className="text-2xl font-bold text-center py-3">
              Content writing
            </h2>

            <a className=" mx-auto" href='https://youtu.be/iyyGy8HEboY?si=IGqzbZEN56k8FlLh' target='block' >
              <button className="bg-[#47ffff] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
                Watch Video
              </button>
            </a>
          </div>

          <div className="w-full shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <img
              className="mx-auto mt-[2rem]  bg-white w-[350px] h-[250px]"
              src={web01}
              alt="/"
            />
            <h2 className="text-2xl font-bold text-center py-3">
              Web Develompent
            </h2>

            <a className=" mx-auto" href='https://youtu.be/kc3dSXtdY1I?si=jbkKZKZcw0N0hwnf' target='block'>
              <button className="bg-[#47ffff] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
                Watch Video
              </button>
            </a>
          </div>
        </div>
      </div>
    
    </div>
  )
}

export default Blogs