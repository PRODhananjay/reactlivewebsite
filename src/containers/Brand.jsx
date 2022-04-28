import React from "react";
import BackgroundVideo from "assets/videos/logo.mp4";
import Heading from "components/Heading";
import Jump from 'react-reveal/Jump';
import Pulse from 'react-reveal/Pulse';

const Brand = () => {
  return (
    <section className="relative flex flex-col items-center gap-10 overflow-hidden bg-black text-white text-shadow">
      <Jump><Heading pre={`Our Brand`} heading={`USP`} /></Jump>
      <Pulse> <article className="-mt-28 md:-mt-20 md:-mb-10 grid md:grid-cols-2 place-items-center gap-1 col-span-1 py-4">
        <video
          className="h-72 md:h-[350px] md:mr-20  object-contain"
          src={BackgroundVideo}
          autoPlay
          muted
          loop
        ></video>
        <p className="text-3xl text-left -mt-12 md:mt-0 md:text-start tracking-wide font-medium">
        We believe in <strong className="text-secondary">transforming</strong>
          &nbsp; students into a&nbsp;
          <strong className="text-secondary">global talent</strong> by&nbsp;
          <strong className="text-secondary">hand holding</strong> them
          from&nbsp;
          <strong className="text-secondary">beginning till the end</strong>.
        </p>
      </article></Pulse>
    </section>
  );
};

export default Brand;
