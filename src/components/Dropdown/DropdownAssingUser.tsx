import React, { useState, useRef, ReactHTMLElement } from "react";
import { SlClose, SlMagnifier } from "react-icons/sl";
import { useOnClickOutside } from "../../features/board/utils/useOnClickOutside";

type Props = {
  children: JSX.Element;
  value: any;
  setValue: (value: any) => void;
};
type OnClickEventHandler = React.MouseEvent<HTMLButtonElement>;

const users = [
  {
    id: "1",
    name: "User 1",
    color: "gray",
  },
  {
    id: "2",
    name: "User 2",
    color: "green",
  },
  {
    id: "3",
    name: "User 3",
    color: "red",
  },
];

const DropdownAssignUser = ({ children, setValue, value }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState<string>("");
  useOnClickOutside(ref, () => setIsOpen(false));


  const handleRemove = (e: OnClickEventHandler) => {
    e.preventDefault()
    setValue("")
    setInputValue("")
  };

  return (
    <>
      <div className="dropdown-select" ref={ref}>
        {isOpen && (
          <div className="select-container">
            {users
              .filter((user) => {
                return user.name
                  .toLowerCase()
                  .includes(inputValue.toLowerCase());
              })
              .map((user) => {
                return (
                  <div
                    className="select-item "
                    key={user.id}
                    onClick={() => {
                      setValue(user.name)
                      setInputValue(user.name)
                      setIsOpen(false)
                    }}
                  >
                    {user.name}
                  </div>
                );
              })}

            <div className="select-item__container">
              <SlMagnifier className="select-icon--search" />
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="select-item__input"
                placeholder="Choose a user"
              />
              { value && (
                <button
                  className="select-button select-button--remove"
                  onClick={handleRemove}
                >
                  <SlClose />
                </button> )
              }
            </div>
          </div>
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

export default DropdownAssignUser;
