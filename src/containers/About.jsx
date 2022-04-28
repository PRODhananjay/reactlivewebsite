import React from "react";
import BackgroundImage from "assets/images/bg.svg";
import Shake from 'react-reveal/Shake';
import Slide from 'react-reveal/Slide';
import Gallery from "components/Gallery";
import Heading from "components/Heading";
const About = () => {
  return (
    <section className="relative py-10 flex flex-col items-center gap-6 md:gap-10 overflow-hidden h-fit">
      
      <div className="-z-10 absolute top-0 bottom-0 left-0 w-full h-full">
        <img className="opacity-20 h-full w-full object-cover" src={BackgroundImage} alt="" />
      </div>
      <Shake><Heading pre={`About`} heading={`DWEC`} /></Shake>
      <div className="grid md:grid-cols-2 gap-20">
        <article className="flex flex-col gap-5 col-span-1 ">
         <Slide left> <p className="text-lg tracking-wide font-medium text-center md:text-left px-6">
            With <strong>33000 students</strong> counseled,{" "}
            <strong>81000+ courses</strong>, and <strong>3300+</strong> as
            affiliated education partners spread across{" "}
            <strong>20+ countries</strong>,{" "}
            <strong className="text-secondary">DWEC</strong> has come a long way
            by handholding students in their education journey.
          </p></Slide>
          <Slide bottom>
          <div
            className="relative glass-secondary p-7 rounded-lg h-fit overflow-hidden"
            style={{
              borderLeft: "none",
            }}
          >
            <span className="absolute left-0 top-0 bottom-0 bg-secondary w-1.5"></span>

            <p className="text-lg tracking-wide font-medium h-fit">
              We guide, mentor and handhold students with global possibilities
              by broadening their scope and widening their dreams with global
              education since 2020.
            </p>
          </div>
          </Slide>
        </article>
         <Gallery className="hidden md:grid col-span-1"/>
      </div>
    </section>
  );
};

export default About;
