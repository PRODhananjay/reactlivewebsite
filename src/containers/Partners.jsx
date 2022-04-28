import Heading from "components/Heading";
import React from "react";
import CNNLogo from "assets/images/cnn.png";
import CNBCLogo from "assets/images/cnbc.png";
import NetworkLogo from "assets/images/network.png";
import ForbesLogo from "assets/images/forbes.png";
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';

const Partners = () => {
  const patners = [CNNLogo, CNBCLogo, ForbesLogo, NetworkLogo];
  return (
    <section className="bg-white relative py-10 flex flex-col items-center gap-10 overflow-hidden pb-5">
     <Slide bottom> <Heading pre={`Media`} heading={`Partners`} /></Slide>
      <ul className="flex justify-around gap-10 flex-wrap items-center w-full px-10 pb-10 py-4">
        {patners.map((partner, index) => (
         <Zoom> <li key={index}>
            <img className="h-14" src={partner} alt="" />
          </li></Zoom>
        ))}
      </ul>
    </section>
  );
};

export default Partners;
