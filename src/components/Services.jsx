import React from "react";
import business from "../assets/business.png";
import web02 from "../assets/web02.png";
import video02 from "../assets/video02.jpeg";
import content02 from "../assets/content02.jpeg";
import market02 from "../assets/market02.jpg";
import design02 from "../assets/design02.jpg";
import Contact from "./Contact";

function Services() {
  return (
    <div>
      <div className="text-white pt-24">
        <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
          <p className="text-[#47ffff] font-bold p-2 ">Jahu Nexus</p>
          <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold">
            Services
          </h1>
          <div className="flex justify-center items-center">
            <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
              Hi there! Our experts are available to assist in expanding your
              business.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#e4e4e1]">
        <h1 className="pt-10 py-10 md:text-7xl sm:text-6xl text-4xl font-semibold items-center justify-center text-center text-[#47ffff] underline">
          Our Services
        </h1>

        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 border-b border-gray-300">
          <div className="flex flex-col justify-center mx-4 mb-3 mt-1 order-2 md:order-1">
            <div className="md:mt-[-1rem] lg:mt-[-1rem] mt-1 ">
              <h1 className="font-semibold md:text-3xl sm:text-2xl text-xl mb-2 text-center underline ">
                Web Development
              </h1>
              <p className="md:text-lg sm:text-lg text-sm font-medium mt-2">
                At Jahu Nexus, we specialize in creating custom,
                high-performance websites that are tailored to meet your unique
                business needs. Our comprehensive web development services
                ensure your online presence is both visually stunning and
                functionally robust, providing an optimal user experience across
                all devices.
              </p>
            </div>
            <div className="md:text-lg sm:text-lg text-sm font-medium mt-2">
              Our Web Development Services Include:
            </div>
            <ul className="md:text-lg sm:text-lg text-sm font-medium mb-3">
              <li>1. Custom Website Design and Development</li>
              <li>2. Responsive Design</li>
              <li>3. E-Commerce Solutions</li>
              <li>4. Content Management Systems (CMS)</li>
              <li>5. Website Maintenance and Support</li>
              <li>6. Search Engine Optimization (SEO)</li>
              <li>7. Web Application Development</li>
            </ul>
          </div>

          <div className="order-1">
            <img
              className="w-[500px] lg:h-[350px] md:h-[350px] mx-auto my-4 lg:my-11 md:my-10 rounded-md"
              src={web02}
              alt="/"
            />
          </div>
        </div>

        <hr></hr>

        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 border-b border-gray-300">
          <div className="order-1 mt-3">
            <img
              className="w-[500px] lg:h-[350px] md:h-[350px] mx-auto my-4 lg:my-11 md:my-10 rounded-md"
              src={market02}
              alt="/"
            />
          </div>

          <div className="flex flex-col justify-center mx-4 mb-3 mt-1 order-2 md:order-1">
            <div className="mt-3 md:mt-0 lg:mt-0">
              <h1 className="font-semibold md:text-3xl sm:text-2xl text-xl mb-2 text-center ">
                Digital Marketing
              </h1>
              <p className="md:text-lg sm:text-lg text-sm font-medium mt-2">
                At Jahu Nexus, we specialize in crafting comprehensive digital
                marketing strategies that drive growth, enhance brand
                visibility, and foster meaningful customer engagement. Our
                expert team leverages the latest tools and techniques to deliver
                measurable results and help your business thrive in the digital
                landscape.
              </p>
            </div>
            <div className="md:text-lg sm:text-lg text-sm font-medium mt-2">
              Our Digital Marketing Services Include:
            </div>
            <ul className="md:text-lg sm:text-lg text-sm font-medium mb-3">
              <li>1. Search Engine Optimization (SEO)</li>
              <li>2. Pay-Per-Click (PPC) Advertising</li>
              <li>3. Social Media Marketing</li>
              <li>4. Content Marketing</li>
              <li>5. Email Marketing</li>
              <li>6. Conversion Rate Optimization (CRO)</li>
              <li>7. Online Reputation Management (ORM)</li>
              <li>8. Analytics and Reporting</li>
            </ul>
          </div>
        </div>

        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 border-b border-gray-300">
          <div className="flex flex-col justify-center mx-4 mb-3 mt-1 order-2 md:order-1">
            <div className="mt-3 md:mt-0 lg:mt-0">
              <h1 className="font-semibold md:text-3xl sm:text-2xl text-xl mb-2 text-center ">
                Graphic Design
              </h1>
              <p className="md:text-lg sm:text-lg text-sm font-medium mt-2">
                At Jahu Nexus, we understand the power of visual communication.
                Our graphic design services are crafted to help your brand stand
                out and make a lasting impression. From stunning logos to
                comprehensive branding packages, our talented designers bring
                your vision to life with creativity and precision.
              </p>
            </div>
            <div className="md:text-lg sm:text-lg text-sm font-medium mt-2">
              Our Graphic Design Services Include:
            </div>
            <ul className="md:text-lg sm:text-lg text-sm font-medium mb-3">
              <li>1. Logo Design</li>
              <li>2. Brand Identity</li>
              <li>3. Marketing Collateral</li>
              <li>4. Social Media Graphics</li>
              <li>5. Infographics</li>
              <li>6. Packaging Design</li>
              <li>7. Web Graphics</li>
              <li>8. Custom Illustrations</li>
            </ul>
          </div>

          <div className="order-1 mt-3">
            <img
              className="w-[500px] lg:h-[350px] md:h-[350px] mx-auto my-4 lg:my-11 md:my-10 rounded-md"
              src={design02}
              alt="/"
            />
          </div>
        </div>

        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 border-b border-gray-300">
          <div className="order-1 mt-3">
            <img
              className="w-[500px] lg:h-[350px] md:h-[400px] mx-auto my-4 lg:my-11 md:my-10 rounded-md"
              src={content02}
              alt="/"
            />
          </div>

          <div className="flex flex-col justify-center mx-4 mb-3 mt-1 order-2 md:order-1">
            <div className="mt-3 md:mt-0 lg:mt-0">
              <h1 className="font-semibold md:text-3xl sm:text-2xl text-xl mb-2 text-center ">
                Content Writing
              </h1>
              <p className="md:text-lg sm:text-lg text-sm font-medium mt-2">
                At Jahu Nexus, we believe that compelling content is the
                cornerstone of effective communication and successful marketing.
                Our content writing services are designed to help you engage
                your audience, boost your online presence, and drive meaningful
                interactions. Whether you need blog posts, website content, or
                marketing materials, our team of skilled writers is here to
                deliver high-quality, SEO-optimized content that resonates with
                your target audience.
              </p>
            </div>
            <div className="md:text-lg sm:text-lg text-sm font-medium mt-2">
              Our Content Writing Services Include:
            </div>
            <ul className="md:text-lg sm:text-lg text-sm font-medium mb-3">
              <li>1. Blog Posts and Articles</li>
              <li>2. Website Content</li>
              <li>3. SEO Content</li>
              <li>4. Product Descriptions</li>
              <li>5. Social Media Content</li>
              <li>6. Email Newsletters</li>
              <li>7. Marketing Materials</li>
              <li>8. Case Studies and Whitepapers</li>
            </ul>
          </div>
        </div>

        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 border-b border-gray-300">
          <div className="flex flex-col justify-center mx-4 mb-3 mt-1 order-2 md:order-1">
            <div className="mt-3 md:mt-0 lg:mt-0">
              <h1 className="font-semibold md:text-3xl sm:text-2xl text-xl mb-2 text-center ">
                Video Editing
              </h1>
              <p className="md:text-lg sm:text-lg text-sm font-medium mt-2">
                At Jahu Nexus, we understand the power of video in capturing
                attention, conveying messages, and driving engagement. Our video
                editing services are designed to transform your raw footage into
                professional, high-quality videos that resonate with your
                audience and achieve your objectives. Whether you need
                promotional videos, tutorials, event coverage, or social media
                clips, our skilled editors are here to bring your vision to
                life.
              </p>
            </div>
            <div className="md:text-lg sm:text-lg text-sm font-medium mt-2">
              Our Video Editing Services Include:
            </div>
            <ul className="md:text-lg sm:text-lg text-sm font-medium mb-3">
              <li>1. Promotional Videos</li>
              <li>2. Social Media Videos</li>
              <li>3. Corporate Videos</li>
              <li>4. Event Coverage</li>
              <li>5. Tutorials and How-To Videos</li>
              <li>6. Music Videos</li>
              <li>7. Animation and Motion Graphics</li>
              <li>8. Color Correction and Grading</li>
              <li>9. Audio Editing and Mixing</li>
            </ul>
          </div>

          <div className="order-1 mt-3">
            <img
              className="w-[530px] lg:h-[350px] md:h-[400px] mx-auto my-4 lg:my-11 md:my-10 rounded-md"
              src={video02}
              alt="/"
            />
          </div>
        </div>
      </div>

      <div className="w-full text-white py-3 px-1">
        <div className="max-w-[800px] mt-[3px] w-full h-[300px] mx-auto text-center flex flex-col justify-center">
          <h1 className="md:text-5xl sm:text-3xl text-2xl font-bold mt-20">
            Get Started with Jahu Nexus
          </h1>

          <div className="flex justify-center items-center">
            <p className="md:text-3xl sm:text-2xl text-xl font-bold py-4">
              Elevate your brand with our comprehensive suite of services.
              Contact us today to discuss your needs and discover how Jahu Nexus
              can help you achieve your business goals
            </p>
          </div>
        </div>
      </div>

      <Contact></Contact>
    </div>
  );
}

export default Services;
