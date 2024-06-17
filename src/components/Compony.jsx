import React from "react";
import business from "../assets/business.png";
import business01 from "../assets/business01.png";
import { Link } from "react-router-dom";
import Contact from "./Contact";
import Blogs from "./Blogs";

function Compony() {
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

      <Blogs></Blogs>

      <div className="w-full text-white py-5 px-4">
        <h1 className="text-[#47ffff] font-bold text-center md:text-3xl sm:text-2xl text-2xl">
          Job Opportunities
        </h1>
      </div>

      <div className="w-full bg-[#e4e4e1]">
        <h1 className="pt-10 pb-10 md:text-7xl sm:text-6xl text-4xl font-semibold items-center justify-center text-center">
          Join the Jahu Nexus Team
        </h1>

        <p className="md:text-xl sm:text-xl text-xl px-3 py-1 font-medium flex text-center justify-center items-center">
          At Jahu Nexus, we are passionate about transforming businesses through
          innovative digital solutions. As a leading digital marketing agency,
          we specialize in web development, digital marketing, content writing,
          graphic design, and video editing. Our mission is to deliver
          excellence, innovation, and integrity in everything we do, and we are
          always on the lookout for talented individuals to join our dynamic
          team.
        </p>

        <h1 className="pt-10 pb-10 md:text-4xl sm:text-2xl text-xl font-semibold items-center justify-center text-center">
          Why Work with Us?
        </h1>

        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <div className="flex flex-col justify-center mx-4 mb-3 mt-1 order-2 md:order-1">
            <ul>
              <li>
                <span className="font-bold">1. Innovative Environment:</span>
                <br></br> Be part of a forward-thinking company that values
                creativity, innovation, and continuous learning.
              </li>
              <li>
                <span className="font-bold">2. Career Growth:</span> <br></br>We
                are committed to your professional development. You'll have
                opportunities to expand your skills and advance your career.
              </li>
              <li>
                <span className="font-bold">3. Collaborative Culture: </span>
                <br></br> Work in a supportive and collaborative environment
                where your ideas and contributions are valued.
              </li>
              <li>
                <span className="font-bold">4. Diverse Projects:</span>{" "}
                <br></br> Engage in diverse and exciting projects that challenge
                you to think creatively and deliver exceptional results.
              </li>
              <li>
                <span className="font-bold">
                  5. Flexible Work Arrangements:
                </span>{" "}
                <br></br> Enjoy a healthy work-life balance with flexible
                working hours and remote work options.
              </li>
            </ul>
          </div>

          <div className="order-1">
            <img
              className="w-[500px] md:h-[350px] lg:[350px] p-1 mx-auto my-4 rounded-md"
              src={business01}
              alt="/"
            />
          </div>
        </div>

        <div>
          <h1 className="pt-10 pb-10 md:text-4xl sm:text-2xl text-xl font-semibold items-center justify-center text-center">
            Current Job Openings
          </h1>
          <ul className="md:text-lg sm:text-xl text-sm mx-5 md:mx-20 lg:mx-28">
            <li>
              <h1 className="font-bold md:text-2g sm:text-xl text-sm">
                1. Digital Marketing Specialist
              </h1>
              <p className="md:text-lg sm:text-xl text-sm">
                <span className="font-medium">Responsibilities:</span> Develop
                and execute digital marketing strategies, manage social media
                campaigns, optimize SEO, and track campaign performance.
              </p>
              <p className="md:text-lg sm:text-xl text-sm">
                <span className="font-medium">Requirements:</span> Proven
                experience in digital marketing, strong understanding of SEO and
                PPC, excellent analytical skills, and proficiency with marketing
                tools.
              </p>
            </li>
            <li>
              <h1 className="font-bold md:text-2g sm:text-xl text-sm">
                1. Web Developer
              </h1>
              <p className="md:text-lg sm:text-xl text-sm">
                <span className="font-medium">Responsibilities:</span> Design,
                develop, and maintain websites, ensure responsive design, and
                optimize site performance.
              </p>
              <p className="md:text-lg sm:text-xl text-sm">
                <span className="font-medium">Requirements:</span> Experience in
                web development, proficiency in HTML, CSS, JavaScript, and
                familiarity with CMS platforms.
              </p>
            </li>
            <li>
              <h1 className="font-bold md:text-2g sm:text-xl text-sm">
                1. Content Writer
              </h1>
              <p className="md:text-lg sm:text-xl text-sm">
                <span className="font-medium">Responsibilities:</span> Create
                engaging and SEO-optimized content for blogs, websites, social
                media, and marketing materials.
              </p>
              <p className="md:text-lg sm:text-xl text-sm">
                <span className="font-medium">Requirements:</span> Excellent
                writing skills, experience in content creation, understanding of
                SEO best practices, and creativity.
              </p>
            </li>
            <li>
              <h1 className="font-bold md:text-2g sm:text-xl text-sm">
                1. Graphic Designer
              </h1>
              <p className="md:text-lg sm:text-xl text-sm">
                <span className="font-medium">Responsibilities:</span> Design
                eye-catching graphics, logos, and branding materials, and
                collaborate with the marketing team to create visual content.
              </p>
              <p className="md:text-lg sm:text-xl text-sm">
                <span className="font-medium">Requirements:</span> Strong
                portfolio of graphic design work, proficiency in design software
                (e.g., Adobe Creative Suite), and creativity.
              </p>
            </li>
            <li>
              <h1 className="font-bold md:text-2g sm:text-xl text-sm">
                1. Video Editor
              </h1>
              <p className="md:text-lg sm:text-xl text-sm">
                <span className="font-medium">Responsibilities:</span> Edit and
                produce high-quality videos, add special effects and
                transitions, and ensure content meets brand standards.
              </p>
              <p className="md:text-lg sm:text-xl text-sm">
                <span className="font-medium">Requirements:</span> Proven
                experience in video editing, proficiency with editing software
                (e.g., Adobe Premiere, Final Cut Pro), and attention to detail.
              </p>
            </li>

            <li>
              <h1 className="pt-10 pb-10 md:text-4xl sm:text-2xl text-xl font-semibold items-center justify-center text-center">
                How to Apply
              </h1>
              <p className="font-medium">
                If you are passionate about Dream's and want to make a
                difference, we would love to hear from you! Please send your
                resume and a cover letter to jahunexus@gmail.com with the
                subject line "Job Application - [Position Title]."
              </p>
            </li>
          </ul>

          <Contact></Contact>
        </div>
      </div>
    </div>
  );
}

export default Compony;
