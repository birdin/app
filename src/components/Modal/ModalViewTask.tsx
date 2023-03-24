import Modal from "./Modal";
import React, { useState } from "react";
import HeaderForm from "../Form/HeaderForm";
import ReactQuill from "react-quill";
import { BsCalendarX } from "react-icons/bs";
import { DropdownCalendar } from "../Dropdown";

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "blockquote"],
    ["code-block"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image"],
  ],
};

const ModalViewTask = () => {
  const [open, onOpen] = useState(true);
  const [description, setDescription] = useState("This is a demo task");
  const [selected, setSelected] = useState(new Date());

  return (
    <Modal open={open} onOpen={onOpen}>
      <div className="form-modal__container view-modal">
        <HeaderForm onOpen={onOpen} />
        <div className="f-container">
          <div className="f-content-container">
            <div className="form-group">
              <div className="f-name-input" contentEditable="true">
                This is a demo task
              </div>
            </div>
            <ReactQuill
              theme="bubble"
              value={description}
              onChange={setDescription}
              modules={modules}
              placeholder="Write description"
            />
          </div>

          <div className="f-status-container">
            <ul className="f-status-list">
              <li>Due Date:
                <DropdownCalendar value={selected} setValue={setSelected}>  
              <div className="btn-form btn-dropdown__btn">
                <BsCalendarX />
                Due date
              </div>
            </DropdownCalendar></li>
              <li>Priority</li>
              <li>Members</li>
              <li>Status</li>
            </ul>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalViewTask;
