import React from "react";
import HeroImg from "../assets/image/coding2.gif";
import { SiLeetcode, SiHackerrank  } from "react-icons/si";
import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineGithub
} from "react-icons/ai";

const Hero = () => {
  return (
    <section className="bg-primary px-5 text-white py-32">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="hero-info pb-5 md:pb-0">
          <h1 className="text-4xl lg:text-6xl">
            Hi, <br />I'm <span className="text-accent">A</span>bhijith<br />
            Full stack Developer
          </h1>

          <p className="py-5">
          I build full-stack applications with Python and React.js, and manage deployments using Docker, Git, and AWS.
          </p>

          <div className="flex py-5 ">
            <a
              href="https://www.instagram.com/psycholuttapi/"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              {" "}
              <AiOutlineInstagram size={40} />{" "}
            </a>
            <a
              href="https://www.linkedin.com/in/abhijith-m-r-982b96237/"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              {" "}
              <AiOutlineLinkedin size={40} />{" "}
            </a>
            <a
              href="https://github.com/abhijithMR-403/"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              {" "}
              <AiOutlineGithub size={40} />{" "}
            </a>
            <a
              href="https://www.hackerrank.com/profile/abhijithmr581"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              {" "}
              <SiHackerrank  size={40} />{" "}
            </a>
            <a
              href="https://leetcode.com/abhijithmr581/"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              {" "}
              <SiLeetcode size={40} />{" "}
            </a>
          </div>

          <a
            href="/#projects"
            className=" btn bg-accent  border-2 border-[#7477FF] text-white px-6 py-3 hover:bg-transparent"
          >
            See Projects
          </a>
        </div>

        <div className="hero-img">
          <img
            src={HeroImg}
            alt="coding illustration"
            className="lgw-[80%] ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;