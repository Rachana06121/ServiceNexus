import React from "react";
import business from "../assets/business.png";
import Contact from "./Contact";

function AboutUs() {
  return (
    <div>
      <div className="text-white pt-24">
        <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
          <p className="text-[#47ffff] font-bold p-2 ">Welcome to Jahu Nexus</p>
          <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold">
            About Company
          </h1>
          <div className="flex justify-center items-center">
            <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
              Hello, We are Professionals ready to help to grow your Business
            </p>
          </div>
        </div>
      </div>

      <div className="w-full bg-white py-16 px-4">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <img
            className="w-[500px] mx-auto my-4 rounded-md"
            src={business}
            alt="/"
          />
          <div className="flex flex-col justify-center">
            <p className="text-[#47ffff] font-bold">Jahu Nexus</p>
            <h1 className="md:text-4xl sm:text-xl font-bold py-2">About Us</h1>

            <p className="">
              Welcome to Jahu Nexus, your trusted partner in digital excellence.
              Established with a vision to empower businesses through innovative
              and results-driven digital solutions, we specialize in web
              development, digital marketing, content writing, graphic design,
              and video editing. At Jahu Nexus, we understand that every
              business is unique. That's why we offer customized services
              tailored to meet your specific needs and objectives. Our team of
              experienced professionals is dedicated to helping you navigate the
              ever-evolving digital landscape, ensuring your brand stands out
              and thrives in a competitive market.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full text-white py-16 px-4">
        <div className="max-w-[800px] mt-[-96px] w-full h-[300px] mx-auto text-center flex flex-col justify-center">
          <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold mt-20">
            Our Mission
          </h1>

          <div className="flex justify-center items-center">
            <p className="md:text-3xl sm:text-2xl text-xl font-bold py-4">
              Our mission is to deliver exceptional digital services that drive
              growth, enhance brand visibility, and foster lasting relationships
              with our clients. We are committed to excellence, innovation, and
              integrity in everything we do.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full bg-white py-16 px-4 border border-gray-300">
        <div className="flex flex-col justify-center">
          <p className="text-[#47ffff] underline font-bold md:text-4xl sm:text-2xl text-3xl py-4 text-center">
            Our Services
          </p>
        </div>

        <ul>
          <li className="mb-2">
            <span className="font-medium md:text-2xl sm:text-xl text-lg md:mx-20">
              1. Web Development:
            </span>
            <br></br>
            <p className="font-medium md:text-2xl sm:text-xl text-lg md:mx-20">
              From stunning website designs to robust e-commerce platforms, we
              create user-friendly and responsive websites that reflect your
              brand's identity and engage your audience.
            </p>
          </li>

          <li className="mb-2">
            <span className="font-medium md:text-2xl sm:text-xl text-lg md:mx-20">
              2. Digital Marketing:
            </span>
            <br></br>
            <p className="font-medium md:text-2xl sm:text-xl text-lg md:mx-20">
              Our comprehensive digital marketing strategies encompass SEO,
              social media marketing, PPC advertising, email marketing, and
              more. We aim to boost your online presence and drive measurable
              results.
            </p>
          </li>

          <li className="mb-2">
            <span className="font-medium md:text-2xl sm:text-xl text-lg md:mx-20">
              3. Content Writing:
            </span>
            <br></br>
            <p className="font-medium md:text-2xl sm:text-xl text-lg md:mx-20">
              High-quality content is the cornerstone of effective
              communication. Our skilled writers produce engaging, SEO-optimized
              content that captivates your audience and enhances your brand's
              credibility.
            </p>
          </li>

          <li className="mb-2">
            <span className="font-medium md:text-2xl sm:text-xl text-lg md:mx-20">
              4. Graphic Design:
            </span>
            <br></br>
            <p className="font-medium md:text-2xl sm:text-xl text-lg md:mx-20">
              Visual appeal is crucial in capturing attention. Our talented
              designers create eye-catching graphics, logos, and branding
              materials that leave a lasting impression.
            </p>
          </li>

          <li className="mb-2">
            <span className="font-medium md:text-2xl sm:text-xl text-lg md:mx-20">
              5. Video Editing:
            </span>
            <br></br>
            <p className="font-medium md:text-2xl sm:text-xl text-lg md:mx-20">
              Video content is a powerful tool for storytelling. We transform
              your raw footage into polished, professional videos that convey
              your message with impact and clarity.
            </p>
          </li>
        </ul>
      </div>

      <div className="w-full bg-white py-7 px-4">
        <div className="flex flex-col justify-center">
          <p className="text-[#47ffff] underline font-bold md:text-4xl sm:text-2xl text-3xl py-3 mb-4 text-center">
            Why Choose Us?
          </p>
        </div>

        <ul>
          <li className="mb-2">
            <p className="font-medium md:text-2xl sm:text-xl text-lg md:mx-20">
              Our team comprises industry experts with years of experience in
              their respective fields. We stay updated with the latest trends
              and technologies to provide you with cutting-edge solutions.
            </p>
          </li>

          <li className="mb-2">
            <p className="font-medium md:text-2xl sm:text-xl text-lg md:mx-20">
              We believe in a personalized approach, tailoring our services to
              align with your unique goals and challenges.
            </p>
          </li>

          <li className="mb-2">
            <p className="font-medium md:text-2xl sm:text-xl text-lg md:mx-20">
              We are committed to delivering tangible results. Our strategies
              are designed to maximize ROI and help your business grow.
            </p>
          </li>

          <li className="mb-2">
            <p className="font-medium md:text-2xl sm:text-xl text-lg md:mx-20">
              Your satisfaction is our priority. We value open communication and
              collaboration, ensuring that your vision is brought to life.
            </p>
          </li>

          <li className="mb-2">
            <p className="font-medium md:text-2xl sm:text-xl text-lg md:mx-20">
              Video content is a powerful tool for storytelling. We transform
              your raw footage into polished, professional videos that convey
              your message with impact and clarity.
            </p>
          </li>
        </ul>
      </div>

      <div className="w-full text-white py-16 px-4">
        <div className="max-w-[800px] mt-[-96px] w-full h-[300px] mx-auto text-center flex flex-col justify-center">
          <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold mt-40">
            Contact Us
          </h1>

          <div className="flex justify-center items-center">
            <p className="md:text-3xl sm:text-2xl text-xl font-bold py-4">
              Ready to elevate your digital presence? Get in touch with us today
              and discover how Jahu Nexus can transform your business. Let's
              embark on a journey of digital success together.
            </p>
          </div>
        </div>
      </div>

      <Contact></Contact>
    </div>
  );
}

export default AboutUs;
