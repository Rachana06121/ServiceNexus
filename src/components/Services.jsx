import React from 'react';
import web from '../img/web_devlopment.webp';
import graphic from '../img/graphicdesigner.webp';
import digital from '../img/DigitalMarketing.png';
import content from '../img/contentwriting.png';
import video from '../img/videoediting.jpg';


function Services() {

    const cardItem=[
        {
            id:1,
            logo:web,
            name:"Web Devlopment",
        
        },
        {
            id:2,
            logo:graphic,
            name:"Graphic Designer",
           
        },
        {
            id:3,
            logo:digital,
            name:"Digital Marketing",
            
        },
        {
            id:4,
            logo:content,
            name:"Content Writing",
            
        },
        
        {
            id:5,
            logo:video,
            name:"Video Editing",
            
        },
    ]
  return (
    <>
    <div name="Services" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
        <div>
            <h1 className="text-3xl font-bold mb-5">Services</h1>
            <div className="grid grid-flow-cols-1 md:grid-cols-4 gap-4 my-5">
                {
                    cardItem.map(({id,logo,name}) =>(
                        <div className="flex flex-col items-center justify-center md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-200" key={id}>
                            <img src={logo} className="W-[130px] h-[130px] p-1 rounded-2xl border-[2px]" alt="img" />
                            <div>
                            <div className="font-bold mt-2 text-xl mb-2">{name}</div>
                            <hr/>
                            <p className="px-2 text-gray-700">welcome we provide you above mmention services with affordable prices</p>
                            
                            </div>
                            <div className="justify-around px-2">
                                <button className="bg-blue-500 hover:bg-blue-800 text-white font-semibold px-4 py-2 rounded">Learn More</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
    </>
  )
}

export default Services