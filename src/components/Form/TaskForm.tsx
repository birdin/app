import { useState, useContext } from "react";
import { AiOutlineArrowUp, AiOutlineClose } from "react-icons/ai";
import ReactQuill from "react-quill";
import { RiAddFill } from "react-icons/ri";
import { BsCalendarX } from "react-icons/bs";
import "react-quill/dist/quill.bubble.css";
import { FaUserCircle } from "react-icons/fa";
import { GlobalContext } from "../../context/GlobalContext";
import { useInput } from "../../hooks/useInput";
import { toast } from "react-toastify";
import { Dropdown } from "../Dropdown";
import DropdownPriority from "../Dropdown/DropdownPriority";
import DropdownAssignUser from "../Dropdown/DropdownAssingUser";

const TaskForm = () => {
  const { modal, addData } = useContext(GlobalContext);
  const [value, setValue] = useState("");
  const [priority, setPriority] = useState("");
  const [assignUser, setAssignUser] = useState("");
  const name = useInput("text");

  const onSubmit = (e: any) => {
    e.preventDefault();
    const task = {
      id: "task-" + Date.now(),
      name: name.value,
      content: value,
      dueDate: "2023-03-11",
      members: ["user-1"],
      columnId: "column-1",
    };

    addData(task);

    toast.success("Task created successfully");

    modal.onOpen(false);
  };

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
            La Forma
          </span>
          <span>New Task</span>
        </div>
        <div className="form-header__actions">
          <button
            className="btn form-header__btn--close"
            onClick={() => {
              modal.onOpen(false);
            }}
          >
            <AiOutlineClose />
          </button>
        </div>
      </div>

      <form className="add-form__container">
        <div className="form-group form-group__input">
          <input placeholder="Task name" {...name} />
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
            <div className="btn-form btn-dropdown__btn">
              <BsCalendarX />
              Due date
            </div>
            <DropdownPriority value={priority} setValue={setPriority}>
              <div className="btn-form btn-dropdown__btn">
                <AiOutlineArrowUp />
                Priority
              </div>
            </DropdownPriority>
            <DropdownAssignUser value="assignUser" setValue={setAssignUser}>
              <div className="btn-form btn-dropdown__btn">
                <FaUserCircle className="member-icon" />
                Assign to
              </div>
            </DropdownAssignUser>
          </div>
          <div className="form-btn__section">
            <div className="btn-form form-btn--secondary">Cancel</div>
            <div className="btn-form form-btn--primary" onClick={onSubmit}>
              <RiAddFill />
              Create
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
