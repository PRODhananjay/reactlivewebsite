import React from "react";
import Slide from 'react-reveal/Slide';
import '../global.css';
const Location = () => {
  return (
    <Slide left>
    <div className="google-map">
      <iframe
        // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d791.5465856967362!2d-96.79943766738629!3d32.78012567023374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e9918e993c711%3A0xa9073cfe6d9a606a!2sMagnolia+Dallas+Downtown!5e0!3m2!1sen!2smy!4v1538285021570"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d791.5465856967362!2d-96.79943766738629!3d32.78012567023374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e9918e993c711%3A0xa9073cfe6d9a606a!2sroseate+house,+new+delhi!5e0!3m2!1sen!2smy!4v1538285021570"
        width="100%"
        height="350px"
        frameBorder="0"
        allowFullScreen
      />
    </div>
    </Slide>
  );
};
// roseate house, new delhi

export default Location;
