import React from "react";
import { ReactComponent as CloseIcon } from "assets/icons/close.svg";

function Modal({ onClose, children }) {
  return (
    <section className="modal h-screen w-screen bg-black/60 text-white text-shadow fixed top-0 bottom-0 left-0 z-[100] flex items-center justify-center">
      <div className="z-[70] relative w-full md:w-[70vw] h-full glass-modal">
        <button
          onClick={onClose}
          className="text-shadow absolute -top-4 -right-4 rounded-[50%] glass-modal h-10 w-10 flex items-center justify-center"
        >
          <CloseIcon className="h-5" />
        </button>
        <section className="overflow-hidden w-full h-full rounded-2xl">{children}</section>
      </div>
      <span
        className="absolute z-60 top-0 h-full w-full"
        onClick={onClose}
      ></span>
    </section>
  );
}

export default Modal;
