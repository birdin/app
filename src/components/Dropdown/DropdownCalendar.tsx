import React, { useState, useRef, ReactHTMLElement } from "react";
import { useOnClickOutside } from "../../features/board/utils/useOnClickOutside";

import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';


type Props = {
  children: JSX.Element;
  value: any;
  setValue: (value: any) => void;
};

const DropdownCalendar = ({ children, setValue, value }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState<string>("");
  useOnClickOutside(ref, () => setIsOpen(false));

  if (isOpen) {
    console.log("is open")
    console.log(value);
  }

  return (
    <>
      <div className="dropdown-select" ref={ref}>
        {isOpen && (
          <div className="select-container calendar-container">
                <DayPicker
                    mode="single"
                    selected={value}
                    onSelect={setValue}
                    />
         </div>)}
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

export default DropdownCalendar;
