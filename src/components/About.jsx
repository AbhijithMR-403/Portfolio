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
            Hi, My Name Is Abhijith everyone calls me luttapi😁. I am a
            Full stack Developer(Django)🤖. I build this beautifull websites with React and
            Tailwind CSS.❄️
            
          </p>
          <p className="pb-5">
            I am proficient in Backend skills like Python, Django, Postgresql, Mongodb, Git, REST API and many more.
          </p>

          <p>
            In Frontend I know React.js, Redux,
            Axios, Tailwind CSS, chakra UI.....

          </p>
          <br />
          <p>
          I began coding in 9th grade (2018) while still in school🏫. Later on when I was in my 11th I got my first PC💻, from that day onwards I started exploring this IT field🧑‍💻. After my higher education either I could choose a college and spend my 4 years there, but I found it too common.
            So I thought of self learning💡. However, technical skills alone are not sufficient for a good programmer. Effective communication💬, building strong connections with people🫂, and having a well-defined roadmap🗺️ are equally crucial, for all these I join bootcamp called Brocamp.
          <br />
            {/* In my spare time I use to play chess, learn about some programming concept or some myterious sci-fi things.
            Where I talk about programming theory and build various projects. */}
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