import React from "react";
import { ReactTyped, Typed } from "react-typed";
import laptop from "../assets/computer.png";
import { Link } from "react-router-dom";
import content from "../assets/content.jpeg";
import designer from "../assets/designer.jpg";
import market from "../assets/market.jpg";
import web from "../assets/web.jpg";
import video from "../assets/video.jpeg";

function Hero() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "dea49b9c-81a1-42d7-935f-cd9f845a71bb");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
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
    <div>
      <div className="text-white pt-24">
        <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
          <p className="text-[#47ffff] font-bold p-2 ">Welcome to Jahu Nexus</p>
          <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold">
            Grow Your Business
          </h1>
          <div className="flex justify-center items-center gap-2">
            <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
              Hello, We are
            </p>
            <ReactTyped
              className="md:text-5xl sm:text-4xl text-xl font-bold pl-2 md:pl-4"
              strings={[
                "Developer",
                "Programmer",
                "Graphic Designer",
                "Digital Marketer",
                "Video Editer",
                "Content Writer",
              ]}
              typeSpeed={120}
              backSpeed={140}
              loop={true}
            />
          </div>
          <p className="md:text-2xl text-xl font-bold text-gray-400">
            Jahu Nexus is a leading drop servicing company dedicated to
            delivering exceptional web development, digital marketing, content
            writing, graphic designing, and video editing services.
          </p>
          <Link to="/Contact">
            <button className="bg-[#47ffff] w-[200px] rounded-lg font-medium my-6 mx-auto py-3 text-black">
              Get Started
            </button>
          </Link>
        </div>
      </div>
      {/* ---------------------------------------------------------------------------------------- */}
      <div className="w-full bg-white py-16 px-4">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <img className="w-[500px] mx-auto my-4" src={laptop} alt="/" />
          <div className="flex flex-col justify-center">
            <p className="text-[#47ffff] font-bold">Jahu Nexus</p>
            <h1 className="md:text-4xl sm:text-2xl font-bold py-2">
              In Jahu Nexus We have Profestions that Help you achieve Your Goles
            </h1>

            <p className="">
              Jahu Nexus is a premier servicing company dedicated to delivering
              top-notch web development, digital marketing, content writing,
              graphic designing, and video editing services. At Jahu Nexus, we
              pride ourselves on connecting clients with expert freelancers who
              possess the skills and creativity to bring their projects to life.
              Our mission is to simplify the outsourcing process, ensuring that
              businesses of all sizes can access high-quality services without
              the hassle of managing multiple freelancers. By leveraging our
              extensive network of professionals, we handle the complexities of
              project management, allowing our clients to focus on their core
              business operations.
            </p>
            <Link className="my-2 md:mx-0 mx-auto py-1" to="/AboutUs" target="_top">
              <button className="bg-black text-[#47ffff] w-[200px] rounded-lg font-medium my-6 md:mx-0 mx-auto py-3">
                About Us
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------------------------------------------- */}

      <div className="w-full py-16 text-white px-4">
        <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
          <div className="lg:col-span-2 my-4">
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
              Want Tips & Tricks to Grow your Business?
            </h1>
            <p>Contact Us With Jahu Nexus We help u to Build Your business</p>
          </div>
          <form onSubmit={onSubmit}>
            <div className="my-4">
              <div className="flex flex-col sm:flex-row items-center justify-between w-full">
                <input
                  className="p-3 w-full flex rounded-md text-black"
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  required
                />
                <button
                  type="submit"
                  className="bg-[#47ffff] w-[200px] rounded-md font-medium my-6 py-3 ml-4 px-6 text-black"
                >
                  Send
                </button>
              </div>

              <span>{result}</span>
              <p>
                We care about the protection of your data, Read our{" "}
                <span className="text-[#47ffff]">Privacy Policy</span> .
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* ---------------------------------------------------------------------------------------- */}

      <div className="w-full py-[10rem] px-4 bg-[#e4e4e1]">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
          <div className="w-full shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <img
              className="mx-auto mt-[-3rem]  bg-white w-[230px]"
              src={web}
              alt="/"
            />
            <h2 className="text-2xl font-bold text-center py-8">
              Web Development
            </h2>

            <div className="text-center font-medium">
              <p>
                Our expert developers create stunning, responsive, and
                user-friendly websites that help your business stand out online.
                From simple landing pages to complex e-commerce platforms, we
                have the skills to bring your vision to life.
              </p>
            </div>

            <Link className="my-1 mx-auto px-1 py-1" to="/Services" target="_top">
              <button className="bg-[#47ffff] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
                Learn More
              </button>
            </Link>
          </div>

          <div className="w-full shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <img
              className="mx-auto mt-[-3rem]  bg-white w-[260px]"
              src={designer}
              alt="/"
            />
            <h2 className="text-2xl font-bold text-center py-8">
              Graphic Designer
            </h2>

            <div className="text-center font-medium">
              <p>
                Visual appeal is crucial for any business. Our creative graphic
                designers craft visually stunning graphics, logos, brochures,
                and other marketing materials that capture attention and convey
                your brand’s story.
              </p>
            </div>

            <Link className="my-1 mx-auto px-1 py-1" to="/Services" target="_top">
              <button className="bg-[#47ffff] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
                Learn More
              </button>
            </Link>
          </div>

          <div className="w-full shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <img
              className="mx-auto mt-[-3rem]  bg-white w-[230px]"
              src={market}
              alt="/"
            />
            <h2 className="text-2xl font-bold text-center py-8">
              Digital Marketing
            </h2>

            <div className="text-center font-medium">
              <p>
                Engage your audience with high-quality, compelling content. Our
                team of talented writers produces SEO-friendly blog posts,
                articles, website content, and more, tailored to reflect your
                brand’s voice and message.
              </p>
            </div>

            <Link className="my-1 mx-auto px-1 py-1" to="/Services" target="_top">
              <button className="bg-[#47ffff] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
                Learn More
              </button>
            </Link>
          </div>

          <div className="w-full shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <img
              className="mx-auto mt-[-3rem]  bg-white w-[230px]"
              src={video}
              alt="/"
            />
            <h2 className="text-2xl font-bold text-center py-8">
              Video Editing
            </h2>

            <div className="text-center font-medium">
              <p>
                Bring your videos to life with our professional video editing
                services. Whether it's promotional videos, tutorials, or social
                media content, we ensure your videos are polished, engaging, and
                impactful.
              </p>
            </div>

            <Link className="my-1 mx-auto px-1 py-1" to="/Services" target="_top">
              <button className="bg-[#47ffff] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
                Learn More
              </button>
            </Link>
          </div>

          <div className="w-full shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <img
              className="mx-auto mt-[-3rem]  bg-white w-[230px]"
              src={content}
              alt="/"
            />
            <h2 className="text-2xl font-bold text-center py-8">
              Content writing
            </h2>

            <div className="text-center font-medium">
              <p>
                Engage your audience with high-quality, compelling content. Our
                team of talented writers produces SEO-friendly blog posts,
                articles, website content, and more, tailored to reflect your
                brand’s voice and message.
              </p>
            </div>

            <Link className="my-1 mx-auto px-1 py-1" to="/Services" target="_top" >
              <button className="bg-[#47ffff] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
