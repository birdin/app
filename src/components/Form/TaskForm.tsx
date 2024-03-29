import { useState, useContext } from "react";
import { AiOutlineArrowUp, AiOutlineClose } from "react-icons/ai";
import ReactQuill from "react-quill";
import { RiAddFill } from "react-icons/ri";
import { BsCalendarX } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

import { GlobalContext } from "../../context/GlobalContext";
import { useInput } from "../../hooks/useInput";

import { DropdownCalendar, DropdownAssignUser, DropdownPriority } from "../Dropdown";

import "react-quill/dist/quill.bubble.css";
import 'react-day-picker/dist/style.css';

const TaskForm = () => {
  const { modal, addData } = useContext(GlobalContext);
  const [value, setValue] = useState("");
  const [priority, setPriority] = useState({name:'None', color: '', icon: ()=>{return <></>}});
  const [assignUser, setAssignUser] = useState("");
  const [error, setError] = useState({name: false, content: false});
  const name = useInput("text");
  const [selected, setSelected] = useState<Date>();

  const {id} = useParams();


  const onSubmit = (e: any) => {
    e.preventDefault();
    const task = {
      id: "task-" + Date.now(),
      name: name.value,
      label: '',
      content: value,
      priority: priority,
      dueDate: (selected?.getMonth() ? selected?.getMonth() + 1 : '') + "-" +  selected?.getDate() + "-" + selected?.getFullYear(),
      members: [assignUser],
      columnId: "column-1",
      projectId: id,
    };

    if(validateForm()) {
      addData(task);
      toast.success("Task created successfully");
      modal.onOpen(false);
    } 
  };

  const validateForm = () => {
    if (name.value === "") {
      setError({...error, name: true});
      return false;
    }

    return true;
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
            Project
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
          <div className="error-message">
            {error.name && <>Task name is required</>}
          </div>
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
            <DropdownCalendar value={selected} setValue={setSelected}>  
              <div className="btn-form btn-dropdown__btn">
                <BsCalendarX />
                Due date
              </div>
            </DropdownCalendar>

            <DropdownPriority value={priority} setValue={setPriority}>
              <div className="btn-form btn-dropdown__btn">
                {
                  priority.name === 'None' ? 
                  (<>
                    <AiOutlineArrowUp />
                    Priority
                  </>) : (
                    <>
                      {priority.icon()}
                      {priority.name}
                    </>
                  )
                }

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
