import { useState, useRef } from "react";
import { useOnClickOutside } from "../../features/board/utils/useOnClickOutside";


type Props = {
  children: JSX.Element,
  content: JSX.Element,
};

const Dropdown = ({ children, content }: Props) => {
  const ref = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState(false)
  useOnClickOutside(ref,  () => setIsOpen(false))


  return (
    <>
      <div className="dropdown-select">
        {isOpen && (
          <div className="select-container" ref={ref}>
            {
              children
            }
          </div>
        )}
      </div>
      { content }
    </>
  );
};

export default Dropdown;
