import React from "react";
import Heading from "components/Heading";
import Tree from "NewDesign/Tree";
import ConclaveAttendes from "NewDesign/ConclaveAttendes";
import Video1 from '../assets/videos/video-1.mp4';
const Attendees = () => {
  return (
    <>
    <section  className="z-100  bg-img relative py-10 flex flex-col items-center gap-10 overflow-hidden text-white text-shadow">
      <div className="z-10 absolute top-0 left-0 right-0 h-full w-full bg-black/70"></div>
      <Heading className="hidden md:block" pre={`Conclave`} pt={20} heading={`Attendees`}  />
      <ConclaveAttendes/>
    </section>
    <div className=" z-100 text-white text-left flex flex-col items-left gap-4 text-shadow">
    <Tree/>
    </div>
    <div className=" z-100 text-white text-left flex flex-col items-left gap-4 text-shadow">
    <video
        className="z-100 text-white text-left flex flex-col items-left gap-4 text-shadow"
        src={Video1}
        autoPlay
        muted
        loop/>
    </div>
    </>
  );
};

export default Attendees;
