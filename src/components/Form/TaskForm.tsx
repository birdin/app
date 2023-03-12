import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import ReactQuill from "react-quill";
import {RiAddFill} from 'react-icons/ri'
import "react-quill/dist/quill.bubble.css";

const TaskForm = () => {
  const [value, setValue] = useState("Hello work!");

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "blockquote"],
      ["code-block"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
    ],
  };

  return (
    <div className="form-modal__container">
      <div className="form-header">
        <div className="form-header__title">
            <span>
                <RiAddFill />
                LaStudio 
            </span>
            <span>
                New Task
            </span>
        </div>
        <div className="form-header__actions">
          <button className="btn form-header__btn--close">
            <AiOutlineClose />
          </button>
        </div>
      </div>

      <form className="add-form__container">
        <div className="form-group form-group__input">
          <input type="text" placeholder="Task name" />
        </div>
        <div className="form-group form-group__textarea">
          <ReactQuill
            theme="bubble"
            value={value}
            onChange={setValue}
            modules={modules}
            placeholder="Write description"
          />
        </div>
        <div className="btn-group">
          <div className="btn-dropdown__section form-btn__section">
            <div className="btn-form btn-dropdown__btn">Due date</div>
            <div className="btn-form btn-dropdown__btn">Priority</div>
            <div className="btn-form btn-dropdown__btn">Assign to</div>
          </div>
          <div className="form-btn__section">
            <div className="btn-form form-btn--secondary">Cancel</div>
            <div className="btn-form form-btn--primary">
                <RiAddFill/>
                Create
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
