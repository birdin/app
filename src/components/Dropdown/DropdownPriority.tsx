/*
import { useState, useRef } from "react";
import { useOnClickOutside } from "../../features/board/utils/useOnClickOutside";
import Dropdown from "./Dropdown";

type Props = {
  children: JSX.Element;
  value: string;
  setValue: (value: string) => void;
};

const DropdownPriority = ({ children, setValue, value }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  useOnClickOutside(ref, () => setIsOpen(false));

  if (isOpen) {
    console.log("is open");
    console.log(value);
  }

  return (
    <Dropdown content={children}>
      <>
          <div className="select-item">None</div>
          <div className="select-item">Low</div>
          <div className="select-item">Medium</div>
          <div className="select-item">High</div>
      </>
    </Dropdown>
  );
};

export default DropdownPriority;
*/


import { useState, useRef } from "react";
import { useOnClickOutside } from "../../features/board/utils/useOnClickOutside";


type Props = {
  children: JSX.Element,
  value: string,
  setValue: (value: string) => void,
};

const priority = [
    {
        id: 'none',
        name: 'None',
        color: 'gray'
    },
    {
        id: 'low',
        name: 'Low',
        color: 'green'
    },
    {
        id: 'medium',
        name: 'Medium',
        color: 'yellow'
    },
    {
        id: 'high',
        name: 'High',
        color: 'red'
    }
]


const DropdownPriority = ({ children, setValue, value }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  useOnClickOutside(ref,  () => setIsOpen(false));

  if(isOpen) {
    console.log('is open')
    console.log(value)
  }

  return (
    <>
      <div className="dropdown-select" ref={ref}>
        {isOpen && (
          <div className="select-container"  >
            {priority.map((item) => {
                return (
                    <div className="select-item" key={item.id} onClick={() => {
                        setValue(item.name)
                        setIsOpen(false)
                    }}>
                        {item.name}
                    </div>
                )
            })}
          </div>
        )}
        <span onClick={()=> {setIsOpen(!isOpen)}}>
            {children}
        </span>
      </div>
    </>
  );
};

export default DropdownPriority;
