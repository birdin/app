import { useState, useRef } from "react";
import { useOnClickOutside } from "../../features/board/utils/useOnClickOutside";
import { SlArrowDownCircle, SlArrowUpCircle, SlMinus } from 'react-icons/sl'

type Props = {
  children: JSX.Element,
  value: any,
  setValue: (value: any) => void,
};

const priority = [
    {
        id: 'high',
        name: 'High',
        color: 'red',
        icon: () => {
            return <SlArrowUpCircle color="red"/>
        }
    },
    {
        id: 'medium',
        name: 'Medium',
        color: 'yellow',
        icon: () => {
            return <SlMinus color="#c08b00"/>
        }
    },
    {
        id: 'low',
        name: 'Low',
        color: 'green',
        icon: () => {
            return <SlArrowDownCircle color="green"/>
        }
    },
    {
        id: 'none',
        name: 'None',
        color: 'gray',
        icon: () => {
            return <></>
        }
    }
]


const DropdownPriority = ({ children, setValue, value }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  useOnClickOutside(ref,  () => setIsOpen(false));

  return (
    <>
      <div className="dropdown-select dropdown-select-form" ref={ref}>
        {isOpen && (
          <div className="select-container"  >
            {priority.map((item) => {
                return (
                    <div className={`select-item ${item.name === value.name ? 'select-item--active' : ''}`} 
                        key={item.id} 
                        onClick={() => {
                            setValue(item)
                            setIsOpen(false)
                        }}>
                        {item.icon()}
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
