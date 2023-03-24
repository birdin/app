import React, { useState } from "react";

type Props = {
  children: React.ReactNode,
  open: boolean,
  onOpen: (open: boolean) => void
};

const Modal = ({ children, open, onOpen }: Props) => {
  return (
    <>
      {open && (
        <div>
          <div className="modal-overlay" onClick={() => onOpen(false)}></div>
          {children}
        </div>
      )}
    </>
  );
};

export default Modal;
