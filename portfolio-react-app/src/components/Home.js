import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from 'react-scroll';





const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6] hover:border-b-4 duration-300 p-3 border-pink-600">
          Connor Bodin
        </h1>

        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Full Stack Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          Hello, and welcome to my portfolio! My name is Connor Bodin, and I'm a
          recent graduate of UT - Austin full stack bootcamp. I'm passionate about
          programming, and I've spent the last 12 weeks honing
          my skills in ReactJS, Javascript, MongoDB, and various other languages.
        </p>
        <div>
          <Link to="work">
          <button className="text-white group border-2 px-6 py-3 my-2 flex duration-500 items-center hover:bg-pink-600 hover:border-pink-600">
            View Work
            <span className="group-hover:rotate-90 duration-500">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
