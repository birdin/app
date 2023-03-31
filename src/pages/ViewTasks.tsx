import ModalViewTask from "../components/Modal/ModalViewTask";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { Routes, Route, useParams } from 'react-router-dom';



const ViewTasks = () => {
  const { getTask } = useContext(GlobalContext);
  const { id_task } = useParams();
  console.log("Parameter", id_task);
  if(!id_task) return null;
  const task = getTask(id_task);
  return(
    <>
      <ModalViewTask task={task}/>;
    </>)
};

export default ViewTasks;
