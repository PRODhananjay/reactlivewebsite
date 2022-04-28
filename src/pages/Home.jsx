import React, { useEffect, useState } from "react";
import * as Container from "containers";
import { useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Location from "NewDesign/LoctionMap";
import Countdown from "NewDesign/CountDown";
import Watch from "NewDesign/Watch";
import Card from "NewDesign/Card";
const Home = () => {
  const [modal, setModal] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    switch (hash) {
      case "#register":
        return setModal("register");
      case "#":
        return window.scrollTo(0, 0);
      default:
        return setModal(false);
    }
  }, [location]);

  return (
    <main>
      <div className="text-left font-medium text-sm absolute z-[9000000000000000000]">
        <ToastContainer
          autoClose={1000}
          closeOnClick={true}
          hideProgressBar={true}
        />
      </div>
      {modal === "register" && (
        <Container.Modal
          onClose={() => {
            setModal(false);
            window.location.hash = "#";
          }}
        >
          <Container.Register />
        </Container.Modal>
      )}
       <Container.Header />
      <Container.Hero />
      <Card/>
      <Container.Conclave />
      <Container.Attendees />
      <Container.About />
      <Container.Brand />
      <Countdown/>
      <Container.Partners />
     <Container.CTA />
      <Container.Footer /> 
    </main> 
  );
};

export default Home;
