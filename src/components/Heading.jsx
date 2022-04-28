import React from "react";

const Heading = (props) => {
  return (
    <div className={`z-10 flex gap-4 items-start font-bold mt-5 conclave-text ${props.className}`}>
      <h1 className="cursive text-5xl md:text-6xl">{props.pre}</h1>
      <h1 style={{marginTop:props?.pt}} className="text-secondary text-4xl md:text-5xl serif ">{props.heading}</h1>
    </div>
  );
};

export default Heading;
