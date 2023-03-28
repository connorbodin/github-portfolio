import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">\
      <div className="border-b-4 border-r-4 border-pink-600 p-12 hover:border-pink-400 duration-300 rounded">
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6] ">
          Connor Bodin
        </h1>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          Hi there! I am a junior web developer. I
          am passionate about creating engaging and interactive web experiences
          that leave a lasting impression on users. My skills include
          proficiency in HTML, CSS, and JavaScript, as well as experience
          working with various web development frameworks such as React and
          Angular.
        </p>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          Aside from web development, I also have a few hobbies that keep me
          busy outside of work. One of my favorite pastimes is playing video
          games. I love exploring new worlds and immersing myself in different
          storylines. When I'm not gaming, you might find me on the golf course,
          enjoying the beautiful scenery and trying to improve my game. I also
          enjoy watching hockey games, and cheering on my favorite teams during
          the NHL season.
        </p>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          Overall, I am someone who loves to learn and grow both personally and
          professionally. I am excited to continue developing my web development
          skills, as well as exploring new interests and hobbies along the way.
        </p>
        </div>
      </div>
    </div>
  );
};

export default About;
