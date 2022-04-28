import CONCLAVE_DATA from "data/conclave";
import React from "react";

const Timeline = () => {
  const timelines = CONCLAVE_DATA;

  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-2 items-center font-bold mb-5">
        <h1 className="cursive text-4xl">Agenda of the</h1>
        <h1 className="text-secondary text-2xl serif">Conclave</h1>
      </div>
      <ul className="grid">
        {/* make a timeline with dots */}
        {timelines.map((timeline, index) => (
          <li key={index} className="flex items-center relative py-2">
            <span className="h-2.5 w-2.5 absolute left-0 bg-primary rounded-full"></span>
            <span className="text-sm absolute left-5">{timeline.time}</span>
            <div
              className={`absolute w-2.5 flex items-center justify-center ${
                index === 0
                  ? "bottom-0 h-1/2"
                  : index === timelines.length - 1
                  ? "top-0 h-1/2"
                  : "top-0 bottom-0"
              }`}
            >
              <span className="h-full w-0.5 bg-primary"></span>
            </div>
            {/* <div className="absolute top-0 bottom-0 w-2.5 flex items-center justify-center">
              <span className="h-full w-0.5 bg-primary"></span>
            </div> */}
            <div className="relative bg-white shadow hover:shadow-lg rounded p-3 ml-32 md:ml-36 transition-all duration-200 overflow-hidden">
              <span className="absolute left-0 top-0 bottom-0 bg-primary/1"></span>

              <strong className="text-sm text-black/90">
                {timeline.title}
              </strong>
              <p className="text-black/70">{timeline.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Timeline;
