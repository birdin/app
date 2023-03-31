import React, { useRef, useState } from "react";
import { useOnClickOutside } from "../utils/useOnClickOutside";

type Props = {
  children: React.ReactNode;
};

const DropdownEdit = ({ children }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(ref.current?.offsetLeft || 0);
  const windowWidth = window.innerWidth;

  const [isOpen, setIsOpen] = useState(false);
  useOnClickOutside(ref, () => setIsOpen(false));

  const onClick = () => {
    setPosition(ref.current?.offsetLeft || 0);
  };

  return (
    <>
      <div className="dropdown-edit" ref={ref} onClick={onClick}>
        { isOpen && (
          <ul 
            className={`dropdown-edit__list ${
              position + 100 > windowWidth
                ? "dropdown-edit--left"
                : "dropdown-edit--right"
            }`}
          >
            <li className="dropdown-edit__item">Edit</li>
            <li className="dropdown-edit__item">Delete</li>
          </ul>
        )}

        <span
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {children}
        </span>
      </div>
    </>
  );
};

export default DropdownEdit;
