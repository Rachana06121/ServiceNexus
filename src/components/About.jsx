import React from "react";

function About() {
  return (
    <>
      <div
        name="About"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16 "
      >
        <h1 className="text-3xl font-bold mb-5">About</h1>
        <p className="font-medium">
        Jahu Nexus is a premier drop servicing company dedicated to delivering top-notch web development, 
        digital marketing, content writing, graphic designing, and video editing services. At Jahu Nexus, 
        we pride ourselves on connecting clients with expert freelancers who possess the skills and 
        creativity to bring their projects to life.
        <br/>
        Our mission is to simplify the outsourcing process, ensuring that businesses of all sizes can access high-quality 
        services without the hassle of managing multiple freelancers. By leveraging our extensive network of professionals, 
        we handle the complexities of project management, allowing our clients to focus on their core business operations.
        </p>
        <br />
        <div>
            <h1 className="text-red-600 font-semibold text-xl">
                Why Choose Jahu Nexus?
            </h1>
            <div className="mt-2">
                <ul className="" >
                <span className="font-semibold mt-2">Expertise:</span><li  className="font-medium"> Our curated network of freelancers includes seasoned professionals who excel in their respective fields, ensuring that every project is handled with the utmost expertise.</li>
                <span  className="font-semibold mt-2">Efficiency:</span> <li className="font-medium"> We streamline the entire service delivery process, from initial consultation to final delivery, providing timely and efficient solutions to meet your business needs.</li>
                <span className="font-semibold mt-2">Quality Assurance:</span><li className="font-medium"> Our rigorous quality control measures ensure that every project meets the highest standards of excellence, guaranteeing client satisfaction.</li>
                <span className="font-semibold mt-2">Cost-Effective:</span><li className="font-medium"> By optimizing the drop servicing model, we offer competitive pricing without compromising on quality, making premium services accessible to all businesses.</li>
                <span className="font-semibold mt-2">Customer Support:</span><li className="font-medium"> Our dedicated support team is always available to address any queries or concerns, ensuring a smooth and hassle-free experience for our clients.</li>
                </ul>
                <br/>
                <span className="font-medium">At Jahu Nexus, we are committed to helping businesses thrive in a competitive digital landscape. Partner with us to elevate your projects and achieve outstanding results.</span>
            </div>
            {/* <br/>
          <h1 className="text-red-600 font-semibold text-xl">
            Education & Training
          </h1>
          <span className="font-medium">
            Bachelor of Computer Applications (BCA)|Navinchandra Mehta Institute
            of Tech. & Dev.<br></br>
            Chetana College Malad East Mumbai | May 2022
          </span>
          <br /> */}
          <br />

          <h1 className="text-red-600 font-semibold text-xl">
            Skills & Expertise
          </h1>
          
            <ul className="font-semibold text-lg" >
                <li>Software Design</li>
                <li>Program coding</li>
                <li>JS Frameworks: React</li>
                <li>Web Development Software</li>
                <li>Technical Support</li>
                <li>Customer Service</li>
            </ul>
          

          <br />
          

          {/* <h1 className="text-red-600 font-semibold text-xl">
            Prfesstional Experience
          </h1>
          <span>
            
          </span> */}

          {/* <br />
          <br /> */}

          {/* <h1 className="text-red-600 font-semibold text-xl">
            Achievments & Awards
          </h1>
          <span>
            [degree/certificate],[institution],[year],[Relevant
            Course],[platform/Institution],[year]
          </span> */}
          {/* <br />
          <br /> */}

          {/* <h1 className="text-red-600 font-semibold text-xl">
            Mission Statement
          </h1>
          <span>
            [degree/certificate],[institution],[year],[Relevant
            Course],[platform/Institution],[year]
          </span> */}

          {/* <br />
          <br /> */}

        </div>
      </div>

      <hr></hr>
    </>
  );
}

export default About;
