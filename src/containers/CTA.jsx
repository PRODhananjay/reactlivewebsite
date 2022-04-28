import React from "react";
import BackgroundImage from "assets/images/bg.svg";
import { Link } from "react-router-dom";
import Location from "NewDesign/LoctionMap";
const CTA = () => {
  return (
    <>
    {/* <section className="relative flex flex-wrap justify-around items-center gap-10  overflow-hidden">
      <div className="-z-10 absolute top-0 bottom-0 left-0 w-full h-full">
        <img className="opacity-20 h-full w-full object-cover" src={BackgroundImage} alt="" />
      </div>
      <div className="flex items-center gap-2 flex-column">
        <h3 className="cursive text-6xl font-semibold text-secondary">
          Let's Transform
        </h3>
        <h3 className="serif text-4xl font-semibold tracking-tighter">
          Global Talent Together.
        </h3>
      </div>
      <div className="flex gap-4 z-99">
        <button
          className={`font-semibold shadow rounded py-1.5 px-4 border bg-light border-primary bg-transparent text-primary`}
        >
           <Link to="#home">Sponsor</Link>
          
        </button>
        <button
          className={`font-semibold shadow rounded py-1.5 px-4 border border-primary bg-primary text-white`}
        >
          <Link to="#register">Register</Link>
        </button>
      </div>
    </section> */}
    <Location/>

    </>
  );
};

export default CTA;
