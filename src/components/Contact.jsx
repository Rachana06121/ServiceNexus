import React from "react";

import { FaMailBulk } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { IoMdContact } from "react-icons/io";
import { FaMapLocationDot } from "react-icons/fa6";
import { CiLocationArrow1 } from "react-icons/ci";

function Contact() {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "dea49b9c-81a1-42d7-935f-cd9f845a71bb");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Email Sent Successfully!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div className="w-full bg-white py-16 mt-24 px-4">
      
      <div className="flex flex-[100%] flex-col items-center justify-center">

        

        <h1 className="text-3xl font-bold mb-5">Contact Us</h1>
        <span className="font-bold mb-5">
          Kindly fill out the form below to contact us,
        </span>

      <form onSubmit={onSubmit} className="w-[80%]">

            <div className="flex flex-col mb-5 ">
            <label className="block text-black font-semibold mb-5 text-2xl">Your Name</label>
            <input className="border border-black rounded-lg py-2 px-3 text-gray-700 lead" 
            type="text" name="name" placeholder="Enter Your Name" required></input>
            </div>

            <div className="flex flex-col mb-5 ">
            <label className="block text-black font-semibold mb-5 text-2xl">Phone Number</label>
            <input className="border border-black rounded-lg py-2 px-3 text-gray-700 lead"
            type="tel" name="phone" placeholder="Enter Your Mobile" required></input>
            </div>

            <div className="flex flex-col mb-5 ">
            <label className="block text-black font-semibold mb-5 text-2xl">Email Address</label>
            <input className="border border-black rounded-lg py-2 px-3 text-gray-700 lead"
            type="email" name="email" placeholder="Enter Your Email" required></input>
            </div>

            <div className="flex flex-col mb-5 ">
            <label className="block text-black font-semibold mb-5 text-2xl">Write your messages here</label>
            <textarea className="border border-black rounded-lg py-2 px-3 text-gray-700 lead"
            id="massage" name="massage" rows="6" placeholder="Enter Your Massage" required></textarea>
            </div>

            <button type="submit" className="bg-[#47ffff] w-[230px] rounded-lg font-medium my-6 mx-auto py-3 text-black">Submit</button>
        </form>

        <span>{result}</span>
        
      </div>
    </div>
  );
}

export default Contact;
