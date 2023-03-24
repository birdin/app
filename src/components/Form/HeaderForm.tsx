import React from "react";
import { RiAddFill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

type Props = {
    onOpen: (open: boolean) => void;
};

const HeaderForm = ({onOpen}: Props) => {
  return (
      <div className="form-header">
        <div className="form-header__title">
          <span>
            <RiAddFill />
            La Forma
          </span>
          <span>New Task</span>
        </div>
        <div className="form-header__actions">
          <button
            className="btn form-header__btn--close"
            onClick={() => {
              onOpen(false);
            }}
          >
            <AiOutlineClose />
          </button>
        </div>
      </div>
  );
};

export default HeaderForm;
