import { useContext } from "react";
import { TaskForm } from "../Form";
import { GlobalContext } from "../../context/GlobalContext";

const ModalForm = ({}) => {
  const { modal } = useContext(GlobalContext);
  const { open, onOpen } = modal;

  if (open === false) return null;
  console.log(open, "Open")

  return (
    <div>
      <div className="modal-overlay" onClick={() => onOpen(false)}></div>
      <TaskForm />
    </div>
  );
};

export default ModalForm;
