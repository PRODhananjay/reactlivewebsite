import React from "react";
import BackgroundVideo from "assets/videos/bg.mp4";
import { Link } from "react-router-dom";
import '../global.css';
import Watch from "NewDesign/Watch";
import Typing from "react-typing-animation";

const Hero = () => {
  return (
    <>
    <section className="relative flex justify-start items-end w-screen h-screen">
      <video
        className="-z-10 absolute top-0 bottom-0 right-0 left-0 w-full h-full object-cover"
        src={BackgroundVideo}
        autoPlay
        muted
        loop
      ></video>
      <span className="-z-10 absolute top-0 left-0 right-0 h-full w-full bg-black/50"></span>
      <article className="z-100 text-white text-left flex flex-col items-left gap-4 text-shadow mt-10 home-font">
     
        <h1 id="text" className="text-6xl font-bold">
           <Typing speed={100}>
         <p className="text-secondary typing">The Future</p>
          {/* <br /> */}
          <p className="typing2"> Of Global </p><p className="typing3"> Education</p></Typing>
        </h1>
        <p className="text-xl font-semibold">
          Learn • <span className="text-secondary">Engage</span> • Explore
        </p>
        <Link to="#register" className="flex items-center  gap-1 w-fit font-medium py-1 underline">
          Register Now
        </Link>
      </article>
      <div className="watchHomepage">
        <Watch/>
      </div>

    </section>
    <div className="phone-watch z-100 text-white text-left flex flex-col items-left gap-4 text-shadow">
    <Watch/>
    </div>
    </>
  );
};

export default Hero;
