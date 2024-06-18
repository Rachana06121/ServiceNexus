import React, { Component } from "react";
import web from "../img/web_devlopment.webp";
import graphic from "../img/graphicdesigner.webp";
import digital from "../img/DigitalMarketing.png";
import content from "../img/contentwriting.png";
import video from "../img/videoediting.jpg";




function Services() {
  const cardItem = [
    {
      id: 1,
      logo: web,
      name: "web Development",
      passage:
        "Our expert developers create stunning, responsive, and user-friendly websites that help your business stand out online. From simple landing pages to complex e-commerce platforms, we have the skills to bring your vision to life.",
     
    },
    {
      id: 2,
      logo: graphic,
      name: "Graphic Designer",
      passage:
        "Visual appeal is crucial for any business. Our creative graphic designers craft visually stunning graphics, logos, brochures, and other marketing materials that capture attention and convey your brand’s story.",
      
    },
    {
      id: 3,
      logo: digital,
      name: "Digital Marketing",
      passage:
        "Boost your online presence and drive more traffic with our comprehensive digital marketing strategies. We specialize in SEO, social media marketing, PPC campaigns, and email marketing to ensure your brand reaches its target audience effectively.",
      
    },
    {
      id: 4,
      logo: content,
      name: "Content writing",
      passage:
        "Engage your audience with high-quality, compelling content. Our team of talented writers produces SEO-friendly blog posts, articles, website content, and more, tailored to reflect your brand’s voice and message.",
   
    },

    {
      id: 5,
      logo: video,
      name: "Video Editing",
      passage:
        "Bring your videos to life with our professional video editing services. Whether it's promotional videos, tutorials, or social media content, we ensure your videos are polished, engaging, and impactful.",

    },
    
  ];
  return (
    <>
      <div
        name="Services"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
      >
        <div>
          <h1 className="text-3xl font-bold mb-5">Services</h1>
          <div className="grid grid-flow-cols-1 md:grid-cols-3 gap-5 my-7">
            {cardItem.map(({ id, logo, name, passage, path }) => (
              <div
                className="flex flex-col items-center justify-center md:w-[350px] md:h-[400px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-200"
                key={id}
              >
                <img
                  src={logo}
                  className="W-[130px] h-[130px] p-1 rounded-2xl border-[2px]"
                  alt="img"
                />
                <div>
                  <div className="font-bold mt-2 text-xl mb-2">{name}</div>
                  <hr />
                  <p className="px-2 text-gray-700">{passage}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr/>
    </>
  );
}

export default Services;
