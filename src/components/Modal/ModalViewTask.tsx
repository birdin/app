import Modal from "./Modal";
import React, { useState } from "react";
import HeaderForm from "../Form/HeaderForm";
import ReactQuill from "react-quill";
import { BsCalendarX } from "react-icons/bs";
import {
  DropdownAssignUser,
  DropdownCalendar,
  DropdownPriority,
} from "../Dropdown";
import { AiOutlineArrowUp } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

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
  const [priority, setPriority] = useState({
    name: "None",
    color: "",
    icon: () => <></>,
  });
  const [assignUser, setAssignUser] = useState("");

  const navigation = useNavigate();

  const onClick = () => {
    navigation(-1);
  }


  return (
    <Modal open={open} onOpen={onClick}>
      <div className="form-modal__container view-modal">
        <HeaderForm onOpen={onClick} />
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
              <li>
                Due Date:
                <DropdownCalendar value={selected} setValue={setSelected}>
                  <div className="btn-form btn-dropdown__btn">
                    <BsCalendarX />
                    Due date
                  </div>
                </DropdownCalendar>
              </li>
              <li>
                Priority:
                <DropdownPriority value={priority} setValue={setPriority}>
                  <div className="btn-form btn-dropdown__btn">
                    {priority.name === "None" ? (
                      <>
                        <AiOutlineArrowUp />
                        Priority
                      </>
                    ) : (
                      <>
                        {priority.icon()}
                        {priority.name}
                      </>
                    )}
                  </div>
                </DropdownPriority>
              </li>
              <li>
                Members:
                <DropdownAssignUser value="assignUser" setValue={setAssignUser}>
                  <div className="btn-form btn-dropdown__btn">
                    <FaUserCircle className="member-icon" />
                    Assign to
                  </div>
                </DropdownAssignUser>
              </li>
              <li>Status: <div>To-do</div></li>
            </ul>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalViewTask;
