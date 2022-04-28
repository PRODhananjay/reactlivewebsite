import React, { useEffect, useState } from "react";
import Logo from "assets/images/logo.png";
import { ReactComponent as DropdownIcon } from "assets/icons/dropdown.svg";
import { Link } from "react-router-dom";
import SPONSORSHIP_DATA from "data/sponsorship";
import Modal from "./Modal";
import Sponsorship from "./Sponsorship";

const Header = () => {
  const [dark, setDark] = useState(true);
  const [show, setShow] = useState(false);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    if (window.scrollY > window.innerHeight - 60) {
      setDark(false);
    } else {
      setDark(true);
    }
    window.addEventListener("scroll", () => {
      if (window.scrollY > window.innerHeight - 60) {
        setDark(false);
      } else {
        setDark(true);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <>
      <header id="#" className="py-3 md:py-6 px-2 md:px-8 z-50 left-0 absolute top-0 w-full">
        <section
          className="transition-all duration-200 ease-in glass shadow-md rounded-full flex items-center justify-between py-2 md:py-4 px-4 md:px-8"
          style={{
            backgroundColor: dark ? "#10101066" : "#fff6",
          }}
        >
          <Link to="#">
            <img className="h-10 md:h-14 drop-shadow-md" src={Logo} alt="" />
          </Link>
          <div
            className={`text-sm md:text-base flex gap-2 md:gap-6 text-shadow ${
              dark ? "text-white" : "text-primary"
            }`}
          >
            <div
              className="relative font-semibold flex items-center gap-1"
              onMouseEnter={() => setShow(true)}
              onMouseLeave={() => setShow(false)}
            >
              Sponsorship{" "}
              <DropdownIcon className="h-3 md:h-4" onClick={() => setShow(!show)} />
              {show && (
                <section
                  className="z-[60] glass-modal rounded-2xl shadow-md overflow-hidden p-4 absolute top-8 w-48 md:w-60 text-left"
                  style={{
                    backgroundColor: dark ? "#101010" : "#fff",
                    backdropFilter: "blur(10px)",
                  }}
                  onMouseEnter={() => setShow(true)}
                  onMouseLeave={() => setShow(false)}
                >
                  <ul className="">
                    {SPONSORSHIP_DATA.map((sponsor, index) => (
                      <li className="w-full" key={index}>
                        <button onClick={() => setModal(sponsor)} className="w-full">
                          <p className="text-left transition-all duration-200 ease-in-out p-2 hover:bg-white/20 rounded-lg w-full">
                            {sponsor.name}
                          </p>
                        </button>
                      </li>
                    ))}
                  </ul>
                </section>
              )}
            </div>
            <Link
              to={"#register"}
              className={`font-semibold shadow-md rounded py-1.5 px-2 md:px-4 bg-primary text-white`}
            >
              Register
            </Link>
          </div>
        </section>
      </header>
      {modal && (
        <Modal onClose={() => setModal(false)}>
          <Sponsorship sponsor={modal} />
        </Modal>
      )}
    </>
  );
};

export default Header;
