
import React from "react";
import { useForm } from "react-hook-form"
import axios from "axios";
import toast from "react-hot-toast";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async(data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.massage,
    };
    try{
      await axios.post("https://getform.io/f/rbeqkzrb", userInfo);
      toast.success("Your Massage has been sumbit");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong")
    }
  };

  return (
    <>
      <div
        name="Contact"
        className="max-w-screen-2xl md:px-20 container mx-auto px-4 my-16"
      >
        <h1 className="text-3xl font-bold mb-5">Contact Us</h1>
        <span className="font-bold mb-5">
          Kindly fill out the form below to contact us,
        </span>
        <div className="flex flex-col items-center justify-center mt-5">
          <form 
            onSubmit={handleSubmit(onSubmit)}
            action="https://getform.io/f/rbeqkzrb"
            method="POST"
            className="md:w-96 bg-sky-200 px-8 py-6 rounded-xl"
          >
            <h1 className="font-semibold text-2xl mb-4 ">Send Your Massages</h1>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700 font-semibold">Name</label>
              <input
              {...register("name", { required: true })}
                className="shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 lead focus:outline-none focus:shadow-outline"
                id="name"
                name="name"
                type="text"
                placeholder="Enter Your Full Name"
              />
              {errors.name && <span>This field is required</span>}
             
            </div>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700 font-semibold">
                Email Address
              </label>
              <input
              {...register("email", { required: true })}
                className="shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 lead focus:outline-none focus:shadow-outline"
                id="email"
                name="email"
                type="email"
                placeholder="Enter Your Email"
              />
              {errors.email && <span>This field is required</span>}
            </div>

            <div className="flex flex-col mb-4">
              <label className="block text-gray-700 font-semibold">
                Your Massage
              </label>
              <textarea
              {...register("massage", { required: true })}
                className="shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 lead focus:outline-none focus:shadow-outline"
                id="massage"
                name="massage"
                type="text"
                placeholder="Enter Your Massage"
              />
              {errors.massage && <span>This field is required</span>}
            </div>

            <button
              type="submit"
              className="bg-black text-white rounded-xl px-3 py-2 hover:scale-110 duration-200"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
