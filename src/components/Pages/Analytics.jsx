import React from "react";
import laptop from "../assets/computer.png";

function Analytics() {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
      <img className="w-[500px] mx-auto my-4" src={laptop} alt="/" />
      <div className="flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold">Data Analytics Dashbord</p>
        <h1 className="md:text-4xl sm:text-2xl font-bold py-2">Manage Data Analytics Centrally</h1>
        
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis dolores natus fuga nam similique nostrum voluptatibus
            nemo at iste odit eaque optio debitis, quae praesentium,
            necessitatibus magnam, aperiam reiciendis est!
          </p>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-lg font-medium my-6 md:mx-0 mx-auto py-3">Get Started</button>

      </div>
    </div>
    </div>
  );
}

export default Analytics;
