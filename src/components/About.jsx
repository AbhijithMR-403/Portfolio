import React from "react";
import AboutImg from "../assets/image/profile.jpg";

const About = () => {
  return (
    <section className="bg-secondery text-white px-5 py-32" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            About Me
          </h2>

          <p className="pb-5">
  Hi, I'm Abhijith—most people call me Luttapi. I'm a Full Stack Developer with a focus on Python and Django on the backend, and React with Tailwind CSS on the frontend.
</p>

<p className="pb-5">
  My backend expertise includes Python, Django, PostgreSQL, MongoDB, Git, and building RESTful APIs. 
</p>
<p className="pb-5">
  I also have experience working with cloud platforms like AWS and DigitalOcean, using services such as EC2, S3, Lambda, and API Gateway to deploy and scale applications efficiently.
</p>

<p className="pb-5">
  On the frontend, I work with React.js, Redux, Axios, Tailwind CSS, and Chakra UI.
</p>

<p className="pb-5">
  I started coding back in 2018 during school. In 11th grade, after getting my first PC, I began diving deeper into development. Instead of following the traditional college route, I chose self-learning. To sharpen both my technical and soft skills, I joined a bootcamp called Brocamp, which helped shape my journey in the IT field.
</p>

<p>
  Currently, I have 7 months of hands-on industry experience working at Crisco Consulting as a Python Developer, where I contributed to building scalable backend systems and APIs.
</p>

        </div>

        <div className="about-img">
          <img
            src={AboutImg}
            alt="coding illustration"
            className="lgw-[80%] md:ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default About;