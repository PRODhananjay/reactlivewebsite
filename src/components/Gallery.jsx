import React from "react";
import Books from "assets/images/books.jpg";
import Students from "assets/images/students.jpg";
import Zoom from 'react-reveal/Zoom';

const Gallery = ({ className }) => {
  return (
    // make a gallery with 3 images
    <section className={`grid grid-cols-2 grid-rows-4 gap-9 ${className}`}>
      <div className="col-span-1 row-start-2 row-span-3">
      <Zoom> <img
          className="h-44 border-1 rounded-lg w-full object-cover"
          src={Students}
          alt="Students"
        /></Zoom>
      </div>
      <div className="col-span-1 row-start-1 row-span-3">
      <Zoom> <img
          className="h-44 rounded-lg w-full object-cover"
          src={Books}
          alt="Books"
        /></Zoom>
      </div>
    </section>
  );
};

export default Gallery;
