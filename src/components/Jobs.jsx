import React from "react";
import business from "../assets/business.png";
import Contact from "./Contact";

function Jobs() {
  return (
    <div className="">
      <div className="text-white pt-36 md:pt-28 lg:pt-28">
        <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
          <p className="text-[#47ffff] font-bold p-2 ">Job Opportunities</p>
          <h1 className="md:text-5xl sm:text-4xl text-3xl font-bold">
            Join the Jahu Nexus Team
          </h1>
          <div className="flex justify-center items-center">
            <p className="md:text-2xl sm:text-xl text-lg font-medium py-4">
              At Jahu Nexus, we are passionate about transforming businesses
              through innovative digital solutions. As a leading digital
              marketing agency, we specialize in web development, digital
              marketing, content writing, graphic design, and video editing. Our
              mission is to deliver excellence, innovation, and integrity in
              everything we do, and we are always on the lookout for talented
              individuals to join our dynamic team.
            </p>
          </div>
        </div>
      </div>

    <div className="bg-white p-3">
      <h1 className="pt-10 pb-10 md:text-4xl sm:text-2xl bg-white text-xl font-semibold items-center justify-center text-center">
          Why Work with Us?
        </h1>

        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2  ">
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
              className="w-[500px] mx-auto my-4 rounded-md"
              src={business}
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
              <h1 className="pt-10 pb-10 md:text-4xl sm:text-2xl text-xl font-semibold items-center justify-center text-center">How to Apply</h1>
              <p className="font-medium mt-3 pb-5">
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

export default Jobs;
