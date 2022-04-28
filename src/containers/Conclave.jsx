import Heading from "components/Heading";
import React from "react";
import Slide from 'react-reveal/Slide';
import BgConclave from '../assets/videos/bg2.mp4';
const Conclave = () => {
  return (
    <section className="bg-blue-50/50 relative py-10 flex flex-col items-center gap-10 overflow-hidden conclave">
    <Slide bottom> <Heading pre={`The`} heading={`Conclave`} /></Slide> 
      <div className="container py-lg-4 ">
        <div className="row">
        <div className="col-12 col-lg-7 order-2 order-lg-1 px-lg-5">
        <Slide left>
      <article className="flex flex-col gap-5 col-span-1" style={{zIndex:9,fontWeight:'bold'}}>
        <p className="text-xl text-left tracking-wide font-medium">
          Presently, when we talk about education alongside traditional
          education, one cannot ignore the influence of global education and the
          great wide possibilities that it opens for an individual. Therefore,
          understanding the impact of global education, its significance, and
          its roles is the need of the hour.{" "}
          <strong className="text-secondary">
            We have structured a one-day conclave
          </strong>{" "}
          which is a conglomeration of the learned academic group that consists
          of all school founders, principals, chancellor, and parents.
        </p>
      </article>
      </Slide>
      </div>
      <div className="col-12 col-lg-5 conclaveVideo order-1 order-lg-2">
      <Slide right>
      <video src={BgConclave} autoPlay muted loop playsinline></video>
      </Slide>
      </div>
      </div>
      </div>
    </section>
  );
};

export default Conclave;
