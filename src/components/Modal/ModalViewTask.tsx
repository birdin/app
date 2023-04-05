import Modal from "./Modal";
import React, { useState, useContext, useEffect } from "react";
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
import { GlobalContext } from "../../context/GlobalContext";
import { useDebounce } from "../../hooks/useDebounce";

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "blockquote"],
    ["code-block"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image"],
  ],
};

type Props = {
  task: any;
};

const ModalViewTask = ({task}:Props) => {
  const {updateTask} = useContext(GlobalContext);
  const [updatedTask, setUpdatedTask] = useState(task);

  const { name, content, dueDate, members } = task;
  const [open, onOpen] = useState(true);
  const [description, setDescription] = useState(content);
  const [selected, setSelected] = useState(new Date());
  const [priority, setPriority] = useState({
    name: "None",
    color: "",
    icon: () => <></>,
  });
  const [assignUser, setAssignUser] = useState(members);

  const navigation = useNavigate();

  const onClick = () => {
    navigation(-1);
  }

  const val = useDebounce(updatedTask, 3000);

  useEffect(() => {
    updateTask(val)
  }, [val])

  //useDebounce()


  return (
    <Modal open={open} onOpen={onClick}>
      <div className="form-modal__container view-modal">
        <HeaderForm onOpen={onClick} />
        <div className="f-container">
          <div className="f-content-container">
            <div className="form-group">
              <input type='text' className="f-name-input" value={updatedTask.name} onChange={(el) => setUpdatedTask({...updatedTask, name: el.target.value})}/>
            </div>
            <ReactQuill
              theme="bubble"
              value={updatedTask.content}
              onChange={(content) => setUpdatedTask({...updatedTask, content})}
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
